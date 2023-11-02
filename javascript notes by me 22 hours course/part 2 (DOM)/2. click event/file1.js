/*

// click event on multiple buttons

const allButtons = document.querySelectorAll(".my-buttons button");

// for of loop laga kr dekhte h

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this);
        // console.log(this.textContent);
//     })
// }
// //  teeno button click krke dekh lo.. console m ans....bcz of "this" isse jis button p click kroge wahi console m dikhegi
// this.textContent aise likh denge to text dikhega jis button p click kroge

// agr hm normal function ki jagah arrow function bna dete h to waha this ki value window hi hogi


// pr 90% jagah event listner m hm arrow function hi lagayege wo aage seekhege ki kaise lagayege

// normal for loop lagate h

// for(let i=0; i<allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }

// // same output --  teeno button click krke dekh lo.. console m ans


// ab forEach lga k dekh lete h

// allButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//         console.log(this);
//     });
// })

// // same output --  teeno button click krke dekh lo.. console m ans

 */




/*
// event object
// lo ye padhege ab

// const firstButton = document.querySelector("#one");

// // firstButton.addEventListener("click", function(event){
// //     console.log(this);
// // })
// // this mtlb wahi button jispe click kra h... firstbutton
// // arrow function m this ki value window ho jati h ye to hme pta h.. peche padha v hoga tumne .....hmne likha h

// firstButton.addEventListener("click", function(event){
    // console.log(event);
// })

//function(abcd) mtlb(isme) kuch bhi likh skte h pr .. e likho ya event likho to aacha rhta h


// jab bhi mai kisi bhi element pe event listener add hoga
// js Engine --- code ko line by line execute karta hai

// ex. chrome browser h to usme ---- js Engine aur kuch extra features hote h or
// browser m ----- js Engine aur + WebApi (mtlb chote chote application hote h jo hmare liye kaam krte h)  bhi hote h


// jab browser ko pata chala ki user ne event perform kia
// jo event hum listen kar rahe hai ..
// to browser mtlb(extra feature or WebAPI) 2 kaam krege

// 1.) callback function hai vo js Engine ko dega ...... ki le bhai ye function lele or is code ko execute kar
// 2.)  callback function ke sath wo ... (wo mtlb browser mtlb extra WebAPI wagera wo sb) jo event hua hai uski information bhi dega... hme ni dikh rhi to wo dekhne k liye ham
// ye info hamein ek object ke form mai milegi to use hi hm store krege mtlb  us object ko hm recieve krege yaha p

// smjh ni aaya hoga... i know 😂 chalo neeche dekh hi lo smjha dete h

// dekho upar ka sara code phle comment kr do

const allButtons = document.querySelectorAll(".my-buttons button");

//for of loop lagate h dekho.. sare button select kr rhe ab... dekho yaha arrow function hi lagaya h pr (event) ye h na iski jagah p kuch bhi likh skte h waha.... pr e ya poora event likho to sahi lgta h or aisa likhne s console m bahut kuch dikhta h.... to hm usme s sirf target hi use kr rhe bs

for(let button of allButtons){
    button.addEventListener("click",(event)=>{
        console.log(event.currentTarget);
    })
}

//currentTraget mtlb .. jab hmne click kra to konse button pr event attached tha wo dikhega click krne pr
// baki extra info janna h to aage padhege na waha dekhna

 */





/*
// how event listner worksmtlb behind the scene
// ab padhege (event behind the scene) dekho

// script start phle print kra... fir outervar print pr usme to timer lga h to aaya fir last ka script end print hua...

// par beech m all button pr forEach mehtod lgi h... timing lgi h  button pr jldi jldi alg alg click krke dekkh lo.. jo bhi button ki timing phle poori hogi wo button print ho jayegi



console.log("script start !!!!!")
const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach((button)=>{
//     button.addEventListener("click", (bhanu)=>{
//     console.log(bhanu.currentTarget.textContent,);
//     })
// })


// direct run ho rha h thoda delay krna h is call back fn ko.. isi upar wale code ko copy paste krke smjhte h


allButtons.forEach((button) => {
    button.addEventListener("click", (bhanu) => {

        let num = 0;
        for (let i = 0; i <= 1000000000; i++) {
            num += i;
        }

        // delay k liye upar ye for loop lagaya h
        console.log(bhanu.currentTarget.textContent, num);
    })
})

// outer variable k liye bhi ek delay lga kr for loop lga de rhe

let outerVar = 0;
for(let i = 0; i<= 100000000; i++){
    outerVar += i;
}
console.log("value of outer variable is ", outerVar);
console.log("script end !!!!!")


// ab ye sb detail m sunna h to part 2 ki timing (06:51:20 s sun lo)
// event loop k bare m bataya h ki wo callback function ko rok k rakhta h event loop ki abhi GEC m phle s kuch add h wo jagah khali hone do... fir aage badhna
 */


/* // upar += lga h wo dekh lo agr bhool gae ho to
addition assignment (+=) operator performs addition
//let a = 2;

console.log((a += 3)); // Addition
// Expected output: 5
 */




/*
// practice with click event
// little practice with click event
// button ka color change krna h ... click krne pr

const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons.length);      //3



allButtons.forEach(button => {
    button.addEventListener("click", (event)=>{
        // console.log(event.target);

        // isko uncomment krke button pr click krke dekho

        event.target.style.backgroundColor = "red";
        event.target.style.color = "black";

    })
})

 */




// demo project... new htnml file bna rhe folder ka naam -- demo project
// dekho ek project bnate h.... button click krne s koi bhi random color generate krege.... ek hi button select krke bna rhe h.. thk h



