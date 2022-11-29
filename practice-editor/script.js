"use strict";

/////////////////////////SECTION/////////////////////////
//DOM MANIPULATION METHODS

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
const body = document.body;
const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");
spanBye.remove(); //completely removes the element from html

//modify attributes of an element..
console.log(spanHi.getAttribute("id")); //hi
console.log(spanHi.id); //same as above
spanHi.setAttribute("class", "red"); //added a class of .red as the only class on element..
