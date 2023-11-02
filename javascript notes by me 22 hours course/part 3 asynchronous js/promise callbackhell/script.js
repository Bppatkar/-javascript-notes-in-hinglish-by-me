// chalo ye krte h phle heading select kr lenge
// callback hell or pyramid doom dekha tha na wahi ab promise s krke dekhte h


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading");
const heading10 = document.querySelector(".heading10");

function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve();
            } else {
                reject("nahi ho paya yr heading jaha select kri h.. waha kuch missing h 9th heading dekho...maine jaanboojh k hataya h");
            }
        }, time)
    })
}

// ab promise m then method s.. aage ki promise krunga

// changeText(heading1, "one", "red", 1000).then(()=>changeText())

// ye formate rakhna h

changeText(heading1, "one", "red", 1000)
    .then(() => changeText(heading2, "two", "purple", 1000))
    .then(() => changeText(heading3, "three", "green", 1000))
    .then(() => changeText(heading4, "four", "orange", 1000))
    .then(() => changeText(heading5, "five", "blue", 1000))
    .then(() => changeText(heading6, "six", "indigo", 1000))
    .then(() => changeText(heading7, "seven", "silver", 1000))
    .then(() => changeText(heading8, "eight", "yellow", 1000))
    .then(() => changeText(heading9, "ninth", "yellowgreen", 1000))
    .then(() => changeText(heading10, "tenth", "cyan", 1000))
    .catch((isme_reject_hoga) => {
        alert(isme_reject_hoga)
    })


// yese return ho rha tha pr ek hi line h to return keyword or {} ye hta diye h

//     changeText(heading1, "one", "red", 1000)
//     .then(() => { return changedTextColor(heading2, "second", "purple", 2000)})
//     .then(() =>{ return changedTextColor(heading3, "three", "green", 1000)})
//     .then(() =>{ return changedTextColor(heading4, "four", "orange", 1000)})
//     .then(() =>{ return changedTextColor(heading5, "fifth", "blue", 1000)})
//     .then(() =>{ return changedTextColor(heading6, "sixth", "indigo", 1000)})
//     .then(() =>{ return changedTextColor(heading7, "seven", "silver", 1000)})
//     .then(() =>{ return changedTextColor(heading8, "eight", "silver", 1000)})
//     .then(() =>{ return changedTextColor(heading9, "ninth", "silver", 1000)})
//     .then(() =>{ return changedTextColor(heading10, "tenth", "silver", 1000)})
//     .catch((error) => {
//         console.log(error);
// })


// ab bs ye khtm...... chalo.. waps apne part3 synchronous file pr