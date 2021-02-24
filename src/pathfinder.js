import * as Map from './data/map.js'
import * as Items from './data/items.js'
import * as Util from './util.js'
import * as Inventory from './inventory.js'

export class Pathfinder {
  #goal = {};

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
    return true;
  }
}
