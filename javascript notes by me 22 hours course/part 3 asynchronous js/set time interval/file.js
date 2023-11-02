const body = document.body;
const button = document.querySelector("button");

const intervalId = setInterval(() => {
    const red = Math.floor(Math.random() * 50);
    const green = Math.floor(Math.random() * 50);
    const blue = Math.floor(Math.random() * 50);
    const rgb = `rgb(${red},${green},${blue})`;
    //backtick k bad rgb likha h na to rgb k bad space mt dena.. code ni chalega 
    // body.style.background='';
    // Math.floor(Math.random()*256); isko console m chalao ... random no. generate aa rha h pr line 10 m ('') isme rgb jo bnaya h ... wo lagao fir webpage dekho.. to hmne ye line 12 m krke dekhe h ..... dubara mt likhna tumisiliye line 10 comment kr rhe h
    body.style.background = rgb;
}, 1000);

// ab button m addeventlistner lagate h jisse color roka ja ske
button.addEventListener("click", () => {
    clearInterval(intervalId);
    // clear kr diya upar ka interval.. ab rokne pr hme rgb value chaiye h to textcontent lgaya
    button.textContent = body.style.background;
});


console.log(intervalId);       // id 1 aa rhi h

// dekh chal gya.... code bna liya hmne
// agr isme again start button chahiye h to ek or folder h just funny wo dekho


// ... ab wapas chalo part3 asynchronous js file par smjhe