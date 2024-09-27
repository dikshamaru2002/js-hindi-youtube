// for in loop

//for in loop on Object
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
    'game3' : 'Subway'
}
for (const key in myObject) {
    // console.log(myObject[key]);
    }

for (const key in myObject) {
    // console.log(`${key} Shortcut i s for ${myObject[key]} `);
    }


 const programming =  ['js','rb','py','java','cpp']
 for(const key in programming){
    console.log(key);
    // console.log(programming[key]);
 }


 //+++++++++++ for in loop on map ++++++++++++++
 const map = new Map()
map.set ('IN',"India")
map.set ('USA',"United States of America")
map.set ('FR',"France")
map.set ('IN',"India")

// console.log(map);

for (const key in map) {
    // console.log(key);       // It's not posibale becouse map is not iterable
}