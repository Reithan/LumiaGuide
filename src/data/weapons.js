import { GearStats, ItemRecipe } from "./itemclass";

export var weapons = {};
// Gloves
weapons["Brass Knuckles"] = new GearStats("Brass Knuckles","Common",1,null,"Weapon","Glove",10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Cemetary",5],["Forest",5]]);
weapons["Cotton Gloves"] = new GearStats("Cotton Gloves","Common",1,null,"Weapon","Glove",7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Hotel",4],["Hospital",4]]);
weapons["Leather Gloves"] = new GearStats("Leather Gloves","Uncommon",1,new ItemRecipe("Cotton Gloves","Leather"),"Weapon","Glove",18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Iron Knuckles"] = new GearStats("Iron Knuckles","Uncommon",1,new ItemRecipe("Brass Knuckles","Iron Ore"),"Weapon","Glove",18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Gauntlet"] = new GearStats("Gauntlet","Rare",1,new ItemRecipe("Cotton Gloves","Steel"),"Weapon","Glove",28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.1,0,0,0,0);
weapons["Wing Knuckles"] = new GearStats("Wing Knuckles","Rare",1,new ItemRecipe("Iron Knuckles","Feather"),"Weapon","Glove",20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["Bone Gauntlet"] = new GearStats("Bone Gauntlet","Rare",1,new ItemRecipe("Gauntlet","Turtle Shell"),"Weapon","Glove",35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,-0.05,0,0,0,0);
weapons["Shatter Shell Gauntlet"] = new GearStats("Shatter Shell Gauntlet","Rare",1,new ItemRecipe("Gauntlet","Gunpowder"),"Weapon","Glove",32,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,-0.1,0,0,0,0);
weapons["Glass Knuckles"] = new GearStats("Glass Knuckles","Rare",1,new ItemRecipe("Iron Knuckles","Glass Pieces"),"Weapon","Glove",28,0,0,0.10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Phoenix Gloves"] = new GearStats("Phoenix Gloves","Rare",1,new ItemRecipe("Leather Gloves","Ash"),"Weapon","Glove",27,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["One Inch Punch"] = new GearStats("One Inch Punch","Epic",1,new ItemRecipe("Bone Gauntlet","Doll"),"Weapon","Glove",50,0,0,0,0,0.10,0,0,0,0,0,0,0,0,0,0.50,25,0,0,0,0,0,0,0,0);
weapons["Divine Fist"] = new GearStats("Divine Fist","Epic",1,new ItemRecipe("Shatter Shell Gauntlet","Cross"),"Weapon","Glove",53,0,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.05,0,0,0,0);
weapons["Bloodwing Knuckles"] = new GearStats("Bloodwing Knuckles","Epic",1,new ItemRecipe("Wing Knuckles","Ruby"),"Weapon","Glove",53,0,0,0,0,0,0,0,0,0,250,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["Frost Petal Hand"] = new GearStats("Frost Petal Hand","Epic",1,new ItemRecipe("Phoenix Gloves","Ice"),"Weapon","Glove",30,0,0,0,0,0,0,38,0,0.15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Buddha's Palm"] = new GearStats("Buddha's Palm","Epic",1,new ItemRecipe("Phoenix Gloves","Buddha Sarira"),"Weapon","Glove",37,0,0,0,0,0,0,0,0.18,0.18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Brasil Gauntlet"] = new GearStats("Brasil Gauntlet","Epic",1,new ItemRecipe("Bone Gauntlet","Oilcloth"),"Weapon","Glove",50,0.35,0,0,0,0,0,0,0,0,0,1.2,0,0,1.2,0,10,0,0,0,-0.05,0,0,0,0);
weapons["White Claw Punch"] = new GearStats("White Claw Punch","Epic",1,new ItemRecipe("Glass Knuckles","White Powder"),"Weapon","Glove",55,0,0,0.22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Imperial Silk Gloves"] = new GearStats("Imperial Silk Gloves","Epic",1,new ItemRecipe("Mithril String","Leather Gloves"),"Weapon","Glove",85,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
// Tonfas
weapons["Bamboo"] = new GearStats("Bamboo","Common",1,null,"Weapon","Tonfa",12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Pond",8],["Temple",6],["Archery Range",5],["Cemetary",7],["Forest",7]],null,[["Bat","Rarely"]]);
weapons["Wooden Tonfa"] = new GearStats("Wooden Tonfa","Uncommon",1,new ItemRecipe("Bamboo","Branch"),"Weapon","Tonfa",23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0);
weapons["Police Baton"] = new GearStats("Police Baton","Rare",1,new ItemRecipe("Wooden Tonfa","Stallion Medal"),"Weapon","Tonfa",31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0);
weapons["Ryukyu Tonfa"] = new GearStats("Ryukyu Tonfa","Rare",1,new ItemRecipe("Wooden Tonfa","White Powder"),"Weapon","Tonfa",38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,0,0,0);
weapons["Tactical Tonfa"] = new GearStats("Tactical Tonfa","Epic",1,new ItemRecipe("Police Baton","Blueprint"),"Weapon","Tonfa",74,0,0,0,0,0.25,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0);
weapons["Mai Sok"] = new GearStats("Mai Sok","Epic",1,new ItemRecipe("Ryukyu Tonfa","Short Rod"),"Weapon","Tonfa",63,0,0,0,0,0,0,0,0,0,0,1.0,0,0,0,0,20,0,0,0,0,0,0,0,0);
weapons["Plasma Tonfa"] = new GearStats("Plasma Tonfa","Epic",1,new ItemRecipe("Ryukyu Tonfa","Laser Pointer"),"Weapon","Tonfa",65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,2.5,0,0);
// Bats
weapons["Branch"] = new GearStats("Branch","Common",1,null,"Weapon","Bat",5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,["Woodpile"]);
weapons["Short Rod"] = new GearStats("Short Rod","Common",1,null,"Weapon","Bat",15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Dock",6],["Pond",5],["Temple",5]],null,[["Wild Dog","Rarely"]]);
weapons["Long Rod"] = new GearStats("Long Rod","Uncommon",1,new ItemRecipe("Short Rod","Bamboo"),"Weapon","Bat",22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Goblin Bat"] = new GearStats("Goblin Bat","Rare",1,new ItemRecipe("Long Rod","Nail"),"Weapon","Bat",27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.4,0);
weapons["Umbrella"] = new GearStats("Umbrella","Rare",1,new ItemRecipe("Long Rod","Fan"),"Weapon","Bat",30,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Torch"] = new GearStats("Torch","Rare",1,new ItemRecipe("Short Rod","Oilcloth"),"Weapon","Bat",36,0.1,0,0,0,0,0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Statue of Soteria"] = new GearStats("Statue of Soteria","Epic",1,new ItemRecipe("Torch","Doll"),"Weapon","Bat",82,0.15,0,0,0,0.12,0,0,0,0,0,0.6,0,0,0,0.6,0,0,0,0,0,0,0,0,0);
weapons["Mallet"] = new GearStats("Mallet","Epic",1,new ItemRecipe("Goblin Bat","Motor"),"Weapon","Bat",85,0.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.4,0);
weapons["Spy Umbrella"] = new GearStats("Spy Umbrella","Epic",1,new ItemRecipe("Umbrella","Ash"),"Weapon","Bat",65,0,0,0,0,0,0,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Monkey King Bar"] = new GearStats("Monkey King Bar","Legendary",1,new ItemRecipe("Force Core","Long Rod"),"Weapon","Bat",150,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
// Whips
weapons["Whip"] = new GearStats("Whip","Common",1,null,"Weapon","Whip",12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Chapel",3],["School",4]]);
weapons["Rope Cuffs"] = new GearStats("Rope Cuffs","Uncommon",1,new ItemRecipe("Whip","Stallion Medal"),"Weapon","Whip",24,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Bullwhip"] = new GearStats("Bullwhip","Uncommon",1,new ItemRecipe("Whip","Razor"),"Weapon","Whip",30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Wind Whip"] = new GearStats("Wind Whip","Rare",1,new ItemRecipe("Rope Cuffs","Fan"),"Weapon","Whip",24,0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Thunder Whip"] = new GearStats("Thunder Whip","Rare",1,new ItemRecipe("Bullwhip","Gold"),"Weapon","Whip",30,0,0,0,0,0,0,0,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Lightning Whip"] = new GearStats("Lightning Whip","Rare",1,new ItemRecipe("Bullwhip","Dead Battery"),"Weapon","Whip",42,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Gleipnir"] = new GearStats("Gleipnir","Epic",1,new ItemRecipe("Wind Whip","Spiked Plank"),"Weapon","Whip",58,0,0,0,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Plasma Whip"] = new GearStats("Plasma Whip","Epic",1,new ItemRecipe("Lightning Whip","Laser Pointer"),"Weapon","Whip",60,0.3,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2.3,0,0);
weapons["Bloody Nine Tails"] = new GearStats("Bloody Nine Tails","Legendary",1,new ItemRecipe("Wind Whip","VF Blood Sample"),"Weapon","Whip",65,0,0,0,0,0.25,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2.3,0,0);
// Thrown Weapons
weapons["Iron Ball"] = new GearStats("Iron Ball","Common",1,null,"Weapon","Throw",12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Archery Range",5],["Forest",7],["Factory",7]],null,[["Wild Boar","Rarely"]]);
weapons["Baseball"] = new GearStats("Baseball","Common",1,null,"Weapon","Throw",12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Grenade"] = new GearStats("Grenade","Uncommon",1,new ItemRecipe("Iron Ball","Gunpowder"),"Weapon","Throw",25,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Molotov Cocktail"] = new GearStats("Molotov Cocktail","Uncommon",1,new ItemRecipe("Glass Bottle","Oil"),"Weapon","Throw",22,0.15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Signed Ball"] = new GearStats("Signed Ball","Uncommon",1,new ItemRecipe("Baseball","Fountain Pen"),"Weapon","Throw",30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Sling"] = new GearStats("Sling","Rare",1,new ItemRecipe("Signed Ball","Rubber"),"Weapon","Throw",42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Flour Bomb"] = new GearStats("Flour Bomb","Rare",1,new ItemRecipe("White Powder","Molotov Cocktail"),"Weapon","Throw",58,0.15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Ball Lightning"] = new GearStats("Ball Lightning","Rare",1,new ItemRecipe("Iron Ball","Dead Battery"),"Weapon","Throw",24,0.20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Flubber"] = new GearStats("Flubber","Rare",1,new ItemRecipe("Rubber","Boiling Water"),"Weapon","Throw",42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Spiky Bouncy Ball"] = new GearStats("Spiky Bouncy Ball","Rare",1,new ItemRecipe("Flubber","Nail"),"Weapon","Throw",45,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.4);
weapons["Incendiary Bomb"] = new GearStats("Incendiary Bomb","Epic",1,new ItemRecipe("Molotov Cocktail","Ball Lightning"),"Weapon","Throw",70,0.5,0,0,0,0,0,0,0,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Grenade of Antioch"] = new GearStats("Grenade of Antioch","Epic",1,new ItemRecipe("High Explosive Grenade","Cross"),"Weapon","Throw",85,0,85,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["David's Sling"] = new GearStats("David's Sling","Epic",1,new ItemRecipe("Sling","Saint's Relic"),"Weapon","Throw",71,0,27,0,0,0,0,0,0,0,0,0,1.5,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Smoke Bomb"] = new GearStats("Smoke Bomb","Epic",1,new ItemRecipe("Flour Bomb","Cola"),"Weapon","Throw",90,0.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["High Explosive Grenade"] = new GearStats("High Explosive Grenade","Epic",1,new ItemRecipe("Grenade","RDX"),"Weapon","Throw",56,0,60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Ruthenium Marble"] = new GearStats("Ruthenium Marble","Epic",1,new ItemRecipe("Spiky Bouncy Ball","Gold"),"Weapon","Throw",80,0,0,0,0,0,0,0,0.28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.4);
// Shurikens
weapons["Razor"] = new GearStats("Razor","Common",1,null,"Weapon","Shuriken",11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Hospital",6],["Chapel",6],["School",6]],null,[["Bat","Rarely"]]);
weapons["Playing Cards"] = new GearStats("Playing Cards","Common",1,null,"Weapon","Shuriken",4,0,0,0.05,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Hotel",6],["Avenue",8]],null,[["Wild Boar","Rarely"]]);
weapons["Chalk"] = new GearStats("Chalk","Common",1,null,"Weapon","Shuriken",12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Factory",7],["Chapel",6],["School",6]],null,[["Bat","Rarely"]]);
weapons["Dart"] = new GearStats("Dart","Uncommon",1,new ItemRecipe("Needle","Feather"),"Weapon","Shuriken",16,0,0,0,0.15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["Vintage Cards"] = new GearStats("Vintage Cards","Uncommon",1,new ItemRecipe("Playing Cards","Fountain Pen"),"Weapon","Shuriken",15,0,0,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Throwing Stars"] = new GearStats("Throwing Stars","Uncommon",1,new ItemRecipe("Razor","Piano Wire"),"Weapon","Shuriken",27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Onyx Dagger"] = new GearStats("Onyx Dagger","Uncommon",1,new ItemRecipe("Razor","Cross"),"Weapon","Shuriken",17,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Charm"] = new GearStats("Charm","Rare",1,new ItemRecipe("Vintage Cards","Buddhist Scripture"),"Weapon","Shuriken",40,0,0,0,0,0,0,0,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Willow Leaf Spike"] = new GearStats("Willow Leaf Spike","Rare",1,new ItemRecipe("Onyx Dagger","Branch"),"Weapon","Shuriken",17,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Chakram"] = new GearStats("Chakram","Rare",1,new ItemRecipe("Throwing Stars","Stallion Medal"),"Weapon","Shuriken",38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Apricot Flower Tag"] = new GearStats("Apricot Flower Tag","Rare",1,new ItemRecipe("Willow Leaf Spike","Flower"),"Weapon","Shuriken",17,0,30,0,0,0,0,0,0,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Venom Dart"] = new GearStats("Venom Dart","Rare",1,new ItemRecipe("Needle","Poison"),"Weapon","Shuriken",55,0,0,0,0.2,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Dharma Chakram"] = new GearStats("Dharma Chakram","Rare",1,new ItemRecipe("Chakram","Buddhist Scripture"),"Weapon","Shuriken",38,0,0,0,0,0,0,0,0.15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Plumbata"] = new GearStats("Plumbata","Rare",1,new ItemRecipe("Dart","Steel"),"Weapon","Shuriken",48,0,0,0,0.15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.18,0,0,0,0);
weapons["Cards of Tyranny"] = new GearStats("Cards of Tyranny","Epic",1,new ItemRecipe("Vintage Cards","Ion Battery"),"Weapon","Shuriken",49,0.4,0,0.25,0.10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Mystic Jade Charm"] = new GearStats("Mystic Jade Charm","Epic",1,new ItemRecipe("Charm","Ash"),"Weapon","Shuriken",60,0,0,0,0,0,0,12,0.15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Fuhma Shuriken"] = new GearStats("Fuhma Shuriken","Epic",1,new ItemRecipe("Apricot Flower Tag","Alcohol"),"Weapon","Shuriken",55,0,36,0,0,0,0,0,0,0.15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Frost Venom Dart"] = new GearStats("Frost Venom Dart","Epic",1,new ItemRecipe("Venom Dart","Ice"),"Weapon","Shuriken",80,0,0,0,0.5,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Azure Dagger"] = new GearStats("Azure Dagger","Epic",1,new ItemRecipe("Onyx Dagger","Poison"),"Weapon","Shuriken",20,0,29,0,0,0,0,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Flechette"] = new GearStats("Flechette","Epic",1,new ItemRecipe("Plumbata","White Powder"),"Weapon","Shuriken",85,0,0,0,0.15,0,0.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0.25,0,0,0,0);
weapons["Wind and Fire Wheels"] = new GearStats("Wind and Fire Wheels","Epic",1,new ItemRecipe("Dharma Chakram","Bamboo"),"Weapon","Shuriken",55,0,0,0,0,0,0,0,0.23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Death Rune"] = new GearStats("Death Rune","Epic",1,new ItemRecipe("Charm","Tree of Life"),"Weapon","Shuriken",80,0,0,0,0,0,0,0,0.23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Sudarsana"] = new GearStats("Sudarsana","Legendary",1,new ItemRecipe("Force Core","Throwing Stars"),"Weapon","Shuriken",130,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Petal Torrent"] = new GearStats("Petal Torrent","Legendary",1,new ItemRecipe("Frost Venom Dart","Stingburst"),"Weapon","Shuriken",80,0,130,0,0.5,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
// Bows
weapons["Bow"] = new GearStats("Bow","Common",1,null,"Weapon","Bow",11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Archery Range",4],["Chapel",4]]);
weapons["Wooden Bow"] = new GearStats("Wooden Bow","Uncommon",1,new ItemRecipe("Branch","Piano Wire"),"Weapon","Bow",26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Longbow"] = new GearStats("Longbow","Uncommon",1,new ItemRecipe("Bow","Rubber"),"Weapon","Bow",25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Composite Bow"] = new GearStats("Composite Bow","Rare",1,new ItemRecipe("Longbow","Nail"),"Weapon","Bow",25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.4,0);
weapons["Strong Bow"] = new GearStats("Strong Bow","Rare",1,new ItemRecipe("Wooden Bow","Oil"),"Weapon","Bow",26,0.15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Stallion Bow"] = new GearStats("Stallion Bow","Rare",1,new ItemRecipe("Mighty Bow","Stallion Medal"),"Weapon","Bow",20,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Mighty Bow"] = new GearStats("Mighty Bow","Rare",1,new ItemRecipe("Longbow","Gunpowder"),"Weapon","Bow",25,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Pellet Bow"] = new GearStats("Pellet Bow","Rare",1,new ItemRecipe("Wooden Bow","Heated Stone"),"Weapon","Bow",55,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Scorchbow"] = new GearStats("Scorchbow","Rare",1,new ItemRecipe("Longbow","Lighter"),"Weapon","Bow",22,0,0,0,0,0,0,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Ancient Bolt"] = new GearStats("Ancient Bolt","Epic",1,new ItemRecipe("Stallion Bow","Bamboo"),"Weapon","Bow",55,0,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Golden-Ratio Bow"] = new GearStats("Golden-Ratio Bow","Epic",1,new ItemRecipe("Pellet Bow","Gold"),"Weapon","Bow",68,0,0,0,0,0,0,0,0.2,0.15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Twinbow"] = new GearStats("Twinbow","Epic",1,new ItemRecipe("Strong Bow","Composite Bow"),"Weapon","Bow",70,0.55,0,0,0,0,0,0,0.2,0.15,0,0,0,0,0,0,0,0,0,0,0,0,1,-0.4,0);
weapons["Elemental Bow"] = new GearStats("Elemental Bow","Epic",1,new ItemRecipe("Scorchbow","White Crane Fan"),"Weapon","Bow",60,0,0,0,0,0,0,38,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,-0.4,0);
weapons["Failnaught"] = new GearStats("Failnaught","Legendary",1,new ItemRecipe("VF Blood Sample","Strong Bow"),"Weapon","Bow",100,0.2,0,0,0,0.15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
// Crossbows
weapons["Short Crossbow"] = new GearStats("Short Crossbow","Common",1,null,"Weapon","Crossbow",12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Forest",4],["Factory",4]]);
weapons["Long Crossbow"] = new GearStats("Long Crossbow","Uncommon",1,new ItemRecipe("Short Crossbow","Piano Wire"),"Weapon","Crossbow",30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Crossbow"] = new GearStats("Crossbow","Uncommon",1,new ItemRecipe("Short Crossbow","Bamboo"),"Weapon","Crossbow",30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Power Crossbow"] = new GearStats("Power Crossbow","Rare",1,new ItemRecipe("Long Crossbow","Rubber"),"Weapon","Crossbow",42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Laser Crossbow"] = new GearStats("Laser Crossbow","Rare",1,new ItemRecipe("Crossbow","Laser Pointer"),"Weapon","Crossbow",30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2.5,0,0);
weapons["Heavy Crossbow"] = new GearStats("Heavy Crossbow","Rare",1,new ItemRecipe("Long Crossbow","Steel"),"Weapon","Crossbow",63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.1,0,0,0,0);
weapons["Steel Bow"] = new GearStats("Steel Bow","Rare",1,new ItemRecipe("Crossbow","Iron Sheet"),"Weapon","Crossbow",60,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["The Legend of The General"] = new GearStats("The Legend of The General","Epic",1,new ItemRecipe("Steel Bow","Oilcloth"),"Weapon","Crossbow",75,0.5,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Ballista"] = new GearStats("Ballista","Epic",1,new ItemRecipe("Heavy Crossbow","Short Spear"),"Weapon","Crossbow",115,-0.05,0,0,0,0,0,0,0.08,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Sniper Crossbow"] = new GearStats("Sniper Crossbow","Epic",1,new ItemRecipe("Laser Crossbow","Sniper Scope"),"Weapon","Crossbow",85,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3.5,0,0);
weapons["The Golden Ghost"] = new GearStats("The Golden Ghost","Epic",1,new ItemRecipe("Power Crossbow","RDX"),"Weapon","Crossbow",70,0,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Sharanga"] = new GearStats("Sharanga","Legendary",1,new ItemRecipe("Force Core","Crossbow"),"Weapon","Crossbow",140,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
// Pistols
weapons["Walther PPK"] = new GearStats("Walther PPK","Common",1,null,"Weapon","Pistol",14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Beach",4],["Hotel",5],["Factory",4]]);
weapons["Magnum-Python"] = new GearStats("Magnum-Python","Uncommon",1,new ItemRecipe("Walther PPK","Oil"),"Weapon","Pistol",15,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["Beretta M92F"] = new GearStats("Beretta M92F","Uncommon",1,new ItemRecipe("Walther PPK","Leather"),"Weapon","Pistol",23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["FN57"] = new GearStats("FN57","Rare",1,new ItemRecipe("Beretta M92F","Laser Pointer"),"Weapon","Pistol",29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,2.5,0,0);
weapons["Double Revolver SP"] = new GearStats("Double Revolver SP","Rare",1,new ItemRecipe("Magnum-Python","Beretta M92F"),"Weapon","Pistol",40,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["Magnum-Anaconda"] = new GearStats("Magnum-Anaconda","Rare",1,new ItemRecipe("Magnum-Python","Blueprint"),"Weapon","Pistol",43,0.1,0,0,0,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["Devil's Marksman"] = new GearStats("Devil's Marksman","Epic",1,new ItemRecipe("Double Revolver SP","Ash"),"Weapon","Pistol",35,0.1,0,0,0,0,0,42,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["Elegance"] = new GearStats("Elegance","Epic",1,new ItemRecipe("FN57","Feather Duster"),"Weapon","Pistol",90,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0,5,0,0);
weapons["Electron Blaster"] = new GearStats("Electron Blaster","Epic",1,new ItemRecipe("Beretta M92F","Ion Battery"),"Weapon","Pistol",61,0.5,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["Magnum-Boa"] = new GearStats("Magnum-Boa","Epic",1,new ItemRecipe("Magnum-Anaconda","Steel"),"Weapon","Pistol",95,0.25,0,0,0,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.15,0,3.5,0,0);
weapons["Kelte"] = new GearStats("Kelte","Legendary",1,new ItemRecipe("Force Core","Beretta M92F"),"Weapon","Pistol",120,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0,1,0,0);
// Assault Rifles
weapons["Fedorova"] = new GearStats("Fedorova","Common",1,null,"Weapon","Assault Rifle",11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Hotel",4],["Factory",4]]);
weapons["STG-44"] = new GearStats("STG-44","Uncommon",1,new ItemRecipe("Fedorova","Gunpowder"),"Weapon","Assault Rifle",18,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.5,0,0);
weapons["AK-47"] = new GearStats("AK-47","Rare",1,new ItemRecipe("STG-44","Piano Wire"),"Weapon","Assault Rifle",29,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.5,0,0);
weapons["M16A1"] = new GearStats("M16A1","Rare",1,new ItemRecipe("STG-44","Leather"),"Weapon","Assault Rifle",25,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.5,0,0);
weapons["Machine Gun"] = new GearStats("Machine Gun","Epic",1,new ItemRecipe("STG-44","Motor"),"Weapon","Assault Rifle",20,0.1,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.5,0,0);
weapons["Gatling Gun"] = new GearStats("Gatling Gun","Epic",1,new ItemRecipe("Machine Gun","Oil"),"Weapon","Assault Rifle",55,0.15,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2.5,0,0);
weapons["AK-12"] = new GearStats("AK-12","Epic",1,new ItemRecipe("AK-47","Glass Panel"),"Weapon","Assault Rifle",89,0,0,0.17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.5,0,0);
weapons["XCR"] = new GearStats("XCR","Epic",1,new ItemRecipe("M16A1","Magazine"),"Weapon","Assault Rifle",60,0,10,0,0,0,0,0,0,0,350,0,0,0,0,0,0,0,0,0,0,0,1.5,0,0);
// Sniper Rifles
weapons["Long Rifle"] = new GearStats("Long Rifle","Common",1,null,"Weapon","Sniper Rifle",34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Dock",3],["Forest",3]]);
weapons["Springfield"] = new GearStats("Springfield","Uncommon",1,new ItemRecipe("Long Rifle","Laser Pointer"),"Weapon","Sniper Rifle",50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.07,0,1.5,0,0);
weapons["Harpoon Gun"] = new GearStats("Harpoon Gun","Rare",1,new ItemRecipe("Springfield","Short Spear"),"Weapon","Sniper Rifle",64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.07,0,2,0,0);
weapons["Golden Rifle"] = new GearStats("Golden Rifle","Rare",1,new ItemRecipe("Springfield","Gold"),"Weapon","Sniper Rifle",56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.07,0,2.5,0,0);
weapons["Railgun"] = new GearStats("Railgun","Rare",1,new ItemRecipe("Springfield","Electronic Parts"),"Weapon","Sniper Rifle",78,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.03,0,2,0,0);
weapons["Tac-50"] = new GearStats("Tac-50","Epic",1,new ItemRecipe("Harpoon Gun","Blueprint"),"Weapon","Sniper Rifle",134,0,0,0,0,0.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2.5,0,0);
weapons["Intervention"] = new GearStats("Intervention","Epic",1,new ItemRecipe("Harpoon Gun","Telephoto Camera"),"Weapon","Sniper Rifle",120,0,0,0,0,0,1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0);
weapons["NTW-20"] = new GearStats("NTW-20","Epic",1,new ItemRecipe("Golden Rifle","Iron Sheet"),"Weapon","Sniper Rifle",92,0,0,0,0,0,0,0,0.24,0,0,0,0,0,0,0,0,0,0,0,-0.07,0,2.5,0,0);
weapons["Polaris"] = new GearStats("Polaris","Epic",1,new ItemRecipe("Railgun","White Powder"),"Weapon","Sniper Rifle",117,0.35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.03,0,2,0,0);
weapons["The Deadly Ray"] = new GearStats("The Deadly Ray","Legendary",1,new ItemRecipe("Moonstone","Golden Rifle"),"Weapon","Sniper Rifle",100,0,0,0,0,0,0,0,0.33,0,0,0,0,0,0,0,0,0,0,0,-0.07,0,2.5,0,0);
// Hammers
weapons["Hammer"] = new GearStats("Hammer","Common",1,null,"Weapon","Hammer",16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Pond",7],["Beach",7],["Alley",11]],null,[["Wild Boar","Rarely"]]);
weapons["Warhammer"] = new GearStats("Warhammer","Uncommon",1,new ItemRecipe("Hammer","Short Rod"),"Weapon","Hammer",40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Morning Star"] = new GearStats("Morning Star","Rare",1,new ItemRecipe("Warhammer","Iron Ball"),"Weapon","Hammer",55,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Black Stag Hammer"] = new GearStats("Black Stag Hammer","Rare",1,new ItemRecipe("Warhammer","Leather"),"Weapon","Hammer",56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Fang Mace"] = new GearStats("Fang Mace","Epic",1,new ItemRecipe("Morning Star","Heated Stone"),"Weapon","Hammer",55,0,0,0,0,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Hammer of Dagda"] = new GearStats("Hammer of Dagda","Epic",1,new ItemRecipe("Black Stag Hammer","Saint's Relic"),"Weapon","Hammer",95,0,20,0,0,0,0,0,0,0,0,0,1.5,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Hammer of Thor"] = new GearStats("Hammer of Thor","Epic",1,new ItemRecipe("Black Stag Hammer","Ion Battery"),"Weapon","Hammer",120,0.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Evening Star"] = new GearStats("Evening Star","Epic",1,new ItemRecipe("Moonstone","Morning Star"),"Weapon","Hammer",145,0.0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Magic Stick"] = new GearStats("Magic Stick","Epic",1,new ItemRecipe("Warhammer","Moonlight Pendant"),"Weapon","Hammer",60,0.0,0,0,0,0.3,0,0,0.27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
// Axes
weapons["Pickaxe"] = new GearStats("Pickaxe","Common",1,null,"Weapon","Axe",15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Pond",8],["Beach",7],["Cemetary",8],["Forest",8]],null,[["Bat","Rarely"]]);
weapons["Hatchet"] = new GearStats("Hatchet","Common",1,null,"Weapon","Axe",25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Pond",4],["Beach",5],["Factory",4]],null,[["Wild Dog","Rarely"]]);
weapons["Chain Scythe"] = new GearStats("Chain Scythe","Uncommon",1,new ItemRecipe("Pickaxe","Steel Chain"),"Weapon","Axe",50,0,0,0,0,0,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Battle Axe"] = new GearStats("Battle Axe","Uncommon",1,new ItemRecipe("Hatchet","Bamboo"),"Weapon","Axe",47,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Light Hatchet"] = new GearStats("Light Hatchet","Rare",1,new ItemRecipe("Battle Axe","Feather"),"Weapon","Axe",61,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["Reaper's Scythe"] = new GearStats("Reaper's Scythe","Rare",1,new ItemRecipe("Chain Scythe","Short Rod"),"Weapon","Axe",80,0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Gigantic Axe"] = new GearStats("Gigantic Axe","Rare",1,new ItemRecipe("Battle Axe","Steel"),"Weapon","Axe",110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.1,0,0,0,0);
weapons["Beam Axe"] = new GearStats("Beam Axe","Epic",1,new ItemRecipe("Gigantic Axe","Laser Pointer"),"Weapon","Axe",127,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0);
weapons["Santa Muerte"] = new GearStats("Santa Muerte","Epic",1,new ItemRecipe("Reaper's Scythe","Ruby"),"Weapon","Axe",100,0,0,0,0,0.15,0.5,0,0,0,410,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Scythe"] = new GearStats("Scythe","Epic",1,new ItemRecipe("Reaper's Scythe","Gold"),"Weapon","Axe",120,0,0,0,0,0,1,0,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Parashu"] = new GearStats("Parashu","Epic",1,new ItemRecipe("Light Hatchet","Buddha Sarira"),"Weapon","Axe",115,0,0,0,0,0,0,0,0,0.1,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["Harpe"] = new GearStats("Harpe","Epic",1,new ItemRecipe("Reaper's Scythe","White Crane Fan"),"Weapon","Axe",105,0,0,0,0,0,0.5,33,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,-0.4);
// Daggers
weapons["Scissors"] = new GearStats("Scissors","Common",1,null,"Weapon","Dagger",5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Alley",7],["Hospital",6],["School",7]],null,[["Bat","Rarely"]]);
weapons["Fountain Pen"] = new GearStats("Fountain Pen","Common",1,null,"Weapon","Dagger",5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Uptown",7],["Avenue",8],["School",7]],null,[["Wild Boar","Rarely"]]);
weapons["Kitchen Knife"] = new GearStats("Kitchen Knife","Common",1,null,"Weapon","Dagger",4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.05,0,0,0,0,[["Dock",6],["Hotel",5],["Temple",7]],null,[["Wild Boar","Rarely"]]);
weapons["Army Knife"] = new GearStats("Army Knife","Uncommon",1,new ItemRecipe("Kitchen Knife","Branch"),"Weapon","Dagger",14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.08,0,0,0,0);
weapons["Rose Knife"] = new GearStats("Rose Knife","Rare",1,new ItemRecipe("Rose Knife","Branch"),"Weapon","Dagger",20,0,0,0,0,0,0,0,0,0.1,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["Carnwennan"] = new GearStats("Carnwennan","Epic",1,new ItemRecipe("Rose Knife","Saint's Relic"),"Weapon","Dagger",44,0,29,0,0,0,0,0,0,0.12,0,1.2,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["Mount Slicer"] = new GearStats("Mount Slicer","Epic",1,new ItemRecipe("Rose Knife","Ash"),"Weapon","Dagger",35,0,0,0,0,0,0,30,0,0.12,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["Vibroblade"] = new GearStats("Vibroblade","Epic",1,new ItemRecipe("Army Knife","Motor"),"Weapon","Dagger",57,0.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0,0,0);
weapons["Fragarach"] = new GearStats("Fragarach","Legendary",1,new ItemRecipe("Army Knife","Force Core"),"Weapon","Dagger",90,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0,0,0,0);
// Two-Handed Swords
weapons["Rusty Sword"] = new GearStats("Rusty Sword","Common",1,null,"Weapon","Two-Handed Sword",11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Dock",6],["Archery Range",5],["Chapel",5]]);
weapons["Shamshir"] = new GearStats("Shamshir","Uncommon",1,new ItemRecipe("Rusty Sword","Lighter"),"Weapon","Two-Handed Sword",27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Katana"] = new GearStats("Katana","Rare",1,new ItemRecipe("Rusty Sword","Iron Sheet"),"Weapon","Two-Handed Sword",35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Masamune"] = new GearStats("Masamune","Rare",1,new ItemRecipe("Katana","Oil"),"Weapon","Two-Handed Sword",40,0.15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Muramasa"] = new GearStats("Muramasa","Rare",1,new ItemRecipe("Katana","Gemstone"),"Weapon","Two-Handed Sword",50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Bastard Sword"] = new GearStats("Bastard Sword","Rare",1,new ItemRecipe("Rusty Sword","Steel"),"Weapon","Two-Handed Sword",45,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Jewel Sword"] = new GearStats("Jewel Sword","Rare",1,new ItemRecipe("Shamshir","Ruby"),"Weapon","Two-Handed Sword",35,0,0,0,0,0,0,0,0,0,200,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Thuận Thiên"] = new GearStats("Thuận Thiên","Rare",1,new ItemRecipe("Bastard Sword","Turtle Shell"),"Weapon","Two-Handed Sword",77,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25,0,0,0,0,0,0,0,0);
weapons["Plasma Sword"] = new GearStats("Plasma Sword","Rare",1,new ItemRecipe("Bastard Sword","Laser Pointer"),"Weapon","Two-Handed Sword",75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0);
weapons["Arondight"] = new GearStats("Arondight","Epic",1,new ItemRecipe("Masamune","Cross"),"Weapon","Two-Handed Sword",50,0.25,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Excalibur"] = new GearStats("Excalibur","Epic",1,new ItemRecipe("Jewel Sword","Holy Grail"),"Weapon","Two-Handed Sword",60,0.1,0,0,0,0,0,0,0,0,360,0,2,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Monohoshizao"] = new GearStats("Monohoshizao","Epic",1,new ItemRecipe("Muramasa","Blueprint"),"Weapon","Two-Handed Sword",77,0,0,0,0,0.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Hovud"] = new GearStats("Hovud","Epic",1,new ItemRecipe("Jewel Sword","Glass Pieces"),"Weapon","Two-Handed Sword",50,0,0,0.25,0,0,0,0,0,0,300,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Laevateinn"] = new GearStats("Laevateinn","Legendary",1,new ItemRecipe("True Samadhi Fire","Shamshir"),"Weapon","Two-Handed Sword",78,0,20,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0);
weapons["Dáinsleif"] = new GearStats("Dáinsleif","Legendary",1,new ItemRecipe("VF Blood Sample","Katana"),"Weapon","Two-Handed Sword",80,0,0,0,0,0.25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.4,0);
// Dual Swords
// Spears
// Nunchaku
// Rapiers
// Guitars
