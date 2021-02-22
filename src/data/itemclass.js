export const ItemRarity = ["Common","Uncommon","Rare","Epic","Legendary"];

export class ItemRecipe {
  constructor(part1,amount1,part2,amount2) {
    this.part1 = part1;
    this.amount1 = amount1;
    this.part2 = part2;
    this.amount2 = amount2;
  }
}

export class ItemStats {
  constructor(name, rarity, quantity, recipe) {
    if(!ItemRarity.includes(rarity)) {
      throw new TypeError("ItemStats passed invalid rarity");
    }
    if(isNaN(quantity) || !Number.isInteger(quantity) || quantity < 1 || quantity > 5) {
      throw new TypeError("Quantity should be an integer value between 1 and 5.");
    }
    if(!(recipe == null || recipe instanceof ItemRecipe)) {
      throw new TypeError("ItemStats expects recipe of type ItemRecipe or null.");
    }
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
        health_regen,
        stamina,
        stamina_regen,
        defense,
        less_attack_damage,
        less_skill_flat,
        less_skill_percent,
        move_speed,
        move_speed_peace,
        vision_range
      ) {
    super(name, rarity, quantity, recipe);
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
    this.health_regen = health_regen;
    this.stamina = stamina;
    this.stamina_regen = stamina_regen;
    this.defense = defense;
    this.less_attack_damage = less_attack_damage;
    this.less_skill_flat = less_skill_flat;
    this.less_skill_percent = less_skill_percent;
    this.move_speed = move_speed;
    this.move_speed_peace = move_speed_peace;
    this.vision_range = vision_range;
  }
}

export const ConsumableType = ["Food","Beverage"];

export class ConsumableStats extends ItemStats {
  constructor(name, rarity, quantity, recipe, type, value) {
    super(name, rarity, quantity, recipe);
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
  constructor(name, rarity, quantity, recipe, effect, effect_duration, damage) {
    super(name, rarity, quantity, recipe);
    if(!(effect == null || EffectType.includes(effect))) {
      throw new TypeError("SummonStats expects effect of type EffectType or null.");
    }
    if(effect != null && effect != "Vision" && (isNaN(effect_duration) || effect_duration <= 0.0)) {
      throw new EvalError("Effect duration must be greater than 0 if there is a non-null, non-vision effect for a Summon.");
    }
    if(effect != "Vision" && (isNaN(value) || !Number.isInteger(value) || value <= 0)) {
      throw new EvalError("Damage must be a positive integer for non-vision Summons.");
    }
    this.effect = effect;
    this.effect_duration = effect_duration;
    this.damage = damage;
  }
}
