"use strict";

console.log('Javascript started');

let t1 = []; // empty array
console.log(t1, t1.length, typeof t1, Array.isArray(t1));
let t2 = new Array(); // Object notation 
console.log(t2, t2.length);
let t3 = ['one', 'two', 'three'];
console.log(t3, t3.length);
t3.push('four');
console.log(t3);
t3.unshift('zero');
console.log(t3);
let last = t3.pop();
console.log(t3, last);
let first = t3.shift();
console.log(t3, first);
// Parsing elements
for (let i=0; i < t3.length; i++) {
    console.log('Element at index', i, 'is', t3[i]);
}
// Using for... of loop
for (let elem of t3) {
    console.log(elem);
}

