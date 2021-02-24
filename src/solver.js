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

  size() { return inventory.size(); }

  getGearStats(type) {
    if(Util.toType(type) != "string" || !ItemClass.GearType.includes(type)) {
      throw new TypeError("getGearStats takes a string specifying a GearType as an argument.");
    }
    if(this.gear_slots[type] == undefined || this.gear_slots[type] == null) {
      return null;
    }
    return this.gear_slots[type];
  }

  cleanInventory() {
    for (const geartype of ItemClass.GearType) {
      if(this.gear_slots[geartype] == null || this.gear_slots[geartype] == undefined) {
        var best = null;
        for (const slot of this.inventory) {
          if(slot[0].type == geartype) {
            if(best == null || (slot[1] > 0 && ItemClass.ItemRarity.indexOf(best.rarity) < ItemClass.ItemRarity.indexOf(slot[0].rarity))) {
              best = slot;
            }
          }
        }
        if(best != null) {
          this.gear_slots[geartype] = best[0];
          --best[1];
        }
      }
    }

    inventory = this.inventory.filter(slot => slot[1] > 0);
  }

  addItem(itemstats, number) {
    if(!((item[0] instanceof ItemClass.ItemStats) && Number.isInteger(item[1]))) {
      throw new TypeError("addItems takes an array of item/quantity pairs as an argument.");
    }

    if(itemstats instanceof ItemClass.GearStats) {
      if(number > 0 && this.gear_slots[itemstats.type] == null || this.gear_slots[itemstats.type] == undefined) {
        this.gear_slots[itemstats.type] = itemstats;
        --number;
      } else if (number < 0 && this.gear_slots[itemstats.type] != null && this.gear_slots[itemstats.type] != undefined) {
        this.gear_slots[itemstats.type] = null;
        ++number;
      }
      if(number == 0) {
        this.cleanInventory();
        return;
      }
    }

    for (const slot of inventory) {
      if(slot[0] == itemstats.name) {
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
      this.inventory.push([itemstats.name,new_stack]);
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
      remaining += this.addItem(item);
    }
    return remaining;
  }

  haveItem(itemname, quantity = 1) {
    for (const slot in this.gear_slots) {
      if (Object.hasOwnProperty.call(this.gear_slots, slot)) {
        const gear = this.gear_slots[slot];
        if(gear != undefined && gear != null && gear.name == itemname) {
          --quantity;
        }
      }
    }
    for (const slot of this.inventory) {
      if(slot[0] == itemname) {
        quantity -= slot[1];
      }
    }
    return (quantity <= 0);
  }

  craftItem(itemstats) {
    if(!(itemstats.recipe instanceof ItemClass.ItemRecipe)) {
      throw new TypeError("craftItem takes an ItemStats with a defined ItemRecipe as an argument.");
    }
    if(this.haveItem(itemstats.recipe[0]) && this.haveItem(itemstats.recipe[1])) {
      this.addItem(itemstats.recipe[0], -1);
      this.addItem(itemstats.recipe[1], -1);
      this.addItem(itemstats);
      this.cleanInventory();
      return true;
    }
    return false;
  }
}
