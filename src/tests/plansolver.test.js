import * as PlanSolver from '../plansolver.js';
import * as Pathfinder from '../pathfinder.js';
import * as Map from '../data/map.js';
import * as Util from '../util.js';

test('Test Route Generation', ()=>{
  const ITERATIVE_TIME = 3500;
  const SINGLE_TIME = 3000;
  const PERMUTE_TIME = 13500;
  const MAX_STEPS = 6;

  var plan_solver = new PlanSolver.PlanSolver("Sniper Rifle");
  plan_solver.setGoal(["Polaris","Imperial Burgonet","Rocker's Jacket","Sheath of Shah Jahan","Maverick Runner","Uchiwa"]);
  var result = null;
  
  //
  var iterative_t0 = performance.now();
  result = null;
  var closed = 0;
  for (let step_limit = 1; step_limit <= MAX_STEPS && (!result || result[0].length < PlanSolver.PlanSolver.SOLUTION_LIMIT); ++step_limit) {
    result = plan_solver.generateRawRoutes(step_limit,null,result);
    if(result[1].length > closed)
      closed = result[1].length;
  }
  var iterative_t1 = performance.now();
  console.log("Iterative: "+result[0].length+" solutions and "+closed+" closed in "+(iterative_t1-iterative_t0)/1000+" seconds.");
  expect(iterative_t1-iterative_t0).toBeLessThan(ITERATIVE_TIME);
  //

  //
  var permute_t0 = performance.now();
  var valid = plan_solver.generateValidScoredRoutePermutations(result[0]);
  var permute_t1 = performance.now();
  console.log("Permute: "+(permute_t1-permute_t0));
  expect(permute_t1-permute_t0).toBeLessThan(PERMUTE_TIME);
  expect(valid[0][1]).toStrictEqual(["Uptown","Factory","Cemetary","Pond","Avenue"]);
  //

  //
  var single_t0 = performance.now();
  result = null;
  result = plan_solver.generateRawRoutes(MAX_STEPS,null,result);
  var single_t1 = performance.now();
  console.log("Single: "+result[0].length+" solutions and "+result[1].length+" closed in "+(single_t1-single_t0)/1000+" seconds.");
  expect(single_t1-single_t0).toBeLessThan(SINGLE_TIME);
  //

  // TODO continue benchmarking & improving these algorithms while maintaining result quality
  expect(iterative_t1-iterative_t0).toBeGreaterThan(single_t1-single_t0); // interative currently slower overall

  //
  permute_t0 = performance.now();
  valid = plan_solver.generateValidScoredRoutePermutations(result[0]);
  permute_t1 = performance.now();
  console.log("Permute: "+(permute_t1-permute_t0));
  expect(permute_t1-permute_t0).toBeLessThan(PERMUTE_TIME);
  expect(valid[0][1]).toStrictEqual(["Uptown","Factory","Cemetary","Pond","Avenue"]);
  //

  console.log("Top 5");
  console.log(valid.slice(0,5));
});
