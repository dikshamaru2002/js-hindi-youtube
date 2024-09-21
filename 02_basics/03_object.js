// tow types tow declear an objact
//litrals or constructer

//singleton : It means that kind of an objact which is created throug an "Counstructer".
//literals sa jab bhi banag to uska multipule instances banta ha 


//singleton
// Object.create


// ***********************************************
//literals
const mySym = Symbol("key1")
const JsUser = {
    name:"Diksha",
    [mySym]:"mykey1",
    age:18,
    "full name":"diksha maru",
    location:"jaipur",
    email:"diksha@google.com",
    isLoggedId:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

 JsUser.email = "diksha@marugoogle.com"
//  Object.freeze( JsUser)
 JsUser.email = "dikshamaru@Microsoft.com"
//  console.log(JsUser);

JsUser.greeting = function(){
    console.log('hello Js User');
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




