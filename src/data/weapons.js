import { GearStats, ItemRecipe } from "./itemclass";

export var weapons = {};
// Gloves
weapons["Brass Knuckles"] = new GearStats("Brass Knuckles","Common",1,null,"Weapon","Glove",10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Cemetary",5],["Forest",5]]);
weapons["Cotton Gloves"] = new GearStats("Cotton Gloves","Common",1,null,"Weapon","Glove",7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Hotel",4],["Hospital",4]]);
weapons["Leather Gloves"] = new GearStats("Leather Gloves","Uncommon",1,new ItemRecipe("Cotton Gloves","Leather"),"Weapon","Glove",18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Iron Knuckles"] = new GearStats("Iron Knuckles","Uncommon",1,new ItemRecipe("Brass Knuckles","Iron Ore"),"Weapon","Glove",18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Gauntlet"] = new GearStats("Gauntlet","Rare",1,new ItemRecipe("Cotton Gloves","Steel"),"Weapon","Glove",28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.1,0,0);
weapons["Wing Knuckles"] = new GearStats("Wing Knuckles","Rare",1,new ItemRecipe("Iron Knuckles","Feather"),"Weapon","Glove",20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0);
weapons["Bone Gauntlet"] = new GearStats("Bone Gauntlet","Rare",1,new ItemRecipe("Gauntlet","Turtle Shell"),"Weapon","Glove",35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,-0.05,0,0);
weapons["Shatter Shell Gauntlet"] = new GearStats("Shatter Shell Gauntlet","Rare",1,new ItemRecipe("Gauntlet","Gunpowder"),"Weapon","Glove",32,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,-0.1,0,0);
weapons["Glass Knuckles"] = new GearStats("Glass Knuckles","Rare",1,new ItemRecipe("Iron Knuckles","Glass Pieces"),"Weapon","Glove",28,0,0,0.10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Phoenix Gloves"] = new GearStats("Phoenix Gloves","Rare",1,new ItemRecipe("Leather Gloves","Ash"),"Weapon","Glove",27,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["One Inch Punch"] = new GearStats("One Inch Punch","Epic",1,new ItemRecipe("Bone Gauntlet","Doll"),"Weapon","Glove",50,0,0,0,0,0.10,0,0,0,0,0,0,0,0,0,0.50,25,0,0,0,0,0,0);
weapons["Divine Fist"] = new GearStats("Divine Fist","Epic",1,new ItemRecipe("Shatter Shell Gauntlet","Cross"),"Weapon","Glove",53,0,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-0.05,0,0);
weapons["Bloodwing Knuckles"] = new GearStats("Bloodwing Knuckles","Epic",1,new ItemRecipe("Wing Knuckles","Ruby"),"Weapon","Glove",53,0,0,0,0,0,0,0,0,0,250,0,0,0,0,0,0,0,0,0,0.1,0,0);
weapons["Frost Petal Hand"] = new GearStats("Frost Petal Hand","Epic",1,new ItemRecipe("Phoenix Gloves","Ice"),"Weapon","Glove",30,0,0,0,0,0,0,38,0,0.15,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Buddha's Palm"] = new GearStats("Buddha's Palm","Epic",1,new ItemRecipe("Phoenix Gloves","Buddha Sarira"),"Weapon","Glove",37,0,0,0,0,0,0,0,0.18,0.18,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Brasil Gauntlet"] = new GearStats("Brasil Gauntlet","Epic",1,new ItemRecipe("Bone Gauntlet","Oilcloth"),"Weapon","Glove",50,0.35,0,0,0,0,0,0,0,0,0,1.2,0,0,1.2,0,10,0,0,0,-0.05,0,0);
weapons["White Claw Punch"] = new GearStats("White Claw Punch","Epic",1,new ItemRecipe("Glass Knuckles","White Powder"),"Weapon","Glove",55,0,0,0.22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
weapons["Imperial Silk Gloves"] = new GearStats("Imperial Silk Gloves","Epic",1,new ItemRecipe("Mithril String","Leather Gloves"),"Weapon","Glove",85,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0,0);
// Tonfa
weapons["Bamboo"] = new GearStats("Bamboo","Common",1,null,"Weapon","Tonfa",12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Pond",8],["Temple",6],["Archery Range",5],["Cemetary",7],["Forest",7]],null,[["Bat","Rarely"]]);
weapons["Wooden Tonfa"] = new GearStats("Wooden Tonfa","Uncommon",1,new ItemRecipe("Bamboo","Branch"),"Weapon","Tonfa",23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0);
weapons["Police Baton"] = new GearStats("Police Baton","Rare",1,new ItemRecipe("Wooden Tonfa","Stallion Medal"),"Weapon","Tonfa",31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0);
weapons["Ryukyu Tonfa"] = new GearStats("Ryukyu Tonfa","Rare",1,new ItemRecipe("Wooden Tonfa","White Powder"),"Weapon","Tonfa",38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,0);
weapons["Tactical Tonfa"] = new GearStats("Tactical Tonfa","Epic",1,new ItemRecipe("Police Baton","Blueprint"),"Weapon","Tonfa",74,0,0,0,0,0.25,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0);
weapons["Mai Sok"] = new GearStats("Mai Sok","Epic",1,new ItemRecipe("Ryukyu Tonfa","Short Rod"),"Weapon","Tonfa",63,0,0,0,0,0,0,0,0,0,0,1.0,0,0,0,0,20,0,0,0,0,0,0);
weapons["Plasma Tonfa"] = new GearStats("Plasma Tonfa","Epic",1,new ItemRecipe("Ryukyu Tonfa","Laser Pointer"),"Weapon","Tonfa",65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,2.5);
// Daggers
weapons["Scissors"] = new GearStats("Scissors","Common",1,null,"Weapon","Dagger",5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[["Alley",7],["Hospital",6],["School",7]],null,[["Bat","Rarely"]]);
