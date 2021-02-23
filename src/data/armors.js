import { GearStats, ItemRecipe } from "./itemclass";

export var armors = {};
// Heads
// Chests
armors["Monk's Robe"] = new GearStats("Monk's Robe","Common",null,"Chest",null,0,0,0,0,0,0,0,0,0,0.05,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,[["Temple",9],["Archery Range",6]],null,[["Wild Boar","Rarely"]]);
armors["Patched Robe"] = new GearStats("Patched Robe","Uncommon",new ItemRecipe("Monk's Robe","Bandage"),"Chest",null,0,0,0,0,0,0,0,0,0,0.07,0,1,0,0,0,0,5,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["Hanbok"] = new GearStats("Hanbok","Rare",new ItemRecipe("Patched Robe","Flower"),"Chest",null,0,0,0,0,0,0,0,0,0,0.08,0,1,0,0,0,0,12,0,0,0,0,0,0,0,0,null,null,null,["Blue"]);
armors["Covert Agent Uniform"] = new GearStats("Covert Agent Uniform","Rare",new ItemRecipe("Hanbok","Stallion Medal"),"Chest",null,0,0,0,0,0,0,0,0,0,0.15,0,2.5,0,0,0,0,23,0,0,0,0,0,1,0,0,null,null,null,["Blue"]);
// Arms
armors["Bandage"] = new GearStats("Bandage","Common",null,"Arm",null,0,0,0,0,0,0,0,0,0,0,0,0.8,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Dock",7],["Hospital",6],["Factory",7],["School",7]],null,[["Bat","Rarely"]]);
// Legs
// Accessories
armors["Feather"] = new GearStats("Feather","Common",null,"Accessory",null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.06,0,0,0,0,[["Hospital",6],["Cemetary",8],["Forest",8]],null,[["Wild Boar","Rarely"]]);
armors["Flower"] = new GearStats("Flower","Common",null,"Accessory",null,0,0,0,0,0,0,0,0,0,0.07,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Pond",7],["Uptown",7],["Cemetary",7],["Forest",8]],null,[["Wild Boar","Rarely"]]);
armors["Ribbon"] = new GearStats("Ribbon","Common",null,"Accessory",null,0,0,0,0,0,0.005,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Pond",6],["Uptown",7],["School",7]],null,[["Wild Dog","Rarely"]]);
armors["Fan"] = new GearStats("Fan","Common",null,"Accessory",null,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Avenue",8],["Forest",8],["Chapel",6]],null,[["Wild Dog","Rarely"]]);
armors["Buddhist Scripture"] = new GearStats("Buddhist Scripture","Common",null,"Accessory",null,0,0,0,0,0,0,0,0,0.07,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Temple",8]],null,[["Bat","Rarely"],["Wild Dog","Rarely"]]);
armors["Box"] = new GearStats("Box","Common",null,"Accessory",null,0,0,0,0,0,0,0,0,0,0,90,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Dock",7],["Pond",7],["Chapel",6]],null,[["Bat","Rarely"]]);
armors["Holy Grail"] = new GearStats("Holy Grail","Common",null,"Accessory",null,0,0,0,0,0,0,0,0,0,0,0,0,1.2,0,0,0,0,0,0,0,0,0,0,0,0,[["Chapel",9]],null,[["Bat","Rarely"],["Wild Boar","Rarely"]]);
armors["Cross"] = new GearStats("Cross","Common",null,"Accessory",null,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Alley",7],["Chapel",9]],null,[["Wild Dog","Rarely"]]);
armors["Binoculars"] = new GearStats("Binoculars","Common",null,"Accessory",null,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.5,0,0,[["Beach",6],["Alley",6],["Hotel",6],["Factory",7]],null,[["Bat","Rarely"],["Wild Dog","Rarely"]]);
armors["Saint's Relic"] = new GearStats("Saint's Relic","Uncommon",new ItemRecipe("Cross","Holy Grail"),"Accessory",null,0,0,8,0,0,0,0,0,0,0,0,0,1.5,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["Flower of Fate"] = new GearStats("Flower of Fate","Uncommon",new ItemRecipe("Flower","Playing Cards"),"Accessory",null,0,0,0,0.15,0,0,0,0,0,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["Glass Pieces"] = new GearStats("Glass Pieces","Uncommon",new ItemRecipe("Glass Bottle","Stone"),"Accessory",null,0,0,0,0.13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["Doll"] = new GearStats("Doll","Uncommon",new ItemRecipe("Ribbon","Cloth"),"Accessory",null,0,0,0,0,0,0.12,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["Sniper Scope"] = new GearStats("Sniper Scope","Uncommon",new ItemRecipe("Laser Pointer","Binoculars"),"Accessory",null,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4.5,0,0,null,null,null,["Green"]);
armors["Buddha Sarira"] = new GearStats("Buddha Sarira","Uncommon",new ItemRecipe("Buddhist Scripture","Monk's Robe"),"Accessory",null,0,0,0,0,0,0,0,0,0.08,0.08,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["Feather Duster"] = new GearStats("Feather Duster","Uncommon",new ItemRecipe("Short Rod","Feather"),"Accessory",null,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0,null,null,[["Wolf","Rarely"]],["Green"]);
armors["Gilded Quill Fan"] = new GearStats("Gilded Quill Fan","Uncommon",new ItemRecipe("Fan","Nail"),"Accessory",null,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.4,null,null,null,["Green"]);
armors["White Crane Fan"] = new GearStats("White Crane Fan","Rare",new ItemRecipe("Gilded Quill Fan","Feather"),"Accessory",null,0,0,0,0,0,0,0,16,0,0.08,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,-0.4);
armors["Powder of Life"] = new GearStats("Powder of Life","Rare",new ItemRecipe("Tree of Life","Stone"),"Accessory",null,0,0,0,0,0,0,0,0,0,0,0,1.5,0,0,1.5,0,0,0,0,0,0,0,0,0,0,null,null,[["Bear","Rarely"],["Wickeline","Rarely"]]);
armors["Magazine"] = new GearStats("Magazine","Rare",new ItemRecipe("Box","Iron Sheet"),"Accessory",null,0,0,0,0,0,0,0,0,0,0,0,350,0,0,0,0,0,6,0,0,0,0,0,0,0);
armors["Moonlight Pendant"] = new GearStats("Moonlight Pendant","Rare",new ItemRecipe("Ribbon","Moonstone"),"Accessory",null,20,0,0,0,0,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
armors["True Samadhi Fire"] = new GearStats("True Samadhi Fire","Epic",new ItemRecipe("Powder of Life","Lighter"),"Accessory",null,0,0,13,0,0,0,0,0,0,0,0,1.5,0,0,1.5,0,0,0,0,0,0,0,0,0,0);
