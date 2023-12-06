let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let message = ""

let isAlive = true
const messageEl = document.getElementById("message-el")
const sumEl = document.querySelector("#sum-el")
const startGame = () =>{

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