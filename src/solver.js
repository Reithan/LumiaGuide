import * as Map from './data/map.js'
import * as Items from './data/items.js'
import * as ItemClass from './data/itemclass.js'
import * as Util from './util.js'

// Popluate All Areas with Drops
export var region_drops = {};
for (const itemname in Items.all_items) {
  if (Object.hasOwnProperty.call(Items.all_items, itemname)) {
    const itemstats = Items.all_items[itemname];
    if(itemstats.region != null) {
      for (const drop of itemstats.region) {
        if(!region_drops[drop[0]]) {
          region_drops[drop[0]] = [];
        }
        region_drops[drop[0]].push([itemname,drop[1]]);
      }
    }
  }
}

export class Inventory {
  #inventory = [];
  #gear_slots = {};

  size() { return this.#inventory.length; }

  getGearStats(type) {
    if(Util.toType(type) != "string" || !ItemClass.GearType.includes(type)) {
      throw new TypeError("getGearStats takes a string specifying a GearType as an argument.");
    }
    if(this.#gear_slots[type] == undefined || this.#gear_slots[type] == null) {
      return null;
    }
    return this.#gear_slots[type];
  }

  getInventory() { return [...this.#inventory]; }

  getAllItems() {
    var out_items = [];
    for (const geartype in this.#gear_slots) {
      if (Object.hasOwnProperty.call(this.#gear_slots, geartype) && this.#gear_slots[geartype] != null && this.#gear_slots[geartype] != undefined) {
        const gear = this.#gear_slots[geartype];
        out_items.push([gear,1]);
      }
    }
    for (const inv_item of this.#inventory) {
      var found = false;
      for (const out_item of out_items) {
        if(out_item[0] === inv_item[0]) {
          out_item[1] += inv_item[1];
          found = true;
        }
      }
      if(!found) {
        out_items.push([...inv_item]);
      }
    }
    return out_items;
  }

  cleanInventory() {
    for (const geartype of ItemClass.GearType) {
      if(this.#gear_slots[geartype] == null || this.#gear_slots[geartype] == undefined) {
        var best = null;
        for (const slot of this.#inventory) {
          if(slot[0].type == geartype) {
            if(best == null || (slot[1] > 0 && ItemClass.ItemRarity.indexOf(best[0].rarity) < ItemClass.ItemRarity.indexOf(slot[0].rarity))) {
              best = slot;
            }
          }
        }
        if(best != null) {
          this.#gear_slots[geartype] = best[0];
          --best[1];
        }
      }
    }

    this.#inventory = this.#inventory.filter(slot => slot[1] > 0);
  }

  addItem(itemstats, number = 1) {
    if(!((itemstats instanceof ItemClass.ItemStats) && Number.isInteger(number))) {
      throw new TypeError("addItem takes an item and optional quantity as an arguments.");
    }

    if(itemstats instanceof ItemClass.GearStats) {
      if(number > 0) {
        if(this.#gear_slots[itemstats.type] == null || this.#gear_slots[itemstats.type] == undefined) {
          this.#gear_slots[itemstats.type] = itemstats;
          --number;
        } else if (ItemClass.ItemRarity.indexOf(this.#gear_slots[itemstats.type].rarity) < ItemClass.ItemRarity.indexOf(itemstats.rarity)) {
          this.addItem(this.#gear_slots[itemstats.type]);
          this.#gear_slots[itemstats.type] = itemstats;
          --number;
        }
      } else if (number < 0 && (this.#gear_slots[itemstats.type] != null && this.#gear_slots[itemstats.type] != undefined)) {
        this.#gear_slots[itemstats.type] = null;
        ++number;
      }
      if(number == 0) {
        this.cleanInventory();
        return;
      }
    }

    for (const slot of this.#inventory) {
      if(slot[0] == itemstats) {
        if(slot[1]+number <= itemstats.max_stack && slot[1]+number >= 0) {
          slot[1] += number;
          this.cleanInventory();
          return 0;
        } else if(slot[1]+number < 0) {
          number += slot[1];
          slot[1] = 0;
        } else {
          number -= (itemstats.max_stack - slot[1]);
          slot[1] = itemstats.max_stack;
        }
      }
    }
    while(number > 0) {
      var new_stack = number;
      if(new_stack > itemstats.max_stack) {
        new_stack = itemstats.max_stack;
      }
      this.#inventory.push([itemstats,new_stack]);
      number -= new_stack;
    }

    this.cleanInventory();
    return number;
  }

  addItems(itemlist) {
    if(Util.toType(itemlist) != "array") {
      throw new TypeError("addItems takes an array of item/quantity pairs as an argument.");
    }
    var remaining = 0;
    for (const item of itemlist) {
      if(Util.toType(item) == "array") {
        remaining += this.addItem(item[0], item[1]);
      } else {
        remaining += this.addItem(item);
      }
    }
    return remaining;
  }

  haveItem(itemname, quantity = 1) {
    for (const slot in this.#gear_slots) {
      if (Object.hasOwnProperty.call(this.#gear_slots, slot)) {
        const gear = this.#gear_slots[slot];
        if(gear != undefined && gear != null && gear.name == itemname) {
          --quantity;
        }
      }
    }
    for (const slot of this.#inventory) {
      if(slot[0].name == itemname) {
        quantity -= slot[1];
      }
    }
    return (quantity <= 0);
  }

  craftItem(itemstats) {
    if(!(itemstats.recipe instanceof ItemClass.ItemRecipe)) {
      throw new TypeError("craftItem takes an ItemStats with a defined ItemRecipe as an argument.");
    }
    var part1 = Items.all_items[itemstats.recipe.part1];
    var part2 = Items.all_items[itemstats.recipe.part2];
    if(this.haveItem(part1.name) && this.haveItem(part2.name)) {
      this.addItem(part1, -1);
      this.addItem(part2, -1);
      this.addItem(itemstats, itemstats.quantity);
      this.cleanInventory();
      return true;
    }
    return false;
  }
}

export class Pathfinder {
  #goal = {};

  getGoal() { return {...this.#goal}; }
  setGoal(new_goal) {
    var validated = true;
    validated = validated && (Util.toType(new_goal) != "array" );
    validated = valdiated && (new_goal.length <= 6);
    var build_goal = {};
    if(validated) {
      for (const slot of new_goal) {
        if(build_goal[Items.all_items[slot].type] == undefined) {
          build_goal[Items.all_items[slot].type] = Items.all_items[slot];
        } else {
          validated = false;
          break;
        }
      }
    }
    if(!validated) {
      throw new TypeError("setGoal takes an array of <=6 gear piece names of <=1 of each type.");
    }
    this.#goal = build_goal;
  }
}