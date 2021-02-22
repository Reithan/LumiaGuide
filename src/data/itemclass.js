import { toType } from '../util.js';
import * as Map from './map.js';

export const ItemRarity = ["Common","Uncommon","Rare","Epic","Legendary"];

export class ItemRecipe {
  constructor(part1,part2) {
    if(toType(part1) != "string" || toType(part2) != "string") {
      throw new TypeError("ItemRecipe requires 2 part names.");
    }
    this.part1 = part1;
    this.part2 = part2;
  }
}

export const CollectType = ["Pile of Stones","Woodpile","Potato Vine","Sea Fishing","Freshwater Fishing","Ancient Tree"];
export const HuntType = ["Chicken","Bat","Wild Dog","Boar","Wolf","Bear","Wickeline"];
export const HuntRarity = ["Always","Often","Rarely"];
export const AirSupplyColor = ["Green","Blue","Purple","Yellow"];
export const DropTypes = ["Collect","Hunt","Air Supplies","Region"];

export class ItemStats {
  constructor(name, rarity, quantity, recipe, region, collect, hunt, airsupply) {
    if(toType(name) != "string") {
      throw new TypeError("ItemStats name not a string.");
    }
    if(!ItemRarity.includes(rarity)) {
      throw new TypeError("ItemStats passed invalid rarity.");
    }
    if(isNaN(quantity) || !Number.isInteger(quantity) || quantity < 1 || quantity > 5) {
      throw new TypeError("Quantity should be an integer value between 1 and 5.");
    }
    if(!(recipe == null || recipe instanceof ItemRecipe)) {
      throw new TypeError("ItemStats expects recipe of type ItemRecipe or null.");
    }
    if(rarity == "Common" && recipe != null) {
      throw new TypeError("Common items shouldn't have any recipe.");
    }
    var droplists = [region,collect,hunt,airsupply];
    for (const droplist of droplists) {
      if(droplist != null && toType(droplist) != "array") {
        throw new TypeError("ItemStats expects all drop locations to be an array of drops, or null");
      }      
    }
    if(region != null) {
      for (const regiondrop of region) {
        if(!Map.areas.includes(regiondrop[0])) {
          throw new TypeError("ItemStats region drop area is invalid.");
        }
        if(isNaN(regiondrop[1]) || !Number.isInteger(regiondrop[1]) || regiondrop[1] <= 0) {
          throw new TypeError("ItemStats region drop amount expects a positive integer.");
        }
      }
    }
    if(collect != null) {
      for (const collectdrop of collect) {
        if(!CollectType.includes(collectdrop)) {
          throw new TypeError("ItemStats collection drop type is invalid.");
        }
      }
    }
    if(hunt != null) {
      for (const huntdrop of hunt) {
        if(!HuntType.includes(huntdrop[0])) {
          throw new TypeError("ItemStats hunt drop type is invalid.");
        }
        if(!HuntRarity.includes(huntdrop[1])) {
          throw new TypeError("ItemStats hunt rarity is invalid.");
        }
      }
    }
    if(airsupply != null) {
      for (const airsupplydrop of airsupply) {
        if(!AirSupplyColor.includes(airsupplydrop)) {
          throw new TypeError("ItemStats air supply drop color is invalid.");
        }
      }
    }

    this.name = name;
    this.rarity = rarity;
    this.quantity = quantity;
    this.recipe = recipe;
    this.region = region;
    this.collect = collect;
    this.hunt = hunt;
    this.airsupply = airsupply;
  }
}

export const GearType = ["Weapon","Head","Chest","Arm","Leg","Accessory"];
export const WeaponType = [
  "Assault Rifle",
  "Axe",
  "Bat",
  "Bow",
  "Crossbow",
  "Dagger",
  "Dual Swords",
  "Glove",
  "Guitar",
  "Hammer",
  "Nunchaku",
  "Pistol",
  "Rapier",
  "Sniper Rifle",
  "Spear",
  "Throw",
  "Tonfa",
  "Two-Handed Sword",
  "Shuriken",
  "Whip",
];

export class GearStats extends ItemStats {
  constructor(name, rarity, quantity, recipe,
        type, subtype,
        attack_power,
        attack_speed,
        extra_attack_damage,
        crit_rate,
        crit_damage,
        life_steal,
        attack_range,
        skill_amp_flat,
        skill_amp_percent,
        cooldown_reduction,
        health,
        health_regen_flat,
        health_regen,
        stamina,
        stamina_regen_flat,
        stamina_regen,
        defense,
        less_attack_damage,
        less_skill_flat,
        less_skill_percent,
        move_speed,
        move_speed_peace,
        vision_range,
        normal_attack_healing_reduction,
        skill_healing_reduction,
        region, collect, hunt, airsupply
      ) {
    super(name, rarity, quantity, recipe, region, collect, hunt, airsupply);
    if(!GearType.includes(type)) {
      throw new TypeError("GearStats expects type of GearType.")
    }
    if(type == "Weapon") {
      if(!WeaponType.includes(subtype)) {
        throw new TypeError("GearStats expects weapon subtype of WeaponType.")
      }
    } else if(subtype != null) {
      throw new TypeError("GearStats expects null subtype except for weapons.")
    }
    if(isNaN(quantity) || quantity != 1) {
      throw new TypeError("GearStats must have quantity 1.")
    }
    this.type = type;
    this.subtype = subtype;
    this.attack_power = attack_power;
    this.attack_speed = attack_speed;
    this.extra_attack_damage = extra_attack_damage;
    this.crit_rate = crit_rate;
    this.crit_damage = crit_damage;
    this.life_steal = life_steal;
    this.attack_range = attack_range;
    this.skill_amp_flat = skill_amp_flat;
    this.skill_amp_percent = skill_amp_percent;
    this.cooldown_reduction = cooldown_reduction;
    this.health = health;
    this.health_regen = health_regen_flat;
    this.health_regen = health_regen;
    this.stamina = stamina;
    this.stamina_regen = stamina_regen_flat;
    this.stamina_regen = stamina_regen;
    this.defense = defense;
    this.less_attack_damage = less_attack_damage;
    this.less_skill_flat = less_skill_flat;
    this.less_skill_percent = less_skill_percent;
    this.move_speed = move_speed;
    this.move_speed_peace = move_speed_peace;
    this.vision_range = vision_range;
    this.normal_attack_healing_reduction = normal_attack_healing_reduction;
    this.skill_healing_reduction = skill_healing_reduction;
  }
}

export const ConsumableType = ["Food","Beverage"];

export class ConsumableStats extends ItemStats {
  constructor(name, rarity, quantity, recipe, type, value, region, collect, hunt, airsupply) {
    super(name, rarity, quantity, recipe, region, collect, hunt, airsupply);
    if(!ConsumableType.includes(type)) {
      throw new TypeError("ConsumableStats expects effect of type ConsumableType.");
    }
    if(isNaN(value) || !Number.isInteger(value) || value <= 0) {
      throw new TypeError("ConsumableStats expects a positive integer for value.");
    }
    this.type = type;
    this.value = value;
  }
}

export const EffectType = ["Vision","Slow","Root","Stun","Delay"];

export class SummonStats extends ItemStats {
  constructor(name, rarity, quantity, recipe, effect, effect_duration, damage, region, collect, hunt, airsupply) {
    super(name, rarity, quantity, recipe, region, collect, hunt, airsupply);
    if(!(effect == null || EffectType.includes(effect))) {
      throw new TypeError("SummonStats expects effect of type EffectType or null.");
    }
    if(effect != null && effect != "Vision" && (isNaN(effect_duration) || effect_duration <= 0.0)) {
      throw new EvalError("Effect duration must be greater than 0 if there is a non-null, non-vision effect for a Summon.");
    }
    if(effect != "Vision" && (isNaN(damage) || !Number.isInteger(damage) || damage <= 0)) {
      throw new EvalError("Damage must be a positive integer for non-vision Summons.");
    }
    this.effect = effect;
    this.effect_duration = effect_duration;
    this.damage = damage;
  }
}
