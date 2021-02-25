import * as Pathfinder from './pathfinder.js';
import * as Items from './data/items.js';
import * as Map from './data/map.js';

export class PlanSolver {
  #pathfinder = null;
  constructor(weapon_type) {
    this.#pathfinder = new Pathfinder.Pathfinder(weapon_type);
  }

  setGoal(new_goal) {
    this.#pathfinder.setGoal(new_goal);
  }

  static OptimizationCriteria = ["Power Curve","Collection Completion","Item Completion",];
  generateRoutes(num_limit, heuristic = PlanSolver.OptimizationCriteria[0]) {
    var plans = [];
    const queue_limit = 200;

    // strategies
    var get_plan_power_curve = (plan) => {
      var curverating = 0;
      var ratio = 0.8;
      for (const plan_step of plan) {
        if(plan_step == null) {
          break;
        }
        curverating += plan_step[2] * ratio;
        ratio *= 0.2;
      }
      return curverating;
    };

    // select strategy
    var strategy = null;
    switch (heuristic) {
      default:
      case "Power Curve":
        strategy = (e1,e2) => get_plan_power_curve(e2) - get_plan_power_curve(e1);
        break;
      case "Collection Completion":
        strategy = (e1,e2) => get_plan_power_curve(e2) - get_plan_power_curve(e1); // TODO
        break;
      case "Item Completion":
        strategy = (e1,e2) => get_plan_power_curve(e2) - get_plan_power_curve(e1); // TODO
        break;
    }

    // populate initial area scores
    var area_scores = this.#pathfinder.generateAreaScores(this.#pathfinder.expectedPercentItemsAcquired.bind(this.#pathfinder), 1);
    for (const search_area of area_scores) {
      if(search_area[1] == 0) {
        continue;
      }
      var new_plan = [[search_area[0],this.#pathfinder.clone(),0]];
      new_plan[0][1].collectAllShoppingInArea(new_plan[0][0]);
      new_plan[0][1].doAllCrafts();
      // new_plan[0][2] = new_plan[0][1].getCurrentInventory().generateOverallRating();
      new_plan[0][2] = new_plan[0][1].getCurrentInventory().rateBuildStatsFunctional();
      plans.push(new_plan);
    }
    plans.sort(strategy);

    // do steps
    for (let step = 2; step <= num_limit; ++step) {
      var new_plans = [];
      // branch each plan
      plans.reverse();
      while(plans.length > 0) {
        var plan = plans.pop();
        if(plan[plan.length-1] == null) {
          new_plans.push(plan);
          continue;
        }
        var last_plan_step = plan[plan.length-1];
        var area_scores = last_plan_step[1].generateAreaScores(last_plan_step[1].expectedPercentItemsAcquired.bind(last_plan_step[1]), step);
        for (const plan_step of plan) {
          area_scores = area_scores.filter(areaentry => (areaentry[0] != plan_step[0] && areaentry[1] > 0));
        }

        for (let i = 0; i < area_scores.length; ++i) {
          if(!(Map.hyperloop[last_plan_step[0]] || Map.areAreasAdjacent(last_plan_step[0],area_scores[i][0]))) {
            continue;
          }
          var new_plan = [];
          for (const plan_step of plan) {
            new_plan.push([plan_step[0],plan_step[1].clone(),plan_step[2]]);
          }

          new_plan.push([area_scores[i][0],last_plan_step[1].clone(),0]);
          var last = new_plan.length - 1;
          new_plan[last][1].collectAllShoppingInArea(new_plan[last][0]);
          new_plan[last][1].doAllCrafts();
          //new_plan[last][2] = new_plan[last][1].getCurrentInventory().generateOverallRating();
          new_plan[last][2] = new_plan[last][1].getCurrentInventory().rateBuildStatsFunctional();
          new_plans.push(new_plan);
        }
        plan.push(null);
        new_plans.push(plan);
      }
      // limit plan queue for speed
      plans = new_plans.sort(strategy).slice(0,queue_limit);
    }

    return plans;
  }
};
