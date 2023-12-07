let firstCard = 4
let secondCard = 15
let sum = firstCard + secondCard
const cards = [firstCard, secondCard]
let hasBlackJack = false
let message = ""

let isAlive = true
let  messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

const  renderGame = () =>{
    cardsEl.textContent = `Cards: `

    /*  Renders new card drawn on the screen*/
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = `Sum: ${sum}`
    if (sum <= 20) {
        message = `Do you want to draw a new card ?`
    } else if (sum === 21){
        message = `Wohoo! You've got BlackJack`
        hasBlackJack = true
    }
    else {
        message = `You're out of the game`
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let card = 2
    sum += card
    cards.push(card)
    renderGame()
}