const cards = document.getElementById('cards')


const shiftRight = () =>
{
    cards.insertBefore(cards.lastElementChild,cards.firstElementChild)

    cards.firstChild
}

const shiftLeft = () =>
{
    cards.insertBefore(cards.firstElementChild,cards.lastElementChild)

    cards.firstChild
}