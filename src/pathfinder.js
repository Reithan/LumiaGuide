import * as Map from './data/map.js'
import * as Items from './data/items.js'
import * as Util from './util.js'
import * as Inventory from './inventory.js'

export var region_drops = {};
for (const itemname in Items.all_items) {
  if (Object.hasOwnProperty.call(Items.all_items, itemname)) {
    const itemstats = Items.all_items[itemname];
    if(itemstats.region != null) {
      for (const region of itemstats.region) {
        if(region_drops[region[0]] == undefined) {
          region_drops[region[0]] = { itemname: region[1] };
        } else {
          region_drops[region[0]][itemname] = region[1];
        }
      }
    }
  }
}

export class Pathfinder {
  #goal = {};
  #shopping_list = [];
  #original_list_length = 0;
  #current_inventory = new Inventory.Inventory();

  getGoal() { return {...this.#goal}; }
  setGoal(new_goal) {
    var validated = true;
    validated = validated && (Util.toType(new_goal) == "array" );
    validated = validated && (new_goal.length <= 6);
    var build_goal = {};
    if(validated) {
      for (const slot of new_goal) {
        if(!validated ||
            Items.all_items[slot] == undefined ||
            !Items.ItemClass.GearType.includes(Items.all_items[slot].type) ||
            build_goal[Items.all_items[slot].type] != undefined) {
          validated = false;
          break;
        } else {
          build_goal[Items.all_items[slot].type] = Items.all_items[slot];
        }
      }
    }
    if(!validated) {
      // DEBUG throw new TypeError("setGoal takes an array of <=6 gear piece names of <=1 of each type.");
      return false;
    }
    this.#goal = build_goal;
    if(this.buildShoppingList()) {
      this.#original_list_length = this.#shopping_list.length;
      return true;
    }
    return false;
  }

  getCurrentInventory() { return this.#current_inventory.getInventory(); }
  getAllCurrentItems() { return this.#current_inventory.getAllItems(); }
  getCurrentGearStats(slot) { return this.#current_inventory.getGearStats(slot); }

  doAllCrafts() {
    for (const goalslot in this.#goal) {
      if (Object.hasOwnProperty.call(this.#goal, goalslot)) {
        const goalitemstats = this.#goal[goalslot];
        while(this.#recurseCraft(goalitemstats)); //<= body purposely left blank
      }
    }
  }

  #recurseCraft = function(craftitem) {
    if(craftitem.recipe != null) {
      if(this.#current_inventory.craftItem(craftitem)) {
        return true;
      }
      return this.#recurseCraft(Items.all_items[craftitem.recipe.part1]) ||
             this.#recurseCraft(Items.all_items[craftitem.recipe.part2]);
    }
    return false;
  }

  buildShoppingList() {
    this.#shopping_list = [];
    if(Object.keys(this.#goal) == undefined || Object.keys(this.#goal).length == 0) {
      return false;
    }
    for (const slotname in this.#goal) {
      if (Object.hasOwnProperty.call(this.#goal, slotname)) {
        const slot = this.#goal[slotname];
        if(!this.#recurseItemForList(slot)) {
          return false;
        }
      }
    }
    return true;
  }

  #recurseItemForList = function(itemstats) {
    if(itemstats.recipe != null) {
      return this.#recurseItemForList(Items.all_items[itemstats.recipe.part1]) &&
          this.#recurseItemForList(Items.all_items[itemstats.recipe.part2]);
    } else if(itemstats.region != null || itemstats.collect != null || itemstats.hunt != null) {
      this.#addItemToList(itemstats.name);
      return true;
    } else {
      // DEBUG throw new EvalError("Unobtainable item encountered: '"+itemstats.name+"'.");
      return false;
    }
  }

  #addItemToList = function(itemname) {
    for (const itementry of this.#shopping_list) {
      if(itementry[0] == itemname) {
        ++itementry[1];
        return;
      }
    }
    this.#shopping_list.push([itemname,1]);
  }

  #removeItemFromList = function(itemname, itemamount) {
    for (const itementry of this.#shopping_list) {
      if(itementry[0] == itemname) {
        itementry[1] -= itemamount;
      }
    }
    this.#shopping_list = this.#shopping_list.filter(pair => pair[1] > 0);
  }

  getCurrentShoppingList() { return [...this.#shopping_list]; }

  percentItemsInArea(area) {
    var totalitemsneeded = this.#shopping_list.length;
    var totalitemsavailable = 0;
    for (const itementry of this.#shopping_list) {
      if(region_drops[area][itementry[0]] != undefined && region_drops[area][itementry[0]] > 0) {
        ++totalitemsavailable;
        continue;
      }
      if(Items.all_items[itementry[0]].collect != null) {
        var foundcollection = false;
        for (const collectiontype of Items.all_items[itementry[0]].collect) {
          if(Map.collection_spawns[area][Items.ItemClass.CollectType.indexOf(collectiontype)] > 0) {
            ++totalitemsavailable;
            foundcollection = true;
            break;
          }
        }
        if(foundcollection) {
          continue;
        }
      }
      if(Items.all_items[itementry[0]].hunt != null) {
        for (const huntentry of Items.all_items[itementry[0]].hunt) {
          if(Map.hunt_spawns[area][Items.ItemClass.HuntType.indexOf(huntentry[0])] > 0 && huntentry[1] != "Rarely") {
            // Don't include rare drops for heuristic
            ++totalitemsavailable;
            break;
          }
        }
      }
    }
    return (totalitemsavailable / totalitemsneeded);
  }
  
  // what's the highest percentage of an area resource our current shopping list clears out in this area?
  percentAreaClear(area) {
    var highest_drop_clear = 0.0;
    for (const itementry of this.#shopping_list) {
      if(region_drops[area][itementry[0]] != undefined && region_drops[area][itementry[0]] > 0) {
        var clear = itementry[1] / region_drops[area][itementry[0]];
        if(clear > highest_drop_clear) {
          highest_drop_clear = clear;
        }
        continue;
      }
      if(Items.all_items[itementry[0]].collect != null) {
        var foundcollection = false;
        for (const collectiontype of Items.all_items[itementry[0]].collect) {
          var collect_amount = Map.collection_spawns[area][Items.ItemClass.CollectType.indexOf(collectiontype)];
          if(collect_amount > 0) {
            var clear = itementry[1] / collect_amount;
            if(clear > highest_drop_clear) {
              highest_drop_clear = clear;
            }
            foundcollection = true;
            break;
          }
        }
        if(foundcollection) {
          continue;
        }
      }
      if(Items.all_items[itementry[0]].hunt != null) {
        var hunt_amount = 0;
        for (const huntentry of Items.all_items[itementry[0]].hunt) {
          var rarity_mod = 0;
          switch (Items.ItemClass.HuntRarity.indexOf(huntentry[1])) {
            case 1:
              rarity_mod = 0.5; // approx 40-60%
              break;
            case 2:
              rarity_mod = 0.0; // Don't count rare drops for heuristic
              break;
            case 0:
            default:
              rarity_mod = 1.0;
              break;
          }
          hunt_amount += Map.hunt_spawns[area][Items.ItemClass.HuntType.indexOf(huntentry[0])] * rarity_mod;
        }
        if(hunt_amount > 0) {
          var clear = itementry[1] / hunt_amount;
          clear = clear > 1.0 ? 1 : clear;
          if(clear > highest_drop_clear) {
            highest_drop_clear = clear;
          }
          break;
        }
      }
    }
    return highest_drop_clear;
  }

  expectedPercentItemsAcquired(area, step) {
    var items_needed = 0;
    var items_acquired = 0;
    for (const itementry of this.#shopping_list) {
      items_needed += itementry[1];
      var items_available = 0;

      if(region_drops[area] != undefined && region_drops[area][itementry[0]] != undefined && region_drops[area][itementry[0]] > 0) {
        items_available += Math.floor(region_drops[area][itementry[0]] * 0.6 ** step); // SWAG dwindling supply & lazy checking
      }
      if(Items.all_items[itementry[0]].collect != null) {
        for (const collectiontype of Items.all_items[itementry[0]].collect) {
          var collect_amount = Map.collection_spawns[area][Items.ItemClass.CollectType.indexOf(collectiontype)];
          if(collect_amount > 0) {
            items_available += Math.floor(collect_amount * 0.75 ** (step - 1));
          }
        }
      }
      if(Items.all_items[itementry[0]].hunt != null) {
        var hunt_amount = 0;
        for (const huntentry of Items.all_items[itementry[0]].hunt) {
          var rarity_mod = 0.0;
          switch (Items.ItemClass.HuntRarity.indexOf(huntentry[1])) {
            case 1:
              rarity_mod = 0.5; // approx 40-60%
              break;
            case 2:
              rarity_mod = 0.0; // Don't count rare drops for heuristic
              break;
            case 0:
            default:
              rarity_mod = 1.0;
              break;
          }
          hunt_amount += Map.hunt_spawns[area][Items.ItemClass.HuntType.indexOf(huntentry[0])] * rarity_mod;
        }
        if(hunt_amount > 0) {
          items_available += Math.floor(hunt_amount * 0.6 ** (step - 1));
        }
      }
      items_acquired += (items_available > itementry[1])? itementry[1] : items_available;
    }
    return items_acquired / items_needed;
  }

  collectAllInArea(area) {
    for (const itementry of this.#shopping_list) {
      if(region_drops[area][itementry[0]] != undefined && region_drops[area][itementry[0]] > 0) {
        this.#current_inventory.addItem(Items.all_items[itementry[0]],itementry[1]);
        this.#removeItemFromList(itementry[0],itementry[1]);
        continue;
      }
      if(Items.all_items[itementry[0]].collect != null) {
        for (const collectiontype of Items.all_items[itementry[0]].collect) {
          var collect_amount = Map.collection_spawns[area][Items.ItemClass.CollectType.indexOf(collectiontype)];
          if(collect_amount > 0) {
            this.#current_inventory.addItem(Items.all_items[itementry[0]],itementry[1]);
            this.#removeItemFromList(itementry[0],itementry[1]);
          }
        }
        continue;
      }
      if(Items.all_items[itementry[0]].hunt != null) {
        var found = false;
        for (const huntentry of Items.all_items[itementry[0]].hunt) {
          if(huntentry[1] != "Rarely" && Map.hunt_spawns[area][Items.ItemClass.HuntType.indexOf(huntentry[0])] > 0) {
            found = true;
            break;
          }
        }
        if(found) {
          this.#current_inventory.addItem(Items.all_items[itementry[0]],itementry[1]);
          this.#removeItemFromList(itementry[0],itementry[1]);
        }
      }
    }
  }

  clone() {
    var copy = new Pathfinder();
    for (const key in this.#goal) {
      if (Object.hasOwnProperty.call(this.#goal, key)) {
        copy.#goal[key] = this.#goal[key];
      }
    }
    copy.#current_inventory = this.#current_inventory.clone();
    for (const iterator of this.#shopping_list) {
      copy.#shopping_list.push([iterator[0],iterator[1]]);
    }
    copy.#original_list_length = this.#original_list_length;

    return copy;
  }

  static isScoreGreaterThan = (e1,e2) =>  (e1[1] < e2[1]? 1 : (e1[1] > e2[1]? -1 : 0));

  generateAreaScores(func, step) {
    var scores = [];
    for (const area of Map.areas) {
      scores.push([area,func(area, step)]);
    }
    return scores;
  }
}
