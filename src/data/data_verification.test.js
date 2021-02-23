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

test('All gear stats are valid', () => {
  for (const item in Items.all_items) {
    if (Object.hasOwnProperty.call(Items.all_items, item)) {
      const gearstat = Items.all_items[item];
      if(gearstat instanceof ItemClass.GearStats) {
        expect(ItemClass.GearType).toContain(gearstat.type);
        expect(gearstat.type == "Weapon").not.toBe(gearstat.subtype == null);
      }
    }
  }
});

test('All consumable stats are valid', () => {
  for (const item in Items.all_items) {
    if (Object.hasOwnProperty.call(Items.all_items, item)) {
      const consumablestat = Items.all_items[item];
      if(consumablestat instanceof ItemClass.ConsumableStats) {
        expect(ItemClass.ConsumableType).toContain(consumablestat.type);
        expect(consumablestat.value).not.toBeNaN();
        expect(Number.isInteger(consumablestat.value)).toBe(true);
        expect(consumablestat.value).toBeGreaterThanOrEqual(1);
      }
    }
  }
});

test('All summon stats are valid', () => {
  for (const item in Items.all_items) {
    if (Object.hasOwnProperty.call(Items.all_items, item)) {
      const summonstat = Items.all_items[item];
      if(summonstat instanceof ItemClass.SummonStats) {
        if(summonstat.effect != null) {
          expect(ItemClass.EffectType).toContain(summonstat.effect);

          if(summonstat.effect != "Vision") {
            expect(summonstat.effect_duration).not.toBeNaN();
            expect(summonstat.effect_duration).toBeGreaterThan(0.0);

            expect(summonstat.damage).not.toBeNaN();
            expect(Number.isInteger(summonstat.damage)).toBe(true);
            expect(summonstat.damage).toBeGreaterThanOrEqual(1);    
          }
        }
      }
    }
  }
});

test('Stat limits are valid', () => {
  for (const itemname in Items.all_items) {
    if (Object.hasOwnProperty.call(Items.all_items, itemname)) {
      const itemstats = Items.all_items[itemname];
      for (const key in itemstats) {
        if (Object.hasOwnProperty.call(itemstats, key)) {
          const itemstat = itemstats[key];
          var totype = Util.toType(itemstat);
          if(totype == "string" || totype == "array" || totype == "object" || totype == "undefined" || totype == "null") {
            continue;
          }
          if(itemstats instanceof ItemClass.GearStats) {
            expect(itemstat).toBeGreaterThanOrEqual(Items.gear_range[0][key]);
            expect(itemstat).toBeLessThanOrEqual(Items.gear_range[1][key]);
          } else if(itemstats instanceof ItemClass.ConsumableStats) {
            expect(itemstat).toBeGreaterThanOrEqual(Items.consumable_range[0][key]);
            expect(itemstat).toBeLessThanOrEqual(Items.consumable_range[1][key]);
          } else if(itemstats instanceof ItemClass.SummonStats) {
            expect(itemstat).toBeGreaterThanOrEqual(Items.summon_range[0][key]);
            expect(itemstat).toBeLessThanOrEqual(Items.summon_range[1][key]);
          }
        }
      }
    }
  }
});
