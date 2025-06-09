/* // here we see how javascript work


// isme aisa nhi hoga ki js direct first line execute krega fir doosri fir teesri sbbse phle comiler poore code ko padhega

// step by step smjho
// phle code hoga compile fir execute hoga

// pr compilation krna q h...???   dekho abhi btate h pr phle smjho ki ye 3 phase m hota h.. 1st tokenising/lexing
//2nd parsing and 3rd code generation ye hota h

// tokeninsing mtlb bde s code ko chote chote tukdo m tod dena ... fir jo parsing h wo in chote chote tukdo ko smjhkr .. ek hota h AST (abstract syntax tree) ye code ko execute krne layak bna deta h

// ab suno ki compile krte q h
// ecma documentation m khin nhi likha ki code ko compile kro.... pr ye likha h ki
//1) early error checking honi chahiye
//2) ye pta kro ki varible kis scope s belong krta h  mtlb [D.A.S.P (determining appropriate scope for variable)]

// ye 2 kaam krne k liye aapko sare code ko parse (compilation ka 2nd phase) krna hi pdega  .. isiliye compilation jaroori h phle

// ab ecma ne koi opinion ni diya ki parse krna kaise h...... sb browser pr alg alg chalta h apne s


// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = ."Bhanu";         // yaha string k phle ek dot lga diya h
// dekho error aae na iska mtlb sbse phle .. compiler ne poore code ko padha... wrna starting s neeche tk wo run krte chala aata fir last m error deta.. pr error phle aae mtlb code read kra .. compiler n

// ab  [D.A.S.P (determining appropriate scope for variable)]  ye jaan lo

//  to code ko execute krne s phle hi js ko pta rhta h ki ... konsi cheez mtlb variable kaha s aaya h.. kaha s belong krta h.. kaha s access kra ja skta h

// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = ."Bhanu";
// ab dekho firstname h na upar to js check krega ki kahin wo kisi function m to nahi h.. agr nahi h to mtlb wo global scope m hoga  mtlb global scope ko belong krta h

// run chordo varible create hone s phle js ko pta h ki global scope m ek varible h pda hua h theek h

// ab dekho 2 phase h  ... 1st compilation phase jisme early eroor check or D.A.S.P  h
// 2nd phase code execution phase h isme
// js m jitna bhi code execute hoga wo execution context k andr execute hoga...

// mtlb hmne code ko execute krne k liye code execution context create krna hoga
//...  or sbse phle jo  execution context create hota h usko khte h.... global execution context


// global execution context    ab ye smjho

// isko dekho  wrna likh to diya h padh lo.. bad m dekhna clear ho jayega   video timing (part 2) 18:10


// global execution context ye 2 phase m bnta h
//1st creation phase phle to ye khud create hoga na mtlb (global execution context) fir
// 2nd code execution


// video timing 19:30.... chart bna k dikhaya h

// creation m jo firstname tha wo var s bna h  to uski value apne s undefined ho jayegi.... let ya const s bna hota to value uninitilaised ho jati

// ab (global execution context) G.E.C) ye jb bnta h to this ki value set hoti h... jaha pr execute kr rhe ho uske hisab s hota h... agr node pr kr rhe to waha alg hoga.. pr kisi browser pr kr rhe to waha this window k equal ho jata h mtlb this ki value window set ho jati h... qki window to phle s h , kisne diya ,,, browser n.... or jitne bhi variable h is creation phase k dauran create ho jate h..... or variable m value assign hoti h code execution phase m
// is creation phase ko smjhne k liye abhi global memory bol de rhe h.. qki ye sb abhi global memory m present h


// ab ek bat suno... js synchronous programming language h... hm isi m asynchronous padhege (ye browser deta h  thk h..) pr ... js synchronous h yad rakho
// synchronous mtlb... agr phli line execute ho rhi h to jb tk phli execute ni hogi doosri ka no. ni aane wala ..

// ise single thread programming language bhi khte h.... mtlb jb tk ek line execute ni ho jati tb tk doosri line ko execute ni kr skte
// thread kya krega.... jb tk ek line poori finish ni ho jati tb tk doosri line pr move ni krega


// ab code ko analysis krna suru krte h

// console.log(this);        //-- line 1
// console.log(window);       //-- line 2
// console.log(firstName);     //-- line 3
// var firstName = "Bhanu";         //-- line 4
// console.log(firstName) ;          //-- line 5


// dekho ye output aayega

// first line m .. this h to wo window k equal ho jayega to {w} aisa window object print hoga

// 2nd line keh rhi h ki window ko print kro to window print ho jayegi

//3rd line keh rhi firstname ko print kro pr wo to undefined h ... upar padha h hmne (line 62)  (var s undefined , let and const s uninitilaised) to undefined print hoga

//4rth line.. upar jaha hmne memory naam rakh diya tha creation phase ka waha .. phle window thi.. fir this ki value set hue thi window or firstname tha jiski value undefined thi to 4rth line keh rhi h ki... undefined ki value hta kr "Bhanu " kr do

// line 5:- ye keh rhi ki firstName print kr do to Bhanu print ho jayega


// chaho to upar ka code browser m run krke dekh lo.... yahi same output aayega jo bataya h
 */



/*
// chalo ab ye dekho... upar wale ki ramkatha poori hue
// ab is code ko analysis krte h... ki kya kaise hoga... likhege nhi jyada khud soch lena kaise kya hoga.. jo jaroori hoga wahi likhege bs


// console.log(this);
// console.log(window);
// console.log(myFunction);

// console.log(fullName);

// function myFunction(){
//     console.log("this is my function");
// }

// var firstName = "Bhanu";
// var lastName = "Patkar"
// var fullName = firstName + " " + lastName;
// console.log(fullName);




// phle to ye 2 phase honge .. ye to pta hoga
//1) early error checking or
//2) ye pta kro ki varible kis scope s belong krta h

// fir js ko pta rhega variable create hone s phle ki.. uske pass kya kya h ,mtlb global execution m kya kya h
// to firstname  (fname) , lastname (lname) or fullname (FLname) ye 3 h or ek myfuntion h ye js ko pta chal gya h ab aage....


// ab global execution context (GEC) create hoga....or isme ek stack datastructure hota h.... to GEC us stack m add hota jata h or jaise hi uski wo line run ho jati h stack s hat jata h..   ...... (timing 37:51)

// ab code analysis kro

// console.log(this);            //-- line 1
// console.log(window);         //-- line 2
// console.log(myFunction);      //-- line 3

// console.log(fullName);          //-- line 4

// function myFunction(){          //-- line 5
//     console.log("this is my function");
// }

// var firstName = "Bhanu";        //-- line 6
// var lastName = "Patkar"             //-- line 7
// var fullName = firstName + " " + lastName;          //-- line 8
// console.log(fullName);                   //-- line 9




// to window object to phle s hi rhta h.. qki browser phle hi provide kr deta h
// ab  jb GEC create hoga to this ki value ye windows k equal ho jayegi..
// ab fname, lname or FLname ye teeno var s bne h to inki value undefined set ho jayegi
// ab ek function v h to execution s phle.. ye myfunction Global memory m store ho jayega.. jaise upar ye window, fname, lname , FLname hue h


// ab code execute hona start hoga..

// 1st line - this -- to ye to window k equal thi to {w} print hoga

// line 2 -- firse window print hoga

// line 3 ... js poore k poore function ko as it is print kr degi... qki hmne myfunction(); aise krke function call ni kra na to call na krke js jaisa ka waisa print kr dega

// line 4 .. undefined h to undefined print hoga

// line 5.. ye already h jb GEC bna tb hi tha ye.. to iske sath kuch ni hua

// line 6 -- fname m value assign hogi Bhanu

// line 7 -- lname m value assign hogi patkar

// line 8 m FLname m -- Bhanu Patkar asssign kr do

// line 9 m Bhanu patkar print ho jayega

// chaho to code print krke dekh lena
 */


/*
// hoisting
// ab suno hoisting hoti kya h--
(defination of hoisting)
(simple word m kahe to ...  code execute krne s phle hi varible , memory m store ho jate h isi ko hoisting khte h)

// console.log(this);
// console.log(window);
// console.log(myFunction);

// console.log(fullName);

// function myFunction(){
//     console.log("this is my function");
// }

// var firstName = "Bhanu";
// var lastName = "Patkar"
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// ye code dekhoo--- isme value last m assign kri h.. pr print to upar kra h na...or run krne pr ans b aa ja rha h...to defination ye hogi ki

//Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.


// or jb sari line execute ho jayegi to jo bhi code stack m pda hoga wo pop (mtlb delete/remove) ho jayega




// abhi code m function declration tha ab use function expression m change kr de rhe h,,, tb dekho ya hota h

//function expression m change kra

//  var myFunction =  function(){
//     console.log("this is my function");
// }

// myFunction();        //this is my function


// yahi same code firse dekho... ab hm phle call kr lete h or bad m define krege tb kya output aayega

// console.log(myFunction);

// var myFunction =  function(){
//         console.log("this is my function");
//      }

// output --  undefined aa rha

// timing (50:45) analsis kro aisa q hua

// compilation m early error check or kis scope ka h ye pta krega fir GEC create hoga jisme ek call stack bhi bnega
// isme Global scope m sirf ek function hi h bs or to kuch nhi h
//ab GEC k 2 phase creation phase GEC ka or doosra code execution phase

// to creation phase (global memory) isme global memory k andr window object phle s h browser n diya hua h to fir this ki value {w} k equal set ho jati h.... ye to hona hi h or hota hi h

// iske alawa compilation phase m hi pta lg gya tha ki ek function h isme
//  ab dekho .. function declaration (is keyword ya my keyword) s start hota mtlb function likh k jaise upar wale example m h to poora ka poora function store ho jata h pr hmne to ab function expression m change kr diya h ... tb hmne ise var use krke bna diya h to iski value kya hogi -- undefined just like other variable


// console.log(myFunction);            // -- line 1

// var myFunction =  function(){                     // -- line 2
//         console.log("this is my function");
//      }



// ab dekho
// line 1 m dekhega ki myfunction kya h to wo to undefined h (bcz of var) to undefined print ho jayega
// line 2 s undefined hat kr function assign hoga


// console.log(myFunction);            // -- line 1

// var myFunction =  function(){                     // -- line 2
//         console.log("this is my function");
//      }

// console.log(myFunction);            // -- line 3



// line 3 agr add kr de...tb ye function poora ka poora print ho jayega





// var to dekh liya ab let const v dekh lo

// console.log(firstName);
// let firstName;
// console.log(firstName);



// isko analysis krege ab.... itta to rat gya hoga ab
// compilation m early error check or kis scope ka h ye pta krega fir GEC create hoga jisme ek call stack bhi bnega

//ab GEC k 2 phase creation phase GEC ka or doosra code execution phase

// to creation phase (global memory) isme global memory k andr window object phle s h browser n diya hua h to fir this ki value {w} k equal set ho jati h
// isme Global scope m let s ek variable hi h bs to let or const k case m value uninitialized save ho jati h

// to output  ye aayega ki


// Uncaught ReferenceError:
// Cannot access 'firstName' before initialization


//question -- kya let or const ki hoisting hoti h--- to ha hoti h
// jb code execute kr rhe the tb  wo uninitilaized tha isiliye error aaya
// then doosri line mtlb console.log wali line boli ki uninitilaized hta kr ise initilaized kr do.. fir print kro to ans aa jata h


// maan lo ye liha h
//  console.log(firstname);

// to ye eroor aata

// Uncaught ReferenceError:
//firstname is not defined


//TDZ (temporal dead zone)
// jab value run hone k phle mtlb global memory m tha to uski value uninitilaised thi.. to initilaised hone tk wo TDZ m tha  (mtlb us time period tk)

// initilaised krne k bad chahe jitna use kro

//dekho

// let firstName = "Bhanu";
// console.log(firstName);      //Bhanu

// pr dekho

// let firstName;
// console.log(firstName);      // undefined aayega

// pr aisa const k sath ni kr skte ki const firstname ; kr diya   ,, error aa jayega

//ye wala error aata h :- SyntaxError: Missing initializer in const declaration

 */


/*
// ye code analysis kr rhe h

//console.log("hello world");
// let firstName = "Bhanu";
// let lastName = "Patkar";

// const myFunction = function() {
//     let var1 = "First Variable";
//     let var2 = "second Variable";
//     console.log(var1);
//     console.log(var2);
// }

// js ko pta h ki fname h , lname h fir myfunction h.. let s bna h to uninitilaised fir value assign hogi fir print ho jayega itta to rat gya smjh aa gya sb */








/*
// ab padhege ... function execution context  (01:14:54)
//(defination by google -  A function execution context is created whenever a function is called, representing the function's local scope)

// let foo = "foo";         // --line 1
// console.log(foo);     // --line 2
//  --line 3 mtlb ye neeche ka poora function

// function getFullName(firstName, lastName){
//     console.log(arguments);
//     let myVar = "var inside func";
//     console.log(myVar);
//     const fullName = firstName + " " + lastName;
//     return fullName;
// }
// --line 4 mtlb neeche wali line

// const personName = getFullName("Bhanu", "Patkar");
// console.log(personName);          // --line 5

// analysis suru kro (01:16:11 dekh lo)
// wahi sb  GEC , call stack,let or const k karan value uninitilaised, global memory, {w} fir this ka bind hona {w} k sath .....

// line 1- initilaized hogi foo ki value
// line 2 foo print hoga
// line 3 -- function h ye to phle s kaam ho chuka rakha h global memory to iska kuch nhi
// ab getfullname function call krna h to iske liye alg s ek context create hoga jisko hm bololege ******function execution context****
// isme bhi 2 phase m kaam hoga... memory ko naam de denge ... local memory or doosra code execution
// local memory m wo argument dikhege jo hmne code m passs kr rakhe honge
// ab varibale ki value set hogi... fname ki Bhanu (first argument ki value by default first parameter k according set hoti h) or lname ki patkar
// ab isi function k andr h myvar... to is myvar ki value local memory creation phase k dauran uninitilaised rhegi
// fir h FLname iski valye bhi uninitilaised rhegi...

// ab chalte h code execution m
// bat chali aa rhi thi ki .... phli line ka execution fir doosri fir teesri usme function tha..  pr 4rth line ne ye poora kand kra h ...   4rth line ne poora ka poora function execution context create kra h

// mtlb jb 4rth line jb chali na tb javascript ka poora dhyan gloabl execution context s hat kr ... function execution context pr aagya

// ab andr ka funtion tha jo uski line by line execute krte h...

 // ye line no. 3 pr tha na function (yad kro upar likha v h)
// function getFullName(firstName, lastName){
    //     console.log(arguments);         //-line1
    //     let myVar = "var inside func";      // --line 2
    //     console.log(myVar);                   // --line 3
    //     const fullName = firstName + " " + lastName;       // --line 3
    //     return fullName;                  // --line 5
    // }



// ye output aayega dekho
// line 1  - arguments chahiye ohh..    ye to array like obbject h jo ki local memory m phle s h to hm use print kr dege
// line 2 - myvar ki value phle uninitilaised thi ab assign hogi var inside func
// line 3- yaha my var print ho jayega
// line 4 - fname or lname ki valu ephle s padi h hmare pass to wo print ho jayegi

// line 5 keh rhi h ki return kro full name (ek stirng jisme Bhanu Pratap likha h )tab ye jo value phle uninitilaised thi wo ab uth kar  local memory s hoti hue...  global memory m jayegi...... ab 5th line kaa kaam khtm to call stack s function execution context hat jayega  or last line thi upar wale ki 5th line person name wali mtlb global execution wali ... qki local ka kaam to khtm ho gya ...ab wo print hoga

 */




/* // ab padhege
// // lexical environment, scope chain

// (defination of lexical evs)
// normal defination by chatgpt
// 1.Lexical Environment:

// Think of a lexical environment as a container or a box that holds variables (data) and functions (code).
// Each time you create a function in JavaScript, it gets its own lexical environment. This environment remembers the variables and functions defined inside that function.


//(defination of scope chain)
// 2.Scope Chain:

// Imagine a set of nested boxes where each box represents a different function or block of code.
// When you want to access a variable or a function, JavaScript looks inside the current box (lexical environment) first.
// If it doesn't find what you're looking for, it goes up to the outer box (the container that surrounds the current one) and looks there.
// This process continues until it either finds the variable or function or reaches the global environment (the outermost box).
// The sequence of boxes that JavaScript checks, from the current box to the global one, is called the "scope chain."


// In simpler terms, a lexical environment is like a box where JavaScript stores stuff (variables and functions) for a specific part of your code, like a function.

//The scope chain is like a set of boxes stacked inside each other, and JavaScript searches through them to find what you're asking for, starting from the innermost box and going outwards.

// const lastName = "Patkar";             // - line 1
                                             // - line 2
// const printName = function(){
//     const firstName = "Bhanu";
//     function myFunction(){
//         console.log(firstName);
//         console.log(lastName);
//     }
//     myFunction()

// }
// printName();                           // - line 3

// code ko analysis kro (01:32:40 (dekh hi lo video for better understanding ))

// {w} fir this bind hoga {w} ,, fir lname or function uninitilaised (bcz of const) ye kam hua memory creation phase m ,,, ab ek or function tha na jo uninitilasied tha to uske liye alg functoin execution context bnega (bcz of print name call kra gya h line 3 m dekho).. local memory code exectuion part...  ab isme argument store honge... fir lname ki assign hogi patkar fir jo function printname h usko function hi assign kr dege poora fir ab function creation context m argument to h hi ab fname ki value BHanu assign hogi.. fir lastname chahiye pr wo to local m nhi h to wo apne parent m dhundhega mtlb lexical environment m
 */





/*
// closure
// now its closure time... ab clouser padhege

//(defination--- closure gives you access to an outer function's scope from an inner function)


// ham jante h ki function function ko hi return kr skte h
// dekho
//  function myfunc(){
//  return "one";
//  }

//  const answer = myfunc();
//  console.log(answer);

// ye kr diya function ne function return
// "one" abhi string h.. chaho to waha object likh lo ya arrray jo likhoge wo return hoga


// ek aur example dekho... ek function doosra function return krega

// function can return functions

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();




// ab isi code ko nam badal kr likhte h dekho

// function printFullName(firstName, lastName){
//     function printName(){
//         console.log(firstName, lastName);
//     }
//     return printName;
// }

// const ans = printFullName("Bhanu", "Patkar");
// // console.log(ans);
// ans();


// code ka analysis dekhna h to (01:47:20 dekho)

//(defination of clouser)
// (**********MIMP********) (clouser m ye defination yad rakhna)
//(01:57:00) ek line smjh lo bahut hi aache s clouser m aache s ....
// ki printname function printFullname s return ho rha h.. to wo khali hath return ni hoga... ye printname naam ka function jaha present tha mtlb, printfullname naam k function k andr.. to jaha present tha waha ki local memory wale variables ko sath leke return hoga

// (final defination of clouser)
// (clouser - jab function kisi or function s return hota h to wo apne sath jo uski local memory k variable h unko sath leke return hota h  (mtlb jb return hoga to apne lexical environment k sath return hoga  -- mtlb inner function outer funciton ko access kr skta h) )




// closures example no.1

// function hello(x){
//     const a  = "varA";
//     const b = "varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("arg");
// ans();

// phle socho iska ans kya hoga
// output:  varA varB arg


// args ... array like object hota h
// ye args local memory m hota hi h
//  mtlb function execution m ... agr ye empty ho to arg bs likh k aa jata h


//args google defination :-The arguments object in JavaScript is an array-like object that contains the values of the arguments passed to a function.

//The arguments object is not an array, but it does have many of the same properties and methods as an array.
//example,
//length property,
//forEach() method to iterate over the arguments.


// closures example no.2
// cube ya square de ske

// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);


// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);




// closures example no. 3


// function myfunc() {
//     let counter = 0;
//     return function () {
//         if (counter < 1) {
//             console.log('hi you called me');
//             counter++;
//         } else {
//             console.log('ek bar call kr chuke ho yr tum')
//         }
//     }
// }

// const storess = myfunc();
// storess();
// storess();

 */


// ****** for Revisoin *********


// 1) Hoisting:- code execute krne s phle hi , variable memory m store ho jate h


// 2) clouser:- isme inner function, outer function ko access kr skta h uske lexical environment k sath mtlb jo bhi uske pass local memory m variable honge wo v sath leke return hoga


// 3) lexical environment:-  ye hr function k liye apne s create ho jata h.. or ye apne andr jo bhi function or variable bne hue h unko yad rakhta h


// 4) scope chain:- ek dibbe m andr dibba, mtlb nested function smjh lo
// To jb ye khud m kuch ni dhundh pata to apne s bahar Wale dibbe m dhundhta h

// Or tb tk dhundhta rhta h jb tk wo global environment mtlb sbse outer wale dibbe m na pahuch jaye

// Mtlb simply kahe to
// From

// Current box to global one is called scope chain

// javascript m callstack isiliye hota h qki javascript bhatke na ki .... konsa step kab chalana tha or konsa kab rokna tha  
