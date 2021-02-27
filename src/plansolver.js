import * as Pathfinder from './pathfinder.js';
import * as Items from './data/items.js';
import * as Map from './data/map.js';
import { getNodeText } from '@testing-library/react';

export class PlanSolver {
  #pathfinder = null;
  static SOLUTION_LIMIT = 50;
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

  #enqueue = function(queue, item, sort_comparison = (e1,e2) => e1 - e2) {
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
  
  #isHyperlinkedBiDi = function(areaA, areaB) {
    if(Map.hyperloop[areaA] || Map.hyperloop[areaB]) {
      return true;
    }
  }
  

  static OptimizationCriteria = ["Power Curve","Collection Completion","Item Completion",];
  generateRoutes(step_limit, criteria, carry_over) {
    const sortAscendingByLength = (e1,e2) => e1.length - e2.length;
    const sortDescendingBySubZero = (e1,e2) => e2[0] - e1[0];
    var area_scores = this.#pathfinder.generateAreaScores(this.#pathfinder.percentItemsInArea.bind(this.#pathfinder), 1);
    var open_set = [];
    var closed_set = [];
    var area_hashes = {};
    var solutions = [];
    if(carry_over) {
      solutions = carry_over[0];
      open_set = carry_over[1];
      area_hashes = carry_over[2];
    } else {
      for (const area of area_scores) {
        area_hashes[Map.createAreaBitcode(area[0])] = true;
        open_set.push([area[1],[area[0]]]);
      }
    }
    while(open_set.length > 0 && solutions.length < PlanSolver.SOLUTION_LIMIT) {
      var plan = open_set.shift();
      if(plan[1].length >= step_limit){
        this.#enqueue(closed_set,plan,sortDescendingBySubZero);
        continue;
      }
      this.#pathfinder.reset();
      for (const area of plan[1]) {
        this.#pathfinder.collectAllShoppingInArea(area);
        this.#pathfinder.doAllCrafts();
      }
      area_scores = this.#pathfinder.generateAreaScores(this.#pathfinder.percentItemsInArea.bind(this.#pathfinder), plan[1].length + 1);
      for (const area of area_scores) {
        if(area[1] > 0 && (Map.areAreasAdjacent(plan[1][plan[1].length-1], area[0]) || this.#isHyperlinkedBiDi(plan[1][plan[1].length-1],area[0]))) {
          var new_plan = [plan[0],[...plan[1]]];
          new_plan[1].push(area[0]);
          new_plan[0] = area[1];
          if(!area_hashes[Map.createAreasHash(new_plan[1])]) {
            area_hashes[Map.createAreasHash(new_plan[1])] = true;
            if(new_plan[0] == 1) {
              solutions.push(new_plan[1]);
            } else {
              this.#enqueue(open_set,new_plan,sortDescendingBySubZero);
            }
          }
        }
      }
    }
    solutions.sort(sortAscendingByLength);
    return [solutions, closed_set, area_hashes];
  }
};