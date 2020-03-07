const FR_DAYS = ["lundi","mardi","marcedi","jeudi","vendudi","samdi","demarche"];


const ER_DAYS =["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];

document.addEventListener('DOMContentLoaded',() => {
    let language = document.getElementById('language');
    let dayNumber = document.getElementById('dayNumber');


    dayNumber.oninput = () =>  updateDisplay(language,dayNumber);
    
    language.oninput = () =>  updateDisplay(language,dayNumber);

    updateDisplay(language,dayNumber);
    
})
 
function updateDisplay(language,dayNumber)
{
    const days = language.checked ? ER_DAYS : FR_DAYS;

    document.querySelector('label[for=dayNumber]' )
    .textContent = days[dayNumber.value]
}