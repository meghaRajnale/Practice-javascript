//string interpolation (``) = we can make the placeholder in that placeholder whatever variables are present we can directly injected that into it

const name = "megha" //or
const newname = new String('mega') //[String(obj): 'mega']


console.log(newname);
const repoCount = 50

//console.log(name + repocount + "value"); // megha 50 value

console.log(` Hello my name is ${name} and my repo count is ${repoCount}`);

console.log(newname[0]);//m
console.log(newname.__proto__); //{}
console.log(newname.length);//4
console.log(newname.toUpperCase());//MEGA

const newString = newname.substring(0,3)
console.log(newString);
//slice
//replace

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-')) //https://hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh'));

//trim is used for remove unwanted space