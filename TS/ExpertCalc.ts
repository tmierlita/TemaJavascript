import {BasicCalculator} from "./BasicCalculator";

export class ExpertCalc extends BasicCalculator{

    pow(a,b){
        let result=a;
        for (let i=1;i<b;i++){
            result=result*a;
        }
        return result;
    }

    sqrt(a){
        let result=Math.sqrt(a)
        return result;
    }

    factorial(a){
        let result=a;
        for(let i=1;i<a;i++){
            result=result*i;
        }
        return result;
    }
}