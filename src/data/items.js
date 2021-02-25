import { weapons } from './weapons.js';
import { armors } from './armors.js';
import { consumables } from './consumables.js';
import { summons } from './summons.js';
import { materials } from './materials.js';
import * as ItemClass from './itemclass.js'
export * as ItemClass from './itemclass.js'
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

export var recipes = {};
for (const itemname in all_items) {
  if (Object.hasOwnProperty.call(all_items, itemname)) {
    const itemstats = all_items[itemname];
    if(itemstats.recipe != null) {
      recipes[itemname] = itemstats.recipe;
    }
  }
}

export var starter_weapons = {};
starter_weapons["Assault Rifle"] = weapons["Fedorova"];
starter_weapons["Axe"] = weapons["Hatchet"];
starter_weapons["Bat"] = weapons["Short Rod"];
starter_weapons["Bow"] = weapons["Bow"];
starter_weapons["Crossbow"] = weapons["Short Crossbow"];
starter_weapons["Dagger"] = weapons["Kitchen Knife"];
starter_weapons["Dual Swords"] = null;
starter_weapons["Glove"] = weapons["Cotton Gloves"];
starter_weapons["Guitar"] = weapons["Starter Guitar"];
starter_weapons["Hammer"] = weapons["Hammer"];
starter_weapons["Nunchaku"] = weapons["Steel Chain"];
starter_weapons["Pistol"] = weapons["Walther PPK"];
starter_weapons["Rapier"] = weapons["Needle"];
starter_weapons["Sniper Rifle"] = weapons["Long Rifle"];
starter_weapons["Spear"] = weapons["Short Spear"];
starter_weapons["Throw"] = weapons["Baseball"];
starter_weapons["Tonfa"] = weapons["Bamboo"];
starter_weapons["Two-Handed Sword"] = weapons["Rusty Sword"];
starter_weapons["Shuriken"] = weapons["Razor"];
starter_weapons["Whip"] = weapons["Whip"];
