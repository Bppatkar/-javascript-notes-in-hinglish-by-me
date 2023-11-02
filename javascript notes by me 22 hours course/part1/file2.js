
// iterate mtlb alg alg element ko access krna... (accessing each element of an array.)

// important array method
// forEach
// map
// filter
// reduce


/* //forEach
//Use: To iterate over each element in the array and perform an action on each element.

// example no. 1


const numbers = [3, 2, 4, 9, 7];

// // same output aayega bs upar wale m sare numbers dikh rhe h or neeche m jo index daloge sirf wo dikhega

// // by normal

// function myNewFunc (numbers  , index){
//     console.log(`here number is ${numbers} and its index is ${index}`);
// }

// const indexToUse = 4;
// myNewFunc(numbers[indexToUse], indexToUse);       //here is index 4 and number is 7


// // by foreach

// numbers.forEach(function(numbers , index){
//     console.log(`here number is ${numbers} and its index is ${index}`);
// })


//  numbers.forEach(function(numbers, index){
//     console.log(numbers*3 , index);
//  })





// example no. 2

const users = [
    { firstName: "Bhanu", age: 24 },
    { firstName: "Patkar", age: 22 },
    { firstName: "Pratap", age: 23 },
    { firstName: "Chandan", age: 21 },
    { firstName: "Anurag", age: 25 },
]

// users.forEach(function (padho) {
//     console.log(padho.firstName);
// })

// // same thing using arrow function
// users.forEach((padho, index) => {
//     console.log(padho.age ,index);
// })


// for (let padho of users){
//     console.log(padho.age);
// }
 */






/*
// map method
//Use: To [create a new array] by applying a function to each element of the original array.


// upar wala same example map method s dekhege

const numbers = [3, 2, 4, 9, 7];

numbers.map(function(numbers , index){
    console.log(`numbers is ${numbers} and index is ${index}`);
})



// example no. 2
const users = [
    { firstName: "Bhanu", age: 24 },
    { firstName: "Patkar", age: 22 },
    { firstName: "Pratap", age: 23 },
    { firstName: "Chandan", age: 21 },
    { firstName: "Anurag", age: 25 },
]

const exampleDoosra = users.map((naamKuchBhiRakho)=> {
    return naamKuchBhiRakho.firstName;
});

console.log(exampleDoosra);


// example no. 3... (google s nikala)
const people = [{ name: "John" }, { name: "Mary" }, { name: "Peter" }];

const names = people.map(person => person.name);

console.log(names);     // ["John", "Mary", "Peter"]



*/



/* // filter method
//Use: To [create a new array] containing elements that meet a specific condition.

const numbers = [3, 2, 4, 9, 7];

const evenNumbers = numbers.filter((naamKuchBhiRakho) => {
    return naamKuchBhiRakho % 2 === 0;
})
console.log(evenNumbers);
 */



/*
// reduce method
//Use: To reduce an array to a ***single value,**** often for calculating sums, averages, or other aggregates.

const numbers = [3, 2, 4, 9, 7];

// aim : sum of all the numbers in array

const sum = numbers.reduce((accumulator , joValueDiHaiArrayMUpar)=>{
    return accumulator + joValueDiHaiArrayMUpar;
} , 0);

// ye last m maine value 0 isiliye likh di jisse ye defalult value jaise kaam kre.. 100 likhoge to output 125 aayega

console.log(sum);              //25

// ye reduce method aise kaam krta h
// accumulator , joValueDiHaiArrayMUpar,  return
// 3                 2                        5
// 5                 4                        9
// 9                 9                        18
// 18                7                        25


// real world use kaha hota h dekho....... example

const cartItemAdd = [
    {productId : 1 , productName :"Mobile" , price : 12000},
    {productId : 2 , productName :"Tablet" , price : 32000},
    {productId : 3 , productName :"laptop" , price : 54000},
]

// normal for loop s aise hoga dekho

//let totalPrice = 0;

for (let i = 0; i < cartItemAdd.length; i++) {
    totalPrice += cartItemAdd[i].price;
}

console.log("Total Price: " + totalPrice);

// ab reduce wale s dekho  --- TP mtlb (total price)

const totalAmount = cartItemAdd.reduce((tp , joProductValueDiHaiWo)=>{
 return tp + joProductValueDiHaiWo.price;
}, 0);

console.log(totalAmount);           //98000




// ye reduce method aise kaam krta h
// total price      joProductValueDiHaiWo     return
// 0                {}                         12000
// 12000            32000                      44000
// 44000            54000                      98000

 */




/*
// sort method
//Use: To sort the elements of an array.
// provide comparison function


// ASCII TABLE
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125


// sort

// const userNames = ['Bhanu', 'abcd', 'mohit', 'sanjay', 'aabc', 'ABC', 'patkar'];
// userNames.sort();
// console.log(userNames);
// // ye output aaya h
// // [
// //     'ABC',    'Bhanu',
// //     'aabc',   'abcd',
// //     'mohit',  'patkar',
// //     'sanjay'
// //   ]


// ascII code m dekho ... capital walo ki value jyada h fir small fir no.. aisa kuch h to us hisab s print hota h sort method m


// 5,9,1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected)  ye output aana chahiye

// const numbers = [5,9,1200, 400, 3000];
// numbers.sort((a,b)=>{
//     return b-a;
// });
// numbers.sort((a,b)=>a-b);
// console.log(numbers);             //[ 5, 9, 400, 1200, 3000 ]


// aa gya yahi output qki hme positive value chahiye mtlb assending order mn to numbers.sort((a,b)=>(b-a) ...
//(output-  [3000, 1200, 400, 9, 5])
// krna hoga or dessending order m chahiye to
// numbers.sort((a,b)=>(a-b) ....
//(output-  [5, 9, 400, 1200, 3000])  aisa ni krege to kuch v print hoga mtlb ascII code k hisab s jo unki value h uske according print hoga



// real world use dekh lo....... example flipkart m price low to high ka option hota h na waha use krte h




// const products = [
//     {productId: 1, produceName: "mobile",price: 13000 },
//     {productId: 2, produceName: "tablet",price: 30000 },
//     {productId: 3, produceName: "laptop",price: 72000 },
//     {productId: 4, produceName: "earbuds",price: 1700 },
//     {productId: 5, produceName: "mouse",price: 800 },
// ]

// // low to high
// const lowToHigh = products.slice(0).sort((a,b)=>{
//     return a.price - b.price
// });

// console.log(lowToHigh);

// //high to low
// const highToLow = products.slice(0).sort((a,b)=>{
//     return b.price-a.price;
// });
// console.log(highToLow);




// one more example

const users = [
    { firstName: "Bhanu", age: 27 },
    { firstName: "Pratap", age: 29 },
    { firstName: "Patkar", age: 22 },
    { firstName: "chandan", age: 16 },
]

users.sort((a, b) => {
    if (a.firstName > b.firstName) {
        return 1;
    } else {
        return -1;
    }
});


console.log(users);
// output
// age-  27 fir 22 fir 29 fir 16
 */








/* // Find method
//Use: To find the first element in the array that matches a condition.

const myArray = ["Bhanu", "Pratap", "Patkar", "chandan"];

function isLength5(string) {
    return string.length === 5;
}

const answer = myArray.find((string) => string.length === 5);
console.log(answer);
// output                        Bhanu



// one more example
const users = [
    {userId : 1, userName: "Bhanu"},
    {userId : 2, userName: "Pratap"},
    {userId : 3, userName: "Patkar"},
    {userId : 4, userName: "Chandan"},
];

const myUser = users.find((user)=>user.userId===3);
console.log(myUser);      //{ userId: 3, userName: 'Patkar' }
 */





// every and some method ... like... "and" ,and ,"or" ... because koi ek bhi galat to ans false  in every method
// or koi ek bhi sahi to sb sahi in some method


/*
// every method
//Use: To check if ****all elements****** in the array satisfy a specific condition.


// const numbers = [2,3,4,5,6,7,8,9];
// const ans =  numbers.every((number)=> number%2 === 0);
// console.log(ans);                  // false

// one more example
const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 22000 },
    { productId: 3, productName: "tv",     price: 35000 },
    { productId: 4, productName: "tablet", price: 17000 },
    { productId: 5, productName: "ipad",   price: 135000 },
]

const ans = userCart.every((cartItem) => cartItem.price < 30000);
console.log(ans);                        // false
 */






/* // some method
//Use: To check if ******at least one element***** in the array satisfies a specific condition.

// const numbers = [3, 5, 11, 9];

// // kya ek bhi number aisa h jo even h to true

// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);                  // false


// one more example

const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 22000 },
    { productId: 3, productName: "tv",     price: 35000 },
    { productId: 4, productName: "tablet", price: 17000 },
    { productId: 5, productName: "ipad",   price: 135000 },
]

const ans = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(ans);                       // true
 */








/*
// fill method
//Use: To fill an array with a specified value.

// ism-->,  value, fir start, fir end .... ye 3 cheezein lgti h fill method m


// 10 bar , -1 print krna tha  mujhe fill method s
// to array(10) krke length dedi 10 or fill kr diya -1 s

const myArray = new Array(10).fill(-1);
console.log(myArray);
 */






/* // splice method
//Use: To change the contents of an array by removing or replacing existing elements.

// isme start fir delete  fir insert .... ye 3 cheezein lgti h fill method m

const myArray = ['item1', 'item2', 'item3'];


// sbse phle delete krte h array m s splice method lga kr
// const deletedItems = myArray.splice(2 , 1)  // 2nd index s suru kra or 1 item delete krna tha
// console.log("deletedItem", deletedItems);                // item3


// ab insert krke dekhte h

// myArray.splice(0 , 0 , 'ye wala add kra h');
// console.log(myArray);          //[ 'ye wala add kra h', 'item1', 'item2', 'item3']



// ab dono ek sath krte h ... insert and delete

const deletedItem = myArray.splice( 1 ,1, "ye wala kra yr" ," or ye bhi kra h");
console.log("deleteditems", deletedItem);        //deleteditems [ 'item2']
console.log(myArray);  //[ 'item1', 'ye wala kra yr', ' or ye bhi kra h', 'item3'] */







/*
 // iterables
// iterables mtlb jispe hm loop lga sake
// interview qn -- string or array itererable h ... to han hai pr object nhi h

// const firstName = "Bhanu";
// // is string for of loop lga k dekhte h ki ye iterable h ya nhi
// for(let char of firstName){
//     console.log(char);
// }


// ab array m lga kr dekhte h

const items = ['item1','item2','item3'];
for ( let item of items){
    console.log(item);
}
// output:--
// item1
// item2
// item3





// array  object  jaisa hi hai
// matlab jinse hm length ki property access kr skte h
// aur jisko hm index s access kr skte h
// example : - string

const firstName = "Bhanu";
console.log(firstName.length);         //5
console.log(firstName[2]);             //a
 */






/*
// sets        -- ye bhi iterable hai

// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

const items = ['item1','item2','item3'];
const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(items);

// output -
//Set(6) { 1, 2, 3, 4, 5, [ 'item1', 'item2', 'item3' ] }


// //"has" se check krte h ki jo v parameter m pass kra h wo usme availble  h ya ni
// if (numbers.has(1)){
//     console.log("1 is present")

// }else{
//     console.log("1 is not present")
// }
// console.log(numbers);               //1 is present


// ye for of loop chala kr dekha h
// for (let number of numbers){
//  console.log(numbers);
// }


const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);          //5
 */





/*
// maps  ye wo array wala method ni h ye object k liye map data structure h
// ye bhi iterable h
// isme data ordered function m store hota h
// store key value pair (like object)
// duplicate keys are not allowed like objects

// *******different between maps and objects*****

// objects can  only  (hmeshaaaaaaa) have string or symbol  as key   

// in maps you can use anything as key
// like array, number, string




// object literal
// isme key -- string ho skta h
// key symbol ho skta h


// const person ={
//     firstName: "Bhanu",
//      age : 24,
//      1 : "one",
// }

// console.log(person.firstName);           //Bhanu
// console.log(person["firstName"]);        //Bhanu
// console.log(person[1]);                   //one

// // for in loop lga kr dekhte h


// for (let key in person){
//     console.log(typeof key);
// }



// key value pair

// const person = new Map();

// ab is person m kuch value set krte h dekho 

// person.set('firstName', 'Bhanu');
// person.set ('age', 7);
// person.set (1, 'one');
// person.set ([1,2,3], 'onetwothree');
// person.set({1 : 'one'}, 'onetwothree');
// console.log(person);

// console.log(person.firstName);  //aise krke value access krege to undefined aayega
// console.log(person.[firstName]); // socho ki aise [] lga do tb v undefined

// fir kya kre to hmare pass h get method... set s set kra ab get s wo dekh lenge

// console.log(person.get(1));         //one

// key check krna ho to

// console.log(person.keys());    sari ki sari keys jo bhi set kri thi print ho jayegi

// ab ye to iterable h to  loop lga lo

// for of lga kr check krte h

// for(let key of person.keys()){
//     console.log(key , typeof key);
// }


// ye to sirf key show hue h agr hme value b dikhani ho to
// mtlb key or value dono

// for(let [key, value]of person){
//     console.log(Array.isArray(key));
//     console.log(key, value);
// }





// one more example

const person1 = {
    id : 1,
    firstName : "Bhanu",
}

const person2 = {
    id : 2,
    firstName: "Pratap"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8 , gender : 'male'});
extraInfo.set(person2, {age: 28 , gender : 'female'});

// console.log(extraInfo);

// agr andr ka access krna ho for example gender dekhna ho
console.log(extraInfo.get(person1).gender);         //male
console.log(extraInfo.get(person2).gender);         //female

 */







/*
// cloning using Object.assign

// clone krte h
// object.assign ---  isse clone krege... hm ise oops m bhi padhege
// ye cloning heep memory m hota h real value waisi ki waisi rhti h

const obj = {
    key1: "value1",
    key2: "value2"
}

// clone krte h or value add krte h  ----- chahe ye line likh k kr lo .. mtlb spread operator lga k


const obj2 = {'key69': "value69", ...obj};


// ya fir ye obkect.assign ye lga kr cloning kr lo
// const obj2 = Object.assign({'key69': "value69"}, obj);

console.log(obj);
console.log(obj2);
 */





/* // optional chaining [? question mark and . dot ]

// isko likne s bs pta lg jata h ki wo value store h ya ni ... mtlb hogi to print kr dega or ni hogi to skip kr dega pr error ni dega undefined dega.... kabhi kabhi bade code m hm check krte h mtlb ki data kahi s aayega kuch seconds m abhi show ni kr rha pr aayega to wahi check krne k liye ye optional channing h

const user = {
    firstName: "Bhanu",
    address: { houseNumber: '1234' }
}

console.log(user?.firstName);          //Bhanu
console.log(user?.address?.houseNumber);         //1234
 */






/*
// method

// function which is inside object called method
//example

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "Bhanu",
    age : 8,
    about: personInfo
}

const person2 = {
    firstName : "Pratap",
    age : 18,
    about: personInfo
}

const person3 = {
    firstName : "Patkar",
    age : 17,
    about: personInfo
}


person1.about();
person2.about();
person3.about();
 */




/*
// this keyword , window object

// console.log(window);
// "use strict";

// upar wale dono ko comment rhne do fir sirf neeche wala run kro to windows ki properties dikhti h..  ya fir browser m console m dono ko alg alg run krke dekh lo
// hm yha pr sirf ye dekh rhe h ki this keyword ... kuch nahi hone pr windows ko show krta h

function meraFunction() {
    console.log(this);
}

meraFunction();

 */







/*
// // call , apply and bind method


// The call(), apply(), and bind() methods are all used to call a function
// and set the this value inside that function. 

// The call() method is used to call a function and 
// specify the this value for the function. 

// The apply() method is used to call a function and specify the this value for the function, 
// ****but***-->>> it allows you to pass a list of arguments as an array. 

// The bind() method is used to bind the this value to a function, 
// ***but*** ---> it ***returns a new function*** instead of calling the function immediately.



// function about( kyaPasandHai,  MusicBataoKoiBhi){
// console.log(this. firstName, this.age , kyaPasandHai , MusicBataoKoiBhi);
// }

// const user1 = {
//     firstName: "Bhanu",
//     age : 23
// }

// const user2 = {
//     firstName: "Pratap",
//     age : 24
// }


// // apply dekho    // isme [] ye bracket lgta h
// about.apply(user1, ["dosa" , "bhajan"]);
// // output: - - Bhanu 23 dosa bhajan

// // ab bind method      // isme [] ye bracket nhi lga h
// const func = about.bind (user2, "idli" , "panjabi");
// func();


// call method dekho
// upar wale sb ko comment kr do fir ise dekho jisse ek bar m ek hi code run ho

const user1 = {
    firstName : "Bhanu",
    age : 24,
    about: function(){
        console.log(this.firstName,  this.age)
    }
}

const user2 = {
    firstName: "Pratap",
age : 24,
}

// ab hme user 1 ka about section user 2 m chahiye h .. copy ni krna h bs call krna h

user1.about.call(user2);       // Pratap 24
// call k bad () is bracket m this keyword batana rhta h .. agr bracket ko empty chord doge to output undefined aayega
 */






/*
// small warning
// don't do this mistake

const user1 = {
    firstName: "Bhanu",
    age: 8,
    about: function () {
        // console.log(this);
        console.log(this.firstName, this.age);
    }
}


// user1.about();
// const myFunc = user1.about;
// myFunc();


// ye iska output undefined undefined aa rha h... qki upar this keyword lga h wo function ko nhi window ko dekh rha h... aacha check kr lete h.. to upar console.log(this) likha h usko comment s hta kr dekh lo... window hi dikhegi

// hmne to padha tha ki . ke phle jo v value hoti h wo object hoti h .... to aisa q aa rha h.... qki abhi hmne sirf about likha h ... about().. aise likh kr function ko call nhi kiya h.. mtlb call kra h neeche variable m store krke {myFunc() ye} pr upar wali line m hmne function call nhi kra h sirf refrence store kra h

// to sirf refrence store kra h to binding nhi hogi object ki isiliye bind method use krege


const myFunc = user1.about.bind(user1);
// bind k bad () ye lga h usme this ki value kya honi chahiye... to hme value user1 ki chahiye h to wo likh diya
myFunc();        // Bhanu 8 output
 */






/*
// arrow function
// isme this .. window k liye hota h.. tum chahkr bhi change nhi kr skte
// proof dekh lo

const user1 = {
    firstName : "Bhanu",
    age: 8,
    about: () =>{
         console.log(this. firstName , this.age);
    }
}

user1.about();       // undefined undefined hi aa rha h qki ye this
// windows k liye h  na ki user1 hk liye
// arrow function m jo this likha hota h wo khud k liye nhi balki apne s ek level upar wale k liye hota h
 */




/*
// upar arrow function m likha h ab ek bar normal likh k dekhte h
// normal aise likhte h dekho


const user1 = {
    firstName: "Bhanu",
    age: 23,
    about : function(){
        console.log(this.firstName , this.age);
    }
}
//user1.about();


// ya fir aise bhi likh skte h
// baki sb same .....bs funtion keyword nhi likha tb bhi same output chlega

// about (){
//     console.log(this.firstName ,  this.age);
// }
 */



/* 
// factory function :- a function that returns an object.
// example
function createPerson(name, age) {
    return {
      name: name,
      age: age,
    };
  }

  const person1 = createPerson("John Doe", 30);
  const person2 = createPerson("Jane Doe", 25); 
*/



/*
// __proto__ ,[[prototype]], prototype
// yaha se hm __proto__ ,[[prototype]], prototype padhege.. aage tk



// const user = {
//     firstName: "Bhanu",
//     lastName: "patkar",
//     email: "bhanupatkar@gmail.com",
//     age: 18,
//     address: "house number, colony, pincode, state",
//     // ek function bhi add kr lete h
//     about: function () {
//         return `${this.firstName} is ${this.age} years`
//     },
//     // ek aur function bna lete h yr
//     is18: function () {
//         return this.age >= 18;
//     }
// }

// console.log(user.about());      // Bhanu is 18 years.



// ab ye socho ki aise 100000000 detail hue alg alg logo ki to itna sara likhoge kya bar bar ... fir to memory bhar jayegi.... tb kya kiya jaye



// ab dekho function k sath kya kya kaise hota h

// 1st step:- function ( ye function object create krta h)
//2nd step:-  fir ye key value pair add krega
//3rd step:-  ab jo object bna h jisme key value add hua h wo return kraga na kuch to to ye 3rd step h


// to upar wale code ko aisa bhi likh skte h... jisse memory bhi na bharegi or hm kai sari detail add krte hue aage badh skte h



function createUser(firstName, lastName, email, age, address) {
    const user = {};        
    
    // ye dekho empty object banaya h jaha sb store hoga fir yahi return bhi hoga

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    // ye isme function add kra
    user.about = function(){
        return `${this.firstName} is ${this.age} years old yrrrrr.`;
    }
    // ek aur function add krte h yrr
    user.is18 = function(){
        return this.age >= 18;
    }
    // ab itta sb likha h to upar 3rd step padho ye kuch to return krega na to wahi return kra h
    
    return user;
}

const user1 = createUser('Bhanu', 'Patkar', 'bhanupatkar@gmail.com', 19, 'yahi rhte h tumhare ghar k peeche');
// jo function bnaya h usko bhi to call kr le
const is18 = user1.is18();
const about = user1.about();
console.log(about);                //Bhanu is 19 years old yrrrrr.
console.log(is18);                 // true


 */







/*
//ye socho aise bar bar 2-2 function likhte jaoge to memory firse bhar jayegi na yr... qki sirf 1,2 detail to add kroge ni,,, bahut sari details rhegi .. (10000000000 shayad itni)

// tab kya kiya jaye
// tab aise likh skte h dekho

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('Bhanu', 'Patkar', 'bhanupatkar@gmail.com', 18, 'yahi peeche wali gali m');
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");

// print krte h ab
console.log(user1.about());  //Bhanu is 18 years old.
console.log(user3.about());   //mohit is 17 years old.
 */





/*
// ab maan lo ek aur method add krna h .. abhi to sirf 2 hi method thi   about or is18 ... pr hme bahut sari add krna hua to...jaise sing method add krna h tb
// pr neeche ..... aise  user.sing = userMethods.sing;
// likhna hoga na pr agr aise link krna bhool gae tb..... chalo iska jugad dhundhte h


// ek example s smjhte h
//Object.create... s smjhege

const obj1 = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {
//     key3: "value3",
// }

//  obj2 m key1 dikhe pr wo to usme h nhi... to dekho hme output chahiye h ki obj2 upar obj1 s key1 lele

// console.log(obj2.key1);


// pr undefined aa rha ... hme to kuch or chahiye tha tb hm use krege
//Object.create   isse ye kaam ho jayega jo hme chahiye

const obj2 = Object.create(obj1);
// phle upar obj2 define h usko comment kro.. fir run kro
// console.log(obj2);      // dekho ye empty object de rha h
// console.log(obj2.key1);

// dekho aa gya ans .... hme obj1 k andr value1 ans aaya h


// obj2.key3 = "value3";
console.log(obj2);    // add ho gae h value

// pr upar object.create krne s ek {} aisa empty object create ho jata h........ to upar empty object bn chuka h...  // console.log(obj2);  ye line run krke dekh lo

console.log(obj2.__proto__);

// {key1: 'value1', key2: 'value2'}  is output ko dekho isme [[ye prototype milega]]....
//to baat ye h ki   __proto__  aur [[prototype]]  dono ek hi h bs update k bad naam bdal diye h

// pr ecmascript documentation m jo prototype likha h wo alg h
// mtlb jo javascript m prototype rhega wo padhege hm


// diff between proto vs prototype
// The prototype gives access to the prototype of function using function.
// proto gives access to the prototype of the function using the object.


// in simple language (diff between proto vs prototype)
// prototype simple ek object h
// proto ek refrence h .... kiska.... jo bhi chain create kri h uska refrecnce




// abhi example s smjhe the ab real smjhoge function m ek free ki jagah milti h na to usi m add kr lenge kuch b jo chaho... kyko alg s memory bharna.... to us free ki jagah m key value pair add krke dekh lete h yrr.... dekho

// ek function bnate h normally

function hello(){
    console.log("hello world");
}

// to bat ye h ki javascript m function sirf function nahi balki -- function or object dono hota h
// function ko object ki properties k jaise bhi use kr skte h
// proof chahiye lo dekho

console.log(hello.name);         // hello aaya na  function ka naam

// ham properties add v kr skte h
hello.meriNewWaliProperty = " ye wali add kri h";
console.log(hello.meriNewWaliProperty);       //  ye wali add kri h --ye aaya

// mtlb     name property ---> tells function name;
//function provides more usefull properties.


// ye is ,hello world program ka prototype check kre kya..... chalo dekho
console.log(hello.prototype);             //{constructor: ƒ} ye aa rha or iske andr  // [[Prototype]] : Object  ye h  ... mtlb mila na hello world k andr prototype

// ek bat yad rakhna
// only functions provide prototype property


// chaho to add krke dekh lo kuch hello function m ... prototype m add krte h dekho
hello.prototype.abc = "abc";
console.log(hello.prototype);

// ek function add krke dekhte h (function k andr function add kr rhe h)
hello.prototype.sing = function (){
    return "sa re ga ma pa da ni sa"
}

console.log(hello.prototype.sing);

 */





/* 
// ab jo upar itta bda bda program likha tha na jisme bahut sari detail k bare m bat ho rhi thi ki memory bhar jayegi... agr 100000000 aisa kuch data add krna hua to

// tb usi example s smjho ab ki jo function m khali jagah mil rhi h usme ye sb add kr do jo b new function banaye h tumne..


// // const userMethods = {
// //     about : function(){
// //         return `${this.firstName} is ${this.age} years old.`;
// //     },
// //     is18 : function(){
// //         return this.age >= 18;
// //     },
// //     sing: function(){
// //         return 'toon na na na la la ';
// //     }
// // }


// jo ye 3 function bnaye h upar wo hm jo khali jagah thi  prototype m usme likh rhe h.... to upar ka nhi padhna h wo bs btane rakha h ki ye wala empty object m rakh rhe h.... dekho ||||
                                     //  ^^^^^^


// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(createUser.prototype);// {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// dekho neeche ye rakh diya prototype m        ^^^^^^^


// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// createUser.prototype.is18 = function (){
//     return this.age >= 18;
// }
// createUser.prototype.sing = function (){
//     return "la la la la ";
// }


// const user1 = createUser('Bhanu', 'Patkar', 'Bhanupatkar@gmail.com', 18, "my address");
// const user2 = createUser('harsh', 'kyapta', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'mtpucho', 'mohit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());





// ye itta function createuser ko connect kr rha h userMethods s
// agr is user ko kuch data nhi milta apne andr to javascript userMethods iske andr dhundhega

 */









/* 
// new keyword   (ye interview m puchte hi h chahe kuch bhi ho)

// iske 3 kaam h 
// 1st create empty object or us empty object ki value h this.. mtlb empty object ko this k assign kr deta h
// 2nd  ye kuch na kuch return krega
// 3rd ye khud s hi link bna dega joki prototype k equal hogi.... mtlb jo kaam hm manually (Object.create ) se kr rhe the wo ye new keyword khud krega
// mtlb chain bnane wala kaam... ki agr kuch cheez khud m na mile to javascript andr prototype tk jayega or dhundhega (isi kaam ki bat ho rhi h) ye kaam new keyword khud kr leta h



// ab dekho yahi code upar likha tha na to isi m smjh lo

// function createUser(firstName, lastName, email, age, address) {
//     const user = Object.create(createUser.prototype);// {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// createUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years old.`;
// };
// createUser.prototype.is18 = function () {
//     return this.age >= 18;
// }
// createUser.prototype.sing = function () {
//     return "la la la la ";
// }


// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());


// dekho isme hme object.create krne ki jaroorat nhi rhegi to wo line cut jayegi or ye new keyword khud s return krta h to return likhne ki jaroorat nhi h 
//ab jaha user1 ya baki k varible bnaaye h waha new keyword likhege dekho



// isko constructor function bhi khte h bcz ye hmare liye object construct kr rha h

// ab koi doosra banda code likhne baitha ya fir hm koi library bna rhe koi bhi javascript ki or waha new keyword use krna h to new coder ko kaise pta legega ki yaha new keyword use krta tha... sapna thodi na aayega use
// to uske liye ... dekho... aisa convention h ki hm koi new function bna rhe jo future m new lga kr hi call hoga to uske liye hm ise (Capital) s start krte h.. jaise CreateUser m "C" capital h na waise hi keh rha hu.... or new s bna rhe to Object.create krne ki jaroorat ni h.... 
// or dekho address k neeche wali line ....return wali line ni likhi h maine upar pr ...  neeche  nahi likhi bcz ye return wala kaam new keyword khud kr deta h to jaroorat ni h return likhna


// constructor function 
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());
 */




/* 
// has own property
// ab ye padhege.... upar wala new keyword wala code hi le lete h usi m smjhna aasan hoga

function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");



// console.log(user1);  // isme h hasownproperty.. chahe to print krke dekh lo
// hm for in loop s key pta kr skte h to key check kr lete h

for (let key in user1){
    // console.log(key);
    // sari keys print ho to rhi h or ye prototype s bhi key utha kr la rha h.. pr m ye chahta hu ki jo maine prototype m set kri h mtlb const user1 = new creatuser aise krke ye na dikhae sirf upar wali dikhae   (this.firstName wali) tb...
    if(user1.hasOwnProperty()){
        console.log(key);
        // ye agr property hogi to true dega ni hogi to false...
    }
}

 */





/* 
// more about prototype

let numbers = [1, 2, 3];
// numbers.          // number. itta likho or dekho kitte sare method suggestion m aate h to js k itte sare method kaha s aae ... prototype s
// pr prototype to sirf function k hote h.. upar to array bna hua h 
// js m array aise bnta h dekho.. (internally)

// let numbers = new Array[1, 2, 3];  

// to ye jo array h iske function m array k sare prototype pde hue h
// check kr lo
// console.log(Array.prototype);


//let numbers = [1, 2, 3];    hm aise likhte h.. qki ye aasan h or chota v h... ab iska prototype pta krte h dekho
console.log(Object.getPrototypeOf(numbers));      //Object(0) []

// console.log(numbers);                  //[ 1, 2, 3 ]

// js m array bhi object hi hote h... use jo shi lgta h wo khud set kr leta h... baki aage jb padhege to or clear ho jayega.... abhi bahut kuch baki h padhne ko

 */







/* 
// class keyword
// class are fake 
// dekho upar ye chal rha tha ki constructor function bana rhe fir method add kr rhe (createuser.prototype.about) aise fir new keyword lga kr call kr rhe ..... bahut lamba kaam h.... ab or bhi aise hi krna chaho to bar bar yahi kro... sir khapanae wala kaam ho jayega
// isiliye ES6 ya fir 2015 m jo update aaya usme class keyword aaya ki
//class k hi andr properties or method dono define kr dete h.. to yahi kaam hm javascript m v kr skte h.... bs class keyword ka use krke

// dekho upar wale code ko fir late h... jisse smjhna aasan ho

// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function (){
//     return this.age >= 18; 
// }
// CreateUser.prototype.sing = function (){
//     return "la la la la ";
// }


// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");


// khud dekho neeche ki kya kya alg h... bar bar kon likhe.. compare kr lo
// class keyword  likha... class ka naam diya fir {}, fir constructor likha ye constructor hme object bna k dega... fir isi constructor m wahi sb cheezein pass kr denge jo upar fucntion  m kri thi


class CreateUser {
    constructor (firstName, lastName, email, age, address){
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
        // yaha return ni likhege qki ye khud return kr dega
    }
    // ab yahi pr class keyword k andr hi method define kr skte h... upar wale code s compare krte jao
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la ";
    }

}

// ab hm new keyword lga kr jb call krege to constructor khud call ho jayega fir jo this. krke likhi h properties wo apne s sari add ho jayegi fir prototype m method add ho jayege

// ek bat yad rakhna...... new keyword k bina aap constructor call ni kr skte 


// lo ab user bna kr call krke dekh lo

const user1 = new CreateUser('Bhanu', 'Patkar', 'BhanuPratap@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'ni pta', 'bp@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'mtpucho yr', 'bpppatkar@gmail.com', 17, "my address");

console.log(user1.firstName);     // Bhanu
console.log(user1.sing());           // la la la la

// output:-  aaya na 3 bar qki 3 user bnaye hmne
// constructor called
// constructor called
// constructor called
 */





/* 
// extends keyword... aur class keyword ki practice


class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

// new keyword s hi constructor pr ja payege isiliye lagaya h
const animal1 = new Animal ('tommy', 2);
console.log(animal1);          //Animal { name: 'tommy', age: 2 }
// check krte h method call kr pate h ya nhi
console.log(animal1.eat());      //tommy is eating

// ab dog naam s class bnana h pr baki sb method eat , supercute, cute , ye sb dog m bhi chahiye to dubara likhege to memory bharegi na to kya kre..... extends keyword use krte h

class Dog extends Animal{

}


// check krte h .. animal ki method dog m aae ya ni
// phle ek object bna lete h

const tommy = new Dog ("kutta" , 5);
console.log(tommy);         //Dog { name: 'kutta', age: 5 }
console.log(tommy.eat());       // kutta is eating

// coding language m hmne animal (parent class) ki subclass (dog) bna li h... base class ya parent class ko extend krke bnae h
 */






/* 
// super keyword
// ab m chahta hu jo maine dog class banae usme name age k sath speed bhi ho

// tb wahi peeche wale example s dekhte h
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}


class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);   
        
        // ye super s hmne keh diya ki name or age wali property upar animal (parent) class s lelo.. qki hme to bs speed add krna h name or age to wahi rakhna h

        this.speed = speed;   

        // ye speed add kr diya dog (base) class m
    }

// ye run naam ki method add krte h yaha
    run (){
        return `${this.name} daud rha h ${this.speed} ki speed s.`
    }
}

// return kra h to store kr lete h value fir print krege
const storeKiya = new Dog("ye kutta", 5 , 16);
console.log(storeKiya.run());    //ye kutta daud rha h 16 ki speed s.

 */







/* 
// abhi parent class m dekha ab
// same method in subclass m dekhte h....
// upar bhi eat method h parent class m
    // ab base class m bhi eat method add krna h dekho.

// upar wale example m hi dekhte h

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating`;
    }

    isSuperCute() {
        return this.age <= 1;
    }

    isCute() {
        return true;
    }
}

class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }

    run() {
        return `${this.name} daud rha h ${this.speed} ki speed s.`
    }
    // upar bhi eat method h parent class m
    // ab base class m bhi eat method add kra h dekho.. ye kaha s leta h
    eat() {
        return `Modified Eat : ${this.name} is eating`
    }
}


const storeKiya = new Dog("ye kutta", 5 , 16);
console.log(storeKiya.run());       //ye kutta daud rha h 16 ki speed s.
console.log(storeKiya.eat());       //Modified Eat : ye kutta is eating


// ye base class s hi le rha h eat method .. qki ye phle khud m check krta h agr ni milta tb upar dhundhega... ye to aasan tha apn ko itna smjh aa gya */








/* 
// getter and setter

// wahi class keyword s class bna lete h or constructor m kuch properites rakh lete h 

// m samjhne k liye 3-4 bar likh rha hu same code mtlb copy paste... ek ye normal

// class person{
//     constructor (firstName , lastName , age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age= age;
//     }

// }
//     const person1 = new person("Bhanu", "Patkar", 25);
// console.log(person1);      
// //person { firstName: 'Bhanu', lastName: 'Patkar', age: 25 }


// doosri bar fullname method  bnaya h jise get s call kra h.. to firse code copy paste kr rha hu

// class person{
//     constructor (firstName , lastName , age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age= age;
//     }

// fullName (){
//     return `${this.firstName}, ${this.lastName}`
// }
// }
// const person1 = new person("Bhanu", "Patkar", 25);
// // console.log(person1.fullName());           //Bhanu, Patkar





// full name method h or method ko hm () ye lga kr call krte h jbki properties aise hi call kr skte h

// console.log(person1.fullName);    // [Function: fullName]... ye dekho bina () k call krne pr poora function call ho rha h

// ab m chahta hu ye fullName propeties k jaise call kru mtlb  bina () ye lagae.. tb... sirf get lga dena h bs
// firse code copy paste


// class person{
//     constructor (firstName , lastName , age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age= age;
//     }

// get fullName (){
//     return `${this.firstName}, ${this.lastName}`
// }
// }
// const person1 = new person("Bhanu", "Patkar", 25);
// console.log(person1.fullName);           //Bhanu, Patkar





// ab set method dekhege
// firse code copy paste

// ab hme sirf ek line likh kr firstName or LastName change krna h to set method use krege
// firse method bnate h fullName


class person{
        constructor (firstName , lastName , age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age= age;
        }
    
    get fullName (){
        return `${this.firstName}, ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");

        // yha ye jo bhi value dalenge hm, waha dekhega jaha bhi beeech m space milega mtlb jaise,, bhanu pratap.... dono k beech m space h na to wahi h split ye bhanu ko first name smjhega or pratap ko lastname.... aur alg alg varible m store krne k liye destructure kr diya mtlb  const [firstName, lastName] ye likh diya

        this.firstName = firstName;
        this.lastName = lastName;
    }


    }
    const person1 = new person("Bhanu", "Patkar", 25);
    console.log(person1.fullName);       
    // bhanu patkar 
    // ye output aa rha h ... hmne set method use kra h change krne... to dekhte h change hota h ya nhi... yaha s set kaise use kr rhe wo dekho
    
    person1.fullName = "Anurag Patkar";
    console.log(person1);     
     //person { firstName: 'Anurag', lastName: 'Patkar', age: 25 }
    //  dekho aa gya jo chahiye tha


    // bas yahi tha getter and setter */





/* 
// static method and properties

// upar ka code or uske upar jo class banae thi animal wali uske method sb ek sath use krte h dekho

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set fullName(fullName){
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     eat(){
//         return `${this.firstName} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }
// }


// const person1 = new Person("Bhanu", "Patkar", 23);
// console.log(person1.eat());       //Bhanu is eating

// to isme ye person1 .. baki method bhi call kr skta h dekho.... mtlb object ko call kr skta hu
// ye method jo bne h eat , supercute, cute ye sb object jo bna h upar person usse related h... pr m aise method bna skta hu  jo is class (keyword) s directly related honge..... jinko call krne k liye mujhe object banane ki jaroorat nhi h...(qki hm static keyword lga denge) dekho kaise


// code copy paste krege ab hm dekho
// ek method or bnayege classInfo wala simple sa


class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo() {     // ye static method h
        return 'this is person class';
    }
    static propetyBnaLeteH = " ye static property h smjhe";     // ye static properties h
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat() {
        return `${this.firstName} is eating`;
    }

    isSuperCute() {
        return this.age <= 1;
    }

    isCute() {
        return true;
    }
}

// ab is classInfo method ko object jaise call ni kr skte error aayega
// const person1 = new Person("Bhanu", "Patkar", 23);
// person1.classInfo();   // dekho error aa rha h


// to ye method directly class s related hote h... dekho kaise access krege

console.log(Person.classInfo());        //this is person class  
// ab static propety ko call krte h
console.log(Person.propetyBnaLeteH);     // ye static property h smjhe



// difference between a property and a method
// is that a property is a value stored in an object, while a method is a function stored in an object
 */