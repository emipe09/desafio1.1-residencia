import promptSync from 'prompt-sync';
const readline = promptSync();

import { Vertice } from "./classes/Vertice.js";
import { Poligono } from "./classes/Poligono.js";


let x1 = parseFloat(readline('Digite o valor de x1: '));
let y1 = parseFloat(readline('Digite o valor de y1: '));
let x2 = parseFloat(readline('Digite o valor de x2: '));
let y2 = parseFloat(readline('Digite o valor de y2: '));
let x3 = parseFloat(readline('Digite o valor de x3: '));
let y3 = parseFloat(readline('Digite o valor de y3: '));

let v1 = new Vertice(x1, y1);
let v2 = new Vertice(x2, y2);
let v3 = new Vertice(x3, y3);

let p1 = new Poligono([v1, v2, v3]);
console.log(p1.perimetro());
console.log(p1.qtdVertices());
p1.addVertice(new Vertice(1,0));
console.log(p1.perimetro());
console.log(p1.qtdVertices());


