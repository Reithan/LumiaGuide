import { ConsumableStats, ItemRecipe } from "./itemclass";

export var consumables = {};

// Foods
consumables["Potato"] = new ConsumableStats("Potato","Common",2,5,null,"Food",130,null,["Potato Vine"]);
consumables["Cod"] = new ConsumableStats("Cod","Common",2,5,null,"Food",130,null,["Sea Fishing"]);
consumables["Lemon"] = new ConsumableStats("Lemon","Common",2,5,null,"Food",100,[["Uptown",5],["Hotel",6],["Hospital",4]]);
consumables["Garlic"] = new ConsumableStats("Garlic","Common",1,5,null,"Food",200,[["Alley",7],["Temple",7],["Cemetary",5]]);
consumables["Adhesive Bandage"] = new ConsumableStats("Adhesive Bandage","Common",1,5,null,"Food",200,[["Hospital",4]]);
consumables["Carp"] = new ConsumableStats("Carp","Common",2,5,null,"Food",130,null,["Freshwater Fishing"]);
consumables["Bread"] = new ConsumableStats("Bread","Common",1,5,null,"Food",225,[["Dock",4],["Chapel",4],["School",7]]);
consumables["Meat"] = new ConsumableStats("Meat","Common",1,5,null,"Food",200,null,null,[["Chicken","Often"],["Wild Boar","Always"],["Wolf","Always"],["Bear","Always"]]);
consumables["Egg"] = new ConsumableStats("Egg","Common",1,5,null,"Food",200,[["Archery Range",5],["Cemetary",5],["Forest",6]]);
consumables["Ramen"] = new ConsumableStats("Ramen","Common",1,5,null,"Food",200,[["Dock",6],["Alley",6],["Temple",5]]);
consumables["Oriental Herb"] = new ConsumableStats("Oriental Herb","Common",1,5,null,"Food",200,[["Pond",7],["Temple",6],["Forest",6]]);
consumables["Chocolate"] = new ConsumableStats("Chocolate","Common",1,5,null,"Food",200,[["Uptown",6],["Avenue",6],["Archery Range",5]]);
consumables["Curry Powder"] = new ConsumableStats("Curry Powder","Common",1,5,null,"Food",250,[["Uptown",5],["Factory",6]]);
consumables["Honey Cod Steak"] = new ConsumableStats("Honey Cod Steak","Uncommon",1,5,new ItemRecipe("Cod","Honey"),"Food",700,null,null,null,["Green"]);
consumables["Canned Cod Liver"] = new ConsumableStats("Canned Cod Liver","Uncommon",1,5,new ItemRecipe("Cod","Can"),"Food",650,null,null,null,["Green"]);
consumables["Garlic Bread"] = new ConsumableStats("Garlic Bread","Uncommon",2,5,new ItemRecipe("Bread","Garlic"),"Food",500,null,null,null,["Green"]);
consumables["Butter"] = new ConsumableStats("Butter","Uncommon",1,5,new ItemRecipe("Milk","Branch"),"Food",450,null,null,null,["Green"]);
consumables["Herbal Medicine"] = new ConsumableStats("Herbal Medicine","Uncommon",1,5,new ItemRecipe("Oriental Herb","Turtle Shell"),"Food",650,null,null,null,["Green"]);
consumables["Carp Bread"] = new ConsumableStats("Carp Bread","Uncommon",2,5,new ItemRecipe("Bread","Carp"),"Food",400,null,null,null,["Green"]);
consumables["Holy Water"] = new ConsumableStats("Holy Water","Uncommon",1,5,null,"Food",600,null,null,null,["Green"]);
consumables["Disinfectant"] = new ConsumableStats("Disinfectant","Uncommon",1,5,new ItemRecipe("Alcohol","Adhesive Bandage"),"Food",600,null,null,null,["Green"]);
consumables["Choco Pie"] = new ConsumableStats("Choco Pie","Uncommon",1,5,new ItemRecipe("Bread","Chocolate"),"Food",600,null,null,null,["Green"]);
consumables["Acupuncture Needle"] = new ConsumableStats("Acupuncture Needle","Uncommon",1,5,new ItemRecipe("Alcohol","Needle"),"Food",800,null,null,null,["Green"]);
consumables["Orchid"] = new ConsumableStats("Orchid","Uncommon",2,5,new ItemRecipe("Oriental Herb","Flower"),"Food",480,null,null,null,["Green"]);
consumables["Tandoori Chicken"] = new ConsumableStats("Tandoori Chicken","Uncommon",1,5,new ItemRecipe("Curry Powder","Meat"),"Food",600,null,null,null,["Green"]);
consumables["Bacon and Garlic Sticks"] = new ConsumableStats("Bacon and Garlic Sticks","Uncommon",1,5,new ItemRecipe("Garlic","Meat"),"Food",650,null,null,null,["Green"]);
consumables["Bun"] = new ConsumableStats("Bun","Uncommon",1,5,new ItemRecipe("Bread","Coffee"),"Food",600,null,null,null,["Green"]);
consumables["Hamburger"] = new ConsumableStats("Hamburger","Uncommon",1,5,new ItemRecipe("Bread","Meat"),"Food",600,null,null,null,["Green"]);
consumables["Potato Bread"] = new ConsumableStats("Potato Bread","Uncommon",2,5,new ItemRecipe("Potato","Bread"),"Food",360,null,null,null,["Green"]);
consumables["Potato Soup"] = new ConsumableStats("Potato Soup","Uncommon",1,5,new ItemRecipe("Potato","Milk"),"Food",600,null,null,null,["Green"]);
consumables["Fish Fillet With Egg"] = new ConsumableStats("Fish Fillet With Egg","Uncommon",1,5,new ItemRecipe("Cod","Egg"),"Food",700,null,null,null,["Green"]);
consumables["Citrus Cake"] = new ConsumableStats("Citrus Cake","Uncommon",2,5,new ItemRecipe("Lemon","Bread"),"Food",360,null,null,null,["Green"]);
consumables["Lemon Ice Cream"] = new ConsumableStats("Lemon Ice Cream","Uncommon",3,5,new ItemRecipe("Lemon","Egg"),"Food",500,null,null,null,["Green"]);
consumables["Honey Garlic Pickle"] = new ConsumableStats("Honey Garlic Pickle","Uncommon",3,5,new ItemRecipe("Garlic","Honey"),"Food",480,null,null,null,["Green"]);
consumables["Egg Bun"] = new ConsumableStats("Egg Bun","Uncommon",2,5,new ItemRecipe("Egg","Bread"),"Food",400,null,null,null,["Green"]);
consumables["Easter Egg"] = new ConsumableStats("Easter Egg","Uncommon",1,5,new ItemRecipe("Egg","Chocolate"),"Food",600,null,null,null,["Green"]);
consumables["Whisky Bonbon"] = new ConsumableStats("Whisky Bonbon","Uncommon",3,5,new ItemRecipe("Whiskey","Chocolate"),"Food",400,null,null,null,["Green"]);
consumables["Choco Ice Cream"] = new ConsumableStats("Choco Ice Cream","Uncommon",2,5,new ItemRecipe("Ice","Chocolate"),"Food",550,null,null,null,["Green"]);
consumables["Curry Bun"] = new ConsumableStats("Curry Bun","Uncommon",2,5,new ItemRecipe("Curry Powder","Bread"),"Food",400,null,null,null,["Green"]);
consumables["Spicy Fish Stew"] = new ConsumableStats("Spicy Fish Stew","Rare",3,5,new ItemRecipe("Carp","Boiling Water"),"Food",450,null,null,null,["Blue"]);
consumables["French Fries"] = new ConsumableStats("French Fries","Rare",1,5,new ItemRecipe("Potato","Heated Oil"),"Food",700,null,null,null,["Blue"]);
consumables["Baked Potato"] = new ConsumableStats("Baked Potato","Rare",2,5,new ItemRecipe("Potato","Heated Stone"),"Food",600,null,null,null,["Blue"]);
consumables["Baked Carp"] = new ConsumableStats("Baked Carp","Rare",2,5,new ItemRecipe("Carp","Heated Stone"),"Food",600,null,null,null,["Blue"]);
consumables["Grilled Chilean Sea Bass"] = new ConsumableStats("Grilled Chilean Sea Bass","Rare",3,5,new ItemRecipe("Cod","Heated Stone"),"Food",480,null,null,null,["Blue"]);
consumables["Hot Ramen"] = new ConsumableStats("Hot Ramen","Rare",2,5,new ItemRecipe("Ramen","Boiling Water"),"Food",550,null,null,null,["Blue"]);
consumables["Mocha Bread"] = new ConsumableStats("Mocha Bread","Rare",2,5,new ItemRecipe("Bread","Coffee Liqueur"),"Food",700,null,null,null,["Blue"]);
consumables["Scrambled Egg"] = new ConsumableStats("Scrambled Egg","Rare",2,5,new ItemRecipe("Egg","Heated Oil"),"Food",550,null,null,null,["Blue"]);
consumables["Chocolate Chip Cookies"] = new ConsumableStats("Chocolate Chip Cookies","Rare",2,5,new ItemRecipe("Chocolate","Butter"),"Food",733,null,null,null,["Blue"]);
consumables["Choco Pie Box"] = new ConsumableStats("Choco Pie Box","Rare",2,5,new ItemRecipe("Choco Pie","Box"),"Food",733,null,null,null,["Blue"]);
consumables["Curry"] = new ConsumableStats("Curry","Rare",3,5,new ItemRecipe("Curry Powder","Boiling Water"),"Food",520,null,null,null,["Blue"]);
consumables["Oriental Concoction"] = new ConsumableStats("Oriental Concoction","Rare",2,5,new ItemRecipe("Oriental Herb","Boiling Water"),"Food",600,null,null,null,["Blue"]);
consumables["Honey Butter"] = new ConsumableStats("Honey Butter","Rare",2,5,new ItemRecipe("Butter","Honey"),"Food",650,null,null,null,["Blue"]);
consumables["Fried Chicken"] = new ConsumableStats("Fried Chicken","Rare",2,5,new ItemRecipe("Meat","Heated Oil"),"Food",510,null,null,null,["Blue"]);
consumables["Healing Potion"] = new ConsumableStats("Healing Potion","Rare",2,5,new ItemRecipe("Orchid","Glass Bottle"),"Food",700,null,null,null,["Blue"]);
consumables["Boiled Egg"] = new ConsumableStats("Boiled Egg","Rare",2,5,new ItemRecipe("Egg","Boiling Water"),"Food",600,null,null,null,["Blue"]);
consumables["Pound Cake"] = new ConsumableStats("Pound Cake","Rare",2,5,new ItemRecipe("Butter","Bread"),"Food",600,null,null,null,["Blue"]);
consumables["Curry Croquette"] = new ConsumableStats("Curry Croquette","Rare",2,5,new ItemRecipe("Curry Powder","Heated Oil"),"Food",550,null,null,null,["Blue"]);
consumables["Steak"] = new ConsumableStats("Steak","Rare",4,5,new ItemRecipe("Meat","Heated Stone"),"Food",420,null,null,null,["Blue"]);
consumables["First Aid Kit"] = new ConsumableStats("First Aid Kit","Rare",1,5,new ItemRecipe("Disinfectant","Bandage"),"Food",950,null,null,null,["Blue"]);
consumables["Butter-Fried Potatoes"] = new ConsumableStats("Butter-Fried Potatoes","Rare",2,5,new ItemRecipe("Potato","Butter"),"Food",650,null,null,null,["Blue"]);
consumables["Fish Cutlet"] = new ConsumableStats("Fish Cutlet","Rare",1,5,new ItemRecipe("Cod","Heated Oil"),"Food",700,null,null,null,["Blue"]);
consumables["Stir-Fried Ramen"] = new ConsumableStats("Stir-Fried Ramen","Rare",2,5,new ItemRecipe("Ramen","Heated Oil"),"Food",550,null,null,null,["Blue"]);
consumables["Cold Noodles"] = new ConsumableStats("Cold Noodles","Rare",2,5,new ItemRecipe("Ramen","Ice Water"),"Food",650,null,null,null,["Blue"]);
consumables["Zen Vitality"] = new ConsumableStats("Zen Vitality","Rare",2,5,new ItemRecipe("Acupuncture Needle","Herbal Medicine"),"Food",900,null,null,null,["Blue"]);
consumables["Garlic Ramen"] = new ConsumableStats("Garlic Ramen","Rare",2,5,new ItemRecipe("Hot Ramen","Garlic"),"Food",700,null,null,null,["Blue"]);
consumables["Fish And Chips"] = new ConsumableStats("Fish And Chips","Epic",2,5,new ItemRecipe("Fish Cutlet","French Fries"),"Food",920,null,null,null,["Purple"]);
// Beverages
consumables["Honey"] = new ConsumableStats("Honey","Common",2,5,null,"Beverage",250,[["Alley",7],["Avenue",6],["Forest",6]]);
consumables["Water"] = new ConsumableStats("Water","Common",3,5,null,"Beverage",100,null,["Water Source"]);
consumables["Ice"] = new ConsumableStats("Ice","Common",2,5,null,"Beverage",200,[["Hotel",8],["Hospital",7],["Cemetary",7]]);
consumables["Whiskey"] = new ConsumableStats("Whiskey","Common",1,5,null,"Beverage",450,[["Uptown",5],["Hotel",5],["Chapel",4]]);
consumables["Coffee"] = new ConsumableStats("Coffee","Common",1,5,null,"Beverage",380,[["Dock",5],["Uptown",5],["Cemetary",5]]);
consumables["Carbonated Water"] = new ConsumableStats("Carbonated Water","Common",1,5,null,"Beverage",380,[["Beach",6],["Uptown",6],["Hotel",6]]);
consumables["Milk"] = new ConsumableStats("Milk","Common",2,5,null,"Beverage",200,[["Avenue",6],["Hospital",5],["Chapel",4]]);
consumables["Boiling Water"] = new ConsumableStats("Boiling Water","Uncommon",3,5,new ItemRecipe("Water","Lighter"),"Beverage",200,null,null,null,["Green"]);
consumables["Lemonade"] = new ConsumableStats("Lemonade","Uncommon",4,5,new ItemRecipe("Carbonated Water","Lemon"),"Beverage",300,null,null,null,["Green"]);
consumables["Water Bottle"] = new ConsumableStats("Water Bottle","Uncommon",2,5,new ItemRecipe("Water","Glass Bottle"),"Beverage",380,null,null,null,["Green"]);
consumables["Baiju"] = new ConsumableStats("Baiju","Uncommon",1,5,new ItemRecipe("Alcohol","Lighter"),"Beverage",1000,null,null,null,["Green"]);
consumables["Soju"] = new ConsumableStats("Soju","Uncommon",2,5,new ItemRecipe("Alcohol","Water"),"Beverage",350,null,null,null,["Green"]);
consumables["Iced Coffee"] = new ConsumableStats("Iced Coffee","Uncommon",2,5,new ItemRecipe("Ice","Coffee"),"Beverage",500,null,null,null,["Green"]);
consumables["Cocktail"] = new ConsumableStats("Cocktail","Uncommon",4,5,new ItemRecipe("Whiskey","Lemon"),"Beverage",300,null,null,null,["Green"]);
consumables["Coffee Liqueur"] = new ConsumableStats("Coffee Liqueur","Uncommon",2,5,new ItemRecipe("Coffee","Alcohol"),"Beverage",530,null,null,null,["Green"]);
consumables["Cola"] = new ConsumableStats("Cola","Uncommon",3,5,new ItemRecipe("Carbonated Water","Honey"),"Beverage",400,null,null,null,["Green"]);
consumables["Latte"] = new ConsumableStats("Latte","Uncommon",2,5,new ItemRecipe("Milk","Coffee"),"Beverage",530,null,null,null,["Green"]);
consumables["Honey Milk"] = new ConsumableStats("Honey Milk","Uncommon",2,5,new ItemRecipe("Milk","Honey"),"Beverage",530,null,null,null,["Green"]);
consumables["Highball"] = new ConsumableStats("Highball","Uncommon",2,5,new ItemRecipe("Whiskey","Carbonated Water"),"Beverage",530,null,null,null,["Green"]);
consumables["Chocolate Milk"] = new ConsumableStats("Chocolate Milk","Uncommon",3,5,new ItemRecipe("Chocolate","Milk"),"Beverage",400,null,null,null,["Green"]);
consumables["Honey Water"] = new ConsumableStats("Honey Water","Uncommon",2,5,new ItemRecipe("Honey","Water"),"Beverage",400,null,null,null,["Green"]);
consumables["Ice Water"] = new ConsumableStats("Ice Water","Uncommon",2,5,new ItemRecipe("Ice","Water"),"Beverage",350,null,null,null,["Green"]);
consumables["On The Rocks"] = new ConsumableStats("On The Rocks","Uncommon",2,5,new ItemRecipe("Ice","Whiskey"),"Beverage",530,null,null,null,["Green"]);
consumables["Cowboy"] = new ConsumableStats("Cowboy","Uncommon",2,5,new ItemRecipe("Milk","Whiskey"),"Beverage",530,null,null,null,["Green"]);
consumables["Kaoliang Liquor"] = new ConsumableStats("Kaoliang Liquor","Rare",3,5,new ItemRecipe("Baiju","Lighter"),"Beverage",1080,null,null,null,["Blue"]);
consumables["Hot Honey Water"] = new ConsumableStats("Hot Honey Water","Rare",2,5,new ItemRecipe("Boiling Water","Honey"),"Beverage",1080,null,null,null,["Blue"]);
consumables["Flower Liquor"] = new ConsumableStats("Flower Liquor","Rare",5,5,new ItemRecipe("Baiju","Flower"),"Beverage",500,null,null,null,["Blue"]);
consumables["Americano"] = new ConsumableStats("Americano","Rare",2,5,new ItemRecipe("Boiling Water","Coffee"),"Beverage",1080,null,null,null,["Blue"]);
consumables["Herbal Liquor"] = new ConsumableStats("Herbal Liquor","Rare",5,5,new ItemRecipe("Baiju","Oriental Herb"),"Beverage",500,null,null,null,["Blue"]);
consumables["Whiskey Cocktail"] = new ConsumableStats("Whiskey Cocktail","Rare",5,5,new ItemRecipe("Cola","Whiskey"),"Beverage",500,null,null,null,["Blue"]);
consumables["Purified Water"] = new ConsumableStats("Purified Water","Rare",2,5,new ItemRecipe("Boiling Water","Ice"),"Beverage",1080,null,null,null,["Blue"]);
consumables["Can of Cola"] = new ConsumableStats("Can of Cola","Rare",2,5,new ItemRecipe("Cola","Can"),"Beverage",1400,null,null,null,["Blue"]);
consumables["Hot Chocolate"] = new ConsumableStats("Hot Chocolate","Rare",4,5,new ItemRecipe("Boiling Water","Chocolate"),"Beverage",450,null,null,null,["Blue"]);
consumables["White Russian"] = new ConsumableStats("White Russian","Rare",4,5,new ItemRecipe("Coffee Liqueur","Milk"),"Beverage",660,null,null,null,["Blue"]);
