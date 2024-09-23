var c = 300
let a =300

if (true){
    let a = 10
    const b =20
    var c = 30  //var type is use in whole program 
   // console.log("Inner:",a);
    
}

// for(let i = 0; i< Array.length; i++){
//     const element = array[i]
// }

console.log(a);
// console.log(b);
// console.log(c);


//Note:-  In Brouser Console the Variable Scope was 'Differnt' from the 'node' or code Editers Scope

function one(){
    const username = "hitesh"

    function two (){
        const website = "youtude"
        console.log(username);

    }
    //console.log(website);

    two()
}
// one()

if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
//this part is similer to closer
    }
    //console.log (website);
}

//++++++++++++++++++ interesting +++++++++++++++

function addone(num){  //function
    return num + 1
}
addone(5)

//addTwo(5)   :- can't call a expretion function before the declaration 
const addTwo = function(num){  //function with expretions 
    return num + 2
}
addTwo(5)