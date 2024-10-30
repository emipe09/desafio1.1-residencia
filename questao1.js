import promptSync from 'prompt-sync';
const readline = promptSync();

import { Vertice } from "./classes/Vertice.js"


let x1 = parseFloat(readline('Digite o valor de x1: '));
let y1 = parseFloat(readline('Digite o valor de y1: '));
let x2 = parseFloat(readline('Digite o valor de x2: '));
let y2 = parseFloat(readline('Digite o valor de y2: '));
let x3 = parseFloat(readline('Digite o valor de x3: '));
let y3 = parseFloat(readline('Digite o valor de y3: '));

let v1 = new Vertice(x1, y1);
let v2 = new Vertice(x2, y2);
let v3 = new Vertice(x3, y3);

console.log(v1.distancia(v2));
v1.move();
console.log(v1.distancia(v2));
console.log(v1.equals(v2));








