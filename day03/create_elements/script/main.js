"use strict";

console.log('Javascript started for exercise Create elements');

let parags = document.getElementsByTagName('p');
console.log(parags); 

let p1 = parags[0];
console.log("First paragraph :", p1);

p1.innerHTML = "It is <strong>important</strong>";

let p2 = parags[1];
console.log("Second paragraph :", p2);

// Creation of image
let new_img = document.createElement('img');
// Attaching it to parent node
p2.append(new_img);
// Filling element
new_img.src = "images/dom.png";

// Creation of another image
let new_img2 = document.createElement('img');
// Attaching it to parent node, before the first image
p2.insertBefore(new_img2, new_img);
// Filling element
new_img2.src = "images/dom2.png";
