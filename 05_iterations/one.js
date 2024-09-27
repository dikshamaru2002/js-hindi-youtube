// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5)
        {
        // console.log("5 is best number");
        
        }
        // console.log(element);
        
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i+'*'+ j + '=' + i*j);
        

             
    }
}

let myarray = ["flash", "batman", "superman"]
// console.log(myarray.length)
for (let index = 0; index < myarray.length; index++) {
      const element = myarray[index];
    //   console.log(element);
          
}

//Break and Continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`)
        // break
        continue
    }
    // console.log(`value of i is ${index}`)
}

// while loop
let index = 0
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
}


//while loop using array
let m_array = ["flash","batman","superman"]
let arr = 0
while (arr < m_array.length){
    // console.log(`value is ${m_array[arr]}`);
    arr = arr + 1
}

//Do while loop
let score = 11 
do{
    console.log(`Score is ${score}`);
    score++
}
while(score <= 10);