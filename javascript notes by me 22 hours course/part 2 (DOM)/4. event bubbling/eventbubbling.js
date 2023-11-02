//part 2 DOM s aae ho na aao baitho padho
// event bubbling.. event capturing.... capturing event padho ab.....

/* 
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


// capturing event dekho phle... isme ek boolen value lagate h... true ..  agr ye true na lagao to wo bina capturing wala h
// capture krna h event to true lagao (video timing part 2 07:36:00)

child.addEventListener("click", () => {
    console.log("pakad liya.. bacche ko");
},true);
// child pr click krke dekho

parent.addEventListener("click", () => {
    console.log("bacche k papa ko pakdo");
},true);
// parent p click kro...
// agr child ko click kroge to child or parent dono apne s select ho ja rhe

grandparent.addEventListener("click", () => {
    console.log("dada ko pakdo bhaiya");
},true);
// grandparent pr click krke dekho
// agr child ko click kroge to child or parent k sath grandparent teeno apne s select ho ja rhe....... 

// yahi key event bubbling ya event propogation hota h... ek event pr click kra to .. 
// uske parent pr agr event lga h to wo bhi sath m call ho jata h 

document.body.addEventListener("click",() => {
        console.log("yaha s body pakdoge");
},true);
// body pr click kroge to ... body capture hogi





// bina capture wale dekh lo   same hi h bs isme true ni lga h

child.addEventListener("click", () => {
    console.log("pakad liya.. bacche ko");
});
parent.addEventListener("click", () => {
    console.log("bacche k papa ko pakdo");
});
grandparent.addEventListener("click", () => {
    console.log("dada ko pakdo bhaiya");
});
document.body.addEventListener("click", () => {
    console.log("yaha s body pakdoge");
});



// upar ka sara code un comment krke child pr click kro... fir dekho..ek bubble banega mtlb...
// body s grandparent s parent s child.. fir child s parent s gp s body.. aise likha aayega... jbki hmne to sirf child ko press kra tha..
// yahi h child bubbling

 */


// *************************

// event bubbling ya event propogation:- event pr click kra to .. uske parent pr agr event lga h to wo bhi sath m call ho jata h 

// event capturing :-  body s grandparent s parent s child.. fir child s parent s gp s body.
// jaise capture krte hue jata h usi hisab s usi raste s laut aata h

// *************************







/* 
//  ****&&&&&&&&&&&&&&&&&&&***********************&&&&&&&&&&&&&&&&&&&&&**************************
// bubling and capturing dono sath m chala k dekhte h  ek bar  mja aa rhi h isiliye....

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// captuing wale h.... mtlb bubbling
child.addEventListener("click", () => {
    console.log("pakad liya.. bacche ko");
},true);

parent.addEventListener("click", () => {
    console.log("bacche k papa ko pakdo");
},true);

grandparent.addEventListener("click", () => {
    console.log("dada ko pakdo bhaiya");
},true);

document.body.addEventListener("click",() => {
    console.log("yaha s body pakdoge");
},true);



// bina capture wale dekh lo  

child.addEventListener("click", () => {
    console.log("baccha pakda gya !!!!!");
});
parent.addEventListener("click", () => {
    console.log("baccha k papa ko pakd liya gya !!!!!");
});
grandparent.addEventListener("click", () => {
    console.log("baccha k dada ko pakd liya gya !!!!!");
});
document.body.addEventListener("click", () => {
    console.log("ye bina capture ki body!!!!!!!");
});



// ye cycle aise chalti h.... capturing bubbling capturing bubbling

//  ****&&&&&&&&&&&&&&&&&&&***********************&&&&&&&&&&&&&&&&&&&&&**************************

 */







/* 
// event delegation dekho...  (MIMP)

// const grandparent = document.querySelector(".grandparent");
// grandparent.addEventListener("click", ()=>{
//     console.log("tumne kaha click kra");
// });


// hmne child pr click kra fir v hme yahi output aa rha ...jbki hmne to  grandparent pr event lagaya h... aisa q ho rha
// to hua aisa ki mala bnti aae...upar s.. (mtlb bubbling hona start hue)

// hmne child p click kra ab mala body s grandparent p aae yaha click event h to ha h.. print hua.. fir parent p dekha to ni h fir child p dekha ni h... 

// fir wapas lauta parent p firse ni h. grandparent pr h... to wahi callback function call hua simple

// iska fayda ye h ki hme sbke liye alg alg .. eventlistner lagane ki jaroorat ni h


// pr agr hme sirf specific child ka chaiye to hm use krege.... ********event object*******
// mtlb ye ("click", (event)=>{...... ye aisa click event k bad event object


// upar wale code ko copy paste kr rhe dekho.... upar wale ko comment kr do phle

const grandparent = document.querySelector(".grandparent");
grandparent.addEventListener("click", (event)=>{
    console.log(event.target.textContent);   // textContent v laga lo. to naam aa jayega... target lagane s.. wo jaha click kra wo dikhega
});

// ab dekho jispe click kroge wahi event click hoga.... child to child parent to parent...
// or itte sare sbke liye alg alg event listner lagane ki jaroorat hi ni h
 */
 










// ab final ek project bnana h bs...... 80% javascript khtm
// chalo wapas web page pr... folder name - part 2 DOM

// line 871 p milega agr bhool gae ho to.. line bta di


