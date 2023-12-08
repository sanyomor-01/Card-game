let sum = 0
let cards = []
let hasBlackJack = false
let message = ""
let isAlive = false
let  messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

/* Player object*/

let player = {
    name : "Nadia",
    chips : 145
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ":  $" + player.chips 


/* Get random card number*/
function getRandomNumber() {
    let randomNuber = Math.floor( Math.random() *13) +1
    
    if(randomNuber ===1){
        return 11
    }
    else if(randomNuber > 10) {
        return 10
    }
    else{
        return randomNuber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()

    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
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
    if(isAlive ===true && hasBlackJack === false){
        let card = getRandomNumber()
        sum += card
        cards.push(card)
        renderGame()
    }
}

