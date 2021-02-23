import { GearStats, ItemRecipe } from "./itemclass";

export var armors = {};
// Heads
armors["Hairband"] = new GearStats("Hairband","Common",null,"Head",null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0.02,0,0,0,0,0,[["Avenue",8],["Temple",7],["Cemetary",7]],null,[["Bat","Rarely"]]);
armors["Hat"] = new GearStats("Hat","Common",null,"Head",null,0,0,0,0,0,0,0,0,0,0.05,0,0,0,0,0,0,4,0,0,0,0.02,0,0,0,0,0,[["Pond",7],["Archery Range",5],["School",7]],null,[["Bat","Rarely"]]);
armors["Bike Helmet"] = new GearStats("Bike Helmet","Common",null,"Head",null,0,0,0,0,0,0,0,0,0,0,90,0,0,0,0,0,0,0,0,0,0.02,0,0,0,0,0,[["Beach",6],["Chapel",6],["School",7]],null,[["Wild Boar","Rarely"]]);
armors["Mask"] = new GearStats("Mask","Uncommon",new ItemRecipe("Hairband","Feather"),"Head",null,0,0,0,0,0,0,0,0,0,0,0,0,0,130,0,0,10,0,0,0,0.04,0.08,0,0,0,0,null,null,null,["Green"]);
armors["Circlet"] = new GearStats("Circlet","Uncommon",new ItemRecipe("Hairband","Branch"),"Head",null,0,0,0,0,0,0,0,0,0,0,0,0,0,270,0,0,14,0,0,0,0.04,0,0,0,0,0,null,null,null,["Green"]);
armors["Beret"] = new GearStats("Beret","Uncommon",new ItemRecipe("Hat","Scissors"),"Head",null,0,0,0,0,0,0,0,0,0,0.07,60,0,0,0,0,0,10,0,0,0,0.04,0,0,0,0,0,null,null,null,["Green"]);
armors["Chain Coif"] = new GearStats("Chain Coif","Uncommon",new ItemRecipe("Hat","Steel Chain"),"Head",null,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0,0,0,14,0,0,0,0.04,0,0,0,0,0,null,null,null,["Green"]);
armors["Safety Helmet"] = new GearStats("Safety Helmet","Uncommon",new ItemRecipe("Bike Helmet","Stone"),"Head",null,0,0,0,0,0,0,0,0,0,0,200,0,0,0,0,0,0,0,0,0,0.04,0,0,0,0,0,null,null,null,["Green"]);
armors["Ballistic Helmet"] = new GearStats("Ballistic Helmet","Rare",new ItemRecipe("Beret","Bike Helmet"),"Head",null,0,0,0,0,0,0,0,0,0,0.08,90,0,0,0,0,0,15,0,0,0,0.07,0,0,0,0,0,null,null,null,["Blue"]);
armors["Fire Helmet"] = new GearStats("Fire Helmet","Rare",new ItemRecipe("Safety Helmet","Water"),"Head",null,0,0,0,0,0,0,0,0,0,0,250,0,0,0,0,0,0,0,0,0,0.07,0,0,0,0,0,null,null,null,["Blue"]);
armors["Tiara"] = new GearStats("Tiara","Rare",new ItemRecipe("Circlet","Stallion Medal"),"Head",null,0,0,0,0,0,0,0,0,0,0,0,0,0,400,0,0,16,0,0,0,0.07,0,0,0,0,0,null,null,null,["Blue"]);
armors["Crown"] = new GearStats("Crown","Rare",new ItemRecipe("Circlet","Gold"),"Head",null,0,0,0,0,0,0,0,0,0.08,0,0,0,0,360,0,0,16,0,0,0,0.07,0,0,0,0,0,null,null,null,["Blue"]);
armors["Close Helm"] = new GearStats("Close Helm","Rare",new ItemRecipe("Chain Coif","Mask"),"Head",null,0,0,0,0,0,0,0,0,0,0.1,0,0,0,130,0,0,20,0,0,0,0.07,0.1,0,0,0,0,null,null,null,["Blue"]);
armors["Motorcycle Helmet"] = new GearStats("Motorcycle Helmet","Rare",new ItemRecipe("Fire Helmet","Binoculars"),"Head",null,10,0,0,0,0,0,0,0,0,0,300,0,0,0,0,0,0,0,0,0,0.07,0,0,1,0,0,null,null,null,["Blue"]);
armors["Mithril Helm"] = new GearStats("Mithril Helm","Epic",new ItemRecipe("Mithril","Chain Coif"),"Head",null,0,0.12,0,0,0,0,0,0,0,0.15,0,0,0,0,0,0,38,0,0,0,0.1,0.2,0,0,0,0,null,null,null,["Purple"]);
armors["Crystal Tiara"] = new GearStats("Crystal Tiara","Epic",new ItemRecipe("Tiara","Glass Pieces"),"Head",null,0,0,0,0.2,0,0,0,0,0,0,0,0,0,600,0,0,21,0,0,0,0.1,0,0,0,0,0,null,null,null,["Purple"]);
armors["Tactical OPS Helmet"] = new GearStats("Tactical OPS Helmet","Epic",new ItemRecipe("Ballistic Helmet","Electronic Parts"),"Head",null,0,0.23,0,0,0,0,0,0,0,0.15,120,0,0,0,0,0,15,0,0,0,0.1,0,0,0,0,0,null,null,null,["Purple"]);
armors["Helm of Banneret"] = new GearStats("Helm of Banneret","Epic",new ItemRecipe("Close Helm","Rubber"),"Head",null,0,0,0,0,0,0,0,0,0,0.1,0,0,0,200,0,0,28,0,0,0.11,0.1,0.1,0,0,0,0,null,null,null,["Purple"]);
armors["Imperial Crown"] = new GearStats("Imperial Crown","Epic",new ItemRecipe("Crown","Ruby"),"Head",null,0,0,0,0,0,0,0,0,0.08,0,300,0,0,500,0,0,18,0,0,0,0.1,0,0,0,0,0,null,null,null,["Purple"]);
armors["Imperial Burgonet"] = new GearStats("Imperial Burgonet","Epic",new ItemRecipe("Close Helm","Gold"),"Head",null,0,0,0,0,0,0,0,0,0.18,0.1,0,0,0,200,0,0,10,0,0,0,0.1,0.1,0,0,0,0,null,null,null,["Purple"]);
armors["Chinese Opera Mask"] = new GearStats("Chinese Opera Mask","Epic",new ItemRecipe("Mask","VF Blood Sample"),"Head",null,0,0,0,0,0,0.22,0,0,0,0,0,0,0,300,0,0,16,0,0,0,0.1,0.2,0.3,0,0,0,null,null,null,["Purple"]);
armors["Laurel Wreath"] = new GearStats("Laurel Wreath","Legendary",new ItemRecipe("True Samadhi Fire","Circlet"),"Head",null,0,0,15,0,0,0,0,0,0,0,0,1.5,0,580,2,0,18,0,0,0,0.12,0,0,0,0,0,null,null,null,["Yellow"]);
// Chests
armors["Monk's Robe"] = new GearStats("Monk's Robe","Common",null,"Chest",null,0,0,0,0,0,0,0,0,0,0.05,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,[["Temple",9],["Archery Range",6]],null,[["Wild Boar","Rarely"]]);
armors["Patched Robe"] = new GearStats("Patched Robe","Uncommon",new ItemRecipe("Monk's Robe","Bandage"),"Chest",null,0,0,0,0,0,0,0,0,0,0.07,0,1,0,0,0,0,5,0,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["Hanbok"] = new GearStats("Hanbok","Rare",new ItemRecipe("Patched Robe","Flower"),"Chest",null,0,0,0,0,0,0,0,0,0,0.08,0,1,0,0,0,0,12,0,0,0,0,0,0,0,0,0,null,null,null,["Blue"]);
armors["Covert Agent Uniform"] = new GearStats("Covert Agent Uniform","Rare",new ItemRecipe("Hanbok","Stallion Medal"),"Chest",null,0,0,0,0,0,0,0,0,0,0.15,0,2.5,0,0,0,0,23,0,0,0,0,0,0,1,0,0,null,null,null,["Blue"]);
// Arms
armors["Bandage"] = new GearStats("Bandage","Common",null,"Arm",null,0,0,0,0,0,0,0,0,0,0,0,0.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Dock",7],["Hospital",6],["Factory",7],["School",7]],null,[["Bat","Rarely"]]);
// Legs
// Accessories
armors["Feather"] = new GearStats("Feather","Common",null,"Accessory",null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.06,0,0,0,0,[["Hospital",6],["Cemetary",8],["Forest",8]],null,[["Wild Boar","Rarely"]]);
armors["Flower"] = new GearStats("Flower","Common",null,"Accessory",null,0,0,0,0,0,0,0,0,0,0.07,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Pond",7],["Uptown",7],["Cemetary",7],["Forest",8]],null,[["Wild Boar","Rarely"]]);
armors["Ribbon"] = new GearStats("Ribbon","Common",null,"Accessory",null,0,0,0,0,0,0.005,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Pond",6],["Uptown",7],["School",7]],null,[["Wild Dog","Rarely"]]);
armors["Fan"] = new GearStats("Fan","Common",null,"Accessory",null,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Avenue",8],["Forest",8],["Chapel",6]],null,[["Wild Dog","Rarely"]]);
armors["Buddhist Scripture"] = new GearStats("Buddhist Scripture","Common",null,"Accessory",null,0,0,0,0,0,0,0,0,0.07,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Temple",8]],null,[["Bat","Rarely"],["Wild Dog","Rarely"]]);
armors["Box"] = new GearStats("Box","Common",null,"Accessory",null,0,0,0,0,0,0,0,0,0,0,90,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Dock",7],["Pond",7],["Chapel",6]],null,[["Bat","Rarely"]]);
armors["Holy Grail"] = new GearStats("Holy Grail","Common",null,"Accessory",null,0,0,0,0,0,0,0,0,0,0,0,0,1.2,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Chapel",9]],null,[["Bat","Rarely"],["Wild Boar","Rarely"]]);
armors["Cross"] = new GearStats("Cross","Common",null,"Accessory",null,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Alley",7],["Chapel",9]],null,[["Wild Dog","Rarely"]]);
armors["Binoculars"] = new GearStats("Binoculars","Common",null,"Accessory",null,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.5,0,0,[["Beach",6],["Alley",6],["Hotel",6],["Factory",7]],null,[["Bat","Rarely"],["Wild Dog","Rarely"]]);
armors["Saint's Relic"] = new GearStats("Saint's Relic","Uncommon",new ItemRecipe("Cross","Holy Grail"),"Accessory",null,0,0,8,0,0,0,0,0,0,0,0,0,1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["Flower of Fate"] = new GearStats("Flower of Fate","Uncommon",new ItemRecipe("Flower","Playing Cards"),"Accessory",null,0,0,0,0.15,0,0,0,0,0,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["Glass Pieces"] = new GearStats("Glass Pieces","Uncommon",new ItemRecipe("Glass Bottle","Stone"),"Accessory",null,0,0,0,0.13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["Doll"] = new GearStats("Doll","Uncommon",new ItemRecipe("Ribbon","Cloth"),"Accessory",null,0,0,0,0,0,0.12,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["Sniper Scope"] = new GearStats("Sniper Scope","Uncommon",new ItemRecipe("Laser Pointer","Binoculars"),"Accessory",null,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4.5,0,0,null,null,null,["Green"]);
armors["Buddha Sarira"] = new GearStats("Buddha Sarira","Uncommon",new ItemRecipe("Buddhist Scripture","Monk's Robe"),"Accessory",null,0,0,0,0,0,0,0,0,0.08,0.08,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["Quiver"] = new GearStats("Quiver","Uncommon",new ItemRecipe("Leather","Bamboo"),"Accessory",null,0,0.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["Feather Duster"] = new GearStats("Feather Duster","Uncommon",new ItemRecipe("Short Rod","Feather"),"Accessory",null,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0,null,null,[["Wolf","Rarely"]],["Green"]);
armors["Gilded Quill Fan"] = new GearStats("Gilded Quill Fan","Uncommon",new ItemRecipe("Fan","Nail"),"Accessory",null,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.4,null,null,null,["Green"]);
armors["Shaman's Bronze"] = new GearStats("Shaman's Bronze","Uncommon",new ItemRecipe("Rusty Sword","Stallion Medal"),"Accessory",null,5,0,0,0,0,0,0,0,0.08,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["Decorative Flintlock"] = new GearStats("Decorative Flintlock","Uncommon",new ItemRecipe("Walther PPK","Ribbon"),"Accessory",null,10,0,0,0,0,0.08,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Green"]);
armors["White Crane Fan"] = new GearStats("White Crane Fan","Rare",new ItemRecipe("Gilded Quill Fan","Feather"),"Accessory",null,0,0,0,0,0,0,0,16,0,0.08,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,-0.4);
armors["Powder of Life"] = new GearStats("Powder of Life","Rare",new ItemRecipe("Tree of Life","Stone"),"Accessory",null,0,0,0,0,0,0,0,0,0,0,0,1.5,0,0,1.5,0,0,0,0,0,0,0,0,0,0,0,null,null,[["Bear","Rarely"],["Wickeline","Rarely"]]);
armors["Uchiwa"] = new GearStats("Uchiwa","Rare",new ItemRecipe("Doll","Fan"),"Accessory",null,0,0,0,0,0,0.15,0,0,21,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0);
armors["Magazine"] = new GearStats("Magazine","Rare",new ItemRecipe("Box","Iron Sheet"),"Accessory",null,0,0,0,0,0,0,0,0,0,0,0,350,0,0,0,0,0,6,0,0,0,0,0,0,0,0);
armors["Laced Quiver"] = new GearStats("Laced Quiver","Rare",new ItemRecipe("Quiver","Feather Duster"),"Accessory",null,13,0.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0,null,null,null,["Blue"]);
armors["Revenge of Goujian"] = new GearStats("Revenge of Goujian","Rare",new ItemRecipe("Shaman's Bronze","Blueprint"),"Accessory",null,15,0,0,0,0,0,0,0,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Blue"]);
armors["Buccaneer Dubloon"] = new GearStats("Buccaneer Dubloon","Rare",new ItemRecipe("Decorative Flintlock","Kitchen Knife"),"Accessory",null,15,0,0,0.08,0,0.08,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Blue"]);
armors["Moonlight Pendant"] = new GearStats("Moonlight Pendant","Rare",new ItemRecipe("Ribbon","Moonstone"),"Accessory",null,20,0,0,0,0,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
armors["Shrödinger's Box"] = new GearStats("Shrödinger's Box","Rare",new ItemRecipe("Box","Poison"),"Accessory",null,0,0,0,0,0,0,0,7,0,0,380,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Blue"]);
armors["Veritas Lux Mea"] = new GearStats("Veritas Lux Mea","Rare",new ItemRecipe("Buddha Sarira","Saint's Relic"),"Accessory",null,0,0,12,0,0,0,0,0,0.08,0.1,0,0,1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Blue"]);
armors["Glacial Ice"] = new GearStats("Glacial Ice","Epic",new ItemRecipe("Powder of Life","Ice"),"Accessory",null,0,0,0,0,0,0,0,18,0,0,0,1.5,0,0,1.5,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Purple"]);
armors["True Samadhi Fire"] = new GearStats("True Samadhi Fire","Epic",new ItemRecipe("Powder of Life","Lighter"),"Accessory",null,0,0,13,0,0,0,0,0,0,0,0,1.5,0,0,1.5,0,0,0,0,0,0,0,0,0,0,0,null,null,null,["Purple"]);
armors["Emerald Tablet"] = new GearStats("Emerald Tablet","Legendary",new ItemRecipe("Force Core","Flower of Fate"),"Accessory",null,10,0,0,0.15,0,0,0,0,0,0.1,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,null,null,null,["Yellow"]);
