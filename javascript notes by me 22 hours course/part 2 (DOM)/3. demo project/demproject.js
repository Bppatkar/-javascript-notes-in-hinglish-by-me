/* // dekho ek project bnate h.... button click krne s koi bhi random color generate krege red , green or blue.... thk h

const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");


// ab function bnate h

function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256);


    // flor mtlb  jaise 112.3 to round figure 112, or 112.8 to round figure 113 ab smjhe floor.. or 256 s multiply mtlb hme 1 s 255 tk value chahiye h... or math.random s random no. generate krte h


    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);


    // back tick use krke teeno color select krte h wahi dikhega... or ek variable m store kr lete h


    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}

// ab dekho jo upar mainButton variable banaya h usme  event listner lagate h


mainButton.addEventListener("click",()=>{

    // randomColorGenerator ko randomcolor s connect kra.... or randomcolorgenerator s 3 color jude h red green blue


    const randomColor = randomColorGenerator();
    // console.log(randomColor);

    // ab color set krte h

    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})

 */



// ab wahi purane webpage  pr chaloo..... folder name part 2 DOM


