const accountId = 122345
let accountEmail = "megha@gmail.com"
var accountPass = "1234"
accountCity = "jaipur"
let accountState;

/* prefer not to use var 
because of issue in bloack scope and funtional scope*/
accountEmail = "megh@gmail.com"
accountPass = "456"

console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountState])