import { toType } from '../util.js';
import * as Map from './map.js';

export const ItemRarity = ["Common","Uncommon","Rare","Epic","Legendary"];

export class ItemRecipe {
  constructor(part1,part2) {
    this.part1 = part1;
    this.part2 = part2;
  }
}

export const CollectType = ["Pile of Stones","Woodpile","Water Source","Potato Vine","Sea Fishing","Freshwater Fishing","Ancient Tree"];
export const HuntType = ["Chicken","Bat","Wild Boar","Wild Dog","Wolf","Bear","Wickeline"];
export const HuntRarity = ["Always","Often","Rarely"];
export const AirSupplyColor = ["Green","Blue","Purple","Yellow"];
export const DropTypes = ["Collect","Hunt","Air Supplies","Region"];

export class ItemStats {
  constructor(name, rarity, quantity, max_stack, recipe, region, collect, hunt, airsupply) {
    this.name = name;
    this.rarity = rarity;
    this.quantity = quantity;
    this.max_stack = max_stack;
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

export const GearStatTypes = [
  "attack_power",
  "attack_speed",
  "extra_attack_damage",
  "crit_rate",
  "crit_damage",
  "life_steal",
  "attack_range",
  "skill_amp_flat",
  "skill_amp_percent",
  "cooldown_reduction",
  "health",
  "health_regen_flat",
  "health_regen",
  "stamina",
  "stamina_regen_flat",
  "stamina_regen",
  "defense",
  "less_attack_damage",
  "less_skill_flat",
  "less_skill_percent",
  "less_crit_percent",
  "move_speed",
  "move_speed_peace",
  "vision_range",
  "normal_attack_healing_reduction",
  "skill_healing_reduction",
];

export class GearStats extends ItemStats {
  constructor(name, rarity, recipe,
        type, subtype,
        attack_power = 0,
        attack_speed = 0,
        extra_attack_damage = 0,
        crit_rate = 0,
        crit_damage = 0,
        life_steal = 0,
        attack_range = 0,
        skill_amp_flat = 0,
        skill_amp_percent = 0,
        cooldown_reduction = 0,
        health = 0,
        health_regen_flat = 0,
        health_regen = 0,
        stamina = 0,
        stamina_regen_flat = 0,
        stamina_regen = 0,
        defense = 0,
        less_attack_damage = 0,
        less_skill_flat = 0,
        less_skill_percent = 0,
        less_crit_percent = 0,
        move_speed = 0,
        move_speed_peace = 0,
        vision_range = 0,
        normal_attack_healing_reduction = 0,
        skill_healing_reduction = 0,
        region, collect, hunt, airsupply
      ) {
    super(name, rarity, 1, 1, recipe, region, collect, hunt, airsupply);
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
    this.health_regen_flat = health_regen_flat;
    this.health_regen = health_regen;
    this.stamina = stamina;
    this.stamina_regen_flat = stamina_regen_flat;
    this.stamina_regen = stamina_regen;
    this.defense = defense;
    this.less_attack_damage = less_attack_damage;
    this.less_skill_flat = less_skill_flat;
    this.less_skill_percent = less_skill_percent;
    this.less_crit_percent = less_crit_percent;
    this.move_speed = move_speed;
    this.move_speed_peace = move_speed_peace;
    this.vision_range = vision_range;
    this.normal_attack_healing_reduction = normal_attack_healing_reduction;
    this.skill_healing_reduction = skill_healing_reduction;
  }
}

export const ConsumableType = ["Food","Beverage"];

export class ConsumableStats extends ItemStats {
  constructor(name, rarity, quantity, max_stack, recipe, type, value, region, collect, hunt, airsupply) {
    super(name, rarity, quantity, max_stack, recipe, region, collect, hunt, airsupply);
    this.type = type;
    this.value = value;
  }
}

export const EffectType = ["Vision","Slow","Root","Stun","Delay"];

export class SummonStats extends ItemStats {
  constructor(name, rarity, quantity, max_stack, recipe, effect, effect_duration, damage, region, collect, hunt, airsupply) {
    super(name, rarity, quantity, max_stack, recipe, region, collect, hunt, airsupply);
    this.effect = effect;
    this.effect_duration = effect_duration;
    this.damage = damage;
  }
}
