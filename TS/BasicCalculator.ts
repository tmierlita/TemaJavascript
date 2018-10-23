import {Calculator} from "./Calculator";

export class BasicCalculator implements Calculator{

    add(a,b,...args){
       var sum = a+b;
       args.forEach(function (elem) {
           sum=sum+elem;
       });
       return sum;
}
    dif(a,b,...args){
        var dif = a-b;
        args.forEach(function (elem) {
            dif = dif-elem;
        })
        return dif;
}
    mul(a,b,...args){
        var mul = a*b;
        args.forEach(function (elem) {
            mul = mul*elem;
        })
        return mul;
}
    div(a,b,...args){
        var div = a/b;
        args.forEach(function (elem) {
            div = div/elem;
        })
        return div;
}
    pow(a,b){}
    sqrt(a){}
    factorial(a){}
}