/* // hello world program

// console.log('bhanu');
 */

// variable start
// let const and var

/* var firstName = "Bhanu";
console.log(firstName);
// change value
firstName = "Pratap";
console.log(firstName);
 */


/*
//naming variable
// you can use only undersore _ or dollar symbol
// first_name (valid)
// _firstname (valid)

// first$name (valid)
// $firstname (valid)

// you ***cannot** use spaces
// var first_name = "Bhanu"; // snake case writing
// var firstName = "Bhanu"; // camel case writing
// first name (invalid)

// convention
// start with small letter and use camelCase

// declare constant
/* const pi = 3.14;
console.log(pi); */




/*
//string indexing

// let firstName = "Bhanu Pratap";

// B h a n u   P r a t a p
// 0 1 2 3 4 5 6 7 8 9 10 11

/* console.log(firstName[11]);
console.log(firstName.length);
console.log([firstName.length-3]); */

//last index : length -1




/*
// some methods
// trim()
//toUpperCase()
//toLowerCase()
//slice() */

/* let firstName = "   Bhanu        ";

console.log(firstName);
console.log(firstName.length);
firstName = firstName.trim();
console.log(firstName);
console.log(firstName.length);
firstName = firstName.toUpperCase();
firstName = firstName.toLowerCase();
console.log (firstName);

 */
// start index
// end index


/*
let newString = firstName.slice(0 , 3);
console.log(newString); */




// convert number into string  and string into number

// let myStr = "34";
// console.log(typeof myStr);   // string


// trick h--> + lga do aage ya fir number() aise likho
/* let myStr = +"34";
console.log(typeof myStr);   // number


let age = 18;
age = String(age);
console.log(typeof age);    // string */



/*
// string concatenation --->> just simpply add two string
let string1 = "17";
let string2 = "18";

// let newString = string1 + string2;
// console.log(newString);    //1718

let newString = +string1 + +string2;
console.log(newString);   //35
console.log(typeof newString);   //number
 */


/*
// template string also called template literal
let age = 24;
let firstName = "Bhanu";

let aboutMe = `my name is ${firstName} and my age is ${age}`;
console.log(aboutMe); */




// undefined and null

/* let firstName;
console.log(typeof firstName);   // undefined
firstName = "Bhanu";
console.log(typeof firstName , firstName);   // string

 */

/* // null
let myVariable = null;
console.log(typeof myVariable);   // object
console.log(typeof null);   // ye output object aata h  to ye bug , error hai js m */

/*
// BigInt
let myNumber = BigInt(12);  // ye bhi bigInt h
let sameMyNumber = 123n;    // ye v h bs 2 tareeke dikhane k liye yesa likha
 console.log(myNumber);
 console.log(Number.MAX_SAFE_INTEGER);
 console.log(myNumber+ sameMyNumber);
 */


// booleans & comparison operator
/*
 // boolean means true and false

//  let num1 = 7;
//  let num2 = "5";
//  console.log(num1<num2);   // false


//  let num1 = 7;
//  let num2 = "18";
//  console.log(num1<num2);    //true
 */


// != vs !==

// let num1 = 7;
// let num2 = 8;
/*
let num1 = 7;
let num2 = "7";

console.log(num1 != num2);   //false
console.log(num1 !== num2);      //true */

/*
// truthy and falsy value
// 5 falsy values are

// 1- false, 2- "" , 3- null , 4- undefined ,  5- 0
 */

// 2 truthy values
// "abc"
// 1, -1


/* // if else condition statment start


// let age = 19;
// if (age>=18){
//     console.log("yes u can drink daaru");
// } else {
//     console.log ("nahi tum ni pee skte");
// }



// let age = 23;
// if (age%2===0){
//     console.log("even");
// } else{
//     console.log("odd");
// }


// let firstName = 0;
// if(firstName){
//     console.log(firstName);
// }else{
//     console.log("firstName is empty h yrrrr");
// }
 */



// ternary operator

// let age = 3;
// let drink;

// if (age <= 5){
//     drink ="chocolate khao jaoo";
// }else{
//     drink = "daru";
// }

// console.log(drink);

// ternary operator or conditional operator
// let age = 2;
// let drink = age <= 5 ? "chocolate" : "daru" ;
// console.log(drink);




// && and || or operator

//both condition i'll show you in single example

/*
let firstName = "Bhanu";
let age = 14;

if (firstName[0] === "B" || age > 18){
    console.log("inside if");
}else{
    console.log("inside else");
} */


// nested if else

// winning number 19
// 19 your guess is right
//17 too low
// 20 too high

/*
 let winningNumber = 19;
 let userGuess = +prompt("Guess a number");

 if (userGuess === winningNumber){
    console.log("your guess is right!!");
 }else {
    if(userGuess<winningNumber){
        console.log("too low !!!");

    }else{
        console.log("too high !!!");
    }
 } */

/*
//  if
// else if
// else if
// else if
// else

let tempInDegree = 44;


if(tempInDegree < 0){
    console.log("extremely cold outside");
}else if(tempInDegree < 16){
    console.log("It is cold outside");
}else if(tempInDegree < 25){
    console.log("wheather is okay ");
}else if(tempInDegree < 35){
    console.log("lets go for swim");
}else if(tempInDegree < 45){
    console.log("turn on AC");
}else{
    console.log("too hot!!");
}

console.log("hello");

 */



/*
//switch case    // switch statement


// let day = 7;


// if(day === 0){
//     console.log("Sunday");
// }else if(day ===1){
//     console.log("Monday");
// }else if(day ===2){
//     console.log("Tuesday");
// }else if(day ===3){
//     console.log("Wednesday");
// }else if(day ===4){
//     console.log("Thrusday");
// }else if(day ===5){
//     console.log("Friday");
// }else if(day ===6){
//     console.log("Saturday");
// }else{
//     console.log("Invalid Day");
// }


let day = 7;

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
} */




/* // while loop
// print 0 to 9 numbers
 let num = 0;
 while(num <= 9){
    console.log(num);
    num++;
 }

//  console.log(`current value of num is ${num}`); */



// while loop example

/*
let totale = 0;
let i = 0;

while (i<=10){
    totale = totale+i;
    i++;
}

console.log(totale); */




// (n*(n+1))/2   ka formulla lagaya h
/*
let sankhya = 100;
let total = (sankhya*(sankhya+1))/2;
console.log(total);

 */


/*
// for loop
// print 0 to 9 by for loop

for(let i = 0; i<=9; i++){
    console.log(i);
}

 */

/*
// one more for loop example

let total = 0;
let num = 100;

for (let i = 1; i <= num; i++){
    total= total+i;
}
console.log(total); */


/*
// break and continue keyword

for (let i = 1; i<=10; i++){
    if(i===4){
        break;
    }
    console.log(i);
}
// here only print till 3


for (let i = 1; i<=10; i++){
    if (i===4){
        continue;
    } console.log(i);
}

// here 4 is skiped */




/* // do while loop
// let i = 1
// while(i<=9){
//     console.log(i);
// i++;
// }

// ab is upar wale normal example ko do while m change krte h

let i = 1;
do{
    console.log(i);
    i++;
}while(i<=9);
 */




// diffrence between for, while and do while loop

//https://www.reddit.com/r/learnjavascript/comments/jd7cog/javascript_loops_for_loop_while_loop_and_dowhile/

// 1) for loop= repeats execution until condition is satisfied
// 2) while loop= executes until condition become false
// 3) do while loop= executes until condition become false and always executes once before condition check





/* // introduction of array

// defination - ordered collection of types

// let fruits = ["apple", "banana", "mango", "grapes"];
// let num = [1 ,2 ,3, 4];
// let mix = ["apple", "banana", 1, 2, 3.4 , "string", null , undefined];

// console.log(mix);
// console.log(num);
// console.log(fruits);
// console.log(fruits[3]);


let fruits = ["apple", "mango", "banana" ,"graps"];
let obj = {} ;            // object literals
// console.log(fruits);
// fruits[1] = "gwava";
// console.log(fruits);

console.log(typeof fruits);    // object
console.log(typeof obj);          // object
console.log(Array.isArray(fruits));         // true
console.log(Array.isArray(obj));              // false
 */


/*
 // push and pop method in array and shift and unshift

 let fruits = ["apple", "mango", "grapes"];
 console.log(fruits);
  //push      peeche add hua

  fruits.push("kiwi");
  console.log(fruits);

//pop        peeche s remove hua
 let poppedFruit = fruits.pop();
 console.log(fruits);
 console.log("popped fruits is", poppedFruit);   // kiwi

 //shift               aage s remove hua
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit);     // apple


//unshift              aage se add hua
fruits.unshift("banana");
fruits.unshift("jo hme pasand h wahi");
console.log(fruits);
 */


/*
// primitive Vs refrence type
let num1 = 6;
let num2 = num1;

console.log("value of num1 is", num1);       // 6
console.log("value of num2 is", num2);       // 6

num1++;
console.log("after incriment num1");
console.log("value is num1 is", num1);     // 7    because only num1 increment hua h , num2 to wahi phle wala num1 hi h
console.log("value is num2 is", num2);     // 6
 */

/* //refrence type
//array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);            // ["item1", "item2"];
console.log("array2", array2);            // ["item1", "item2"];

array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);           // ["item1", "item2", "item3"];
console.log("array2", array2);           // ["item1", "item2", "item3"];

 */



// cloning of array   (hmesha clone krne k liye slice method use kro because ye sbse fast h)

//The slice() method returns ---> selected elements in an array, as a [new array].

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method [does not change the original array].
// array.slice(start, end)    <-- syntax

/*
// tareeka no.1
let array1 = ["item1", "item2"];
let array2 = array1.slice(0);
console.log(array1);
console.log(array2);
 */


/* // tareeka no. 2
// take empty array and then concate  or add first array in empty array concatenate two array

let array1 = ["item1", "item2"];
let array2 = [].concat(array1);
console.log(array1);
console.log(array2);
 */


/* //tareeka no. 3   we use spread operator (new way)
// spread operator mtlb    ... 3 dot lga dene h

let array1 = ["item1", "item2"];
let array2 = [...array1];
console.log(array1);
console.log(array2);
 */


/*
// let array1 = ["item1", "item2"];
// let oneMoreArray = ["item3", "item4"]
// let array2 = [...array1, ...oneMoreArray];

// array1.push("item3");

// console.log(array1===array2);    // false
// console.log(array1)             //['item1', 'item2', 'item3']
// console.log(array2)            //['item1', 'item2', 'item3', 'item4']
 */





/*
// for loop in array

let fruits =["apple", "mango", "grapes", "banana"];

// for (let i=0; i<=9; i++){
// console.log(i);
// }

// console.log(fruits.length);                   // 4
// console.log(fruits[fruits.length-2]);         // grapes

let fruits2 = [];
for(let i=0; i<fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);           //[ 'APPLE', 'MANGO', 'GRAPES', 'BANANA']

 */


/*

// use const for creating array
//heap memory ["mango", "banana", "jamun"]  ex.-0x11

const fruits = ["apple", "mango"]; // 0x11
fruits.push("banana");
console.log(fruits);              //[ 'apple', 'mango', 'banana']

 */


/*
//while loop in array
const fruits = ["apple", "banana", "grapes", "mango"];
const fruits2 = [];

let i = 0;
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);          //[ 'APPLE', 'BANANA', 'GRAPES', 'MANGO']


 */


/*
// for of loop in array
const fruits = ["apple", "banana", "grapes", "mango"];
const fruits2 = [];

// for (let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());

// }
// console.log(fruits2);



for (i=0; i<fruits.length; i++){
console.log(fruits[i]);
}
 */




/*
//for in loop in array
const fruits = ["apple", "banana", "grapes", "mango"];
const fruits2 = [];

for (let fruit in fruits){
    fruits2.push(fruits[fruit].toUpperCase());

}
console.log(fruits2);

 */



/*
//array destructuring
const myArray = ["value1", "value2", "value3" ,"value4"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("value of myVar1 is", myVar1);  //value of myVar1 is value1
// console.log("value of myVar2 is", myVar2);  //value of myVar2 is value2


let [myVar1 , myVar2 , ...myNewArray] = myArray;
console.log("value of myVar1 is", myVar1);     //value of myVar1 is value1
console.log("value of myVar2 is", myVar2);   //value of myVar2 is value2
console.log(myNewArray);
// rest of values stroed in myNewArray and the way is - ...myNewArray
// ['value3', 'value4']
 */



/*
//object refrence type
// array are good but not sufficient for real world data
// object store key value pairs
// objects dont have index

const person = {
    name: "Bhanu",
    age: 24,
    profession: "frontend_developer",
    hobbies: ["meditation", "listening", "singing"]
}

console.log(person);
console.log(person.age);

// adding extra key value pair

person["person"] ="male";
console.log(person);
 */



/* // diffrence between dot and break notation
const key = "email";
const person ={
    name: "Bhanu",
    age: 24,
    profession: "frontend_developer",
    hobbies: ["meditation", "listening", "singing"]
}

// console.log(person["hobbies"]);
// ab hme mail id chahiye h upar define h key m pr hm person.email likhege to output m name - bhanu, age- 24 aise likhte likhte key- bhanu@gmail aayega pr hme to  gmail - bhanu@gmail chahiye h key- bhanu@gmail nhi to key k andr gmail store h to key ko [] isme likhege

person[key] = "bhanupratappatkar@gmail.com";
console.log(person);
 */




// **********
// how to iterate object     -- isme sirf 2 type hi hote h (1) for in or  (2)object .key
// or array m hmne padha tha 4 type k.... while loop , for , for in or for of loop ......
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]
// }



/*
// for in loop

 for (let dekho in person){
    console.log(`${dekho} : ${person[dekho]}`);
    // console.log(dekho, " : " , person[dekho]);
 }
 */

//  console.log(typeof (Object.keys(person)));
//  const val = Array.isArray((Object.keys(person)));
//  console.log(val);


// object.key
//  for(let key of Object.keys (person)){
//     console.log(person[key]);
//  }

// *********


/*
// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// hme output chahiye h ki objkey1 = myvalue1 ho jaye .. mtlb aise poora hmne chote s m likh diya


// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }
// console.log(obj);   // hme jo output chahiye tha mil gya lekin ye theek code ni likha h hmne

// const obj = {
//     [key1] : value1,
//     [key2] : value2,
// }
// console.log(obj);    // we recieve same output  that is actually a method that we need

const obj = {};
obj[key1] = value1;
obj[key2] = value2;
console.log(obj);

// we recieve same output
// this is called computed properties */




/*
// spread operator mtlb wahi 3 dot ... aise
// firstly we see example jo hm phle v padh chuke h upar spread operator m

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// // const newArray = [...array1, ...array2];
// // console.log(newArray);       //[1, 2, 3, 4, 5, 6]

// // one more example
// // const newArray = [..."123456789"];
// // console.log(newArray);    //['1', '2', '3', '4', '5', '6', '7', '8', '9']




// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
  };
  const obj2 = {
    key1: "valueThodiAalagSi",
    key3: "value3",
    key4: "value4",
  };


  //const newObject = {...obj1, ...obj2};
  //console.log(newObject);   //{key1: 'valueThodiAalagSi', key2: 'value2', key3: 'value3', key4: 'value4'}

  //const newObject = {...obj2, ...obj1};
  //console.log(newObject);   //{key1: 'value1', key3: 'value3', key4: 'value4', key2: 'value2'}

 //const newObject = { ...obj2, ...obj1, key69: "value69" };
 //console.log(newObject);   //{key1: 'value1', key3: 'value3', key4: 'value4', key2: 'value2', key69: 'value69'}

 //const newObject = { ...["item1", "item2"] };
 //console.log(newObject);          //{0: 'item1', 1: 'item2'}

 //const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
 //console.log(newObject);  //{0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j', 10: 'k', 11: 'l', 12: 'm', 13: 'n', 14: 'o', 15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't', 20: 'u', 21: 'v', 22: 'w', 23: 'x', 24: 'y', 25: 'z'}
 */



/*
// object destructuring
const yashrajFilms ={
    movieName : "mujheNahiPta",
    famousSong : "kahaToNahiPta",
    releaseDate : "chutiyaHoKaBe",
    suno : "bhadMeJao",
    aurSunnaHai : "nahiBhaiya",
};

// let { movieName, famousSong, releaseDate } = yashrajFilms;
// console.log(yashrajFilms);

// let { movieName, famousSong, releaseDate, ...bakiBacheHueChaheKoiNaamDedo } = yashrajFilms;
// console.log(yashrajFilms);
// console.log(bakiBacheHueChaheKoiNaamDedo);

 */




/*
// objects inside array
// very useful in real world applications

const users = [
    { userId: 1, firstName: 'Bhanu', gender: 'male' },
    { userId: 2, firstName: 'Pratap', gender: 'male' },
    { userId: 3, firstName: 'Patkar', gender: 'male' },
]
for (let dekho of users) {
    console.log(dekho.firstName);
    console.log(dekho.gender);
}
 */



/*
//nested destructuring

const users = [
    { userId: 1, firstName: 'Bhanu', gender: 'male' },
    { userId: 2, firstName: 'Pratap', gender: 'male' },
    { userId: 3, firstName: 'Patkar', gender: 'male' },
]

// const [user1 , user2 , user3] = users;
// console.log(user1);        //{ userId: 1, firstName: 'Bhanu', gender: 'male' }
// pr hme poori same line wala output nahi chahiye hme object m s destructuring krna h to {} lga denge

// becch ki value maan lo nahi chahiye to , , lga k khali jagah chord di
// const [{firstName}, , {gender}] = users;
// console.log(firstName);           //Bhanu
// console.log(gender);              //Male 


// const [{ firstName: user1FirstName, gender: genderh1 }, { firstName: user2name, gender: genderh2 }, { firstName: user3FirstName, gender: genderh3 }] = users;
// console.log(user1FirstName);
// console.log(genderh1)        //Bhanu
// console.log(user2name);
// console.log(genderh2)
// console.log(user3FirstName);
// console.log(genderh3);


// if we want to change value then
// const [{firstName: user1FirstName}, , {gender: user1GenderChange}] = users;
// console.log(user1FirstName);             // Bhanu
// console.log(user1GenderChange);            //male
 */





/*
// most imp topic in javascript
//function

//  function ganagao (){
//     console.log("saiyaannnnn......");
//  }

// ganagao();


// function chaloKuchjode(num1, num2){
//     return num1 + num2;
// }

// // console.log(chaloKuchjode (4, 5));
// const total = chaloKuchjode(4,5);
// console.log(total);





 /*

// check krna h even h ya nahi
// // aise check krege... input m 1 number dalege 2 s divide ho jayega or ans 0 hoga to even wrna odd hoga

// function yeEvenHai(sankhya){
//  return sankhya % 2 === 0;
// }
// console.log(yeEvenHai(4));            // true
// console.log(yeEvenHai(7));            // false





// // input m string likhege or output m stirng ka first character chahiye  h
// function suruCharacter(koiBhiString){
//     return koiBhiString[0];
// }
// console.log(suruCharacter("Bhanu"));



// input m array denge or output m target dekr check krege ki input m wo array present h ya nhi

function dhundhoTarget(array, target) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

const myArray = [5,7,8,3,6];
console.log(dhundhoTarget(myArray , 8));     // 2  index show kr rha h
console.log(dhundhoTarget(myArray , 9));     // -1

 */




/*
// function expression
// upar yahi padha tha to isi example s smjh lete h
// function ganagao() {
//     console.log("saiyaannnnn......");
// }

// lo dekho aise bnega

// const ganagao = function(){
//     console.log("saiyaannnnn......");
// }
// ganagao();           //saiyaannnnn......



// doosra example ye tha ab isse smjho
// function chaloKuchjode(num1, num2){
//     return num1 + num2;
// }

// // console.log(chaloKuchjode (4, 5));
// const total = chaloKuchjode(4,5);
// console.log(total);

// lo dekh lo aise bnega

// const chaloKuchjode = function(num1, num2){
//     return  num1 + num2;
// }
//  console.log(chaloKuchjode (4, 5));




// arrow function
//1st example s smjho

// function ganagao() {
//     console.log("saiyaannnnn......");
// }

//yese bnega arrow function

// const ganagao = () => {
//     console.log("saiyaannnnn......");
// }
// ganagao();               //saiyaannnnn.....



// 2nd example s b dekh lo

// function chaloKuchjode(num1, num2){
//     return num1 + num2;
// }

// // console.log(chaloKuchjode (4, 5));
// const total = chaloKuchjode(4,5);
// console.log(total);


// dekho aise bnega arrow function

// const chaloKuchjode = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(chaloKuchjode (4, 5));
 */



/* // Hoisting:- hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration



hello();

function hello() {
    console.log("suno na");
}

// yesa function expressoin , arrow function , let and var lga kr ni kr skte error aati h


 */



/* // function inside function
function appBanaya (){
    const ekAurAppBanaya = () => {
        console.log("ye h function inside function");
    }

    const doosraAppBanaya = (num1 , num2) =>{
        return num1 + num2;
    }

    console.log(doosraAppBanaya(6, 5));
}
appBanaya();            // 11


 */




/*
// lexical scope :-  the lexical scope is the scope of a variable
// or
// function
// based on where it is defined in the source code.


const myVar = "value1";

function myAppHai (){

    function myFunc(){
        // const myVar = " shayad value koi aur h";
        const myFunc2 = () =>{
            console.log(" Myfunc k andr dekho konsi value h -->>>", myVar);
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc();
}

myAppHai();

// output:=
// value1
// Myfunc k andr dekho konsi value h -->>>  shayad value koi aur h

// pr agr ["const myVar = " shayad value koi aur h";"] is value ko comment kr de to myfunc2 k andr jo myvar h usme value1 print hogi jo sbse upar define h

// output:-
// value1
// Myfunc k andr dekho konsi value h -->>> value1
 */




/* // block scope vs function scope


// let and const are block scope

//block 1 banaya
{
let firstName = "bhanu"
}
console.log(firstName);

//block 2 banaya
{
}

//dono ka scope alg alg h dono m firstName bna skte h .. dono alg alg hi rhege

// output :- firstName is not defined bcz wo let s bna h or ek scope k andr h to tum scope k bahar usko access nahi kr skte



// var is function scope..... iske case m hm scope k andr define krke bahar access kr skte h.... mtlb background m poora function jaise run hota h ye.... jaise var s kahin pr bhi define krke poori body m kahin bhi access kr skte h

{
    var firstName = "Bhanu"
}

console.log(firstName);



if (true) {
    var firstName = "Bhanu";
    console.log(firstName);
}                                   //Bhanu

//scope k bahar bhi access kr skte h dekho
 console.log(firstName);      //bhanu --- same output


 pr yaha var ki jagah let ya const s bna hota to scope bahar access na kr pate 
 */




/* 
// default parameters 

function addTwoVar(a, b) {
    if (typeof b === "undefined") {
        b = 0;
    } return a + b;
}
console.log(addTwoVar(4,5));         //9

// agr hum,,,.... "b" ki value na de maan lo to apne aap kuch value rhni chahiye this is called default value

function addTwoVar (a,b=2){
    return a+b;
}
console.log(addTwoVar(4,));       //6
 */




/* // rest parameter   (...  aise lagate h)


// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);



function addAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    return total;
}
console.log(addAll(4, 5, 6, 7, 8, 9));         //39

 */


/*
// spread operator vs rest operator
// image attached in html file

//  while the spread operator expands elements of an iterable, the rest operator compresses them. 

diff 1. Spread Operator expands an iterable into its individual elements.
 
diff 2. Rest Operator collects multiple elements and condenses them into a single array.
*/




/* // parameter destructuring

// ye object m hota h aur jb
// hm react padhege tb bahut hi jyada use hoga to ache s seekh lo

const person = {
    firstName: "Bhanu",
    age: 24,
    kyaKaamKrtaHai: "webdeveloper hai",
    kbse: 2023,
    gender: "male"
}

function printDetails({ firstName, age, gender, kyaKaamKrtaHai }) {
    console.log(firstName)
    console.log(gender)
    console.log(age)
    console.log(kyaKaamKrtaHai)
}

printDetails(person);
 */



/* // callback function
//callback is a function which is to be executed after 
// another function has finished execution.

function myfunc2(name) {
    console.log("myfunc2 k andr dekho");
    console.log(`mera naam tumhe pta h kya h, ${name}`);
}


function Myfunc(callback) {
    console.log("helllo ...A G sunte hoooooo");
    callback("Bhanu");
}

Myfunc(myfunc2);
// output:- 
// helllo ...A G sunte hoooooo
// myfunc2 k andr dekho
// file1.js:1245 mera naam tumhe pta h kya h, Bhanu
 */





/* 
// function returning function

function Myfunc(){
    function hello (){
        return "hello world"
    }
    return hello;
}

console.log(Myfunc);      
//output:- 
// f Myfunc(){
//     function hello (){
//         return "hello world"
//     }
//     return hello;
 */

