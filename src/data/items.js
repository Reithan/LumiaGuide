import { weapons } from './weapons.js';
import { armors } from './armors.js';
import { consumables } from './consumables.js';
import { summons } from './summons.js';
import { materials } from './materials.js';

export var all_items = {};
var item_collections = [weapons, armors, consumables, summons, materials];

for (const collection of item_collections) {
  for (const item in collection) {
    if (Object.hasOwnProperty.call(collection, item)) {
      if(all_items[item] != null) {
        throw new MediaError("Item exists twice in data.");
      }
      all_items[item] = collection[item];
    }
  }  
}
