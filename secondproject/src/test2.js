"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Engine = /** @class */ (function () {
    function Engine(hp, power) {
        this.hp = hp;
        this.power = power;
    }
    return Engine;
}());
;
// class Engine{
//     hp:number;
//     stroke:number;
//     constructor( hp:number,stroke:number){
//         this.hp=hp;
//         this.stroke=stroke;
//     }
// };
var Car = /** @class */ (function () {
    function Car() {
        this.e = new Engine(100, 0);
        console.log('inside Car');
    }
    return Car;
}());
// let ob=new Engine()
var ob2 = new Car();
// class Car {
//     e:Engine;
//     constructor( e:Engine){
//         this.e=e;
//     }
// };
// let a=new Engine(100,200);
// let b=new Car(a)
