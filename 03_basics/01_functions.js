function sayMyName(){
    console.log("D")
    console.log("i")
    console.log("k")
    console.log("s")
    console.log("h")
    console.log("a")
}
// sayMyName()

// function addTowNumbers(number1,number2){
//     console.log(number1+number2);

// }
function addTowNumbers(number1,number2){
    // let result = number1 + number2
    // console.log("diksha");
    // return result
    return number1 + number2
    

}
// addTowNumbers(3,6)
const result = addTowNumbers(3,6)
// console.log("Result:",result); 

// ufnction parameters

function loginUserMessage(username)//or loginuserMessage(username = "sam") => Default Value 
{
    // if (username===undefined)
    // or
    if (!username)
    {
     console.log("Please Enter a username");
     return
    }
    return `${username} just logged in`//string interplation
}
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("diksha"))

// function calculaterCartPrice(val1,val2,...num1)
function calculaterCartPrice(...num1)// RestOperater => ...
{
    return num1
}
// console.log(calculaterCartPrice(200,300,400,500))

const user = {
    username:"diksha",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));