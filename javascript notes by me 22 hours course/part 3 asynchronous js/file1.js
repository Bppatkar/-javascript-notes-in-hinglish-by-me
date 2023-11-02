/*
// now we read sync

// synchronous programming vs asynchronous programming
// synchronous programming
// synchronous programming single threaded


// synchronous mtlb line s execute ho rha hu... asynchronous mtlb jo kaam der s bad m hona tha wo bad m apne time s hi hoga.... uske phle wale code apne s execute ho jayege example dekho

// console.log("script start");

// for(let i=0; i<10000; i++){
//     console.log("inside for loop");
// }

// console.log("script end");

// dekh lo phle start fir ... 10000 tk number fir end


// ye tha synchronous..... ab asynchronous dekho

// ab dekho.... set time out.. isme timing de dete h hm, ki itne der bad ye programe chalayege
// dekho example

// console.log("script start");

// const id = setTimeout(()=>{
//     console.log("inside setTimeOut")
// },1000);                 // 1000 milisecond mtlb 1sec bad code chale

// console.log("script end");

// output- start fir end fir inside time out

// ye tha asynchronous


// upar wala hi example dekho... . or output guess krna
// thoda sa change krte h upar wale code m

console.log("script start");

const id = setTimeout(()=>{
    console.log("inside setTimeOut");
},1000);

for (let i=0; i<100; i++){
    console.log("...");
}

console.log("setTimeOut id is", id);
// kuch na kuch id rhti h jaise hme 1 id mili
// clearTimeout(id);
console.log("clearing timeout");
// isse jo upar settimeout chalu h wo ruk jayega
console.log("script end");

// output:- start , 100 bar .... , fir id , cleartimeout fir end, or agr cleartimeout ni chalaya h to end k phle inside setTimeout chalega

// yad rakhna settimeout wala last m hi chalta h

 */



/*
// setInterval
// ab ye padhege  fir dono m diffrence dekh lenge

// set interval or settimeout wale sabhi kaam js k nahi browser k hote..

// console.log("script start");

// setInterval(()=>{
// console.log(Math.random());
// },1000);

// console.log("script end");

// output:- start , end fir 1 sec m math ka random no. aayega
// aisa isiliye ho rha (part 3 video timing - 28:33).. GEC (mtlb call stack) h wo abhi poora code dekh rha h.. mtlb print krna start kra usme script start s fir set interal ko de diya browser ko qki ye browser ka kaam h js ka nhi .. bola ki 1000 milisecond  (mtlb 1 sec) bad hme de dena ... to end print kra... fir tb tk 1 sec ho gya to ye browser s jayega callback queue m pr event loop kahega ki.. ruko abhi call stack m GEC chal rha h queue(line) m khade rho.. hn ab end bhi print ho chuka h.... GEC ki jagah mtlb callstack ki jagah khali ho gae... to event loop ne jo queue m tha... setinterval wo callstack m bhej dete h.. or fir yahi setinterval last m print hota h

//diffrence between settime out and set interval
// setTimeout: ****Executes code "once"**** after a specified delay.
// setInterval: Repeatedly executes code at fixed intervals until stopped.
 */




// ek practical krte h..usse setinterval smjho

// ek button lagate h jisme body m ra ndom color generate hote rhege usi ko button s rokna h..

// ab new html file lgegi ... folder name... settimeinterval


// aa gye waha s chalo ab aage




/*
// call back
// now ye  padho ab

// one function calling another function  - is called callback function

// function myFunc(callback){
//     console.log("Function is doing task 1");
// }

// myFunc();

// ye upar ek normal function bna diya..
// ek aur function bnate h.. pr hm first functin k parameter m callback lga de rhe h fir yahi callback neeche call kr liya fir aakhir m doosra function bna lete h.....

// function myFunc(callback){
//     console.log("Function is doing task 1");
//     callback();
// }

// myFunc(()=>{
//     console.log("function i doing task 2");
// })



// ek function bna lete h.... 2 no. add krne ka... callback function ka use krke

function getTwoNumberAndAdd(number1, number2, successfull, failHoGya) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        successfull(number1, number2);
    } else {
        failHoGya();
    }
}

function successfull(num1, num2) {
    console.log(num1 + num2);
}
function failHuaNa() {
     console.log("ye no. nahi h, no. dalo na kya likhe rhe ulta seedha");
}


// getTwoNumberAndAdd("4", 5, successfull, failHuaNa);
getTwoNumberAndAdd(4, 5, successfull, failHuaNa);

// upar ek function bnaya h... jisme 4 parameter h jisme 2 to function h successfull and failHoGya... to fir ek condition lagae ki number hi dalna .. no. dalne pr successfull function run hoga wo lega 2 no. or else m failHoGya function run hoga...

// ab successfull function run krne k liye.. ek function bnaya addtwonumber wala.. 2 number input m lega or add kr dega.. aise hi failHOgya k liye funtion bnaya failHuaNa bs consol log print ho jayega... ab function call kro


 */








// call back, callback hell , pyramid of doom
// ye padhna h ab




// ab new html file lgegi ... folder name - callback -demo

// chalo aa gaye waps callback s ... aao baitho





// promise.....(ab yahi padhna h)


/* // promise

// promise mtlb aisi future value h jo hmare pass abhi nahi h pr aage hogi

// promise mtlb ya to kaam hoga ya kaam ni hoga mtlb.... ya to resolve ya to reject

// ek example s smjhte h ....friedrice bnayege

console.log("script start")
const bucket = ['coffee', 'chips', 'vegetable', 'salt', 'rice'];

const friedricePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve({ value: "ban gya fried rice paise pay kro " });
    } else {
        reject("yr nahi bn paya.. paise wapas lelo apne")
    }
})

// as a javascript developer ... sare js developer ek bar promise produce krte h or consume bar bar krte h mtlb bahut bar krte h.. yahi hme krna h

// then method aur catch method.use krege hm .... upar 2 method lagae h resolve and reject uske liye hi then and catch (resolve k liye then ho gya or reject k liye catch) function bna rhe h ab

friedricePromise.then(
    // jab promise resolve hoga tb
    (myFriedRice) => { console.log("lets eat", myFriedRice) }
).catch((error) => { console.log(error) })


setTimeout(() => { console.log("hello from settimeout") }, 0)

for (let i = 0; i <= 100; i++) {
    console.log(Math.floor(Math.random()*100), i);
}

console.log("script end")


// output dekh liye ye  asynchronous h... phle console start, 100 bar random no. fir end fir lets eat fir timeout wala hello....
// (timing 01:48:04 dekhna h to dekh loo  bs ek line yaha imp h..
jo bhi settiomeout browser k pass jayega qki ye browser ka kaam h wo ...or yese hi then or catch bhi browser k pass jayege to then or catch jo h wo mircostack queue m add hota h or baki ka jo bhi h mtlb settimeout wagera wo sb callback queue m store hoga.... isme bhi agr prefrence pucha jaye to microtask queue wale ko jyada importance milti h ... compare to callback queue to microtask m jo  bhi hoga wo phle execute hoga)




 */



/*
// function returning promise...
// promise ek function return krta h.... jise new promise m store kr le rhe... baki upar wale code jaise hi h copy paste

function ricePromise() {
    const bucket = ['coffee', 'chips', 'vegetable', 'salt', 'rice'];
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve({ value: "ban gya fried rice paise pay kro" });
        } else {
            reject("yr nahi bn paya.. paise wapas lelo apne");
        }
    })
}


ricePromise().then(
    // jab promise resolve hoga tb
    (myFriedRice) => { console.log("lets eat", myFriedRice) }
).catch((error) => { console.log(error) })

 */

// promise and async await dono m function banana pdta h yad rakhna



/*
// promise && setTimeout

// promise m ab setTimeout lga kr dekhte h

// i want to resolve/ reject promise after 2 second

function myPromise(){
    return new Promise((resolve, reject) => {
        const value = true;
        setTimeout(()=>{
            if (value) {
                resolve();
            } else {
                reject();
            }
        },2000)
    })
}

myPromise()
.then(()=>{console.log("resolved kr diya bhai ab khush")})
.catch(()=>{console.log("reject ho gya bhai sorry !!!")})

// value- true ho to resolve, false to reject

 */







/*
// promise.resolve
// promise channing

const myPromise = Promise.resolve(5);

// console.log(myPromise);
// ab resolve krna h

Promise.resolve(5).then(printKrDeteHai => {
    console.log(printKrDeteHai);
})

// resolve m 5 store kra h... to console m dikh rha h
 */




/*
//then
// ye then hmesha ek promise return krta h... aacha dekh lo

function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("kuch to return hua");

    })
}

myPromise()
    .then((printKrDeteHai) => {
        console.log(printKrDeteHai);
        printKrDeteHai += "resolve m";  //+= m add krte ja rhe h hm
        return printKrDeteHai           // sare then return krte h
    })
    .then((printKrDeteHaiyr) => {
        console.log(printKrDeteHaiyr);
        printKrDeteHaiyr += " dekho reject hua";
        return printKrDeteHaiyr;

        // yaha pr poora (printKrDeteHaiyr) ye poora function return hua h ... to .then lga k pakad liya h
    })
    .then((printKrDeKya) => {
        console.log(printKrDeKya);
    })

 */







// upar jo callback hell or pyramid doom dekha tha na wahi ab promise s krke dekhte h
// ab new html file lgegi ... folder name - promise callbackhell

// aa gye waps.... ab AJAX theory padho



// AJAX theory

// AJAX- asynchronous javascrit and XML

// HTTP request padhege ab

// ye  "web development techniques" ka set h
// jo bahut sari web technologies use krta h "client-side" wali... jisse asynchronous web application..create hota h...


// with AJAX, web application can send and retrieve data, from a server asynchronously (in the background), without interfering with the display, and behaviour of the existing page


// we don't use data in XML format anymore.
// we use JSON now.

// so we have 3 most common ways to create and send request to server
// 1.) XML HTTP Request (ye purana tareeka h)
// 2.) fetch API ( ye modern js ka new way h)
// 3.) axios (this is third party library)


// new html file lagegi folder name - XHR HTTP request

// ab bas wahi khtm ho jayegi javascript.... yaha wapas aane ki need ni h

// shri ganeshaya namaha 😍....finally end