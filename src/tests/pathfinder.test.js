import * as Pathfinder from '../pathfinder.js';

test('Setting goal requires <=6 items with <=1 of each type.', () => {
  var pathfinder = new Pathfinder.Pathfinder();
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Heelys"])).toBe(true);
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Sheath","Heelys","Glass Pieces"])).toBe(true);
  expect(pathfinder.setGoal(["Brass Knuckles","Brass Knuckles","Bulletproof Vest","Sheath","Heelys","Glass Pieces"])).toBe(false);
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Sheath","Heelys","Glass Pieces","Scissors"])).toBe(false);
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Sheath","Heelys","Glass Pieces","Stone"])).toBe(false);
  expect(pathfinder.setGoal(["Brass Knuckles","Close Helm","Bulletproof Vest","Sheath","Heelys","Stone"])).toBe(false);
});