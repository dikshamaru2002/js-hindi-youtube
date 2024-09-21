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
console.log("Result:",result); 

// ufnction parameters

function loginUserMessage(username)//or loginuserMessage(username = "sam")
{
    // if (username===undefined)
    // or
    if (!username)
    {
     console.log("Please Enter a username");
     return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())
