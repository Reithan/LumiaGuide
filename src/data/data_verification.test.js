import * as Map from './map.js'
import * as ItemClass from './itemclass.js'
import * as Items from './items.js'
import * as Util from '../util.js'

test('All areas have map_adjacencies defined', ()=> {
  for (const area of Map.areas) {
    expect(Map.map_adjacencies).toHaveProperty(area);
  }
});

test('All hyperloop locations are valid', ()=> {
  for (const area in Map.hyperloop) {
    if (Object.hasOwnProperty.call(Map.hyperloop, area)) {
      expect(Map.areas).toContain(area);
    }
  }
});

test('All map locations are valid', ()=> {
  for (const area in Map.map_adjacencies) {
    if (Object.hasOwnProperty.call(Map.map_adjacencies, area)) {
      expect(Map.areas).toContain(area);
    }
  }
});

test('All map adjacencies are valid', ()=> {
  for (const area in Map.map_adjacencies) {
    if (Object.hasOwnProperty.call(Map.map_adjacencies, area)) {
      for (const adjacent of Map.map_adjacencies[area]) {
        expect(Map.areas).toContain(adjacent);
      }
    }
  }
});

test('All map area connections are all bi-di', () => {
  for (const areaA in Map.map_adjacencies) {
    if (Object.hasOwnProperty.call(Map.map_adjacencies, areaA)) {
      const adjacencies = Map.map_adjacencies[areaA];
      for (const areaB of adjacencies) {
        expect(Map.map_adjacencies[areaB]).toContain(areaA);
      }
    } else {
      throw new Error('Map.map_adjacencies doesn\'t contain it\'s own property??');
    }
  }
});

test('All item stats are valid', () => {
  for (const item in Items.all_items) {
    if (Object.hasOwnProperty.call(Items.all_items, item)) {
      const itemstats = Items.all_items[item];
      expect(Util.toType(itemstats.name)).toBe("string");
      expect(ItemClass.ItemRarity).toContain(itemstats.rarity);

      expect(itemstats.quantity).not.toBeNaN();
      expect(Number.isInteger(itemstats.quantity)).toBe(true);
      expect(itemstats.quantity).toBeGreaterThanOrEqual(1);
      expect(itemstats.quantity).toBeLessThanOrEqual(6); // telephotos now stack to 6??!

      expect(itemstats.max_stack).not.toBeNaN();
      expect(Number.isInteger(itemstats.max_stack)).toBe(true);
      expect(itemstats.max_stack).toBeGreaterThanOrEqual(1);
      expect(itemstats.max_stack).toBeLessThanOrEqual(6); // telephotos now stack to 6??!

      if(itemstats.recipe != null) {
        expect(itemstats.recipe).toBeInstanceOf(ItemClass.ItemRecipe);
      }

      var droplists = [itemstats.region,itemstats.collect,itemstats.hunt,itemstats.airsupply];
      for (const droplist of droplists) {
        if(droplist != null) {
          expect(Util.toType(droplist)).toBe("array");
        }
      }

      if(itemstats.region != null) {
        for (const regiondrop of itemstats.region) {
          expect(Map.areas).toContain(regiondrop[0]);

          expect(regiondrop[1]).not.toBeNaN();
          expect(Number.isInteger(regiondrop[1])).toBe(true);
          expect(regiondrop[1]).toBeGreaterThanOrEqual(1);
        }
      }

      
      if(itemstats.collect != null) {
        for (const collectdrop of itemstats.collect) {
          expect(ItemClass.CollectType).toContain(collectdrop);
        }
      }

      if(itemstats.hunt != null) {
        for (const huntdrop of itemstats.hunt) {
          expect(ItemClass.HuntType).toContain(huntdrop[0]);
          expect(ItemClass.HuntRarity).toContain(huntdrop[1]);
        }
      }      

      if(itemstats.airsupply != null) {
        for (const airdrop of itemstats.airsupply) {
          expect(ItemClass.AirSupplyColor).toContain(airdrop);
        }
      }
    }
  }
});

test('All item stats names match their key', () => {
  for (const item in Items.all_items) {
    if (Object.hasOwnProperty.call(Items.all_items, item)) {
      expect(Items.all_items[item].name).toBe(item);
    }
  }
});

test('All items recipes are valid', () => {
  for (const item in Items.all_items) {
    if (Object.hasOwnProperty.call(Items.all_items, item)) {
      const itemstats = Items.all_items[item];
      if(itemstats.recipe != null) {
        expect(Util.toType(itemstats.recipe.part1)).toBe("string");
        expect(Util.toType(itemstats.recipe.part2)).toBe("string");
        expect(Items.all_items).toHaveProperty(itemstats.recipe.part1);
        expect(Items.all_items).toHaveProperty(itemstats.recipe.part2);
      }
    }
  }
});

// TODO - these test should be moved from constructors into tests for optimization
test('All items drop areas are valid', () => {});
test('All items collection data is valid', () => {});
test('All items hunt data is valid', () => {});
test('All items box types are valid', () => {});
// TODO - any other tests that can be moved out of constructors should as well

test('Weapon and armor stat limits are defined', () => {});
test('Weapon and armor stat limits are valid', () => {});
test('All consumables have stats defined', () => {});
test('Consumable stat limits are defined', () => {});
test('Consumable stat limits are valid', () => {});
test('All summons have stats defined', () => {});
test('Summon stat limits are defined', () => {});
test('Summon stat limits are valid', () => {});
