import {BasicCalculator} from "./BasicCalculator";
import {ExpertCalc} from "./ExpertCalc";

let calc = new BasicCalculator();
let expertcalc = new ExpertCalc();

console.log(calc.add(2,3,4,5,6));

console.log(expertcalc.pow(2,3));

console.log(expertcalc.sqrt(36));

console.log(expertcalc.factorial(4));