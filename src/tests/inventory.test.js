import * as Inventory from '../inventory.js'
import * as Items from '../data/items.js'

test('Adding one item adds the item', () => {
  var inventory = new Inventory.Inventory("Glove");
  expect(inventory.size()).toBe(0);
  inventory.addItem(Items.all_items["Stone"]);
  expect(inventory.haveItem("Stone")).toBe(1);
  expect(inventory.size()).toBe(1);
  expect(inventory.getInventory()).toContainEqual([Items.all_items["Stone"],1]);
  expect(inventory.getAllItems()).toContainEqual([Items.all_items["Stone"],1]);
});

test('Adding multiple items adds the items', () => {
  var inventory = new Inventory.Inventory("Glove");
  expect(inventory.size()).toBe(0);
  inventory.addItems([Items.all_items["Stone"],Items.all_items["Glass Bottle"],[Items.all_items["Nail"],4]]);
  expect(inventory.haveItem("Stone")).toBe(1);
  expect(inventory.haveItem("Glass Bottle")).toBe(1);
  expect(inventory.haveItem("Nail")).toBe(4);
  expect(inventory.size()).toBe(4);
  var inventory_out = inventory.getInventory();
  expect(inventory_out).toContainEqual([Items.all_items["Stone"],1]);
  expect(inventory_out).toContainEqual([Items.all_items["Glass Bottle"],1]);
  expect(inventory_out).toContainEqual([Items.all_items["Nail"],3]);
  expect(inventory_out).toContainEqual([Items.all_items["Nail"],1]);
  inventory_out = inventory.getAllItems();
  expect(inventory_out).toContainEqual([Items.all_items["Stone"],1]);
  expect(inventory_out).toContainEqual([Items.all_items["Glass Bottle"],1]);
  expect(inventory_out).toContainEqual([Items.all_items["Nail"],4]);

  inventory.addItems([[Items.all_items["Stone"],3],[Items.all_items["Glass Bottle"],2],[Items.all_items["Nail"],1]]);
  expect(inventory.size()).toBe(5);
  inventory_out = inventory.getInventory();
  expect(inventory_out).toContainEqual([Items.all_items["Stone"],3]);
  expect(inventory_out).toContainEqual([Items.all_items["Stone"],1]);
  expect(inventory_out).toContainEqual([Items.all_items["Glass Bottle"],3]);
  expect(inventory_out).toContainEqual([Items.all_items["Nail"],3]);
  expect(inventory_out).toContainEqual([Items.all_items["Nail"],2]);
  inventory_out = inventory.getAllItems();
  expect(inventory_out).toContainEqual([Items.all_items["Stone"],4]);
  expect(inventory_out).toContainEqual([Items.all_items["Glass Bottle"],3]);
  expect(inventory_out).toContainEqual([Items.all_items["Nail"],5]);
});

test('Adding a negative item removes the item', () => {
  var inventory = new Inventory.Inventory("Glove");
  inventory.addItem(Items.all_items["Stone"]);
  inventory.addItem(Items.all_items["Stone"], -1);
  expect(inventory.size()).toBe(0);

  inventory.addItem(Items.all_items["Stone"]);
  inventory.addItem(Items.all_items["Glass Bottle"], 1);
  inventory.addItem(Items.all_items["Glass Bottle"], -1);
  expect(inventory.size()).toBe(1);
  var inventory_out = inventory.getInventory();
  expect(inventory_out).toContainEqual([Items.all_items["Stone"],1]);
  inventory_out = inventory.getAllItems();
  expect(inventory_out).toContainEqual([Items.all_items["Stone"],1]);
  inventory.addItem(Items.all_items["Stone"], -1);
  expect(inventory.size()).toBe(0);

  inventory.addItem(Items.all_items["Stone"],3);
  inventory.addItem(Items.all_items["Stone"],-2);
  expect(inventory.size()).toBe(1);
  inventory_out = inventory.getInventory();
  expect(inventory_out).toContainEqual([Items.all_items["Stone"],1]);
  inventory_out = inventory.getAllItems();
  expect(inventory_out).toContainEqual([Items.all_items["Stone"],1]);
  inventory.addItem(Items.all_items["Stone"], -1);
  expect(inventory.size()).toBe(0);
});

test('Adding negative items removes the items', () => {
  var inventory = new Inventory.Inventory("Glove");
  inventory.addItems([Items.all_items["Stone"],Items.all_items["Nail"]]);
  inventory.addItems([[Items.all_items["Stone"],-1],[Items.all_items["Nail"],-1]]);
  expect(inventory.size()).toBe(0);

  inventory.addItems([Items.all_items["Stone"],[Items.all_items["Nail"],2]]);
  inventory.addItems([[Items.all_items["Stone"],-1],[Items.all_items["Nail"],-1]]);
  expect(inventory.size()).toBe(1);
  var inventory_out = inventory.getInventory();
  expect(inventory_out).toContainEqual([Items.all_items["Nail"],1]);
  inventory.addItems([[Items.all_items["Nail"], -1]]);
  expect(inventory.size()).toBe(0);
});

test('Adding gear equips it', () => {
  var inventory = new Inventory.Inventory("Glove");
  inventory.addItem(Items.all_items["Brass Knuckles"]);
  expect(inventory.size()).toBe(0);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Brass Knuckles"]);
  expect(inventory.getInventory()).toHaveLength(0);
  expect(inventory.getAllItems()).toContainEqual([Items.all_items["Brass Knuckles"],1]);
});

test('Adding gear swaps to the highest rarity gear', () => {
  var inventory = new Inventory.Inventory("Bat");
  inventory.addItem(Items.all_items["Branch"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Branch"]);
  inventory.addItem(Items.all_items["Long Rod"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Long Rod"]);
  inventory.addItem(Items.all_items["Umbrella"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Umbrella"]);
  inventory.addItem(Items.all_items["Mallet"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Mallet"]);
  inventory.addItem(Items.all_items["Monkey King Bar"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Monkey King Bar"]);
});

test('Adding a weapon of the wrong type doesn\t equip it.', () => {
  var inventory = new Inventory.Inventory("Glove");
  inventory.addItem(Items.all_items["Brass Knuckles"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Brass Knuckles"]);
  inventory.addItem(Items.all_items["Monkey King Bar"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Brass Knuckles"]);
});

test('Removing gear unequips it', () => {
  var inventory = new Inventory.Inventory("Glove");
  inventory.addItem(Items.all_items["Brass Knuckles"]);
  inventory.addItem(Items.all_items["Brass Knuckles"], -1);
  expect(inventory.getGearStats("Weapon")).toBe(null);
  expect(inventory.getInventory()).toHaveLength(0);
  expect(inventory.getAllItems()).toHaveLength(0);
});

test('Removing gear equips the next highest rarity gear', () => {
  var inventory = new Inventory.Inventory("Glove");
  inventory.addItem(Items.all_items["Divine Fist"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Divine Fist"]);
  inventory.addItem(Items.all_items["Gauntlet"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Divine Fist"]);
  inventory.addItem(Items.all_items["Brass Knuckles"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Divine Fist"]);
  expect(inventory.getInventory()).toHaveLength(2);
  expect(inventory.getAllItems()).toHaveLength(3);
  inventory.addItem(Items.all_items["Divine Fist"], -1);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Gauntlet"]);
  expect(inventory.getInventory()).toHaveLength(1);
  expect(inventory.getAllItems()).toHaveLength(2);
});

test('Crafting gear removes the ingredients and adds the result.', () => {
  var inventory = new Inventory.Inventory("Glove");
  inventory.addItems([Items.all_items["Stone"],Items.all_items["Lighter"]]);
  expect(inventory.size()).toBe(2);
  expect(inventory.haveItem("Stone")).toBe(1);
  expect(inventory.haveItem("Lighter")).toBe(1);
  expect(inventory.haveItem("Heated Stone")).toBe(0);
  var craft_result = inventory.craftItem(Items.all_items["Heated Stone"]);
  expect(craft_result).toBe(true);
  expect(inventory.size()).toBe(1);
  expect(inventory.haveItem("Stone")).toBe(0);
  expect(inventory.haveItem("Lighter")).toBe(0);
  expect(inventory.haveItem("Heated Stone")).toBe(3);

  var inventory_out = inventory.getInventory();
  expect(inventory_out).toContainEqual([Items.all_items["Heated Stone"],3]);
});

test('Crafting gear equips the result to an empty slot if it\'s the correct type.', () => {
  var inventory = new Inventory.Inventory("Glove");
  inventory.addItems([Items.all_items["Brass Knuckles"],Items.all_items["Iron Ore"]]);
  expect(inventory.craftItem(Items.all_items["Iron Knuckles"])).toBe(true);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Iron Knuckles"]);
  expect(inventory.getAllItems()).toStrictEqual([[Items.all_items["Iron Knuckles"],1]]);
  inventory.addItem("Iron Knuckles",-1);
  
  
  inventory.addItems([Items.all_items["Short Rod"],Items.all_items["Bamboo"]]);
  expect(inventory.craftItem(Items.all_items["Long Rod"])).toBe(true);
  expect(inventory.getGearStats("Weapon")).not.toBe(Items.all_items["Long Rod"]);
  expect(inventory.getAllItems()).toStrictEqual([[Items.all_items["Long Rod"],1]]);
});

test('Crafting gear equips the result if it\'s higher rarity.', () => {
  var inventory = new Inventory.Inventory("Glove");
  inventory.addItems([[Items.all_items["Brass Knuckles"], 2],Items.all_items["Iron Ore"]]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Brass Knuckles"]);
  expect(inventory.getInventory()).toHaveLength(2);
  expect(inventory.getAllItems()).toHaveLength(2);
  expect(inventory.haveItem("Brass Knuckles")).toBe(2);

  inventory.craftItem(Items.all_items["Iron Knuckles"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Iron Knuckles"]);
  expect(inventory.getInventory()).toHaveLength(1);
  expect(inventory.getAllItems()).toHaveLength(2);
});

test('Removing items returns the remaining negative if there were not enough items to remove.', () => {
  var inventory = new Inventory.Inventory("Glove");
  inventory.addItems([[Items.all_items["Stone"], 2],[Items.all_items["Water"],3]]);
  expect(inventory.getInventory()).toHaveLength(2);
  expect(inventory.haveItem("Water")).toBe(3);

  expect(inventory.addItem(Items.all_items["Water"],-1)).toBe(0);
  expect(inventory.getInventory()).toHaveLength(2);
  expect(inventory.haveItem("Water")).toBe(2);

  expect(inventory.addItem(Items.all_items["Water"],-5)).toBe(-3);
  expect(inventory.getInventory()).toHaveLength(1);
  expect(inventory.haveItem("Water")).toBe(0);
});

test('Inventory clone test', () => {
  var inventory = new Inventory.Inventory("Glove");
  inventory.addItems([[Items.all_items["Stone"], 2],[Items.all_items["Water"],3]]);
  var inventory_clone = inventory.clone();
  expect(inventory.getAllItems()).toStrictEqual(inventory_clone.getAllItems());
  expect(inventory.getInventory()).toStrictEqual(inventory_clone.getInventory());
});

test('Get total equipped gear stats test', () => {
  var inventory = new Inventory.Inventory("Dagger");
  const build_items = [Items.all_items["Vibroblade"],Items.all_items["Optical Camouflage Suit"]];
  inventory.addItems(build_items);
  var total_stats = inventory.getTotalEquippedStats();
  
  for (const stat of Items.ItemClass.GearStatTypes) {
    expect(total_stats[stat]).toBe(build_items[0][stat] + build_items[1][stat]);
  }
});

test('Test all possible craft output', () => {
  var inventory = new Inventory.Inventory("Glove");
  const all_factory_items = [["Branch",7],["Bandage",7],["Binoculars",7],
      ["Iron Ball",1],["Chalk",7],["Short Crossbow",4],["Walther PPK",4],
      ["Fedorova",4],["Hatchet",4],["Curry Powder",6],["Stone",4],["Nail",8],
      ["Turtle Shell",8],["Scrap Metal",10],["Lighter",10],["Battery",10],
      ["Alcohol",6],["Oil",8],["Glue",7],["Leather",9],["Meat",5]];
  inventory.addItems(all_factory_items);

  var all_fac_crafts_expected  = ["Magnum-Python","Beretta M92F",
      "Double Revolver SP","Leather Shield","Bracer","Tandoori Chicken",
      "Baiju","Kaoliang Liquor","Oilcloth","Heated Oil","White Powder",
      "Heated Stone","Fried Chicken","Curry Croquette","Steak"];
  var all_fac_crafts = inventory.getAllPossibleCrafts();

  all_fac_crafts_expected.sort();
  all_fac_crafts.sort();
  expect(all_fac_crafts).toStrictEqual(all_fac_crafts_expected);
});

test('Test gear stat ratings', () => {
  var inventory = new Inventory.Inventory("Dagger");
  inventory.addItems(["Vibroblade","Optical Camouflage Suit"]);

  var weapon_rating = inventory.rateGearSlot("Weapon");
  var chest_rating = inventory.rateGearSlot("Chest");
  var build_rating = inventory.rateBuildStats();
  var total_rating = inventory.generateOverallRating();
  var function_rating = inventory.rateBuildStatsFunctional();

  expect(weapon_rating["attack_power"]).toBeCloseTo(0.3929);
  expect(weapon_rating["attack_speed"]).toBeCloseTo(0.8000);

  expect(chest_rating["attack_power"]).toBeCloseTo(0.0666);
  expect(chest_rating["crit_rate"]).toBeCloseTo(0.8800);
  expect(chest_rating["less_skill_percent"]).toBeCloseTo(0.5000);
  
  expect(build_rating["attack_power"]).toBeCloseTo(0.0774);
  expect(build_rating["attack_speed"]).toBeCloseTo(0.1556);
  expect(build_rating["crit_rate"]).toBeCloseTo(0.1466);
  expect(build_rating["less_skill_percent"]).toBeCloseTo(0.0833);
  
  expect(total_rating).toBeCloseTo(0.1528);
  expect(function_rating).toBeCloseTo(0.0703);
});

test('Craft equal rarity equipment', () => {
  var inventory = new Inventory.Inventory("Dagger");
  inventory.addItems(["Chain Coif","Hairband","Feather"]);
  inventory.craftItem(Items.all_items["Mask"]);

  expect(inventory.haveItem("Chain Coif")).toBe(1);
  expect(inventory.haveItem("Mask")).toBe(1);
  expect(inventory.haveItem("Hairband")).toBe(0);
  expect(inventory.haveItem("Feather")).toBe(0);
});

test('Test inventory reset', () => {
  var inventory = new Inventory.Inventory("Dagger");
  inventory.addItems(["Chain Coif","Hairband","Feather"]);
  inventory.craftItem(Items.all_items["Mask"]);

  expect(inventory.getInventory()).toHaveLength(1);
  expect(inventory.getAllItems()).toHaveLength(2);

  inventory.reset();
  expect(inventory.getInventory()).toHaveLength(0);
  expect(inventory.getAllItems()).toHaveLength(0);
});
