let firstCard = 1
let secondCard = 15
let sum = firstCard + secondCard
let hasBlackJack = false
let message = ""

let isAlive = true
let  messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

const startGame = () =>{
    
    cardsEl.textContent = `Sum: ${firstCard}  ${secondCard}`
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
    console.log("Drawing a new card from the deck!")
    let card = 3
    sum += card
    startGame()
}