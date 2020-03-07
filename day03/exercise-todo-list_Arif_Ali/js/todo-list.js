const addNewLiElement = () =>
{
    let text = document.getElementById('textBox');
    let textVal = text.value.trim();
    text.Value =" ";



    if( textVal !='' || textVal.length > 0)
    {
        const li = document.createElement("li")

        li.appendChild(document.createTextNode(textVal));

        document.getElementById('liste').appendChild(li);
    }
}

const deleteLastLiElement = () =>{
    const ul = document.getElementById('liste');
    const lastEle = ul.lastElementChild;

    if(lastEle != null)
    {
        ul.removeChild(lastEle);
    }
}