const btnClicked = () =>
{
	let input = document.querySelector("input[type='text']");
console.log(input);

	input = +input.value;

	document.querySelector('.table').innerHTML = `<h1> Table of ${input} </h1>`;

	for( let i=1; i<=10; i++)
	{
		document.querySelector('.table').innerHTML += (`<h5> ${input} * ${i} = ${input *i} </h5>`);
		
	}
}	

