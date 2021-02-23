import { SummonStats, ItemRecipe } from "./itemclass";

export var summons = {};

summons["Surveillance Camera"] = new SummonStats("Surveillance Camera","Common",1,5,null,"Vision",null,null,[["Dock",6],["Beach",6],["Uptown",6],["Avenue",6],["Hospital",6],["Archery Range",5],["Cemetary",6],["School",6]],null,[["Bat","Rarely"],["Wild Boar","Rarely"],["Wild Dog","Rarely"]]);
summons["Mousetrap"] = new SummonStats("Mousetrap","Common",2,5,null,null,null,50,[["Pond",5],["Beach",5],["Cemetary",6]],null,[["Wild Boar","Rarely"]]);
summons["Piano Wire"] = new SummonStats("Piano Wire","Common",1,5,null,null,null,130,[["Beach",7],["Uptown",8],["Hotel",7],["Chapel",7]],null,[["Wild Boar","Rarely"]]);
summons["Spiked Plank"] = new SummonStats("Spiked Plank","Uncommon",2,5,new ItemRecipe("Mousetrap","Nail"),null,null,120,null,null,null,["Green"]);
summons["Dynamite"] = new SummonStats("Dynamite","Uncommon",1,5,new ItemRecipe("Piano Wire","Gunpowder"),null,null,220,null,null,null,["Green"]);
summons["Telephoto Camera"] = new SummonStats("Telephoto Camera","Uncommon",3,5,new ItemRecipe("Surveillance Camera","Binoculars"),"Vision",null,null,null,null,[["Wickeline","Rarely"]],["Green"]);
summons["RDX"] = new SummonStats("RDX","Rare",1,5,new ItemRecipe("Dynamite","Scrap Metal"),null,null,250,null,null,null,["Blue"]);
summons["Mithril String"] = new SummonStats("Mithril String","Rare",3,5,new ItemRecipe("Mithril","Piano Wire"),null,null,300,null,null,null,["Blue"]);
summons["Stingburst"] = new SummonStats("Stingburst","Epic",1,5,new ItemRecipe("RDX","Spiked Plank"),null,null,350,null,null,null,["Purple"]);
