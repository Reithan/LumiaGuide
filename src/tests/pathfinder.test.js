import * as Pathfinder from '../pathfinder.js';

test('Setting goal requires <=6 items with <=1 of each type.', () => {
  var pathfinder = new Pathfinder.Pathfinder();
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Heelys"])).toBe(true);
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Sheath","Heelys","Glass Pieces"])).toBe(true);
  expect(pathfinder.setGoal(["Brass Knuckles","Brass Knuckles","Bulletproof Vest","Sheath","Heelys","Glass Pieces"])).toBe(false);
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Sheath","Heelys","Glass Pieces","Scissors"])).toBe(false);
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Sheath","Heelys","Glass Pieces","Stone"])).toBe(false);
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Sheath","Heelys","Stone"])).toBe(false);
});

test('Shopping list is populated by goal items\' constituent parts.', () => {
  var pathfinder = new Pathfinder.Pathfinder();
  pathfinder.setGoal(["Brass Knuckles","Heelys"]);
  var shoppinglist = pathfinder.getCurrentShoppingList();
  expect(shoppinglist).toHaveLength(3);
  expect(shoppinglist).toContainEqual(["Brass Knuckles",1]);
  expect(shoppinglist).toContainEqual(["Running Shoes",1]);
  expect(shoppinglist).toContainEqual(["Iron Ball",1]);

  pathfinder.setGoal(["Leather Gloves","Heelys","Leather Shield"]);
  shoppinglist = pathfinder.getCurrentShoppingList();
  expect(shoppinglist).toHaveLength(5);
  expect(shoppinglist).toContainEqual(["Cotton Gloves",1]);
  expect(shoppinglist).toContainEqual(["Leather",2]);
  expect(shoppinglist).toContainEqual(["Running Shoes",1]);
  expect(shoppinglist).toContainEqual(["Iron Ball",1]);
  expect(shoppinglist).toContainEqual(["Turtle Shell",1]);

  pathfinder.setGoal(["Bracelet of Skadi","Leather Gloves"]);
  shoppinglist = pathfinder.getCurrentShoppingList();
  expect(shoppinglist).toHaveLength(8);
  expect(shoppinglist).toContainEqual(["Tree of Life",1]);
  expect(shoppinglist).toContainEqual(["Stone",1]);
  expect(shoppinglist).toContainEqual(["Ice",1]);
  expect(shoppinglist).toContainEqual(["Bracelet",1]);
  expect(shoppinglist).toContainEqual(["Mousetrap",1]);
  expect(shoppinglist).toContainEqual(["Nail",1]);
  expect(shoppinglist).toContainEqual(["Cotton Gloves",1]);
  expect(shoppinglist).toContainEqual(["Leather",1]);
});

test('Precent items in area is accurate for current shopping list', () => {
  var pathfinder = new Pathfinder.Pathfinder();
  pathfinder.setGoal(["Bracelet of Skadi","Leather Gloves"]);
  expect(pathfinder.percentItemsInArea("Cemetary")).toBeCloseTo(6 / 8);
});