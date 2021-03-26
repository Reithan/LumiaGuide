import { SummonStats, ItemRecipe } from "./itemclass";

export var summons = {};

summons["Surveillance Camera"] = new SummonStats("Surveillance Camera","Common",1,5,null,"Vision",null,null,[["Dock",6],["Beach",6],["Uptown",6],["Avenue",6],["Hospital",6],["Archery Range",5],["Cemetary",6],["School",6]],null,[["Bat","Rarely"],["Wild Boar","Rarely"],["Wild Dog","Rarely"]]);
summons["Snare"] = new SummonStats("Snare","Common",2,5,null,"Root",0.5,10,[["Dock",3],["Pond",6],["Beach",3],["Archery Range",4],["Forest",5],["Chapel",4]],null,[["Wild Boar","Rarely"]]);
summons["Mousetrap"] = new SummonStats("Mousetrap","Common",2,5,null,null,null,50,[["Pond",5],["Beach",5],["Cemetary",6]],null,[["Wild Boar","Rarely"]]);
summons["Piano Wire"] = new SummonStats("Piano Wire","Common",1,5,null,null,null,130,[["Beach",7],["Uptown",8],["Hotel",7],["Chapel",7]],null,[["Wild Boar","Rarely"]]);
summons["Spiked Plank"] = new SummonStats("Spiked Plank","Uncommon",2,5,new ItemRecipe("Mousetrap","Nail"),null,null,120,null,null,null,["Green"]);
summons["Enhanced Mousetrap"] = new SummonStats("Enhanced Mousetrap","Uncommon",2,5,new ItemRecipe("Mousetrap","Iron Ore"),null,null,140,null,null,null,["Green"]);
summons["Dynamite"] = new SummonStats("Dynamite","Uncommon",1,5,new ItemRecipe("Piano Wire","Gunpowder"),null,null,220,null,null,null,["Green"]);
summons["Bamboo Trap"] = new SummonStats("Bamboo Trap","Uncommon",2,5,new ItemRecipe("Snare","Bamboo"),"Root",1,30,null,null,null,["Green"]);
summons["Booby Trap"] = new SummonStats("Booby Trap","Uncommon",2,5,new ItemRecipe("Snare","Glue"),"Root",0.5,30,null,null,null,["Green"]);
summons["Clang Clatter"] = new SummonStats("Clang Clatter","Uncommon",5,5,new ItemRecipe("Can","Iron Ball"),null,null,40,null,null,null,["Green"]);
summons["Telephoto Camera"] = new SummonStats("Telephoto Camera","Uncommon",3,6,new ItemRecipe("Surveillance Camera","Binoculars"),"Vision",null,null,null,null,[["Wickeline","Rarely"]],["Green"]);
summons["Jungle Guillotine"] = new SummonStats("Jungle Guillotine","Uncommon",1,5,new ItemRecipe("Mousetrap","Rusty Sword"),"Root",0.5,100,null,null,null,["Green"]);
summons["Explosive Trap"] = new SummonStats("Explosive Trap","Uncommon",1,5,new ItemRecipe("Mousetrap","Gunpowder"),"Delay",1.5,160,null,null,null,["Green"]);
summons["Mine"] = new SummonStats("Mine","Rare",2,5,new ItemRecipe("Booby Trap","Gunpowder"),"Stun",1,80,null,null,null,["Blue"]);
summons["Pendulum Axe"] = new SummonStats("Pendulum Axe","Rare",2,5,new ItemRecipe("Bamboo Trap","Hatchet"),"Root",1,100,null,null,null,["Blue"]);
summons["RDX"] = new SummonStats("RDX","Rare",1,5,new ItemRecipe("Dynamite","Scrap Metal"),null,null,250,null,null,null,["Blue"]);
summons["Mithril String"] = new SummonStats("Mithril String","Rare",3,5,new ItemRecipe("Mithril","Piano Wire"),null,null,300,null,null,null,["Blue"]);
summons["Fire Trap"] = new SummonStats("Fire Trap","Rare",3,5,new ItemRecipe("Explosive Trap","Oilcloth"),"Delay",1.5,280,null,null,null,["Blue"]);
summons["Hidden Maiden"] = new SummonStats("Hidden Maiden","Rare",2,5,new ItemRecipe("Spiked Plank","Jungle Guillotine"),"Slow",2,300,null,null,null,["Blue"]);
summons["Stingburst"] = new SummonStats("Stingburst","Epic",1,5,new ItemRecipe("RDX","Spiked Plank"),null,null,350,null,null,null,["Purple"]);
summons["C-4"] = new SummonStats("C-4","Epic",3,5,new ItemRecipe("RDX","White Powder"),"Delay",1.5,340,null,null,null,["Purple"]);
summons["Double Guillotine"] = new SummonStats("Double Guillotine","Epic",2,5,new ItemRecipe("Jungle Guillotine","Pendulum Axe"),"Root",1,300,null,null,null,["Purple"]);
summons["Claymore"] = new SummonStats("Claymore","Epic",2,5,new ItemRecipe("Mine","Explosive Trap"),"Stun",1,260,null,null,null,["Purple"]);
summons["Remote Mine"] = new SummonStats("Remote Mine","Legendary",3,5,new ItemRecipe("Force Core","Spiked Plank"),"Delay",1.5,450,null,null,null,["Yellow"]);
summons["Smart Bomb"] = new SummonStats("Smart Bomb","Legendary",3,5,new ItemRecipe("RDX","Cell Phone"),"Delay",0.7,370,null,null,null,["Yellow"]);
