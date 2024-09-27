// for of

//["", "", ""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//****************Maps*******************

//useing array
const map = new Map()
map.set ('IN',"India")
map.set ('USA',"United States of America")
map.set ('FR',"France")
map.set ('IN',"India")

// console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-' ,value);
}

//MAp using object
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
    'game2' : 'Subwa3'
}
for (const [key,value] of myObject) {
    // console.log(key, ':-' ,value);  //Error myObject is not iterable
    
}
