const colorselect = document.querySelector('select')


colorselect.addEventListener('change',(event) => {
    document.body.style.backgroundColor = event.target.value;


})