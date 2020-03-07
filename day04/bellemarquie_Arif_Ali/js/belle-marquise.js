'use strict'

const cama = ', '
const string = [
'belle Marquise',
'vos beaux yeux',
'me font mourir',
'd\'amour'
]
document.write("<ul>")

const random = (num) => Math.floor((Math.random() * num))
//document.write(`<li>${string[0]} ${cama} ${string[1]}</li>`)        

string.forEach (() =>{
document.write(`<li> ${string[random(4)]} ${cama} ${string[random(4)]} </li>`)
});
document.write("</ul>")  



