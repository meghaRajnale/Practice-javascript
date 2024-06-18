// Dates

let myDate = new Date() //typeof = object
console.log(myDate.toString());//Tue Jun 18 2024 09:35:56 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Tue Jun 18 2024
console.log(myDate.toISOString()); //2024-06-18T09:35:56.940Z
console.log(myDate.toJSON ()); //2024-06-18T09:35:56.940Z
console.log(myDate.toLocaleDateString ()); //6/18/2024
console.log(myDate.toLocaleString ()); //6/18/2024, 9:35:56 AM
console.log(myDate.toLocaleTimeString()); //9:35:56 AM
console.log(myDate.toTimeString()); //09:35:56 GMT+0000 (Coordinated Universal Time)


let myCreatedDate = new Date(2023,0,23) //Fri Jan 24 2023
console.log(myCreatedDate.toDateString());

let myCreatedDate3 = new Date(2023,0,23 , 5,3)  //1/23/2023, 5:03:00 AM
let myCreatedDate1 = new Date("2023-01-14")  //1/14/2023, 12:00:00 AM
let myCreatedDate2 = new Date("01-14-2023")  //1/14/2023, 12:00:00 AM
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString()); 


let myTimeStamp = Date.now()
console.log( myTimeStamp); //1718704841085
console.log(myCreatedDate.getTime()); //1674432000000(this is the execution date time in milisec) 

//convert mili sec into sec

console.log(Math.floor(Date.now()/1000)); //1674432000


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay()); // getMonth() , getYear()


// console.log(`${newDate.getDay()} and the time`);

newDate.toLocaleString('default' , {   //ctrl+space
 weekday: "long",
//  timeZone: " "
})