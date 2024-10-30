export class Poligono{
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