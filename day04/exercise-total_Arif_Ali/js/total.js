'use strict'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const SALES = [120, 500, 350, 400, 600, 890, 450, 100, 250, 300, 650, 450]


let total = 0;

document.write("<h1> vertical table </h1>")

document.write("<table>");



for (let i = 0; i < MONTHS.length; i++) {
    document.write(`<tr><td>${MONTHS[i]}</td> <td> ${SALES[i]} </td></tr>`)
    total += SALES[i];
}
document.write(`<tr><th>Totoal</th> <th>${total}</th></tr>`)
document.write("</table>")



//horizontal


document.write("<h1> horizontal table </h1>")

document.write("<table>");
document.write("<tr>")

for (let i = 0; i < MONTHS.length; i++) {
   
    document.write(`<td>${MONTHS[i]}</td>`);
    
}


document.write("</tr>")
document.write("<tr>")
for (let i = 0; i < SALES.length; i++) {
   
    document.write(`<td>${SALES[i]}</td>`);
    
}
document.write(` <th>${total}</th>`)
document.write("</tr>")
document.write("</table>")