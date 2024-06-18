// primitives data types

//7types: string,Number, Boolean ,Null, Undefined,Symbol(unique value),BigInt

let str = "megha" //string
const rollno = 200 //number
let value = true //boolean
let outsideTemp = null //object
let custName ; //undefined

const id = Symbol('123') //(typeof) datatype is symbol
const anotherId = Symbol('123') //symbol

console.log(id === anotherId); //false
const bigNumber = 2372837298392839n


//It is dyanamic typed language 

const score = 100


//non-primitives and reference type

//Array,Objects,Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {        //object whaterver write in curly brackets
    name: "hitesh",
    age : 22,
}
console.log(heros);

const myFunction = function (){ //function object
    console.log("hello World");
}

console.log(typeof myFunction);

//*************************************************************************************************************

//memory

//Stack(primitives)(copy) => changes into reference value , Heap (Non-primitives) (reference) => changes into actual value