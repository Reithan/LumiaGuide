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

  #findPlan = function(plans,plan) {
    for (const iplan of plans) {
      if(iplan.length == plan.length) {
        for (let i = 0; i < iplan.length; i++) {
          if(iplan[i][0] != plan[i][0]) {
            break;
          }
        }
        return true;
      }
    }
  }

  static OptimizationCriteria = ["Power Curve","Collection Completion","Item Completion",];
  generateRoutes(num_limit, scoring = PlanSolver.OptimizationCriteria[0], leftover_plans = null) {
    var open_plans = [];
    var closed_plans = [];
    var solutions = [];
    const queue_limit = 50;

    // strategies
    var get_plan_power_curve = (plan) => {
      var curverating = 0;
      var ratio = 0.4;
      for (let i = 1; i < plan.length; ++i) {
        plan[i][2] = plan[i][1].getCurrentInventory().rateBuildStatsFunctional();
        curverating += plan[i][2] * (ratio * (1-ratio) ** i);
      }
      return curverating;
    };

    var get_shopping_completion_curve = (plan) => {
      var curverating = 0;
      var ratio = 0.8;
      for (let i = 1; i < plan.length; ++i) {
        plan[i][2] = plan[i][1].getCurrentShoppingList().length / plan[i][1].getOriginalShoppingListLength();
        curverating += plan[i][2] * (ratio * (1-ratio) ** i);
      }
      return curverating;
    };

    // select strategy
    var heuristic = null;
    var sort_comparison = null;
    var final_score = null;
    var final_sort = null;
    switch (scoring) {
      default:
      case "Power Curve":
        heuristic = "expectedPercentItemsAcquired";
        sort_comparison = (e1,e2) => e1[0] == e2[0]? e1[1].length - e2.length : e1[0] - e2[0];
        final_score = get_plan_power_curve;
        final_sort = (e1,e2) => e1[0] == e2[0]? e1[1].length - e2.length : e2[0] - e1[0];
        break;
      case "Collection Completion":
        heuristic = "percentItemsInArea";
        sort_comparison = (e1,e2) => e1[0] == e2[0]? e1[1].length - e2.length : e1[0] - e2[0];
        final_score = get_shopping_completion_curve;
        final_sort = (e1,e2) => e1[0] == e2[0]? e1[1].length - e2.length : e1[0] - e2[0];
        break;
      case "Item Completion":
        heuristic = "percentItemsInArea";
        sort_comparison = (e1,e2) => final_score(e2) - final_score(e1);
        final_score = (e1,e2) => get_plan_power_curve(e2) - get_plan_power_curve(e1); // TODO
        final_sort = (e1,e2) => e1[0] == e2[0]? e1[1].length - e2.length : e1[0] - e2[0];
        break;
    }

    var enqueue = (queue, item) => {
      var spliced = false;
      for (let i = 0; i < queue.length; ++i) {
        if(sort_comparison(queue[i],item) >= 0) {
          queue.splice(i,0,item);
          spliced = true;
          break;
        }
      }
      if(!spliced) {
        queue.push(item);
      }
    };

    var queue_or_solve = (new_plan) => {
      // queue new plan or mark solved
      if (new_plan[new_plan.length-1][1].getCurrentShoppingList().length == 0) {
        new_plan[0] = final_score(new_plan);
        solutions.push(new_plan);
      } else if(new_plan.length - 1 < num_limit) {
        // insert new element in proper place to avoid sorting ( O(n) vs O(nlogn) )
        enqueue(open_plans, new_plan);
      } else {
        enqueue(closed_plans, new_plan);
      }
    };

    // carry over prior work
    if(leftover_plans != null) {
      if(leftover_plans[0]) {
        solutions = leftover_plans[0];
      }
      if(leftover_plans[1] && leftover_plans[2] &&
            leftover_plans[1].length > 0 && leftover_plans[2].length > 0) {
        open_plans = [...leftover_plans[1],...leftover_plans[2]].sort(sort_comparison);
      } else if (leftover_plans[1] && leftover_plans[1].length > 0) {
        open_plans = leftover_plans[1];
      } else if (leftover_plans[2] && leftover_plans[2].length > 0) {
        open_plans = leftover_plans[2];
      }
    }

    if(open_plans.length == 0) {
      // populate initial area scores
      var area_scores = this.#pathfinder.generateAreaScores(this.#pathfinder[heuristic].bind(this.#pathfinder), 1);
      area_scores = area_scores.filter(areaentry => areaentry[1] > 0);
      for (const search_area of area_scores) {
        var new_plan = [0,[search_area[0],this.#pathfinder.clone(),0]];
        new_plan[1][1].collectAllShoppingInArea(new_plan[1][0]);
        new_plan[1][1].doAllCrafts();
        new_plan[0] = 1 + (1 / search_area[1] - 1); // <= fScore (gScore + h(n))
        new_plan[1][2] = (1 / search_area[1] - 1); // <= h(n)

        queue_or_solve(new_plan);
      }
    }
    
    if(num_limit < 2) {
      console.log("Found "+solutions.length+" solutions from expanding "+closed_plans.length+" of "+(closed_plans.length+open_plans.length)+" visited nodes");
      return [solutions.sort(final_sort),open_plans,closed_plans];
    }

    // do steps
    while(open_plans.length > 0 && solutions.length < queue_limit) {
      // branch each plan
      var plan = open_plans.shift();
      var last_plan_step = plan[plan.length-1];
      var area_scores = last_plan_step[1].generateAreaScores(last_plan_step[1][heuristic].bind(last_plan_step[1]), plan.length);
      for (const plan_step of plan) {
        area_scores = area_scores.filter(areaentry => (areaentry[0] != plan_step[0] && areaentry[1] > 0));
      }

      // add new areas
      for (let i = 0; i < area_scores.length; ++i) {
        if(!(Map.hyperloop[last_plan_step[0]] || Map.areAreasAdjacent(last_plan_step[0],area_scores[i][0]))) {
          continue;
        }
        // clone current plan
        var new_plan = [0];
        for (const plan_step of plan) {
          if(!isNaN(plan_step)){
            continue;
          }
          new_plan.push([plan_step[0],plan_step[1].clone(),plan_step[2]]);
        }

        // add new area
        new_plan.push([area_scores[i][0],last_plan_step[1].clone(),0]);
        var last = new_plan.length - 1;
        new_plan[last][1].collectAllShoppingInArea(new_plan[last][0]);
        new_plan[last][1].doAllCrafts();
        new_plan[0] = (new_plan.length-1) + (1 / area_scores[i][1] - 1); // <= fScore (gScore + h(n))
        new_plan[last][2] = (1 / area_scores[i][1] - 1); // <= h(n)
        
        // queue or solve
        queue_or_solve(new_plan);
      }
      
      plan[0] = final_score(plan);
      enqueue(closed_plans, plan);
    }
    
    console.log("Found "+solutions.length+" solutions from expanding "+closed_plans.length+" of "+(closed_plans.length+open_plans.length)+" visited nodes");
    return [solutions.sort(final_sort),open_plans,closed_plans];
  }
};
