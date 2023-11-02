// call back, callback hell , pyramid of doom
// ye padhna h ab...

// isme jo heading banae h... unme 1 s lekar 10 tk heading ka text content or color change krna h.... pr hr cheez  1 sec k delay k bad change ho 

// chalo banate h ye project...... phle heading select krte h

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");



// dekho aisa krna h....

// Text       Delay   Color

// one        1s      Violet
// two        2s      purple
// three      2s      red
// four       1s      Pink
// five       2s      green
// six        3s      blue
// seven      1s      brown  // ye bs 7 h hm 3 or add kr le rhekhud s ...hm 10 banana chah rhe h


// setTimeout(() => {
//     heading1.textContent = "one";
//     heading1.style.color = "violet";
// },1000);

// setTimeout(() => {
//     heading2.textContent = "one";
//     heading2.style.color = "purple";
// },1000);

// ye dono to ek sath change ho rhe h ... m to chah rha tha ki phle wale k change hone k bad doosra change ho to kaise likhege dekh lo


// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");

// setTimeout(() => {
//         heading1.textContent = "one";
//         heading1.style.color = "violet";

//     setTimeout(() => {
//             heading2.textContent = "two";
//             heading2.style.color = "purple";
//     },1000);

// },1000);



//*******
// aise ho rha h syntax dekhlo
// settimeout(()=>{},1000)    normal ye syntax h na....ab dekho

// setTimeout(()=>{(()=>{})}) ye kiya h maine mtlb
// {} iske andr  (()=>{}) ye arrow function rakh diya bracket m bnd krke

//*******






// call back hell suru krte h... callback function to hm jante h

// setTimeout(() => {
//     heading1.textContent = "one";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "two";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "three";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "four";
//                 heading4.style.color = "Pink";
//                 setTimeout(() => {
//                     heading5.textContent = "five";
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         heading6.textContent = "six";
//                         heading6.style.color = "blue";
//                         setTimeout(() => {
//                             heading7.textContent = "seven";
//                             heading7.style.color = "brown";
//                             setTimeout(() => {
//                                 heading8.textContent = "eight";
//                                 heading8.style.color = "Olive";
//                                 setTimeout(() => {
//                                     heading9.textContent = "ninth";
//                                     heading9.style.color = "Maroon";
//                                     setTimeout(() => {
//                                         heading10.textContent = "tenth";
//                                         heading10.style.color = "Indigo";
//                                     }, 1000)
//                                 }, 1000)
//                             }, 1000)
//                         }, 1000)
//                     }, 3000)
//                 }, 2000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// }, 1000)



// yahi h callback hell... isko maintain update krna mushkil h yr....  isiliye use ni krte
// isiliye hi hm promises padhege.....aage

// ab pyramid of doom dekho..... same kaam hoga jo upar kra h..... ham ek function bna lete h dekho.....



// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");

// function changedTextColor(element, text, color,time, successFullHua, failHoGya) {
//     setTimeout(() => {
//         element.textContent = text;
//         element.style.color = color;
//     }, time);
// }

// changedTextColor(heading1, "one", "red", 1000)



// pr ek condition bhi lga kr dekhte h yr




function changeText(element, text, color, time, successfullHua, failHoGya) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (successfullHua) {
                successfullHua();
            }
        } else {
            if (failHoGya) {
                failHoGya();
            }
        }

    }, time)
}


// pyramid of doom

// yesa likhna h line 83 k hisab s smjh lo ab
// changeText(heading1, "one", "violet", 1000,()=>{},()=>{}) 
// phla call back "()=>{}" ---> sucess ka doosra fail ka

// changeText(heading1, "one", "violet", 1000, () => { 
//     console.log("success hua or kya") 
// }, () => { console.log("Heading1 does not exist (mtlb fail hua)")})

// check kr lo console log m ... upar jo heading select kri h.. usme 1st heading , heading1 ki jagah heading 12 kr do to Heading1 does not exist (mtlb fail hua) ye print hoga wrna success to print ho hi rha


// yahi kaam poori 10 heading k liye krna h to chalo krte h... upar wala comment kr diya wo bs smjhne ko tha.... success ka console hta de rhe h thk h

// changeText(heading1, "one", "violet", 1000, () => { 

// }, () => { console.log("Heading1 does not exist (mtlb fail hua)")})


// 2-3 heading ka smjho phle fir 10 heading ka smjhna upar ka function to wahi rhega condition wala.... bina condition wala bhi lgaya h upar smjhne k liye fir conditon wala h.... chalo dekho


// changedTextColor(heading1, "one", "red", 1000, () => {
//     changedTextColor(heading2, "second", "purple", 1000, () => { 
//         changedTextColor(heading3, "third", "cyan", 1000, () => { 
//         console.log("successfull") }, () => { console.log("failhua") });
//     console.log("successfull") }, () => { console.log("failhua") });
// console.log("successfull")}, () => { console.log("failhua") });


// isme s chaho to successfull wala console.log hta skte h dekho

changedTextColor(heading1, "one", "red", 1000, () => {
    changedTextColor(heading2, "second", "purple", 1000, () => {
        changedTextColor(heading3, "third", "cyan", 1000, () => {
        }, () => { console.log("failhua") });
    }, () => { console.log("failhua") });
}, () => { console.log("failhua") });



// ye dekho aise formate rhega.... ab poori 10 heading k liye suru krte h


changeText(heading1, "one", "violet", 1000, () => {
    changeText(heading2, "two", "purple", 2000, () => {
        changeText(heading3, "three", "red", 1000, () => {
            changeText(heading4, "forth", "pink", 1000, () => {
                changeText(heading5, "fifth", "green", 2000, () => {
                    changeText(heading6, "sixth", "blue", 1000, () => {
                        changeText(heading7, "seven", "brown", 1000, () => {
                            changeText(heading8, "eight", "cyan", 1000, () => {
                                changeText(heading9, "ninth", "indigo", 1000, () => {
                                    changeText(heading10, "tenth", "Maroon", 1000, () => {

                                    }, () => { console.log("Heading10 does not exist (mtlb fail hua)") })
                                }, () => { console.log("Heading9 does not exist (mtlb fail hua)") })
                            }, () => { console.log("Heading8 does not exist (mtlb fail hua)") })
                        }, () => { console.log("Heading7 does not exist (mtlb fail hua)") })
                    }, () => { console.log("Heading6 does not exist (mtlb fail hua)") })
                }, () => { console.log("Heading5 does not exist (mtlb fail hua)") })
            }, () => { console.log("Heading4 does not exist (mtlb fail hua)") })
        }, () => { console.log("Heading3 does not exist (mtlb fail hua)") })
    }, () => { onsole.log("Heading2 does not exist (mtlb fail hua)") })
}, () => { console.log("Heading1 does not exist (mtlb fail hua)") })





// ab ye bhi dikkat wala kaam h na maintain krna ya update krna.... pr isse aacha.... promise h to wo padhege ab

// padh liya callhell and pyramid doom.... to ab wapas jao part3 synchronous file pr







