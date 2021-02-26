import { HuntType, CollectType } from './itemclass.js';

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
map_adjacencies["Cemetary"] = ["Chapel","Factory","Hospital","Research Center","Pond"]; // Pond included for practicality
map_adjacencies["Chapel"] = ["Cemetary","Dock","Factory","Forest","Uptown"];
map_adjacencies["Dock"] = ["Chapel","Factory","Uptown"];
map_adjacencies["Factory"] = ["Cemetary","Chapel","Dock","Hospital"];
map_adjacencies["Forest"] = ["Avenue","Beach","Chapel","Hotel","Research Center","School","Uptown"];
map_adjacencies["Hospital"] = ["Cemetary","Factory","Pond"];
map_adjacencies["Hotel"] = ["Archery Range","Beach","Forest","School"];
map_adjacencies["Pond"] = ["Avenue","Hospital","Temple","Cemetary"]; // Cemetary included for practicality
map_adjacencies["Research Center"] = ["Avenue","Cemetary","Forest"];
map_adjacencies["School"] = ["Alley","Archery Range","Avenue","Hotel","Forest"];
map_adjacencies["Temple"] = ["Alley","Avenue","Pond"];
map_adjacencies["Uptown"] = ["Beach","Chapel","Dock","Forest"];

export function createAreaBitcode(area) {
  return (1 << areas.indexOf(area));
}

export function createAreasHash(areas) {
  var hash = 0;
  for (const area of areas) {
    hash |= createAreaBitcode(area);
  }
  return hash;
}

export function doAreasHashesOverlap(areasA, areasB) {
  return (areasA & areasB) != 0;
}

export function areAreasAdjacent(areaA, areaB) {
  return doAreasHashesOverlap(createAreaBitcode(areaB), area_adjacency_hashes[areaA]);
}

export var area_adjacency_hashes = {};
for (const area of areas) {
  area_adjacency_hashes[area] = createAreasHash(map_adjacencies[area]);
}

export var hunt_spawns = {};
// ["Chicken","Bat","Wild Boar","Wild Dog","Wolf","Bear","Wickeline"];
hunt_spawns["Alley"] =           [8,0,0,0,4,3,0];
hunt_spawns["Archery Range"] =   [0,3,3,0,4,0,0];
hunt_spawns["Avenue"] =          [3,0,5,4,0,0,0];
hunt_spawns["Beach"] =           [0,3,3,0,0,3,0];
hunt_spawns["Cemetary"] =        [0,3,4,0,2,0,0];
hunt_spawns["Chapel"] =          [7,3,3,0,0,0,0];
hunt_spawns["Dock"] =            [4,0,0,3,0,3,0];
hunt_spawns["Factory"] =         [3,0,0,4,4,0,0];
hunt_spawns["Forest"] =          [0,3,4,0,2,0,0];
hunt_spawns["Hospital"] =        [3,0,0,3,4,0,0];
hunt_spawns["Hotel"] =           [3,0,0,4,4,0,0];
hunt_spawns["Pond"] =            [0,4,4,0,0,2,0];
hunt_spawns["Research Center"] = [0,0,0,0,0,0,1];
hunt_spawns["School"] =          [7,3,0,4,0,0,0];
hunt_spawns["Temple"] =          [0,4,4,0,0,2,0];
hunt_spawns["Uptown"] =          [6,0,0,3,0,2,0];

export var collection_spawns = {};
// ["Pile of Stones","Woodpile","Water Source","Potato Vine","Sea Fishing","Freshwater Fishing","Ancient Tree"];
collection_spawns["Alley"] =           [4,5,0,4,0,0,0];
collection_spawns["Archery Range"] =   [3,5,0,0,0,0,0];
collection_spawns["Avenue"] =          [3,4,0,0,0,0,0];
collection_spawns["Beach"] =           [4,5,0,0,4,0,0];
collection_spawns["Cemetary"] =        [4,6,4,0,0,0,1];
collection_spawns["Chapel"] =          [4,4,0,0,0,0,0];
collection_spawns["Dock"] =            [4,6,0,0,4,0,0];
collection_spawns["Factory"] =         [4,7,0,0,0,0,0];
collection_spawns["Forest"] =          [4,11,3,0,0,2,1];
collection_spawns["Hospital"] =        [4,4,0,0,0,0,0];
collection_spawns["Hotel"] =           [3,5,3,0,0,0,1];
collection_spawns["Pond"] =            [4,6,10,4,0,10,0];
collection_spawns["Research Center"] = [0,0,0,0,0,0,0];
collection_spawns["School"] =          [4,5,0,0,0,0,0];
collection_spawns["Temple"] =          [4,6,0,8,0,0,0];
collection_spawns["Uptown"] =          [6,5,0,0,4,0,0];

export var restricted_areas = ["Research Center"];
