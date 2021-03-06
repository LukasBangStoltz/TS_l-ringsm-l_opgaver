interface IMyFunc {

    (a: string, b: string, c: string): string[]
}



let myFunc: IMyFunc = function (a, b, c) {
    let arr = [a, b, c]
    return arr
}

let upperCased: IMyFunc = function (a, b, c) {
    let arr = [a, b, c]
    let result: string[] = []
    arr.forEach(element => {
        result.push(element.toUpperCase())
    });
    return result
}

let a = "hej"
let b = "med"
let c = "dig"

//console.log(myFunc(a, b, c))
//console.log(upperCased(a, b, c))

let f2 = function logger(f1: IMyFunc) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["a", "b", "c"];
    console.log(f1(a, b, c));
}

function fakeFunction(a: string, b: string, c: string) {
    let array = [a, b, c]

}

// virker ikke, da fakefunktion ikke overholder vores interface, og derfor ikke kan benyttes af vores f2 function
//f2(fakeFunction)