export var areas = [
  "Alley",
  "Archery Range",
  "Avenue",
  "Beach",
  "Cemetary",
  "Chapel",
  "Dock",
  "Factory",
  "Forest",
  "Hospital",
  "Hotel",
  "Pond",
  "Research Center",
  "School",
  "Temple",
  "Uptown",
];

export var hyperloop = {};
hyperloop["Alley"] = true;
hyperloop["Avenue"] = true;
hyperloop["Chapel"] = true;
hyperloop["Hospital"] = true;
hyperloop["Hotel"] = true;
hyperloop["Temple"] = true;
hyperloop["Uptown"] = true;

export var map_adjacencies = {};
map_adjacencies["Alley"] = ["Archery Range","Avenue","School","Temple"];
map_adjacencies["Archery Range"] = ["Alley","Hotel","School"];
map_adjacencies["Avenue"] = ["Alley","Forest","Pond","Research Center","School","Temple"];
map_adjacencies["Beach"] = ["Forest","Hotel","Uptown"];
map_adjacencies["Cemetary"] = ["Chapel","Factory","Forest","Hospital","Research Center"];
map_adjacencies["Chapel"] = ["Cemetary","Dock","Factory","Forest","Uptown"];
map_adjacencies["Dock"] = ["Chapel","Factory","Uptown"];
map_adjacencies["Factory"] = ["Cemetary","Chapel","Dock","Hospital"];
map_adjacencies["Forest"] = ["Avenue","Beach","Cemetary","Chapel","Hotel","Research Center","School","Uptown"];
map_adjacencies["Hospital"] = ["Cemetary","Factory","Pond"];
map_adjacencies["Hotel"] = ["Archery Range","Beach","Forest","School"];
map_adjacencies["Pond"] = ["Avenue","Hospital","Temple"];
map_adjacencies["Research Center"] = ["Avenue","Cemetary","Forest"];
map_adjacencies["School"] = ["Alley","Archery Range","Avenue","Hotel","Forest"];
map_adjacencies["Temple"] = ["Alley","Avenue","Pond"];
map_adjacencies["Uptown"] = ["Beach","Chapel","Dock","Forest"];

export var restricted_areas = ["Research Center"];
