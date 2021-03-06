abstract class Shape {
    private _color: string;
    constructor(_color: string) {
        this._color = _color;
    }
    abstract get area(): number;
    abstract get perimeter(): number;
    get Color(): string {
        return this._color
    }
    set Color(_color: string) {
        this._color = _color
    }



    toString() {
        return `color: ${this._color}`
    }
}

class Circle extends Shape {

    private _radius: number
    constructor(_color: string, _radius: number) {
        super(_color)
        this._radius = _radius
    }

    get radius(){
        return this._radius
    }

    get area(): number {
        return Math.PI * this._radius ^ 2
    }
    get perimeter(): number {
        return 2 * this._radius * Math.PI;
    }
    get Color(): string {
        return super.Color
    }
    set Color(_color: string) {
        super.Color = _color
    }

}

let myCircle = new Circle("red", 10);

console.log(myCircle.Color)
myCircle.Color = "pink"
console.log(myCircle.Color)
console.log(myCircle.area)
console.log(myCircle.perimeter)


class Cylinder extends Circle {
    private _height: number
    constructor(_color: string, _radius: number, _height: number) {
        super(_color, _radius)
        this._height = _height
    }

    
    get volume(){
        return this._height* Math.PI * (super.radius^2)
    }

    get height(): number{
        return this._height
    }

    set height(_height:number){
        this._height = _height
    }

    get Color(): string {
        return super.Color
    }
    set Color(_color: string) {
        super.Color = _color
    }
}


let myCylinder = new Cylinder("blue", 10, 15)

console.log(myCylinder.volume)