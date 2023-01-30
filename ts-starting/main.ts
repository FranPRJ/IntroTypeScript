// //como declarar una variable sin conocer el valor de antemano
// let a : number;
// let b : string;
// let c : boolean;

// //declarar arreglos
// let d : number[] = [1,2,3];
// let e : an_y[] = [1, true, 'a'];

// //ejemplo, en vez de esto ...
// const colorGreen = 0;
// const colorRed = 1;
// const colorBlue = 2;

// //...puede ser esto
// //         0  ,   1,     2
// enum Color{Red, Green, Blue};
// let background = Color.Blue;

//T_ype Assertions
// se debe especificar a TS que tipo d evalor es la variable para poder utitlizar
//las funciones integradas

let message;
message = 'abc';
//primera forma
let endWithC = (<string>message.endsWith('c'));
//segunda forma
let otraManera = (message as string).endsWith('c');


//Arrow functions
let functionTest = () => {
    console.log()
};

//Arrow functions para muchos parametros

//declarar inteface

import { Point } from "./point";

let point = new Point();
point.draw();

//acceder a X para get y set
let _x = point.X;
point.X = 10;




