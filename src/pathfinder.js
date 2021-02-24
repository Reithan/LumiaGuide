import * as Map from './data/map.js'
import * as Items from './data/items.js'
//import * as Items.ItemClass from './data/itemclass.js'
import * as Util from './util.js'
import * as Inventory from './inventory.js'

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
