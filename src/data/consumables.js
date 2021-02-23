import { ConsumableStats, ItemRecipe } from "./itemclass";

export var consumables = {};

// Foods
// Beverages
consumables["Honey"] = new ConsumableStats("Honey","Common",2,5,null,"Beverage",250,[["Alley",6],["Avenue",6],["Forest",6]]);
consumables["Water"] = new ConsumableStats("Water","Common",3,5,null,"Beverage",100,null,["Water Source"]);
consumables["Ice"] = new ConsumableStats("Ice","Common",2,5,null,"Beverage",200,[["Hotel",7],["Hospital",6],["Cemetary",6]]);
consumables["Carbonated Water"] = new ConsumableStats("Carbonated Water","Common",1,5,null,"Beverage",380,[["Beach",6],["Uptown",6],["Hotel",5]]);
consumables["Boiling Water"] = new ConsumableStats("Boiling Water","Uncommon",3,5,new ItemRecipe("Water","Lighter"),"Beverage",200,null,null,null,["Green"]);
consumables["Cola"] = new ConsumableStats("Cola","Uncommon",3,5,new ItemRecipe("Carbonated Water","Honey"),"Beverage",400,null,null,null,["Green"]);
