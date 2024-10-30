export class Vertice{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }


    distancia(v){
        return Math.sqrt(Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2));
    }

    move(){
        this.x += 1;
        this.y += 1;
    }

    equals(v2){
        return this.x == v2.x && this.y == v2.y;
    }
}