import * as Pathfinder from '../pathfinder.js';
import * as Map from '../data/map.js'

test('Setting goal requires <=6 items with <=1 of each type.', () => {
  var pathfinder = new Pathfinder.Pathfinder("Dagger");
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Heelys"])).toBe(true);
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Sheath","Heelys","Glass Pieces"])).toBe(true);
  expect(pathfinder.setGoal(["Brass Knuckles","Brass Knuckles","Bulletproof Vest","Sheath","Heelys","Glass Pieces"])).toBe(false);
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Sheath","Heelys","Glass Pieces","Scissors"])).toBe(false);
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Sheath","Heelys","Glass Pieces","Stone"])).toBe(false);
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Sheath","Heelys","Stone"])).toBe(false);
});

test('Shopping list is populated by goal items\' constituent parts.', () => {
  var pathfinder = new Pathfinder.Pathfinder("Dagger");
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
  var pathfinder = new Pathfinder.Pathfinder("Dagger");
  pathfinder.setGoal(["Bracelet of Skadi","Leather Gloves"]);
  expect(pathfinder.percentItemsInArea("Cemetary")).toBeCloseTo(5 / 8);
});

test('Precent drop clear in area is accurate for current shopping list', () => {
  var pathfinder = new Pathfinder.Pathfinder("Dagger");
  pathfinder.setGoal(["Bracelet of Skadi","Leather Gloves"]);
  expect(pathfinder.percentAreaClear("Cemetary")).toBeCloseTo(1.0);

  pathfinder.setGoal(["Leather Gloves"]);
  expect(pathfinder.percentAreaClear("Cemetary")).toBeCloseTo(1 / 3.5);
});

test('Test possible heuristic function approximating dwindling resources during search', () => {
  var pathfinder = new Pathfinder.Pathfinder("Dagger");
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
  var pathfinder = new Pathfinder.Pathfinder("Dagger");
  pathfinder.setGoal(["Vibroblade"]);
  pathfinder.collectAllShoppingInArea("Hotel");
  var current_inventory = pathfinder.getCurrentInventory().getAllItems();
  expect(current_inventory).toHaveLength(4);
  expect(pathfinder.getCurrentInventory().getGearStats("Weapon").name).toBe("Kitchen Knife");
  var shoppinglist = pathfinder.getCurrentShoppingList();
  expect(shoppinglist).toHaveLength(1);
  expect(shoppinglist).toContainEqual(["Battery",1]);

  pathfinder.doAllCrafts();
  current_inventory = pathfinder.getCurrentInventory().getAllItems();
  expect(current_inventory).toHaveLength(3);
  expect(pathfinder.getCurrentInventory().getGearStats("Weapon").name).toBe("Army Knife");
  shoppinglist = pathfinder.getCurrentShoppingList();
  expect(shoppinglist).toHaveLength(1);
  expect(shoppinglist).toContainEqual(["Battery",1]);

  pathfinder.collectAllShoppingInArea("Dock");
  shoppinglist = pathfinder.getCurrentShoppingList();
  expect(shoppinglist).toHaveLength(0);
  pathfinder.doAllCrafts();
  current_inventory = pathfinder.getCurrentInventory().getAllItems();
  expect(current_inventory).toHaveLength(1);
  expect(pathfinder.getCurrentInventory().getGearStats("Weapon").name).toBe("Vibroblade");
});

test('Pathfinder clone test', () => {
  var pathfinder = new Pathfinder.Pathfinder("Dagger");
  pathfinder.setGoal(["Vibroblade"]);
  pathfinder.collectAllShoppingInArea("Hotel");
  var pathfinder_clone = pathfinder.clone();
  expect(pathfinder.getGoal()).toStrictEqual(pathfinder_clone.getGoal());
  expect(pathfinder.getCurrentShoppingList()).toStrictEqual(pathfinder_clone.getCurrentShoppingList());
  expect(pathfinder.getCurrentInventory().getInventory()).toStrictEqual(pathfinder_clone.getCurrentInventory().getInventory());
  expect(pathfinder.getCurrentInventory().getAllItems()).toStrictEqual(pathfinder_clone.getCurrentInventory().getAllItems());
});

test('Test area score generation', () => {
  var pathfinder = new Pathfinder.Pathfinder("Dagger");
  pathfinder.setGoal(["Vibroblade"]);
  var scores = pathfinder.generateAreaScores(pathfinder.expectedPercentItemsAcquired.bind(pathfinder), 3);
  expect(scores[0][0]).toBe("Dock");
  expect(scores[0][1]).toBe(0.75);
  expect(scores[2][0]).toBe("Hotel");
  expect(scores[2][1]).toBe(0.75);
});

test('Traverse area test', () => {
  var pathfinder = new Pathfinder.Pathfinder("Dagger");
  pathfinder.setGoal(["Vibroblade","Optical Camouflage Suit"]);

  var areas = [];
  var test_scores = null;
  for (let step = 1; step <= 3; ++step) {
    var scores = pathfinder.generateAreaScores(pathfinder.expectedPercentItemsAcquired.bind(pathfinder), step);
    test_scores = scores;
    areas.push(scores[0]);
    pathfinder.collectAllShoppingInArea(scores[0][0]);
    pathfinder.doAllCrafts();
  }

  expect(pathfinder.getCurrentInventory().getAllItems()).toHaveLength(2);
  expect(pathfinder.getCurrentInventory().getGearStats("Weapon").name).toBe("Vibroblade");
  expect(pathfinder.getCurrentInventory().getGearStats("Chest").name).toBe("Optical Camouflage Suit");
});


function makeItemList(pathfinder) {
  var itemlist = [];
  for (const itementry of pathfinder.getCurrentInventory().getAllItems()) {
    itemlist.push([itementry[0].name,itementry[1]]);
  }
  return itemlist;
}

test('Test full area collect function', () => {
  var pathfinder = new Pathfinder.Pathfinder("Dagger");
  pathfinder.collectAllInArea("Factory");
  var itemlist = makeItemList(pathfinder);
  
  const expected_itemlist = [["Kitchen Knife",1],["Branch",7],["Bandage",7],["Binoculars",7],
      ["Iron Ball",7],["Chalk",7],["Short Crossbow",3],["Walther PPK",4],["Fedorova",4],
      ["Hatchet",4],["Curry Powder",6],["Stone",4],["Nail",8],["Turtle Shell",8],["Scrap Metal",10],
      ["Lighter",10],["Battery",10],["Alcohol",6],["Oil",8],["Glue",8],["Leather",9],["Meat",5]];

  const sortlistalphabetically = (e1,e2) => e1[0] > e2[0] ? 1 : e1[0] < e2[0] ? -1 : 0;
  itemlist.sort(sortlistalphabetically);
  expected_itemlist.sort(sortlistalphabetically);
  expect(itemlist).toStrictEqual(expected_itemlist);
});

test('Craft multi-tier item in steps', () => {
  var pathfinder = new Pathfinder.Pathfinder("Dagger");
  pathfinder.setGoal(["Imperial Burgonet"]);

  pathfinder.collectAllShoppingInArea("Pond");
  pathfinder.doAllCrafts();
  var itemlist = makeItemList(pathfinder);
  var expected_itemlist = [["Kitchen Knife",1],["Hat",1],["Gold",1]];
  expect(itemlist).toStrictEqual(expected_itemlist);

  pathfinder.collectAllShoppingInArea("Avenue");
  pathfinder.doAllCrafts();
  var itemlist = makeItemList(pathfinder);
  expected_itemlist = [["Kitchen Knife",1],["Hat",1],["Gold",1],["Hairband",1]];
  expect(itemlist).toStrictEqual(expected_itemlist);

  pathfinder.collectAllShoppingInArea("Cemetary");
  pathfinder.doAllCrafts();
  var itemlist = makeItemList(pathfinder);
  expected_itemlist = [["Kitchen Knife",1],["Imperial Burgonet",1]];
  expect(itemlist).toStrictEqual(expected_itemlist);
});

test('Test pathfinder reset.', () => {
  var pathfinder = new Pathfinder.Pathfinder("Dagger");
  pathfinder.setGoal(["Vibroblade","Optical Camouflage Suit"]);

  var area_scores = pathfinder.generateAreaScores(pathfinder.percentItemsInArea.bind(pathfinder),1);
  pathfinder.collectAllShoppingInArea("Pond");
  pathfinder.doAllCrafts();
  pathfinder.generateAreaScores(pathfinder.percentItemsInArea.bind(pathfinder),2);
  pathfinder.collectAllShoppingInArea("Avenue");
  pathfinder.doAllCrafts();

  var itemlist = makeItemList(pathfinder);
  expect(itemlist).toHaveLength(3);
  expect(pathfinder.generateAreaScores(pathfinder.percentItemsInArea.bind(pathfinder),1)).not.toStrictEqual(area_scores);

  pathfinder.reset();
  itemlist = makeItemList(pathfinder);
  expect(itemlist).toHaveLength(1); // <= starter weapon
  expect(pathfinder.generateAreaScores(pathfinder.percentItemsInArea.bind(pathfinder),1)).toStrictEqual(area_scores);
});
