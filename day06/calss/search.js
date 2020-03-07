const json = '[{"name":"pro1","price":22,"cat":"food"},{"name":"pro2","price":522,"cat":"clothes"},{"name":"pro3","price":821,"cat":"electronic"}]'

let main = document.querySelector('main')

let products = JSON.parse(json)

products.forEach(product => {
    main.innerHTML += `
    <div class="product">
        <h1>${product.name}</h1>
        <span>${product.cat}</span>
        <h4>$${product.price}</h4>
        <button>Add To Cart</button>
    </div>`
});

function search(input) {
    let userInput = input.value;
    let products = document.querySelectorAll('.product')

    products.forEach(product => {

        let name = product.querySelector('h1').innerText;
        let cat = product.querySelector('span').innerText;
        let price = product.querySelector('h4').innerText;

        if ((name + " " + cat + "" + price).includes(userInput)) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    })
}
