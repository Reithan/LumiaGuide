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
    return this.buildShoppingList();
  }

  buildShoppingList() {
    this.#shopping_list = [];
    if(Object.keys(this.#goal) == undefined || Object.keys(this.#goal).length == 0) {
      return false;
    }
    for (const slotname in this.#goal) {
      if (Object.hasOwnProperty.call(this.#goal, slotname)) {
        const slot = this.#goal[slotname];
        if(!this.recurseItemForList(slot)) {
          return false;
        }
      }
    }
    return true;
  }

  recurseItemForList(itemstats) {
    if(itemstats.recipe != null) {
      return this.recurseItemForList(Items.all_items[itemstats.recipe.part1]) &&
          this.recurseItemForList(Items.all_items[itemstats.recipe.part2]);
    } else if(itemstats.region != null || itemstats.collect != null || itemstats.hunt != null) {
      this.addItemToList(itemstats.name);
      return true;
    } else {
      // DEBUG throw new EvalError("Unobtainable item encountered: '"+itemstats.name+"'.");
      return false;
    }
  }

  addItemToList(itemname) {
    for (const itementry of this.#shopping_list) {
      if(itementry[0] == itemname) {
        ++itementry[1];
        return;
      }
    }
    this.#shopping_list.push([itemname,1]);
  }

  // TODO - possibly rethink remove function
  #removeItemFromList = function(itemname) {
    //this.#shopping_list = this.#shopping_list.filter(itempair => itempair[0] != itemname);
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
          if(Map.hunt_spawns[area][Items.ItemClass.HuntType.indexOf(huntentry[0])] > 0) {
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
          var rarity_mod = 1.0;
          switch (Items.ItemClass.HuntRarity.indexOf(huntentry[1])) {
            case 1:
              rarity_mod = 0.5; // approx 40-60%
              break;
            case 2:
              rarity_mod = 0.05; // Guesstimate SWAG
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

      if(region_drops[area][itementry[0]] != undefined && region_drops[area][itementry[0]] > 0) {
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
          var rarity_mod = 1.0;
          switch (Items.ItemClass.HuntRarity.indexOf(huntentry[1])) {
            case 1:
              rarity_mod = 0.5; // approx 40-60%
              break;
            case 2:
              rarity_mod = 0.05; // Guesstimate SWAG
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
}
