import { weapons } from './weapons.js';
import { armors } from './armors.js';
import { consumables } from './consumables.js';
import { summons } from './summons.js';
import { materials } from './materials.js';
import * as ItemClass from './itemclass.js'
import { toType } from '../util.js';

export var all_items = {};
var item_collections = [weapons, armors, consumables, summons, materials];

var find_min_max = (items, min, max) => {
  for (const item in items) {
    if (Object.hasOwnProperty.call(items, item)) {
      if(all_items[item] != null) {
        throw new MediaError("Item exists twice in data.");
      }
      all_items[item] = items[item];
      for (const key in items[item]) {
        if (Object.hasOwnProperty.call(items[item], key)) {
          const stat = items[item][key];
          var totype = toType(stat);
          if(totype == "string" || totype == "array" || totype == "object" || totype == "null") {
            continue;
          }
          if(min[key] == undefined || min[key] == null) {
            min[key] = stat;
          }
          if(min[key] > stat) {
            min[key] = stat;
          }
          if(max[key] == undefined || max[key] == null) {
            max[key] = stat;
          }
          if(max[key] < stat) {
            max[key] = stat;
          }
        }
      }
    }
  }
};

var gear_min = new ItemClass.GearStats("gear_min");
var gear_max = new ItemClass.GearStats("gear_max");
find_min_max(weapons, gear_min, gear_max);
find_min_max(armors, gear_min, gear_max);

var consumable_min = new ItemClass.ConsumableStats("consumable_min");
var consumable_max = new ItemClass.ConsumableStats("consumable_max");
find_min_max(consumables, consumable_min, consumable_max);

var summon_min = new ItemClass.SummonStats("summon_min");
var summon_max = new ItemClass.SummonStats("summon_max");
find_min_max(summons, summon_min, summon_max);

export const gear_range = [gear_min,gear_max];
export const consumable_range = [consumable_min,consumable_max];
export const summon_range = [summon_min,summon_max];

for (const item in materials) {
  if (Object.hasOwnProperty.call(materials, item)) {
    if(all_items[item] != null) {
      throw new MediaError("Item exists twice in data.");
    }
    all_items[item] = materials[item];
  }
}  
