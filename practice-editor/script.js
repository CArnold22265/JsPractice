"use strict";

///////////////////SECTION/////////////////
//advanced dom manipulation
const parent = document.querySelector(".parent");
const firstChild = document.querySelector(".child-1");
const lastChild = document.querySelector(".child-3");
const allChildren = firstChild.parentElement.children;
console.log(allChildren);
//STUDY going downwards.. child
/*
//all children HTML COLLECTION
console.log(parent.querySelectorAll(".child"));
console.log(parent.children);
//first child
console.log(parent.firstElementChild);
parent.firstElementChild.classList.add("orange-red");
//last child
console.log(parent.lastElementChild);
*/

//STUDY going upwards.. parents
/*
console.log(firstChild.parentElement);
console.log(firstChild.closest(".parent"));
firstChild.closest(".parent").style.background = "red";
*/

//STUDY going sideways.. siblings
console.log(firstChild.nextElementSibling); //TODO;
//next sibl
//firstChild.nextElementSibling.classList.add("orange-red");
//2siblings away..
//firstChild.nextElementSibling.nextElementSibling.classList.add("orange-red");
//all siblings
console.log(firstChild.parentElement.children);
[...allChildren].forEach(function (el, i) {
  console.log(el, i);
  if (el.classList.contains(".child-1"))
    el.nextElementSibling.style.color = "blue";
});

/////////////////////////SECTION/////////////////////////
//DOM MANIPULATION METHODS - kyle

//STUDY ADDING ELEMENTS TO THE PAGE..
//const body = document.body;
//body.append("Hello World", " bye"); //adds text hello world to body

//STUDY CREATE AN ELEMENT
//const div = document.createElement("div");
//ADD ELEMENT TO THE PAGE..
//body.append(div);
//STUDY ADD TEXT TO ELEMENT
//div.innerText = "Hello world"; //or
//div.textContent = "hello world 2";

//STUDY RENDER HTML INSIDE OF A DOCUMENT
/*
body.append(div);
div.innerHTML = "<h1>hello world</h1><p>goodbye</p>;
*/
//another way to accomplish this would be..
/*
const strong = document.createElement("strong");
strong.innerText = "Hello world 2";
div.append(strong);
body.append(div);
*/

//STUDY
/*
const body = document.body;
const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");
spanBye.remove(); //completely removes the element from html

//modify attributes of an element..
console.log(spanHi.getAttribute("id")); //hi
console.log(spanHi.id); //same as above
spanHi.setAttribute("class", "red"); //added a class of .red as the only class on element..
//remove attribute
spanHi.removeAttribute("title"); //removed title

//STUDY add, or remove class from an element
spanHi.classList.add("red"); //added class of red
spanHi.classList.remove("red"); //added class of red

//STUDY STUDY CHANGE STYLE PROPERTIES OF AN ELEMENT
//spanHi.style.color = "green"; //changed element from red to
//STUDY adding the style of a css variable...
*/

/////////STUDY////SECTION//////////////////////////////////
//DOM TRAVERSING
/*
const h1 = document.querySelector('h1');
//Going downwards: child elements..
console.log(h1.querySelectorAll('.highlight'));
//direct child contains everything nested, comments etc
console.log(h1.childNodes);
//all direct chilren elements only..
console.log(h1.children);
//modify child element
h1.firstElementChild.style.color = 'white';

//Going upwards: parent elements
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';

//going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
//get all siblings by moving up to the parent element and selecting all of its children
console.log(h1.parentElement.children);
//spread all elements into an array and then loop over
[...h1.parentElement.children].forEach(function (el) {
  el.style.color = 'orangered';
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});

//STUDY  HTML FOR DOWN ARROW..
&DownArrow

//STUDY 
SELECT THE CLOSEST ELEMENT THAT MEETS A SPECIFIED CONDITION, SHOULD BE A SHARED CLASS WITH A CONST DQSALL..

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.shared-class');
  console.log(clicked);
});
*/
