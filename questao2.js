
import promptSync from 'prompt-sync';
const readline = promptSync();

import { Vertice } from "./classes/Vertice.js"
class Triangulo{
    constructor(v1, v2, v3){
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
        if(v1.equals(v2) || v2.equals(v3) || v3.equals(v1)){
            throw new Error("Os vértices não formam um triangulo");
        }
    }

    perimetro(){
        return this.v1.distancia(this.v2) + this.v2.distancia(this.v3) + this.v3.distancia(this.v1);
    }

    equals(t2){
        return this.v1.equals(t2.v1) && this.v2.equals(t2.v2) && this.v3.equals(t2.v3);
    }

    tipo(){
        let d1 = this.v1.distancia(this.v2);
        let d2 = this.v2.distancia(this.v3);
        let d3 = this.v3.distancia(this.v1);

        if(d1 == d2 && d2 == d3){
            return "Equilátero";
        }else if(d1 == d2 || d2 == d3 || d3 == d1){
            return "Isósceles";
        }else{
            return "Escaleno";
        }
    }

    clone(){
        return new Triangulo(this.v1, this.v2, this.v3);
    }

    area(){
        let p = this.perimetro()/2;
        let d1 = this.v1.distancia(this.v2);
        let d2 = this.v2.distancia(this.v3);
        let d3 = this.v3.distancia(this.v1);

        return Math.sqrt(p*(p-d1)*(p-d2)*(p-d3));
    }
}

let x1 = parseFloat(readline('Digite o valor de x1: '));
let y1 = parseFloat(readline('Digite o valor de y1: '));
let x2 = parseFloat(readline('Digite o valor de x2: '));
let y2 = parseFloat(readline('Digite o valor de y2: '));
let x3 = parseFloat(readline('Digite o valor de x3: '));
let y3 = parseFloat(readline('Digite o valor de y3: '));

let v1 = new Vertice(x1, y1);
let v2 = new Vertice(x2, y2);
let v3 = new Vertice(x3, y3);

let t1 = new Triangulo(v1, v2, v3);
let t2 = new Triangulo(v1, v2, v3);
let t3 = new Triangulo(v2, v1, v3);

console.log(t1.perimetro());  
console.log(t1.equals(t2));
console.log(t1.equals(t3));
console.log(t1.tipo());
console.log(t1.area());
console.log(t1.clone().equals(t1));
console.log(t1.clone().area());  
