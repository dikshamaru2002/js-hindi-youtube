const name = "diksha"
const repocount = 20

// console.log(name + repoCount + "Value");
console.log(` Hello my name is ${name} and my repo count is ${repocount}`)

const gameName = new String('diksha-us-com')

console.log(gameName[0]);
console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "      diksha     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://diksha.com/diksha%20maru"

console.log(url.replace('%20','-'));
console.log(url.includes('diksha'));
console.log(gameName.split('-'));





