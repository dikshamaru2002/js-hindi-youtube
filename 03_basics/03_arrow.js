const user = {
    username:"diksha",
    price: 999,
      
    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this);

// function one(){
// let username = "diksha"
// console.log(this.username);// we can't use this in side the function "this key word is use to access the objects value of it's pearant scope"
// }
// one()

const one = () => {
    let username = "diksha"
    // console.log(this.username);
    // console.log(this);
    
}
// one()

//*************** Arrow function *****************/

// const addtwo = (num1,num2) => {
    // return num1+num2             //explicit return
// console.log(addtwo(3,4))
// }

//  or
// const addtwo = (num1,num2) => num1 + num2  
// or 
// const addtwo = (num1,num2) => ( num1 + num2 )  // implicit return   with variable 
// console.log(addtwo(3,4))

const addtwo = (num1,num2) => ({ username:"diksha"}) // implicit return   with object 
console.log(addtwo(3,4))

