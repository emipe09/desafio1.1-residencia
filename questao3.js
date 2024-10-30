import { Vertice } from "./questao1.js"
class Poligono{
    constructor(vertices){
        this.vertices = vertices;
        if(vertices.length < 3){
            throw new Error("Um polígono deve ter pelo menos 3 vértices");
        }
    }
    addVertice(v){
        this.vertices.push(v);
    }
    perimetro(){
        let p = 0;
        for(let i = 0; i < this.vertices.length; i++){
            p += this.vertices[i].distancia(this.vertices[(i+1)%this.vertices.length]);
        }
        return p;
    }
    qtdVertices(){
        return this.vertices.length;
    }
}

let v1 = new Vertice(0,0);
let v2 = new Vertice(1,1);
let v3 = new Vertice(0,1);

let p1 = new Poligono([v1, v2, v3]);
console.log(p1.perimetro());
console.log(p1.qtdVertices());
p1.addVertice(new Vertice(1,0));
console.log(p1.perimetro());
console.log(p1.qtdVertices());


