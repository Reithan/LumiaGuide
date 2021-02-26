import * as Map from './data/map.js'
import * as Items from './data/items.js'
import * as Util from './util.js'

// Popluate All Areas with Drops
export var region_drops = {};
for (const itemname in Items.all_items) {
  if (Object.hasOwnProperty.call(Items.all_items, itemname)) {
    const itemstats = Items.all_items[itemname];
    if(itemstats.region != null) {
      for (const drop of itemstats.region) {
        if(!region_drops[drop[0]]) {
          region_drops[drop[0]] = [];
        }
        region_drops[drop[0]].push([itemname,drop[1]]);
      }
    }
  }
}

export class Inventory {
  #inventory = [];
  #gear_slots = {};
  #weapon_type = null;

  constructor(weapon_type) {
    this.#weapon_type = weapon_type;
  }

  reset() {
    this.#gear_slots = {};
    this.#inventory = [];
  }

  getWeaponType() { return (' '+this.#weapon_type).slice(1); }

  size() { return this.#inventory.length; }

  getGearStats(type) {
    if(Util.toType(type) != "string" || !Items.ItemClass.GearType.includes(type)) {
      throw new TypeError("getGearStats takes a string specifying a GearType as an argument.");
    }
    if(this.#gear_slots[type] == undefined || this.#gear_slots[type] == null) {
      return null;
    }
    return this.#gear_slots[type];
  }

  getInventory() { return [...this.#inventory]; }
  getBuild() {
    var build = [];
    for (const slot of Items.ItemClass.GearType) {
      if(this.#gear_slots[slot] == undefined || this.#gear_slots[slot] == null) {
        build.push("");
      } else {
        build.push(this.#gear_slots[slot].name);
      }
    }
    return build;
  }

  getAllItems() {
    var out_items = [];
    for (const geartype in this.#gear_slots) {
      if (Object.hasOwnProperty.call(this.#gear_slots, geartype) && this.#gear_slots[geartype] != null && this.#gear_slots[geartype] != undefined) {
        const gear = this.#gear_slots[geartype];
        out_items.push([gear,1]);
      }
    }
    for (const inv_item of this.#inventory) {
      var found = false;
      for (const out_item of out_items) {
        if(out_item[0] === inv_item[0]) {
          out_item[1] += inv_item[1];
          found = true;
        }
      }
      if(!found) {
        out_items.push([...inv_item]);
      }
    }
    return out_items;
  }

  cleanInventory() {
    for (const geartype of Items.ItemClass.GearType) {
      if(this.#gear_slots[geartype] == null || this.#gear_slots[geartype] == undefined) {
        var best = null;
        for (const slot of this.#inventory) {
          if(slot[0].type == geartype && (geartype != "Weapon" || slot[0].subtype == this.#weapon_type)) {
            if(best == null || (slot[1] > 0 && Items.ItemClass.ItemRarity.indexOf(best[0].rarity) < Items.ItemClass.ItemRarity.indexOf(slot[0].rarity))) {
              best = slot;
            }
          }
        }
        if(best != null) {
          this.#gear_slots[geartype] = best[0];
          --best[1];
        }
      }
    }

    this.#inventory = this.#inventory.filter(slot => slot[1] > 0);
  }

  addItem(item, number = 1) {
    var itemstats = null;
    if(item instanceof Items.ItemClass.ItemStats) {
      itemstats = item;
    } else if(Util.toType(item) == "string") {
      itemstats = Items.all_items[item];
    }
    if(!Number.isInteger(number) || itemstats == null || itemstats == undefined) {
      throw new TypeError("addItem takes an item name or stats object and optional quantity as an arguments.");
    }

    if(itemstats instanceof Items.ItemClass.GearStats && (itemstats.type != "Weapon" || itemstats.subtype == this.#weapon_type)) {
      if(number > 0) {
        if(this.#gear_slots[itemstats.type] == null || this.#gear_slots[itemstats.type] == undefined) {
          this.#gear_slots[itemstats.type] = itemstats;
          --number;
        } else if (Items.ItemClass.ItemRarity.indexOf(this.#gear_slots[itemstats.type].rarity) < Items.ItemClass.ItemRarity.indexOf(itemstats.rarity)) {
          this.addItem(this.#gear_slots[itemstats.type]);
          this.#gear_slots[itemstats.type] = itemstats;
          --number;
        }
      } else if (number < 0 && (this.#gear_slots[itemstats.type] != null &&
            this.#gear_slots[itemstats.type] != undefined) &&
            this.#gear_slots[itemstats.type] == itemstats) {
        this.#gear_slots[itemstats.type] = null;
        ++number;
      }
      if(number == 0) {
        this.cleanInventory();
        return;
      }
    }

    for (const slot of this.#inventory) {
      if(slot[0] == itemstats) {
        if(slot[1]+number <= itemstats.max_stack && slot[1]+number >= 0) {
          slot[1] += number;
          this.cleanInventory();
          return 0;
        } else if(slot[1]+number < 0) {
          number += slot[1];
          slot[1] = 0;
        } else {
          number -= (itemstats.max_stack - slot[1]);
          slot[1] = itemstats.max_stack;
        }
      }
    }
    while(number > 0) {
      var new_stack = number;
      if(new_stack > itemstats.max_stack) {
        new_stack = itemstats.max_stack;
      }
      this.#inventory.push([itemstats,new_stack]);
      number -= new_stack;
    }

    this.cleanInventory();
    return number;
  }

  addItems(itemlist) {
    if(Util.toType(itemlist) != "array") {
      throw new TypeError("addItems takes an array of item/quantity pairs as an argument.");
    }
    var remaining = 0;
    for (const item of itemlist) {
      if(Util.toType(item) == "array") {
        remaining += this.addItem(item[0], item[1]);
      } else {
        remaining += this.addItem(item);
      }
    }
    return remaining;
  }

  haveItem(itemname) {
    var total = 0;
    for (const slot in this.#gear_slots) {
      if (Object.hasOwnProperty.call(this.#gear_slots, slot)) {
        const gear = this.#gear_slots[slot];
        if(gear != undefined && gear != null && gear.name == itemname) {
          ++total;
        }
      }
    }
    for (const slot of this.#inventory) {
      if(slot[0].name == itemname) {
        total += slot[1];
      }
    }
    return total;
  }

  craftItem(itemstats) {
    if(!(itemstats.recipe instanceof Items.ItemClass.ItemRecipe)) {
      throw new TypeError("craftItem takes an ItemStats with a defined ItemRecipe as an argument.");
    }
    var part1 = Items.all_items[itemstats.recipe.part1];
    var part2 = Items.all_items[itemstats.recipe.part2];
    if(this.haveItem(part1.name) && this.haveItem(part2.name)) {
      this.addItem(part1, -1);
      this.addItem(part2, -1);
      this.addItem(itemstats, itemstats.quantity);
      this.cleanInventory();
      return true;
    }
    return false;
  }

  clone() {
    var copy = new Inventory();
    copy.#weapon_type = this.#weapon_type;
    for (const iterator of this.#inventory) {
      copy.#inventory.push([iterator[0],iterator[1]]);
    }
    for (const key in this.#gear_slots) {
      if (Object.hasOwnProperty.call(this.#gear_slots, key)) {
        copy.#gear_slots[key] = this.#gear_slots[key];
      }
    }
    copy.cleanInventory();
    return copy;
  }

  getTotalEquippedStats() {
    var total_stats = new Items.ItemClass.GearStats();
    total_stats.name = "Build Stats";
    for (const slot in this.#gear_slots) {
      if (Object.hasOwnProperty.call(this.#gear_slots, slot) && this.#gear_slots[slot] != undefined) {
        for (const stat of Items.ItemClass.GearStatTypes) {
          total_stats[stat] += this.#gear_slots[slot][stat];
        }
      }
    }
    return total_stats;
  }

  getAllPossibleCrafts() {
    var all_crafts = [];
    var temp_inventory = this.clone();
    var found_craft = true;
    while(found_craft) {
      found_craft = false;
      for (const itemname in Items.all_items) {
        if(all_crafts.includes(itemname)) {
          continue;
        }
        if (Object.hasOwnProperty.call(Items.all_items, itemname)) {
          const itemstats = Items.all_items[itemname];
          if(itemstats.recipe != null) {
            var part1 = temp_inventory.haveItem(itemstats.recipe.part1);
            var part2 = temp_inventory.haveItem(itemstats.recipe.part2);
            var num_crafts = (part1 > part2)? part2 : part1;
            if(num_crafts > 0) {
              temp_inventory.addItem(itemname, num_crafts);
              all_crafts.push(itemname);
              found_craft = true;
            }
          }
        }
      }
    }
    return all_crafts;
  }

  rateGearSlot(slot) {
    var stats_rating = new Items.ItemClass.GearStats();
    if (this.#gear_slots[slot] == null || this.#gear_slots[slot] == undefined) {
      return stats_rating;
    }
    var slotstats = this.#gear_slots[slot];
    for (const stat of Items.ItemClass.GearStatTypes) {
      stats_rating[stat] = (slotstats[stat] - Items.gear_range[0][stat]) / Items.gear_range[1][stat];
    }
    return stats_rating;
  }

  rateBuildStats() {
    var stats_rating = new Items.ItemClass.GearStats();
    for (const slot of Items.ItemClass.GearType) {
      var slotstats = this.rateGearSlot(slot);
      for (const stat of Items.ItemClass.GearStatTypes) {
        stats_rating[stat] += slotstats[stat] / 6;
      }
    }
    return stats_rating;
  }

  generateOverallRating() {
    var stats_rating = this.rateBuildStats();
    var all_ratings = [];
    for (const stat of Items.ItemClass.GearStatTypes) {
      all_ratings.push(stats_rating[stat]);
    }

    all_ratings.sort((e1,e2) => (e1 < e2 ? 1 : (e1 > e2 ? -1 : 0)));
    
    // generate rating based on pareto principle
    var total_rating = 0;
    var ratio = 0.8;
    for (let i = 0; i < all_ratings.length; i++) {
      total_rating += all_ratings[i] * ratio;
      ratio *= 0.2;
    }

    return total_rating;
  }

  rateBuildStatsFunctional() {
    var build_stats = new Items.ItemClass.GearStats();
    // var max_build = new Items.ItemClass.GearStats();
    var max_build = Items.gear_range[1];
    for (const slot of Items.ItemClass.GearType) {
      for (const stat of Items.ItemClass.GearStatTypes) {
        if(this.#gear_slots[slot] != undefined && this.#gear_slots[slot] != null) {
          build_stats[stat] += this.#gear_slots[slot][stat];
        }
        //max_build[stat] += Items.gear_range[1][stat];
      }
    }
    // normal attack + crit
    var normal_attack =
      (build_stats["attack_power"] * (1 + build_stats["attack_speed"]) *
      (100 / (100 + max_build["defense"])) * (1 + build_stats["crit_rate"] *
      (2 + build_stats["crit_damage"] - max_build["less_crit_percent"])) +
      build_stats["extra_attack_damage"] - max_build["less_attack_damage"]);
    normal_attack = normal_attack > 0 ? normal_attack : 0.0001;
    var normal_ttk = (1500 + max_build["health"] + 
      15 * (max_build["health_regen_flat"] * (1 + max_build["health_regen"] -
      build_stats["normal_attack_healing_reduction"]))) / normal_attack;
    // skill
    var skill_attack = 
      (build_stats["attack_power"] * (1 / (1-build_stats["cooldown_reduction"])) * 
      (100 / (100 + max_build["defense"])) + build_stats["skill_amp_flat"] -
      max_build["less_skill_flat"]) * (1 + build_stats["skill_amp_percent"] -
      max_build["less_skill_percent"]);
    skill_attack = skill_attack > 0 ? skill_attack : 0.0001;
    var skill_ttk = (1500 + max_build["health"] + 
      15 * (max_build["health_regen_flat"] * (1 + max_build["health_regen"] -
      build_stats["skill_healing_reduction"]))) / skill_attack;
    // normal defense
    var normal_defense =
      (max_build["attack_power"] * (1 + max_build["attack_speed"]) *
      (100 / (100 + build_stats["defense"])) * (1 + max_build["crit_rate"] *
      (2 + max_build["crit_damage"]) - build_stats["less_crit_percent"]) +
      max_build["extra_attack_damage"] - build_stats["less_attack_damage"]);
    normal_defense = normal_defense > 0 ? normal_defense : 0.0001;
    var normal_ttd = (1500 + build_stats["health"] + 
      15 * (build_stats["health_regen_flat"] * (1 + build_stats["health_regen"] -
      max_build["normal_attack_healing_reduction"]))) / normal_defense;
    // skill
    var skill_defense =
      (max_build["attack_power"] * (1 / (1-max_build["cooldown_reduction"])) * 
      (100 / (100 + build_stats["defense"])) + max_build["skill_amp_flat"] -
      build_stats["less_skill_flat"]) * (1 + max_build["skill_amp_percent"] -
      build_stats["less_skill_percent"]);
    skill_defense = skill_defense > 0 ? skill_defense : 0.0001;
    var skill_ttd = (1500 + build_stats["health"] + 
      15 * (build_stats["health_regen_flat"] * (1 + build_stats["health_regen"] -
      max_build["skill_healing_reduction"]))) / skill_defense;
    // lifesteal adjust
    normal_ttk += (normal_defense * 15 * (max_build["life_steal"] -
      build_stats["normal_attack_healing_reduction"])) / normal_attack;
    normal_ttd += (normal_attack * 15 * (build_stats["life_steal"] -
      max_build["normal_attack_healing_reduction"])) / normal_defense;
    skill_ttk += (normal_defense * 15 * (max_build["life_steal"] - 
      build_stats["skill_healing_reduction"])) / skill_attack;
    
    // aggregate stats
    var ratings = []
    ratings.push(normal_attack / normal_defense);
    ratings.push(skill_attack / skill_defense);
    ratings.push(normal_ttd / normal_ttk);
    ratings.push(skill_ttd / skill_ttk);
    // arbitrary scaling
    ratings.push(0.25 * (build_stats["move_speed"] + 0.2 *
      build_stats["move_speed_peace"]) / (max_build["move_speed"] + 0.2 *
      max_build["move_speed_peace"]));
    ratings.push(0.2 * (build_stats["vision_range"] + build_stats["attack_range"]) / 
      (max_build["vision_range"] + max_build["attack_range"]));
      
    var pareto_total = 0;
    var ratio = 0.8;
    ratings = ratings.sort().reverse();
    for (const rating of ratings) {
      pareto_total += rating * ratio;
      ratio *= 0.2;
    }
    return pareto_total;
  }
}
