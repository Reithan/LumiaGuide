import * as PlanSolver from '../plansolver.js';

test('Test Route Generation', ()=>{
  var plan_solver = new PlanSolver.PlanSolver("Sniper Rifle");
  plan_solver.setGoal(["Polaris","Imperial Burgonet","Rocker's Jacket","Sheath of Shah Jahan","Maverick Runner","Uchiwa"]);
  var paths = plan_solver.generateRoutes(6);
  console.log(paths.slice(0,5));
});
