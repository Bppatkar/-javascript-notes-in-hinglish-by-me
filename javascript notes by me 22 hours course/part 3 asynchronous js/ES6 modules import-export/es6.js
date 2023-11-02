// console.log("hello world");


// maan lo yaha bahut sara code h
// ... other file m bhi bahut sara code h wo ek jagah s doosri jagah import export krna h


// const firstName = "Bhanu";
// const age = 24;

// console.log(firstName, age);


// ab socho ye firstname bahut sara code h jo alg file m likha h waha s import krke lana h chalo krte h.... age wali file bnae h usme age wala dal diya or name wale m nam wala... ab m chahta hu ki age or fname wala s yaha code imoirt kru

import { firstName } from './utils/fname.js'
// ye syntax dekh lo kaisa likha h pr error aa rha h abhi bhi to jaha html file m defer likha tha na.. wahi pr type module bhi likhna isse ye hoga ki error nhi aayega.... or type module likh diya to defer apne aap ho jata h defer ni likha tab bhi chalega... aise hi ab age ko bhi import kr le rhe
import { age } from './utils/age.js';
import { person } from './utils/person.js';


console.log(firstName, age);


// ab maan lo jo export kra h waha s wo naam thodi bada lg rha to aise likh skte ho

// import { firstName as fname } from './utils/fname.js';

// fir console m fname likh dena simple... mtlb jaha firstName tha waha ab fname use krege


// ab ek person.js banate h or usme jo class h wo export krte h waha s or yaha import krte h

// line 19 m import kra h... ab class import kri h to iska object bna skte h

const personstore = new person("Bhanu", "Pratap", 24)
console.log(personstore);
personstore.info();

// ab wahi person.js pr chalo
// default lagane s
// line 19
// import person from './utils/person.js';        aise likh skte h
// person pr {} ye lagane ki jarroorat ni h


/* // import person from "./adding_file/person.js";
// const Person = new person("bhanu", "patkar", 24)
// console.log(Person);

//  same output default s
 */


// pr yad rakhna ek file pr ek hi default export kr skte h hm 



