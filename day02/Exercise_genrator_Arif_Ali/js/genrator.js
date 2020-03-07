
const createItem = item=> `<li> ${item} </li>`

const createList = (items)=> 
{
    let result = '<ul>';

    for(let i=0;i<items.lenght;i++)
    {
      result +=  createItem(items[i]);
    }
    result += "</ul>"
    return result
}

document.write("<p>These lists are produced dynamically.</p>");
document.write("<ul>" + createItem("Item A") + "</ul>");
document.write("<header></header>");

document.querySelector('header').innerHTML = createList(['item1','item2','item3']);