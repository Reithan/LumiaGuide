import * as Inventory from '../inventory.js'
import * as Items from '../data/items.js'

test('Adding one item adds the item', () => {
  var inventory = new Inventory.Inventory();
  expect(inventory.size()).toBe(0);
  inventory.addItem(Items.all_items["Stone"]);
  expect(inventory.haveItem("Stone")).toBe(true);
  expect(inventory.size()).toBe(1);
  expect(inventory.getInventory()).toContainEqual([Items.all_items["Stone"],1]);
  expect(inventory.getAllItems()).toContainEqual([Items.all_items["Stone"],1]);
});

test('Adding multiple items adds the items', () => {
  var inventory = new Inventory.Inventory();
  expect(inventory.size()).toBe(0);
  inventory.addItems([Items.all_items["Stone"],Items.all_items["Glass Bottle"],[Items.all_items["Nail"],4]]);
  expect(inventory.haveItem("Stone")).toBe(true);
  expect(inventory.haveItem("Glass Bottle",1)).toBe(true);
  expect(inventory.haveItem("Nail",4)).toBe(true);
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
  var inventory = new Inventory.Inventory();
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
  var inventory = new Inventory.Inventory();
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
  var inventory = new Inventory.Inventory();
  inventory.addItem(Items.all_items["Brass Knuckles"]);
  expect(inventory.size()).toBe(0);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Brass Knuckles"]);
  expect(inventory.getInventory().length).toBe(0);
  expect(inventory.getAllItems()).toContainEqual([Items.all_items["Brass Knuckles"],1]);
});

test('Adding gear swaps to the highest rarity gear', () => {
  var inventory = new Inventory.Inventory();
  inventory.addItem(Items.all_items["Brass Knuckles"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Brass Knuckles"]);
  inventory.addItem(Items.all_items["Iron Knuckles"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Iron Knuckles"]);
  inventory.addItem(Items.all_items["Bone Gauntlet"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Bone Gauntlet"]);
  inventory.addItem(Items.all_items["One Inch Punch"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["One Inch Punch"]);
  inventory.addItem(Items.all_items["Monkey King Bar"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Monkey King Bar"]);
});

test('Removing gear unequips it', () => {
  var inventory = new Inventory.Inventory();
  inventory.addItem(Items.all_items["Brass Knuckles"]);
  inventory.addItem(Items.all_items["Brass Knuckles"], -1);
  expect(inventory.getGearStats("Weapon")).toBe(null);
  expect(inventory.getInventory().length).toBe(0);
  expect(inventory.getAllItems().length).toBe(0);
});

test('Removing gear equips the next highest rarity gear', () => {
  var inventory = new Inventory.Inventory();
  inventory.addItem(Items.all_items["Divine Fist"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Divine Fist"]);
  inventory.addItem(Items.all_items["Gauntlet"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Divine Fist"]);
  inventory.addItem(Items.all_items["Brass Knuckles"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Divine Fist"]);
  expect(inventory.getInventory().length).toBe(2);
  expect(inventory.getAllItems().length).toBe(3);
  inventory.addItem(Items.all_items["Divine Fist"], -1);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Gauntlet"]);
  expect(inventory.getInventory().length).toBe(1);
  expect(inventory.getAllItems().length).toBe(2);
});

test('Crafting gear removes the ingredients and adds the result.', () => {
  var inventory = new Inventory.Inventory();
  inventory.addItems([Items.all_items["Stone"],Items.all_items["Lighter"]]);
  expect(inventory.size()).toBe(2);
  expect(inventory.haveItem("Stone")).toBe(true);
  expect(inventory.haveItem("Lighter")).toBe(true);
  expect(inventory.haveItem("Heated Stone")).toBe(false);
  var craft_result = inventory.craftItem(Items.all_items["Heated Stone"]);
  expect(craft_result).toBe(true);
  expect(inventory.size()).toBe(1);
  expect(inventory.haveItem("Stone")).toBe(false);
  expect(inventory.haveItem("Lighter")).toBe(false);
  expect(inventory.haveItem("Heated Stone")).toBe(true);

  var inventory_out = inventory.getInventory();
  expect(inventory.haveItem("Heated Stone",3)).toBe(true);
  expect(inventory_out).toContainEqual([Items.all_items["Heated Stone"],3]);
});

test('Crafting gear equips the result to an empty slot.', () => {
  var inventory = new Inventory.Inventory();
  inventory.addItems([Items.all_items["Brass Knuckles"],Items.all_items["Iron Ore"]]);
  expect(inventory.craftItem(Items.all_items["Iron Knuckles"])).toBe(true);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Iron Knuckles"]);
});

test('Crafting gear equips the result if it\'s higher rarity.', () => {
  var inventory = new Inventory.Inventory();
  inventory.addItems([[Items.all_items["Brass Knuckles"], 2],Items.all_items["Iron Ore"]]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Brass Knuckles"]);
  expect(inventory.getInventory().length).toBe(2);
  expect(inventory.getAllItems().length).toBe(2);
  expect(inventory.haveItem("Brass Knuckles",2)).toBe(true);

  inventory.craftItem(Items.all_items["Iron Knuckles"]);
  expect(inventory.getGearStats("Weapon")).toBe(Items.all_items["Iron Knuckles"]);
  expect(inventory.getInventory().length).toBe(1);
  expect(inventory.getAllItems().length).toBe(2);
});

test('Removing items returns the remaining negative if there were not enough items to remove.', () => {
  var inventory = new Inventory.Inventory();
  inventory.addItems([[Items.all_items["Stone"], 2],[Items.all_items["Water"],3]]);
  expect(inventory.getInventory().length).toBe(2);
  expect(inventory.haveItem("Water",2)).toBe(true);
  expect(inventory.haveItem("Water",3)).toBe(true);
  expect(inventory.haveItem("Water",4)).toBe(false);

  expect(inventory.addItem(Items.all_items["Water"],-1)).toBe(0);
  expect(inventory.getInventory().length).toBe(2);
  expect(inventory.haveItem("Water",2)).toBe(true);
  expect(inventory.haveItem("Water",3)).toBe(false);

  expect(inventory.addItem(Items.all_items["Water"],-5)).toBe(-3);
  expect(inventory.getInventory().length).toBe(1);
  expect(inventory.haveItem("Water",1)).toBe(false);
});
