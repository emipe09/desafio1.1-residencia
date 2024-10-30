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

let v1 = new Vertice(1,1);
let v2 = new Vertice(2,2);
let v3 = new Vertice(3,3);

console.log(v1.distancia(v2));
v1.move();
console.log(v1.distancia(v2));
console.log(v1.equals(v2));








