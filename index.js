let firstCard = 4
let secondCard = 15
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
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
    cardsEl.textContent = `Sum: ${cards[0]}  ${cards[1]}`
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
    renderGame()
}