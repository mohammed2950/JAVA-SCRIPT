const form = document.querySelector('form')
const inputrow = document.querySelector('.addedrow')

const addrow = (event) => {

    event.preventDefault()

    let input = event.target.querySelector('.row').value

    console.log(input);

    if (input !== '') {
        inputrow.innerHTML += `
    <div class="line">
    <input type=checkbox class="checkbox" onchange='check(this)'> 
    <p>${input}</p>
    <input type=button value=remove onclick='remove(this)' >    
    </div>
    `

    }
}

const check = (event) => {

    if (event.checked) {
        event.parentElement.querySelector('p').style.textDecoration = 'line-through'
    } else {
        event.parentElement.querySelector('p').style.textDecoration = 'none'
    }

}

const remove = (event) => {
    event.parentElement.remove();
}

const hideall = (event) => {
    console.log('hello');

    let selectall = document.querySelectorAll('.checkbox')
    console.log(selectall);

    selectall.forEach(checkbox => {

        if (checkbox.checked) {
            checkbox.parentElement.style.display = "none"

        }
        else {
            checkbox.parentElement.style.display = "block"
         }
    })

}

const search = (input) => {

    let userinput = input.value

    let sele = document.querySelectorAll('p')

    sele.forEach(selected => {
        console.log(selected);

        if (selected.innerText.includes(userinput)) {

            selected.parentElement.style.display = "block"
        }
        else {
            selected.parentElement.style.display = "none"
        }
    }

    )

    console.log(userinput);



}