import { weapons } from './weapons.js';
import { armors } from './armors.js';
import { consumables } from './consumables.js';
import { summons } from './summons.js';

export var all_items = {};
var item_collections = [weapons, armors, consumables, summons];

for (const collection of item_collections) {
  for (const item in collection) {
    if (Object.hasOwnProperty.call(collection, item)) {    
      all_items[item] = collection[item];
    }
  }  
}
