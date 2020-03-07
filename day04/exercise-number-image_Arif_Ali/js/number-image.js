const numberInput = document.getElementById('numberInput')

const numberDIV= document.getElementById('numberDiv');

const updateDisplay = () =>{
 let inputValue = numberInput.value;


 if(inputValue < 10 ){
     numberDIV.querySelector('img').src = `image/${inputValue}.jpg`

 }
}
numberInput.addEventListener('input',updateDisplay)