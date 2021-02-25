import * as Map from './data/map.js'
import * as Items from './data/items.js'
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
    if(Util.toType(type) != "string" || !Items.ItemClass.GearType.includes(type)) {
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
    for (const geartype of Items.ItemClass.GearType) {
      if(this.#gear_slots[geartype] == null || this.#gear_slots[geartype] == undefined) {
        var best = null;
        for (const slot of this.#inventory) {
          if(slot[0].type == geartype) {
            if(best == null || (slot[1] > 0 && Items.ItemClass.ItemRarity.indexOf(best[0].rarity) < Items.ItemClass.ItemRarity.indexOf(slot[0].rarity))) {
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

  addItem(item, number = 1) {
    var itemstats = null;
    if(item instanceof Items.ItemClass.ItemStats) {
      itemstats = item;
    } else if(Util.toType(item) == "string") {
      itemstats = Items.all_items[item];
    }
    if(!Number.isInteger(number) || itemstats == null || itemstats == undefined) {
      throw new TypeError("addItem takes an item name or stats object and optional quantity as an arguments.");
    }

    if(itemstats instanceof Items.ItemClass.GearStats) {
      if(number > 0) {
        if(this.#gear_slots[itemstats.type] == null || this.#gear_slots[itemstats.type] == undefined) {
          this.#gear_slots[itemstats.type] = itemstats;
          --number;
        } else if (Items.ItemClass.ItemRarity.indexOf(this.#gear_slots[itemstats.type].rarity) < Items.ItemClass.ItemRarity.indexOf(itemstats.rarity)) {
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

  haveItem(itemname) {
    var total = 0;
    for (const slot in this.#gear_slots) {
      if (Object.hasOwnProperty.call(this.#gear_slots, slot)) {
        const gear = this.#gear_slots[slot];
        if(gear != undefined && gear != null && gear.name == itemname) {
          ++total;
        }
      }
    }
    for (const slot of this.#inventory) {
      if(slot[0].name == itemname) {
        total += slot[1];
      }
    }
    return total;
  }

  craftItem(itemstats) {
    if(!(itemstats.recipe instanceof Items.ItemClass.ItemRecipe)) {
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

  clone() {
    var copy = new Inventory();
    for (const iterator of this.#inventory) {
      copy.#inventory.push([iterator[0],iterator[1]]);
    }
    for (const key in this.#gear_slots) {
      if (Object.hasOwnProperty.call(this.#gear_slots, key)) {
        copy.#gear_slots[key] = this.#gear_slots[key];
      }
    }
    return copy;
  }

  getTotalEquippedStats() {
    var total_stats = new Items.ItemClass.GearStats();
    total_stats.name = "Build Stats";
    for (const slot in this.#gear_slots) {
      if (Object.hasOwnProperty.call(this.#gear_slots, slot) && this.#gear_slots[slot] != undefined) {
        for (const stat of Items.ItemClass.GearStatTypes) {
          total_stats[stat] += this.#gear_slots[slot][stat];
        }
      }
    }
    return total_stats;
  }
}
