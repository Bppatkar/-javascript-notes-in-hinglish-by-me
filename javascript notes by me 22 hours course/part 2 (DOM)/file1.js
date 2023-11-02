// ye new file h .... aage continue kra h yaha s


/*
// how to link js in html (best way)
// async vs defer

// jaha css lagate h wahi lagao.. bs defer likh dena sath m jiska mtlb ki js ki file or html file dono sath m run hogi ..pr jaise js phle load ho gae fir b wah ruki rhegi ki phle html load hone do poori ab jb html ka kaam khtm.. to js to phle s load h.. to poora kaam bn jayega
// async lga doge to wo dono sath m load hogi.. html or js file pr aisa hoga ki html aadhi load hue h or agr js poori load ho gae to aadha program run ho jayega.. dikkat khadi ho jayegi isiliye defer use krna
 */

/*
// DOM (Documnet object model)
// ye tumse aata h.. dont worry

// (timing 03:40:31)
// DOM
// document object model
// overview
// how to use
// deep study
// console.dir(document);



// console.log(window.document);
// document aa rha h .. yehi line copy krke browser m check kr lo

// console.log(document);          // same output
 */

/*
// get element by Id
// element ko id s select krege hm
// ek variable m store kr lenge fir wo varible print kr dege

// const yeHeading = document.getElementById("main-heading");
// console.log(yeHeading);

 */

/* // query selector
// ab query s select krege

// const yeHeading = document.querySelector("#main-heading");
// console.log(yeHeading);


// dono s same output aa rha h .... id selector s or query selector s
const mainHeading = document.querySelector("#main-heading");

const header = document.querySelector (".header");

const navItem = document.querySelectorAll(".nav-item");
console.log(navItem);
 */

/*
// textContent and innertext (04:00:00 part 2)
// ye padhege ab


//textcontent m wo bhi dikhta h jo hmne hide kr rakha h... mtlb koi h1 h usme text h uske beech span lga k kuch likh do or css m wo span display none kr do to wo ni dikhega pr JS m jb ise id class ya query selector s select kroge to ye text content m dikhega........ jbki inner text wo hide wala ni dikhayega jo h sirf wahi dikhayega

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.innerText);    // manage your task
mainHeading.textContent = "change krdo ise";
console.log(mainHeading.textContent);    // change krdo ise
 */

/* // change the styles of elements
// color wagera change krke dekhte h... style change krna mtlb css change krna

const mainHeading = document.querySelector("div.headline h2");
console.log(mainHeading.style);
mainHeading.style.backgroundColor = "green";
// background-color aisa hota h css m pr js m (-) ye ni lgta to capital kr dete h next word-- jaise backgroundColor
mainHeading.style.border = "2px solid yellow";

 */

/* // get and set attributes

// mtlb aise ki ... maan lo koi input select kr liya ab usme name uska attribute h id attribute h to ye sb select krna

// ya fir a ,mtlb anchor tag select kr liya to uska attribute href hota h to wahi select kr liya aise

// const linkKarege = document.querySelector("a");
// console.log(linkKarege.getAttribute("href");


// select krna ho to get ..... // or fir set krna h to set kr do .. get s leke set s set kr do

// const linkKarege = document.querySelector("a");
// console.log(linkKarege.getAttribute("href") .slice(1));
// linkKarege.setAttribute("href", "https:www.google.com");

// #home aa rha tha, browser console m to , slice(1) lga dete h jisse ye # hat jaye

// phle query select kri anchor tag mtlb "a", fir  getattribute s uska href uthaya of set s href ko google kr diya


// const inputLeleKyaAB = document.querySelector(".form-todo input");
// console.log(inputLeleKyaAB.getAttribute("type"));

// // output:- text aa rha h

// set  upar bta diya link lga di na google ki
//  linkKarege.setAttribute("href", "https:www.google.com");
// ye line dekho thode s upar

 */







/*
// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll

// ye dono padhege ab.... ek s jyada element select krna ho tb ye krege qki kai sare tags ko same class ek s jyada bar de skte h na or all to all hi h

// const navItem = document.getElementsByClassName("nav-item");
// console.log(navItem);          // HTMLCollection  aa rha (3 list aa rhe h)

// // ab check kr lete h ki ye array h ya ni... bcz ye array like object h.. array ni h.. isiliye check kr le rhe

// console.log(Array.isArray(navItem));     // dekho aa gya na false... array hota to true aata.. false mtlb ye array ni h




// ab query selector dekho
const navItem = document.querySelectorAll("nav-items");
console.log(navItem);         // node list aa rha h
// query selector all m hme node list s milte h... yad rakhna or
// nodelist m hm for , for of , and for each () sb lga skte h
 */




/*
// array like object m ye check krte h hm ---> indexing, or length property bs ye 2
// []

// dekho ye hm tagname s selet kr rhe h

// let navItems = document.getElementsByTagName("a");
// console.log(navItems); // HTMLCollection(3)[a,a,a]

// we can't use forEach method to iterate through HTMLCollection *****ye yad rakhna*****

// HTMLCollection m foreach ni lga skte

// simple for loop lga skte h
// for of loop  bhi lga skte h pr
// forEach  lagta hi nhi h.. eroor aa jati h

// phle simple for loop lga k dekhte h

// upar wale 2 line k code ko comment mt krna agr loop chala rhe ho to.. wrna wo value kaha s lega

// for(let i=0; i<navItems.length; i++){
//     console.log(navItems);   //same output --  // HTMLCollection(3)[a,a,a]
//     // navitems ko ek varible m store krte h ab
// const navItem = navItems[i];
// navItem.style.backgroundColor = "#ggg";
// navItem.style.color = "red";
// navItem.style.fontWeight ="bold";
// }



// ab for of loop chala k dekhte h    --- output sbme same hi aayega qki style hi to change kr rhe h bs

// for(let navItem of navItems){
//     // upar wali line copy paste kr de rhe yr kon likhe itta
//     navItem.style.backgroundColor = "#ggg";
// navItem.style.color = "red";
// navItem.style.fontWeight ="bold";
// }



// ab forEach() check krke dekh lo... eroor aayegi pr kya kre... check kr lo satisfaction k liye

// phle check krna h to kr lo.... ye array h ya nhi  (bcz ye real m array like object hota h) pr upar output m html collection h to usi ko change kr skte h



// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems);)           // true

// ab lagate h forEach method

// navItems.forEach((navItem) => {
//     // upar wali line copy paste
//     navItem.style.backgroundColor = "#ggg";
//     navItem.style.color = "red";
//     navItem.style.fontWeight ="bold";
// });

//Uncaught TypeError: navItems.forEach is not a function
// kaha tha na eroor aayega









// ab upar jo v kra h  wo tagname s kra h na ab same kaam queryselector all wale s krege


// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems);              // node list
// query selector hme node list s milte h... yad rakhna or baki tag ,class or id se hme html collection milta h

// html collection inse milta h
// These include;

// getElementsByTagName()
// getElementsByClassName()
// children
// document.forms


// nodelist m hm for , for of , and for each () sb lga skte h



// ab query selector all s sb select krke dekhte h jo jo kaam upar kra h

// let navItems = document.querySelectorAll("a");

// navItem= Array.from(navItem);
// console.log(Array.isArray(navItem));
//  array bna diya h to array true hi aayega na


// isme bhi simple for loop
// for of loop aur
// foreach() lga kr dekhte h


// phle simple for loop check krte h
//(191 line uncomment rakhna isko run krne s phle)
// for(let i=0; i< navItems.length; i++){
//         // console.log(navItems[i]);
//         const navItem = navItems[i];
//         navItem.style.backgroundColor = "#0f0f0f";
//         navItem.style.color = "red";
//         navItem.style.fontWeight = "bold";

// }


// for of loop chala kr dekhte h

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#eee";
//         navItem.style.color = "red";
//         navItem.style.fontWeight = "bold";
// }



// for each lga k dekh lo

// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// console.log(navItems);



// html collection ko agr array m change kr do to foreach lga skte h... mtlb ab to ye array bn gya to array k sare method lga skte h hm

//HTMLCollection objects are not directly iterable with a forEach loop because they are not JavaScript arrays. However, you can convert an HTMLCollection into an array like this and

// // Convert the HTMLCollection to an array
// var myArray = Array.from(myHTMLCollection);

// then use forEach on that array.
 */








/*
// innerhtml (ab ye start krte h)
const headlineSelected = document.querySelector(".headline");
// console.log(headlineSelected.innerHTML);
// output dekh skte ho dono line ko run krke poora html show ho rha h headline k andr ka


// ab html to dekh liya change bhi kr skte  h kya... aao check krte h


headlineSelected.innerHTML = "<h2>Inner html change krte h</h2>";
// ek button bhi thi neeche wo v add kr de rhe += lagayege jisse button neeche hi aae jaise phle thi mtlb sibling
headlineSelected.innerHTML += "<button class= \"btn\"> Learn More </button>" ;
// btn class dedi qki css m btn ko style diya h na isiliye
// or += to pta hi hoga
console.log(headlineSelected.innerHTML);
 */



/*
// ab new html file lagegi....   folder name - DOM traverse
// dom ko traverse krege ab
// ......
// ......
// ......
// ......
// ......
// ......
// dom traverse ho gya  ...padh liya na... ab wapas aate h yaha

 */



/*
// ab padhege class list, add , removew toggle classes k bare m....
// todo section select krte h ab

const sectionTodoSelectKro = document.querySelector(".section-todo");
// console.log(sectionTodoSelectKro);
// console.log(sectionTodoSelectKro.classList);

// css s ye dark class ***add krte h*****...
//qki html m is class ko likha ni h to css m bna li fir JS ki help s add krna seekhte h

// sectionTodoSelectKro.classList.add('bg-dark');
// output dekho bg dark add ho gaya

// ab remove krna seekho... example container class remove krte h

// sectionTodoSelectKro.classList.remove("container");

// pta kaise chle ki remove hua h to-->> **"contains"** property s pta kr lete h
//ye true or false m value dega...


const ans = sectionTodoSelectKro.classList.contains ("container");
console.log(ans);        // true
// mtlb bgdark class abhi contains krti h
// upar jo remove wala tha wo lga doge to false aa jayega bcz class remove ho chuki hogi


// **toggle**
// ab toggle dekho.... iska mtlb h jo nhi h wo add kr deta h.... jo h wo remove kr deta h

// sectionTodoSelectKro.classList.toggle("bg-dark");
// isse add ho jayega  bg dark

// sectionTodoSelectKro.classList.toggle("bg-dark");
// isse remove ho jayega bg dark


//ab jo browser m  web page bnaya wo dikh rha h na ... your plan for today ? h waha dekho.. ki toggle s add or remove ho rha bg-dark class ya ni

 */




/*
// Add new HTML elements to page

// innerHtml ka use kr rhe... to add html  in html element

const todoListKiya = document.querySelector(".todo-list");
//  console.log(todoListKiya);
// console.log(todoListKiya.innerHTML);
// // output dekh lo poora todo list dikh rha h

// ab kuch add krte h
todoListKiya.innerHTML = "<li>New todo 2 likh diya</li>";
//jo browser m  web page bnaya wo dikh rha h na ... ye(New todo 2 likh diya)

// pr purana jo add kra tha wo gayab ho gya
// hme naya puranan dono chahiye... to 2 method h
// to += ye lagayege

// todoListKiya.innerHTML += "<li>chalo ye final h</li>"
todoListKiya.innerHTML = todoListKiya.innerHTML + "<li>chalo ye final h</li>"
//2 tareeke h line 329 or 330... dekho aa gae na new line m

// ek bat yad rakhna... ye sb kb krna h or kab nhi
// jab hm new todo add kr rhe h... to browser sirf new todo ko hi balki jo bhi phle todo likhe hue h html code m unko bhi render krega... teesri todo add kroge to html m baki upar ki 2 todo bhi render hogi to speed slow ho jayegi na agr aisa hoga to... tb kya kre...
//agr poora ka poora html change krna h...mtlb sirf add ni krna kuch innerhtml s ... poora hi change krna h mtlb (ye neeche 2 line ka code smjhne diya h yahi code to smjhaya h upar to uncomment ni krna)

// const todoListKiya = document.querySelector(".todo-list");
// todoListKiya.innerHTML = "<li>New todo 2 likh diya</li>";

// console m hi element m dekho add ho gya h waha dikhega


//to aisa kr do  chalega....pr
// naya element create krna ho to uske liye naya tareeka h ....
// document.create.element

// isko hi sare developer use krte h to ise aache s rat lo yad kr lo bilkul
  */







/*
// ab padhege --- document.create.element

// 4 cheezen padhege

// document.createElement()
// append
// prepend
// remove


// // create element suru krte h

// const newTodoItemsSelect = document.createElement("li");

// aisa krne s <li></li> aisi li to bn gae pr beech m kuch likhna to hoga na.. to wahi  text add krna h createtextnode s, wo kuch return krega to wahi store kr rhe h

// const newTodoItemsSelectText = document.createTextNode("ye wala text add kra h");

// text to bn gya pr li m dalne k liye mtlb <li>ye wala text add kra</li>.... aise k liye... isme newTodoItemsSelect . append krna hoga na tabhi to jayega todo list m

// newTodoItemsSelect.textContent = "ye wala text add kra h";
// // console.log(navTodoItemsSelect);


// ***********************************************
// dekho ye aisa karyakram bol rhe the ham .. ye chatgpt ka h


// const newTodoItem = document.createElement("li");

// const newTodoItemText = document.createTextNode("my name");

// newTodoItem .appendChild(newTodoItemText);    //"my name"
// console.log(newTodoItem);         // <li>​my name​</li>


// aisa hoga chahe to code console m chala k dekh lo


// ***********************************************

// ***********************************************
// append VS appendChild
// 1. .append accepts Node objects and DOMStrings while .appendChild accepts only Node objects
// 2. .append does not have a return value while .appendChild returns the appended Node object
// 3. .append allows you to add multiple items while appendChild allows only a single item
// ***********************************************


// append last m add krta tha .... pre mtlb phle to prepand phle add kr dega

// ye append same code m dekhege

// const newTodoItemsSelect = document.createElement("li");
newTodoItemsSelect .textContent = "bhanu pratap";
// const todoListSelectKiya = document.querySelector (".todo-list")
// todoListSelectKiya.append(newTodoItemsSelect);
// console.log(todoListSelectKiya);



// // ab prepend dekho
// const newTodoItemsSelect = document.createElement("li");
newTodoItemsSelect .textContent = "bhanu pratap";
// const todoListSelectKiya = document.querySelector (".todo-list")
// todoListSelectKiya.prepend(newTodoItemsSelect);
// console.log(todoListSelectKiya);

// // output:- brower m inspect m element m code  m dekho milega



// // ab remove dekho

// const todo123 = document.querySelector(".todo-list li");
// todo123.remove();
// console.log(todo123)
// // todo list s li hat gae.. webpage pr dekh lo




// ab 2 or h wo bhi dekh lo
// before and after

// const navTodoItemsSelect = document.createElement("li");
// const newTodoItemsSelectText = document.createTextNode("ye wala text add kra h");

// console.log(newTodoItemsSelectText);
// // output:- console m dekh lo


const navTodoItemsSelect = document.createElement("li");
navTodoItemsSelect.textContent = "Teach students";
const todoList = document.querySelector(".todo-list");
todoList.before(navTodoItemsSelect);
// todoList.after(navTodoItemsSelect);
 */









/*
// insertAdjacentElement isko w3 school m padh lo example s smjh aa jayega... waise bhi ye jayda use ni hota h

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Teach Students </li>");



// insertAdjacentElement(position, element)  -->>>>>>>>>
// -->>>>>>> [elem.insertAdjacentHTML(where, html)]
// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.



// insbse aacha ... wo innerhtml use krna ok append prepand remove wala shi h... qki JS m bahut sare tareeke h add remove krne k jo aacha lge wo lagao faltu preshan q hona
 */





/*
// clone nodes

const ulSelected = document.querySelector(".todo-list");
// createlement likha h aache s dekh lo
const liSelected = document.createElement("li");
liSelected.textContent= "kuch or likhe kya";
ulSelected.append(liSelected);
// ulSelected.prepend(liSelected);


//web page m your plan today ? k pass dekho
//... pr ek time pr ek hi kaam hoga... ya to append ya fir prepend

// .append() puts data inside an element at the last index; while.
// . prepend() puts the prepending element at the first index.



// ab clone dekho

const liNewSelected = liSelected.cloneNode(true);
ulSelected.append(liNewSelected);

// dekho clone ho gya h... webpage pr your plan today m dekho)
 */



/*
// some old method to support ***poor*** IE
// mtlb purane IE m append, prepand, remove, before , after ye sb  kaam ni krta

// appendChild;
// insertBefore;
// replaceChild;
// removeChild


// ab phle appendchild dekho

// const ulSelected = document.querySelector(".todo-list");
// // createlement likha h aache s dekh lo
// const liSelected = document.createElement("li");
// liSelected.textContent = "ab ye add kra h";
// // ulSelected.append(liSelected);



// insertBefore; (mtlb phle insert krna h...simple)
// isme 2 argument lgte h.. (kisko insert krna h.. aur kiske phle insert krna h)

// const ulSelected = document.querySelector(".todo-list");
// const liSelected = document.createElement("li");
// liSelected.textContent = "ab ye add kra h";

// // class="first-todo" -- ye class add kri h html m
// const referenceNode = document.querySelector(".first-todo");
// ulSelected.insertBefore(liSelected , referenceNode);



// replaceChild; ((mtlb ek ko doosre s replace krna h..simple))
// isme v 2 argument lgte h.. (kisko replace krna h.. aur kisse replace krna h)

// const ulSelected = document.querySelector(".todo-list");
// const liSelected = document.createElement("li");
// liSelected.textContent = "ab ye add kra h";
// const referenceNode = document.querySelector(".first-todo");
// ulSelected.replaceChild(liSelected,referenceNode)



// removeChild (remove bacha h wahi dekh lo)

// const referenceNode = document.querySelector(".first-todo");
// ulSelected.removeChild(referenceNode);

 */



/*
// static vs live list

// queryselector hme static list degi
// getelement hme live list degi

// // dekho queryselector **All** hme static list degi.. mltlb change dikhega lekin real code  m hoga nahi..   (query selector hme node list dete h ye array like object hota h pr array ni hota)

// // or getelementby **something**  ye hme live list degi (getelementby **something**  hme html collection dete h bcz select hi waise krte h... id name class name tag name ye sb to html m hi hota h na )


// html m item 1 s 5 tk list add kri h....

const ulSelected = document.querySelector(".todo-list");
const listItems = ulSelected.getElementsByTagName("li");

// ek new item 6 add krte h

const sixthLiAdd = document.createElement("li");
sixthLiAdd.textContent = "item 6";

ulSelected.append(sixthLiAdd);  // dekho new item 6 add ho gya
console.log(listItems);         // console m dekho 6 ho gae na


// example s dekho google wale

// ye html m lga skte ho

// <ul>
//   <li class="list-item">One</li>
//   <li class="list-item">Two</li>
//   <li id="three">Three</li>
// </ul>

const liveElements = document.getElementsByClassName('list-item');

const notLiveElements = document.querySelectorAll('.list-item');

console.log(liveElements.length); // length of 2
console.log(notLiveElements.length); // length of 2

document.getElementById('three').className = 'list-item';

console.log(liveElements.length); // length of 3
console.log(notLiveElements.length); // length of 2


*/





/*
// how to get the dimension of element
// dimension mtlb kya---  height width
// getBoundingClientRect() ye method lagao bs

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
console.log(info);
// console.log(info.width);
// console.log(info.height);
// console.log(info.top);

 */






/*
// welcome to my world babes....
// event start krte h ab....MIMP
// waise to bahut sare event h pr 3 jyada use hote h.. mouse event, keyboard event or inout event
// isme v sbse jyada use hone wala h... click event

// intro to events
// click
// event add karne ke 3 tarike hai

// 1. method one ************
// html m line 26 dekho   onlick lagaya tha hta diya h... ye neeche wali line s waha replace kro fir dekho
// <button class="btn btn-headline" onclick="console.log('ok !')">Learn More</button>

// ye method use ni krte thk h  aacha ni h***************

// 2.method two ************
// koi v element select kro
// jasie wali 26 line button h usi ko select krte h

// const btnSelect = document.querySelector(".btn-headline");
// // console.log(btnSelect);    // console m button select ho gya
// // isi button ko object k sath dekhna chaht h to  (.dir)

// console.dir(btnSelect);
// // isme bahut sari properties milegi ... ab jaise hme select krna h onclick wo abhi null h.. ab usme ek function assign krte h
// btnSelect.onclick = function clickMe(){
//       console.log("kahe daba raha h be!");
//   }

// ye method use ni krte thk h  aacha ni h*************** qki ek s jyada bar isko usen ni kr skte na


//3. method final wala    ************
// iska naam h --- addEventListener

// const btnSelect = document.querySelector(".btn-headline");
// // addevent listner apne sath ek function lega to phle function bna lete h... fir (isme) konsa event chahiye h wo (hme click event chahiye h ) or doosra function ka naam

// function clickKroMujhe(){
//   console.log("kahe daba raha h be!");
// }

// btnSelect.addEventListener("click", clickKroMujhe);
// // work kr rha h


//same code aise bhi likh skte h.. function alg s bnane ki jaroorat ni h... jaha function naam de rhe wahi bna lo

// const btnSelect = document.querySelector(".btn-headline");
// btnSelect.addEventListener("click", function(){
//   console.log("kahe daba raha h be!");
// });


// same cheez arrow function s v dekh lete h ab

const btnSelect = document.querySelector(".btn-headline");
btnSelect.addEventListener("click", ()=>{
    console.log("kahe daba raha h be!");
  });

 */





/*
// this keyword inside eventlistner callback
// upar wale code s hi smjhte h


const btnSelect = document.querySelector(".btn-headline");

btnSelect.addEventListener("click", function(){
  console.log("kahe daba raha h be!");
  console.log("value of this");
  console.log(this);
});
// output:- isme this ki value... khud btn hi hogi.. jo hmne callback bnaya btn k andr to this ki value wahi button hi hogi..... chahe hm function bahar bna le fir b this ki value wahi btn hi hogi

//  <button class="btn btn-headline">Learn More</button>

// ye btn bcz yahi to select kra h

// pr agr arrow function lga k dekhe kya aata h 😁


// const btnSelect = document.querySelector(".btn-headline");

// btnSelect.addEventListener("click", ()=>{
//   console.log("kahe daba raha h be!");
//   console.log("value of this");
//   console.log(this);
// });

//  yaha this ki value window h.... chahe bahar likh do this function k ya andr .... window hi dega wo this bcz ye arrow function h

 */




// ab dekhte h...
// click event on multiple buttons
// ab new html file lagegi....   folder name - click event



// demo project k bad yaha aae ho na...
// key event seekhne... chalo


/*
// some more event
//keypress and mouseover ecvent
// key press event dekho ab

// const body = document.body;
// body.addEventListener("keypress", (event)=> {
//   console.log(event);
// });
// web page m kahin bhi koi bhi button press krke dekho


// ab mouseover dekho

// const mainButon = document.querySelector(".btn-headline");
// console.log(mainButon);
// mainButon.addEventListener("mouseover", () => {
//   console.log("mouseover event ocurred!!!");
// });
// // webpage m learn more p mouse leke jao...


// ek aur h mouse leave... ab wo dekho

// const mainButon = document.querySelector(".btn-headline");
// mainButon.addEventListener("mouseleave", ()=>{
//   console.log("mouseleave event ocurred!!!");
// });
// // // webpage m learn more p mouse le jakr hta kr dekhoo...

 */






//event bubbling... event capturing padhege ab
// pr ab new html file lagegi...  folder name- event bubbling




// event bubbling s wapas aa gae na... ab bas ek practice k liye project...  or 80% javascript khtm

/*
// project using event delegation

// your plan today m ..... do this do that h na... waha list add krte jao.. or done or remove button bhi kaam krna chahiye..





const todoform = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");


todoform.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(todoInput.value);

   // prevent default s bar bar page refresh ni hoga... MIMP h... yad rakhna
   // ye hmesha or bahut jyada use krte h
   // dekho jo add todo m likh rhe wo console m dikhne laga... pr hm chahte h ki.. jb console m dikhe.... to uske bad add todo wali jagah khali ho jaye

  //  todoInput.value = "";

   // hone lagi jagah khali  .. pr ye line aakhir m hi rhne do.. baki jo kaam krna h wo upar rhna chahiye na... to ise comment kr de rhe.. baki  neeche likhi hi h....
// ab gayab bs ni krna h neeche list m add bhi hote jana chahiye to jo upar todoinput.value h usko store krte h.. or upar ki line comment kr do todoinput.value wali

  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");

// list bn gae pr... ab html file m dekho.. ul , ul k andr li ,, li k andr  button sbke liye alg s bnate rho usse aaacha code hi yaha paste kr do utna to faltu kaam ni krna padega

  const newLiInnerHtml = `<span class="text">${newTodoText}</span>
   <div class="todo-buttons">
       <button class="todo-btn done">Done</button>
       <button class="todo-btn remove">Remove</button>
   </div>`;
  newLi.innerHTML = newLiInnerHtml;

  // ye span k beech newtodotext isiliye likha bcz hm jo add kre wahi likh k aae upar define h na ye 900 line p
  // ab ye new li ko print krke dekhte h..bs check krne k liye print kra tha ... isiliye comment bhi kr diya... faltu m hr cheez ko console.log krte rhoge to code bda dikhega.. hta diya kro

  // console.log(newLi);

  // ab bas ul h jo -todolist html m uske andr ye jo newli banae h usko add krna h to upar hi add kr dete h... line 741... waha bna diya ab bs append kr do

  todoList.append(newLi);
  todoInput.value = "";
});




// ye ho gya ab done or remove button pr event lagana h... dono pr alg alg lagane s aacha h event delegation laga do ek bar m hi dono p lag jayega simple

todoList.addEventListener("click", (e)=>{

  // check krege ki user n button ko click kra bhi h ya ni
  // agr user done p click kre to hme html m done class jaha h uske parent k bhai mtlb div k upar span tk pahuchna h to --- parentNode.previousElementSibling

  if (e.target.classList.contains("done")){
    const lispan = e.target.parentNode.previousElementSibling;
    lispan.style.textDecoration = "line-through";
  }


// same cheez remove button ko chaiye to copy paste code---or remove class jha h uske parent k parent p jana h... smjhe ...mltb parent div k parent ul tk jana h to - parentNode.parentNode

if (e.target.classList.contains("remove")){
  const targetedLi = e.target.parentNode.parentNode;
 targetedLi.remove();
}

})


// finally completed

 */


// now go to folder part 3 asynchronous js......

