
const get = (ele) => document.querySelector(ele);
let elementType = get('#elementType')
let elementContent = get('#elementContent')
let outputDiv = get('#outputDiv')

const createWithInnerHTML = () => 
{
    outputDiv.innerHTML += `<${elementType.value} class="inner-html">
    ${elementContent.value}
    </${elementType.value}>
    
    `;
}


const createWithCreateElement = () =>
{
    let newElement = document.createElement(elementType.value);
    newElement.classList.add("inner-html");
    outputDiv.appendChild(newElement);
    const newText = document.createTextNode(elementContent.value);
    newElement.appendChild(newText);

}

