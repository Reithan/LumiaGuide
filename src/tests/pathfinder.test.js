import * as Pathfinder from '../pathfinder.js';
import * as Map from '../data/map.js'

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

test('Precent drop clear in area is accurate for current shopping list', () => {
  var pathfinder = new Pathfinder.Pathfinder();
  pathfinder.setGoal(["Bracelet of Skadi","Leather Gloves"]);
  expect(pathfinder.percentAreaClear("Cemetary")).toBeCloseTo(1.0);

  pathfinder.setGoal(["Leather Gloves"]);

  expect(pathfinder.percentAreaClear("Cemetary")).toBeCloseTo(1 / 3.5);
});

test('Test possible heuristic function approximating dwindling resources during search', () => {
  var pathfinder = new Pathfinder.Pathfinder();
  pathfinder.setGoal(["Vibroblade"]);
  for (const area of Map.areas) {
    if(area == "Research Center") {
      continue;
    }
    expect(pathfinder.expectedPercentItemsAcquired(area,1)).toBeGreaterThanOrEqual(pathfinder.expectedPercentItemsAcquired(area,2));
    expect(pathfinder.expectedPercentItemsAcquired(area,2)).toBeGreaterThanOrEqual(pathfinder.expectedPercentItemsAcquired(area,3));
    expect(pathfinder.expectedPercentItemsAcquired(area,3)).toBeGreaterThanOrEqual(pathfinder.expectedPercentItemsAcquired(area,4));
    expect(pathfinder.expectedPercentItemsAcquired(area,4)).toBeGreaterThanOrEqual(pathfinder.expectedPercentItemsAcquired(area,5));
    expect(pathfinder.expectedPercentItemsAcquired(area,5)).toBeGreaterThanOrEqual(pathfinder.expectedPercentItemsAcquired(area,6));
  }
});

test('Test item collection & crafting', () => {
  var pathfinder = new Pathfinder.Pathfinder();
  pathfinder.setGoal(["Vibroblade"]);
  pathfinder.collectAllInArea("Hotel");
  var current_inventory = pathfinder.getAllCurrentItems();
  expect(current_inventory).toHaveLength(4);
  expect(pathfinder.getCurrentGearStats("Weapon").name).toBe("Kitchen Knife");
  var shoppinglist = pathfinder.getCurrentShoppingList();
  expect(shoppinglist).toHaveLength(1);
  expect(shoppinglist).toContainEqual(["Battery",1]);

  pathfinder.doAllCrafts();
  current_inventory = pathfinder.getAllCurrentItems();
  expect(current_inventory).toHaveLength(3);
  expect(pathfinder.getCurrentGearStats("Weapon").name).toBe("Army Knife");
  shoppinglist = pathfinder.getCurrentShoppingList();
  expect(shoppinglist).toHaveLength(1);
  expect(shoppinglist).toContainEqual(["Battery",1]);

  pathfinder.collectAllInArea("Dock");
  shoppinglist = pathfinder.getCurrentShoppingList();
  expect(shoppinglist).toHaveLength(0);
  pathfinder.doAllCrafts();
  current_inventory = pathfinder.getAllCurrentItems();
  expect(current_inventory).toHaveLength(1);
  expect(pathfinder.getCurrentGearStats("Weapon").name).toBe("Vibroblade");
});
