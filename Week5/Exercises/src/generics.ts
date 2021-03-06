

function reverseArr<T>(arg: Array<T>): Array<T> {
    return arg.reverse();
}

console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
//sidste virker ikke, da typen ikke matcher
//console.log(reverseArr<number>(["a","b","c"]));

class DataHolder<T>{
value: T
constructor(value: T){
    this.value = value
}
setValue(value:T){
    this.value = value
}
getValue(){
    return this.value
}
}

let test = new DataHolder<string>("hej")
console.log(test.getValue())
let test2 = new DataHolder<number>(22)
console.log(test2.getValue())
