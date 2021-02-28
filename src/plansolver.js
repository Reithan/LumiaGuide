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

  generateRawRoutes(step_limit, criteria, carry_over) {
    const sortAscendingByLength = (e1,e2) => e1.length - e2.length;
    const sortDescendingBySubZero = (e1,e2) => e2[0] - e1[0];
    const sortAscendingBySubZero = (e1,e2) => e1[0] - e2[0];
    const SEEN = 1;
    const SOLVED = 2;
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
        area_hashes[Map.createAreaBitcode(area[0])] = SEEN;
        open_set.push([1-area[1],[area[0]]]);
      }
    }

    const SOLUTION = ["Uptown","Factory","Cemetary","Pond","Avenue"];

    while(open_set.length > 0 && solutions.length < PlanSolver.SOLUTION_LIMIT) {
      var plan = open_set.shift();
      if(plan[1].length >= step_limit){
        this.#enqueue(closed_set,plan,sortAscendingBySubZero);
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
          new_plan[0] = new_plan[1].length + 1 - area[1];
          var new_hash = Map.createAreasHash(new_plan[1]);
          if(!area_hashes[new_hash]) { // seen a permutation of this exact path?
            // TODO ****CHECKING AGAINST HASHES FOR PERMUTATIONS IS STILL SLOW****
            // TODO Can we optimize this or foist this check off to another step that might be faster?
            // solved a path permutation that this path contains?
            var skip = false;
            // for (const area_hash in area_hashes) {
            //   if((area_hash & new_hash) == area_hash && area_hashes[area_hash] == SOLVED) {
            //     skip = true;
            //     break;
            //   }
            // }
            if(!skip) {
              if(area[1] == 1) {
                area_hashes[new_hash] = SOLVED;
                solutions.push(new_plan[1]);
              } else {
                area_hashes[new_hash] = SEEN;
                this.#enqueue(open_set,new_plan,sortAscendingBySubZero);
              }
            }
          }
        }
      }
    }
    solutions.sort(sortAscendingByLength);
    return [solutions, closed_set, area_hashes];
  }

  #recurseValidLexicographicRoutePermutations = function(elems) {
    if(elems.length == 1) {
      return [elems];
    }
    var perms = [];
    for (let i = 0; i < elems.length; ++i) {
      var new_perms = [];
      for (let j = 0; j < elems.length; ++j) {
        if(i!=j)
          new_perms.push(elems[j]);
      }
      new_perms = this.#recurseValidLexicographicRoutePermutations(new_perms);
      for (const new_perm of new_perms) {
        if(new_perms.length == 0 || Map.hyperloop[elems[i]] || Map.areAreasAdjacent(elems[i],new_perm[0])) {
          new_perm.unshift(elems[i]);
          perms.push(new_perm);
        }
      }
    }
    return perms;
  }

  generateValidScoredRoutePermutations(raw_routes) {
    // routes are already tenatively ordered by solver
    // generate valid routes in lexicographic order
    var new_routes = [];
    for (const route of raw_routes) {
      var unscored = this.#recurseValidLexicographicRoutePermutations(route);
      unscored.forEach((unscored_route, index, array) => {
        var score = 0;
        var ratio = 0.6;
        var prev_score = 0;
        this.#pathfinder.reset();
        // TODO Consider moving scoring into permutation generation recursion
        // TODO if we consider
        // - A B C D
        // - A B D C
        // - A C B D <- if this step is considerably lower than min of A B perms, 
        // - A C D B    perhaps we can skip the res of the A C perms?
        //              This might not be mathematically complete, but
        //              might not skip any resonable results in our use case?
        for (const area of unscored_route) {
          this.#pathfinder.collectAllShoppingInArea(area);
          this.#pathfinder.doAllCrafts();
          if(false) {
            var original = this.#pathfinder.getOriginalShoppingListLength();
            var found = original - this.#pathfinder.getCurrentShoppingList().length;
            var inv_size = this.#pathfinder.getCurrentInventory().getInventory().length;
            found = inv_size > 10 ? found - (inv_size-10) : found;
            var new_score = found / original;
            score += ratio * (new_score - prev_score);
            prev_score = new_score;
          } else {
            var new_score = this.#pathfinder.getCurrentInventory().rateBuildStatsFunctional();
            score += ratio * (new_score - prev_score);
            ratio *= 0.4;
            prev_score = new_score;
          }
        }
        array[index] = [score,unscored_route];
      });
      unscored.sort((e1,e2) => e2[0] - e1[0]);
      new_routes.push(unscored[0]);
    }
    // give routes final scores
    // order final route list
    new_routes.sort((e1,e2) => e2[0] - e1[0]);
    return new_routes;
  }
};