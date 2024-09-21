// "use strict"; //treat all js code as newer varsion
// alert(3+3)  // we are using nodejs, not browser
let name = "diksha"
let age = 18
let isLoggedId = false
let state

//number => 2 to power 53
//bigint
//string => "" 
//boolean => true/false
//null => standalone value
//underfined => 
//symbol => unique

//object

// console.log(age);
// console.log(typeof "diksha")
// console.log(typeof null)//type=> object
// console.log(typeof undefined)//type=> undefined


// *****************datatypes summery*****************

// Primitiveor non primitive =>

// 7 types : String, Number, Boolearn, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 354577645774834848343784738473n


// console.log(id === anotherId);
// 




//JAVASCRIPT IS DYNAMICALY TYPED LANGUAGE


// Reference (Non primitive) =>

//Array, Objects, Functions


//********************Memory*********************** */

//Stack (Primative), Heap (Non-Primative)
let myname = "dikshita"

let anothername = myname
anothername = "ashish"

// console.log(myname);
// console.log(anothername);


// Heap memory alocation

let userOne = {
    email:"user@goole.com",
    upi:"user@huu"
}

let userTow = userOne
userTow.email = "dikshamaru@google.com"
console.log(userOne.email)
console.log(userTow.email)

//stack => it gives an referance of an variable value or we can say the copy of an variable value
//Heap => It gives a diract referance of an object value




