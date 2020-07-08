// function worldBlanks(myNoun,myAdjective,myVerb,myAdverb){
//     let result = "";
//     result = ` The ${myAdjective} ${myNoun} ${myVerb} to the store ${myAdverb}`;
//     return result

// }

// console.log(worldBlanks("dog", "big", "ran","quickly"));

// var myList = [["cereal",2],["Bananas", 3],["Milk", 4],["Bread", 4]] ;
// console.log(myList[0][1])

// function ourReusableFunction() {
//     console.log("Heyya world");
// }

// ourReusableFunction();
// ourReusableFunction();

// function reusableFunction() {
//     console.log("Hi world!");
// }

// reusableFunction();
// reusableFunction();

// function ourFunctionWithArgs(a,b) {
//     console.log(a-b);
// }

// ourFunctionWithArgs(10,5);

// function withArgs(a,b){
//     console.log(a+b);
// }

// withArgs(10,5);

// function minusSeven(num){
//      return num-7
// }
// answer = minusSeven(10);

// console.log(answer)

//

// function welcomeToBooleans(){
//     return 2>3;
// }

// console.log(welcomeToBooleans());

// function trueOrfalse(wasThatTrue){
//     if(wasThatTrue){
//         return "Yes that was true";
//     }
//     return "No, that was false";
// }

// console.log(trueOrfalse(false));

// function testEqual(val){
//     if (val === 12){
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(testEqual(12));

// function compareEquality(a,b){
//     if(a === b){
//         return "Equal";
//     }
//     return "Not Equal";
// }

// console.log(compareEquality(10,"10"));

// function testSize(num){
//     if (num < 5){
//         return "Tiny";
//     }
//     else if(num < 10){
//         return "Small"
//     }
//     else if(num < 15) {
//         return "Medium"
//     }
//     else if(num < 20){
//         return "Large"
//     }
//     else {
//         return "Huge"
//     }
// }

// console.log(testSize(19))

//Golf Code
// var names = ["Hole-in-one","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home"]
// function golfScore(par, strokes){
//     if(strokes === 1){
//         return names[0];

//     }else if(strokes <= par-2){
//         return names[1]
//     }else if(strokes === par-1){
//         return names[2]
//     }else if(strokes === par){
//         return names[3]
//     }else if(strokes === par +1){
//         return names[4]
//     }else if(strokes === +2){
//         return names[5]
//     }else if(strokes === par+3){
//         return names[6]
//     }

// }
// console.log(golfScore(5,4))

// function caseInSwitch(val) {
//     var answer = ""
//     switch(val) {
//         case 1 :
//             answer = "alpha"
//             break;
//         case 2 :
//             answer = "beta"
//             break;
//         case 3 :
//             answer = "gamma"
//             break;
//         case 4 :
//             answer = "delta"
//             break;
//         default:
//             answer = "Not Here"
//             break;
//     }
//     return answer
// }
// console.log(caseInSwitch(5))

// function getSize(val){
//     answer = ""
//     switch(val){
//         case 1 :
//         case 2 :
//         case 3 :
//             answer = "Low"
//             break;
//         case 4 :
//         case 5 :
//         case 6 :
//             answer = "Medium"
//             break;
//         case 7 :
//         case 8 :
//         case 9 :
//             answer = "High"
//             break;
//     }
//     return answer
// }

// console.log(getSize(9))

// function chainToSwitch(val){
//     var answer = ""
//     switch(val){
//         case "Bob":
//             answer = "Marley";
//             break;
//         case 1 :
//             answer = "There is no #1 ";
//             break;
//         case 99 :
//             answer = "Missed me by this much";
//             break;
//         case 7 :
//             answer = "Ate Nine";
//             break
//     }
//     return answer
// }

// console.log(chainToSwitch(7))

// function isLess(a,b){
//     return a < b
// }
// console.log(isLess(20,15))

// var ourDog = {
//     "name": "camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// }
// ourDog.bark = "WoofWoof!"
// console.log(ourDog.name = "Happy Camper")
// console.log(ourDog["name"])
// delete ourDog.bark
// console.log(ourDog)

// var myObj = {
//     gift:"pony",
//     pet:"kitten",
//     bed:"sleigh"
// };

// function checkObj(prop){
//     if(myObj.hasOwnProperty(prop)){
//         return myObj[prop]

//     } else{
//         return "Not Found"
//     }
//     return
// }

// console.log(checkObj("hello"))

// var collection = {
//     "2548":{
//         album:"Slippery when wet",
//         artist: "Bon jovi",
//         tracks:["Let it Rock", "You give love a bad Name"]

//     },
//     "2468":{
//         album:"1999",
//         artist:"Prince",
//         tracks: [
//             "1999",
//             "Little red corvette"
//         ]
//     },
//     "1245":{
//         artist:"Robert Palmer",
//         tracks:[]
//     },

//     "5439":{
//         album:"ABBA Gold"
//     }

// }

// var collectionCopy = JSON.parse(JSON.stringify(collection))

// function updateRecords(id,prop,value){
//     if(value === ""){
//         delete collection[id][prop];
//     }else if(prop === "tracks"){
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(value);

//     }else{
//         collection[id][prop] = value;
//     }
//     return collection;
// }

// console.log(collectionCopy)

// console.log(updateRecords(5439, "artist", "ABBA"))
// console.log(updateRecords(1245, "tracks", "test"))

// var myArray = [];
// var i = 0;

// while (i < 10) {
//     myArray.push(i)
//     i++;
// }

// console.log(myArray);

// var myArray = [];
// for(var i = 0; i < 10; i+=2){
//     myArray.push(i);
// }
// console.log(myArray)

// var myArray = []

// for(var i = 10; i > 0; i --){
//     myArray.push(i)
// }
// console.log(myArray)

// var myArray = [2,3,4,5,6]
// var total = 0

// for(var i = 0; i < myArray.length; i++){
//     total += myArray[i];
// }

// console.log(total)

// function multiplyAll(arr){
//     var product = 1;
//     for (var i = 0; i < arr.length; i++){
//         for (var j = 0; j < arr[i].length; j++){
//             product *= arr[i][j]
//         }

//     }
//     return product;
// }

// var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
// console.log(product)

// var myArray = [];
// var i = 10;

// do{
//     myArray.push(i);
//     i++;
// }while(i < 5)

// console.log(i,myArray)

// var contacts = [
//     {
//         firstName:"Akira",
//         lastName:"Larine",
//         number: "0543236543",
//         likes:["Pizza","Coding","Brownie Points"]

//     },
//     {
//         firstName:"Harry",
//         lastName:"Porter",
//         number: "0994372684",
//         likes:["Hogwarts","Magic","Hagrid"]
//     },
//     {
//         firstName:"Sherlock",
//         lastName:"Holmes",
//         number: "0487345643",
//         likes:["Intriguing Cases","Violin"]
//     },
//     {
//         firstName:"Kristian",
//         lastName:"Vos",
//         number: "unknown",
//         likes:["Javascript","Gaming","Foxes"]
//     }
// ];

// function lookUpProfile(name,prop){
//     for (var i = 0; i < contacts.length; i++){
//         if (contacts[i].firstName === name){
//             return contacts[i][prop] || "No Such property"
//         }
//     }
//     return "No Such Contact"

// }

// var data = lookUpProfile("Harry","likes")

// console.log(data)

// function randomFraction() {
//    return Math.random();
// }

// console.log(randomFraction())

// var randomNumberBetween0and19 = Math.floor(Math.random()*20);

// function randomWholeNum(){
//     return Math.floor(Math.random()*10);
// }

// console.log(randomWholeNum());

// function ourRandomRange(Min,Max){
//     return Math.floor(Math.random() * (Max - Min + 1 ) ) + Min ;

// }

// console.log(ourRandomRange(5,10));

// function convertToInteger(str){
//     return parseInt(str)
// }

// int = (convertToInteger("10"))

// console.log(int+=10)

// function convertToInteger(str){
//     return parseInt(str,2)
// }
// console.log(convertToInteger("11111111"))

// function checkEqual(a,b){
//     //return a===b ? true:false
//     return a===b
// }

// function checkSign(num){
//     return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"
// }

// console.log(checkSign(-1))

// var magic = function() {
//     return new Date()
// }

// console.log(magic())

// var magic = ()=>{
//     return new Date()
// }
// console.log(magic())

// var magic = ()=> new Date()

// console.log(magic())

// const myConcat = (arr1,arr2)=> arr1.concat(arr2);

// console.log(myConcat([1,2],[3,4,5]));

//Destructuring
// const recipe = {
//   name: "red lentil dahl",
//   timeInMinutes: 30,
//   ingredients: ["red lentils", "cumin", "tumeric"],
// };

// // const name = recipe.name
// // const ingredients = recipe.ingredients

// const { name, ingredients } = recipe;
// console.log(recipe, name, ingredients);

// const spices = ["cumin", "blackpepper", "papprika"];

// const [first, second] = spices;
// console.log(first, second);

// function cook({name,ingredients}) {
//   console.log(name);

//   console.log(ingredients);
// }

// cook(recipe);

// const ingredients = {
// //   tea: "black",
//   milk: "soy",
//   sweetener: "honey",
//   spices: ["ginger", "cardamon", "cinnamon", "nutmeg"],
// };
// function prepareChai({ tea = "regular", milk, sweetener, spices }) {
//   console.log(`mix the ${tea} tea with the ${spices} in a small pot.
//   Add a cup of water and bring to boil. Boil for 2-3 minutes.
//   Add ${milk} and ${sweetener}. Simmer for 3 minutes.
//   Serve masala chai hot or warm`);
// }

// prepareChai(ingredients);

// const spices = ["cumin", "blackpepper", "papprika"];
// const [first, ...rest] = spices;
// console.log(first, rest);

// strings and interpolation
// const language = "English"

// console.log(language.includes("n"))
// console.log(language.startsWith("Eng"))
// console.log(language.endsWith("sh"))
// console.log(language.repeat(3))

// console.log(`I love to speak ${language}`)

// const country = "Bulgaria";
// const city = "Sofia";

// if (country.includes("Bulg")) {
//   console.log("The Country starts with Bulg");
// }if (city.startsWith("So")) {
//   console.log("The name starts with So");
// }if (city.endsWith("a")) {
//   console.log("The name ends with a");
// }

// console.log(`The capital of ${country}` + ` is the city of ${city}`);

//Regular function
// const numbers = [1,2,3,4,5,6]
// const doubleNumbers = numbers.map(
//     function(number){
//         return number * 2
// })
// console.log(doubleNumbers)

//Regular function transformed into a Arrow functions

// const numbers = [1, 2, 3, 4, 5, 6];
// let doubledNumbers = numbers.map((num = "") => { return num * 2});
// console.log(doubledNumbers);

// const primeNumbers = [1,2,3,4,5,6]
// let isPrime = primeNumbers.filter(num => num % 2 === 0 )
// console.log(isPrime)

// console.log(breed)
// const breed = "cocker spaniel"

//fizzbuzz

// for (let i = 0; i < 101; i++) {
//   if (i % 15 == 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }
// var processed = 0;

// function processedArgs(num){
//   return (num + 5) / 2;
// }

// processed = processedArgs(7);
// console.log(processed)

function nextLine(arr, num) {
  arr.push(num);
  let removed = arr.shift();
  return removed

}

console.log(nextLine([1,2,3,4], 5));