const score = 200 
console.log(score);//200

const num = new Number(500) 
console.log(num); //[Number: 500]


console.log(num.toString().length); //3
console.log(num.toFixed(2)); //500.00

const othernum = 2123.27368

console.log(othernum.toPrecision(4)); //2123(round off value)

const num2 = 100000000000
console.log(num2.toLocaleString('en-In')); //100,000,000,000 = show the us pattern 
                                           //('en-In')  1,00,00,00,00,000 = show the indian pattern


//******************************************* Math ************************************************


console.log(Math); //Object [Math] {}
console.log(Math.abs(-4));//4
console.log(Math.round(4.6)); //5   (ceil) ,(floor)
console.log(Math.ceil(4.6));//5
console.log(Math.floor(4.6));//4
console.log(Math.min(4,3,6,7,8,6));//3
console.log(Math.max(4,3,6,7,8,6));//8



console.log(Math.random( )); //random mathod lies between 0 to 1
console.log((Math.random()*10) + 1); //7.301844733361155


const min  = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min ); //lies between 10 to 20

