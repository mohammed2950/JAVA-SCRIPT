const marbles  = document.getElementsByClassName('marble');
console.log(marbles[2]);

marbles[0].classList.add('rounded')
marbles[1].classList.add('orange')
marbles[1].classList.add('size_x')

marbles[2].classList.add('size_xx')
marbles[2].classList.add('incline')




marbles[3].classList.add('line')
marbles[3].classList.add('size_xxxx')
marbles[3].classList.add('rounded')
marbles[3].classList.add('offset')
marbles[3].classList.add('purple')


marbles[4].classList.add('size_xxx')
marbles[4].classList.add('purple')
marbles[4].classList.add('rounded')

console.log(arr);
arr.push(5);

console.log(arr);
arr.shift(4);

array.forEach(function(ele)
{
console.log(ele);
})




let result = 0;
for (let i = 0; i < array.length; i++) {
   result += arr[1];
    
}
console.log(result);


let total =0;
arr.reduce((pre, cur) => pre + cur)

console.log(total);


arr = arr.map(function (ele){
    return `element ${ele}`
})
console.log(arr);