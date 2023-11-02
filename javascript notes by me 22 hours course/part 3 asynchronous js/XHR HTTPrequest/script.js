// XHR HTTP Request

/* // const xhr = new XMLHttpRequest();
// console.log(xhr);

// ab hme is xhr object ko use krke request krni h... kaha pr... server m... server hm khud decide kr skte h ki wo kya krega.... ya hm bna banaya API bhi use kr skte h...... uske liye hm google pr search krte h....
// json typicode
//... isme posts dekho usme jo API h... wo backend wale denge... pr hme seekhna h ki wo data hm frontend wale use kaise krege


// aisa smjh lo ki in API ka use krke hm server pr request krege.....uske liye https methods/verbs hoti h hmare pass jaise
// GET- iska mtlb hme kuch get krna h.. kuch read krna h
// POST - kuch data create krna h
// DELETE - kuch data delete krna h
// PUT - kuch data h usme update krna h/ overwrite krna h
// PATCH - jo data h usme thoda sa change krna h

// broser automatically GET request kr deta h

// console m network pr dekho hmne request kri h to dikhega or headers m status code.. or baki detail bhi dikhege
// wahi side m response ka option h wo dekho.... usko dekh kr lgega ki array k andr kuch object h ... pr wo JSON (javascript object notation) hai

// wo json data copy krke la rhe h.... browser khud s kr deta h get put patch delete.... usko batana ni pdta

// to ab waha s code lakar ek json file banayege.... myfile.json
// usko dekh kr lgega ki array k andr kuch object h ... pr wo JSON (javascript object notation) hai..... diffrence ye h ki object m key value pair hote h or waha hm single/double quote nhi lagate h pr yaha double quote lge hue h.... isme array . object, number sb kuch use kr skte ho bs isme methods ni hote

// ab hm ek API s request krege dekho ab

// post pr jakar upar s uski link copy kr lao... qki / (slash) k aage to sb same hi hoga fir bhale posts ki jagah kuch or open kro to wo badal jaye
// https://jsonplaceholder.typicode.com/posts     ---- ye link


// 3 method batae h na.... usme s 1st wali dekhte h aao....

// step 1
// open method use krege dekho line 49
// open method 2 cheezein lega... get krna h post ya delete ya kuch... or doosra request kise krna h
// ye kaam asynchronous hoga mtlb background m browser krega... fir send kr denge  xhr.send()



// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// // console.log(xhr);

// // console m dekh skte ho isse xmlhttp request ko

// // console.log(xhr.readyState);      //0


// xhr.open("GET", URL);
// xhr.send();

// smjh gaye ....aise kaam ho rha h.. ab firse yahi code likh de rhe... aage padhne k liye

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
console.log(xhr.readyState);
xhr.open("GET", URL);

// console m dekho bahut sari method dikhegi usme... ek hogi readystate ye bahut sari state s nikalti h.. phle 0 fir 1 ,2,3,4 aise. to jo onreadystatechange isko function k equal kr skte h or browser isko dekhta rhega abhi mere mtlb jo reuqest kri h uski state kya h...

console.log(xhr.readyState);

// 1 ho gyi state--open krne k phle ready state 0 thi .. open k bad 1 hue


xhr.onreadystatechange = function () {
    console.log(xhr.readyState);

    //  .send() lagana tabhi to pta lagega ki send hua ya ni... or state change hue ya ni.. to 1,2,3,4 .... 4bar state change hue h

    // ye process h dekho ... jb 4 aaye tb complete manege... to hm if condition lga de rhe ki jb readystate 4 ho tabhi chale

// value    state            description
//  0	   UNSENT	       Client has been created. open() not called yet.
//  1	   OPENED	        open() has been called.
//  2	HEADERS_RECEIVED	send() has been called, and headers+status are available.
//  3	  LOADING	        Downloading; responseText holds partial data.
//  4	    DONE	            The operation is complete.




    if (xhr.readyState === 4) {

        // console.log(xhr.response);

        // dekho console m reponse mil rha h.. type check kr lete h

        // console.log(typeof xhr.response);
        // string aa rha h... jbki ye to json h to hm ise javascript k object m badlenge....json.parse ka use krke because(JSON.parse() is a JavaScript method that converts a JSON object in text format to a JavaScript object.)

        const response = xhr.response;
        const data = JSON.parse(response);
        //parse kr diya ab type check krte h
        console.log(typeof data);    // dekho object ho gya na
    }
}

// abhi console m network pr jake dekho 200 status code... response m json file sb mil rha pr

// link jaha add kri h waha post h last m usko thoda sa change kro fir yahi cheez dekho network m ... 404 error milne lga na or response m dekhoge to empty object milega... to ye status code bahut IMP isse pta chalta h ki hme response thk s mila ya ni mila

//dekho wikipedia p aisa h, 100 ki line m ho to aisa.. 200 m aisa so on
// 200 ki line wala successfull rhta h

// 1xx "informational response"
//the request was received, continuing process

// 2xx "successful"
//  the request was successfully received, understood, and accepted

// 3xx "redirection"
//  further action needs to be taken in order to complete the request

// 4xx "client error"
// the request contains bad syntax or cannot be fulfilled

// 5xx "server error"
// the server failed to fulfil an apparently valid request

// 4 pr hi hmara code chale wahi state aachi hoti h.... ye pta bs rakhna h pr itni panchayat ni chahiye... hm aise bhi likh skte h upar k  code ko
// is code ki bat kr rha hu m

// console.log(xhr.readyState);

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         console.log(xhr)
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(typeof data);
//     }
// }


// isko aise likh skte h
// onload property lga denge mtlb ye tabhi chlega jb readystate condition 4 ho jayegii.... faltu m if condition lagane ki jaroorat ni rhegi

xhr.onload = function () {
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();
 */



/*
// mtlb total code itna hi h bs

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
// console.log(xhr.readyState);    //0

xhr.open("GET",URL);
// console.log(xhr.readyState);    // 1

xhr.onreadystatechange = function(){
    // console.log(xhr.readyState);
    if(xhr.readyState === 4){
        console.log(xhr)
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(typeof data);
    }
}


xhr.send();
*/


/*
// is code ko aise likh diya h fir... onload laga kr

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
// console.log(xhr.readyState);   // 0

xhr.open("GET",URL);
// console.log(xhr.readyState);   // 1


xhr.onload = function(){
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}

xhr.send();


// same kaam ho rha h...
 */





/*
// ab ye khtm ab error handling dekhege isi m.... to practice k liye code firse likh k dekhte h

// error handling

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.onload = () => {
    // phle json.parse s object m change krege fir upar
    // condition lga dete h ki status code 200 s 300 k beech (status >= 200 or 300 s km to < 300) hi rhe tabhi hme response sahi milega hmara to , condition lga di or parse kra hua object isi m rakh diya
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response)
        console.log(data);
    } else {
        console.log("kuch galat likh diya h tumne")
    }

}
// itna sahi aa rha h pr agr maine yaha net disconnect kr diya tb dekho kya hota h.... to network related error aayegi uske liye.. ek property lagate h.. dekh lo kaise lga rhe h poora syntax onload onerror sbka syntax kaise likh rhe h

xhr.onerror = () => {
    console.log(" Bhaiya aapka Network Ni chal rha");
}
xhr.send();

// ye error handling ho gae
 */

/*
// pr jo json m itna sara data tha kisi ek bande ki info chahiye h to
// mltb aisa... "https://jsonplaceholder.typicode.com/posts/1"

//.... dekho kya krege... hm code ko neeche copy paste kr rhe h.. jisse clear smjh m aae sb


const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.onload = () => {

    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response)
        console.log(data);
        // maan lo hme 4rth bande ka data chahiye
        const id = data[3].id;
        console.log(id);
        // ab hme firse url pr request krni h
        // jo upar starting s bnaya h waise hi firse kaam krna pdega
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`
        console.log(URL2); // url show hone lga
        xhr2.open("GET", URL2);
        xhr2.onload = () => {
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();
    } else {
        console.log("kuch galat likh diya h tumne")
    }

}

xhr.onerror = () => {
    console.log(" Bhaiya aapka Network Ni chal rha");
}
xhr.send();



// ye tareeka jyadatar use ni krte... pr janne k liye seekh liya h fetch use krte h
 */



/*

// XHR using promise
// same cheez ko same code ko promise s dekhege ab... callback to dekh liya upar

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            }
            else {
                reject(new Error("nhi ho paya yr"));
            }
        }
        xhr.onerror = function () {
            reject(new Error("kuch to gadbad h daya"));
        }
        xhr.send();
    })
}

// const whatIsThis = sendRequest("GET", URL);
// console.log(whatIsThis);




// .then promise return krta h... iski channing smjhna h to ye... same  aadha code copy paste

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            }
            else {
                reject(new Error("nhi ho paya yr"));
            }
        }
        xhr.onerror = function () {
            reject(new Error("kuch to gadbad h daya"));
        }
        xhr.send();
    })
} sendRequest("GET", URL)
    .then(response => {
        const data = JSON.parse(response);
        // console.log(data);    // aa gya poora object
        return data;
        // ye data k sath return na hoga to undefined aayega
    })

    // .then bhi promise return krta h aur resolve krta h us value k sath to aage firse .then lga kr badhte jayege

    .then(data => {
        const id = data[8].id;    // maan lo 9th bande ki id dekhna h
        console.log(id)
            ; return id;
    })
    .then(id => {
        const url = `${URL}/${id}`;
        return sendRequest("GET", url);
    })
    .then(newResponse => {
        const data = JSON.parse(newResponse);
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })

// ye chaining thi ki ... ,, .then lga lga kr aage badhte rho bs
 */





/*
//fetch
// hme itna sb code likhne ki jaroorat ni h.... "fetch" hmara sara kaam khud krke dega.... upar wale url s hi smjhege


const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)-- itna likhne pr ye khud get request krega browser s or return kya krega.... promise...

// fetch promise return krta h

// const whatIsThis = fetch(URL);
// console.log(whatIsThis);

// dekho promise aa rha na.... ab promise return kr rha h to hm ispe      .then lga skte h


 fetch(URL)
 .then(abcd => {
   if(abcd.ok){             //if (value = 1) {  ye bhi likh skte ho
    return abcd.json();
   }else{
    throw new Error("kuch to gadbad h daya");
   }

 })
 .then(efgh => {
    console.log(efgh);
 })
// output to aa rha h pr hme json jaise data ni mil rha... to json method calll krte h... pr json bhi ek promise return krega... to return kra kr ...efgh ko print kra to jo hme chahiye tha wo mil gya


// upar url m changes kr doge na kuch bhi to bhi .catch ni chalega.... qki aache s suno...


//dhyan s MIMP h

// ************&&&&&&&&&&&&&&&&&&&&&&&&&
// fetch sirf network related error m catch lega... ye 404 error m catch ni lega
// *************&&&&&&&&&&&&&&&&&&&&&&&&

.catch(error =>{
    console.log("inside catch wala");
    console.log(error);
})

// url m change krke dekh lo.. 404 error aauega pr catch ni chalega.... catch ni chal rha pr then chal rha h
// mtlb response mil rha h to hm response print kr lete h .. line add kri
// isme  ok ki value false aa rhi h to hm condition lagate h or line neeche ki hta de rhe h( ye likha tha waha-- console.log(abcd);)
 */



/*
// ab isi code s data ko post krege abhi to sirf get kr rhe the.... to usi website pr jsontypi code..m jaha routes k neeche see guide ka option h waha , creating a resource h wahi s data copy kr rhe or upar ka code firse likh rhe.. for more clearity

// POST mtlb data create krna to title body userID m data banaya h or create krke post kr diya

// json.stirngify jo ye object hmne bnaya h title body userID isko json  m convert krega.... header lagana is mmmmmmmmIMPPPPP

// chaho to code chala k dekh lo


const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    //*******yaha headers include krna bahut bahut MIMMMMMP hai*****
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })

    // yaha s upar wala code hi copy paste kra h

    .then(abcd =>{
        if(abcd.ok){
            return abcd.json()
        }else{
            throw new Error("Something went wrong!!!")
        }
    })
    .then(efgh =>{
        console.log(efgh);
    })
    // ye catch tab chlega jb net disconnect ho
    .catch(error =>{
        console.log("inside catch");
        console.log(error);
    })

// or jyada janna patch,delete ya or kuch methods bhi to wahi json placeholder ki website m guide m jake padh lo

 */


// onload Vs onerror

// onload..... isko likhne s if condition lgane ki jaroorat ni... ye tabhi chalega jb readystate 4 ho jayegi
// onerror- network related error h




/*
// async  await

// hm jo fetch m kr rhe the na .then . catch wo async await s remove ho skta h... background .then .catch hi hoga pr samne ni dikhega

// usi code s smjhte h thk h

const URL = "https://jsonplaceholder.typicode.com/posts";

// isi m phle fetch krte h response ko
// fetch(URL)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     })

// abhi tk ye hm kr kya rhe the... hm .then lga lagakr function ko consume kr rhe the

// ab normal function bna kr agr uske aage async likh de to wo normal function ni rhega...mtlb  jab bhi hm async lge function ko call krege ye return m hme hmesha promise dega.... ****hmesha

// example dekho

// mtlb async await or promise k liye function bnana pdta h


// phle ye dekh lo ki sach m promise return kr rha h ya ni

/* const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPost(){

}

const returned = getPost();      

// getPost ko call kra or store krke print kra dekho promise de rha na

console.log(returned); */


/* const URL = "https://jsonplaceholder.typicode.com/posts";
async function getPost() {
        const response = await fetch(URL);
        console.log(response);
    }
getPost();
 */                // response mil rha tha hme





// async function getPost() {
//     const response = await fetch(URL);
//     const data = await response.json();     

// json method promise deta h to firse await lga skte h... mtlb jab tk kam poora na ho wait kro aage ni badhna

//     console.log(data);
// }

// condition bhi lga kr dekh skte ho .. condition ok na hue to error dega

const URL = "https://jsonplaceholder.typicode.com/posts";
async function getPost() {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error("kuch to gadbad h daya");

    }
    const data = await response.json();
    console.log(data);
}

// ab ye getpost normal function ni h.. jab bhi hm is get post ko call krege ye return m hme hmesha promise dega.... ****hmesha
// dekho call krte h


const returnedFunc = getPost();
console.log(returnedFunc);         

// aaya na promise... qki upar data print ni ho rha h  wo poora ka poora promise return kr rha tha to neeche returned promise ko store kr liya getpost() ko call krke or print krke bhi dekha to sach m promise aaya tha..... chaho to comment kr do wo line apne smjhne k liye thi bs

// ab return kra tha to hm .then or .catch lga skte h
getPost()
    .then((mydata) => {
        console.log(mydata);
    })
    // catch bhi laga lete h..... jab error aayegi to catch chalega.. error handling krna h to if condition lga lo line 453 s add

    .catch(error => {
        console.log("inside catach calling");
        console.log(error);
    })


    // upar jo ho rha h usi ki panchayat likhi h yaha
    
    // ab upar function m hm fetch kr skte h wo url or phle .then lagate h ab await laga skte h  , fir varible m store krke print kra diya...ab ye to background m hota rhega.. pr jo hmne response naam ka varible bnaya h wo wait krega ki url phle fetch ho jaye fir aage badhe
    // to wait khtm ab hm us response m json ko call kr skte h .. ye promise return krega firse to hm fir await lga skte h... fir store kr lo or print krke dekh lo
    // data print hone lga ... ab data ko return krte h... actually m data return ni hua h promise return hua h or data iske sath value k roop m gya h... ab return kr diya h store kro getpost m ,


    // ye sb kaam asynchronosly ho rha h
    


/*
// isi m arrow function dekhna h to dekh lo aise likhege
// async ()=>{}


const URL = "https://jsonplaceholder.typicode.com/posts";
const getPost = async() => {
const reponse = await fetch(URL);
if(!reponse.ok){
    throw new Error("kuch to gadbad h daya")
}
const data = await reponse.json()
return data;
}

const mydata = getPost();
console.log(mydata);

getPost()
    .then((mydata) => {
        console.log(mydata);
    })

    // catch bhi laga lete h..... jab error aayegi to catch chalega.. error handling krna h to if condition lga lo 

    .catch(error => {
        console.log("inside catach calling");
        console.log(error);
    })


//ye khtm hua
 */





// ab bs ES6 module isme import export dekhna h bs
// (15-16 min ki video h yr part 3 ki dekh lo bs end ho gya sb)


// bana lete h yr 22 hours ka course kra h 15 din m.. ab 15 min ka baki jo bacha h wo q chord de yr


// new html file legegi folder name- ES6 module Import export
// bas ye krke javascript khtm..... fir kisi folder m jane ki need ni... bs practice kro 

