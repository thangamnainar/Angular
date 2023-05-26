import { log } from "console";

class Engine{
    hp:number;
    power:number;
    constructor( hp:number, power:number){
        this.hp=hp;
        this.power=power;
    }
};

// class Engine{
//     hp:number;
//     stroke:number;
//     constructor( hp:number,stroke:number){
//         this.hp=hp;
//         this.stroke=stroke;
//     }
// };

class Car {
    e:Engine=new Engine(100,0)
    constructor(){
        // console.log('inside Car');
        
    }
}
// let ob=new Engine()
let ob2=new  Car()


// class Car {
//     e:Engine;
//     constructor( e:Engine){
//         this.e=e;

//     }
// };

// let a=new Engine(100,200);
// let b=new Car(a)