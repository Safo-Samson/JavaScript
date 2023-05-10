/**
 * shift()  - removes the first element in an array
 * unshift() - adds an element to the first index
 * 
 */

let cards = [] // declaring an array
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); 
let cardsEl = document.getElementById("cards-el");

//creating a player object
let player = {
    name: "Samson",
    chips: 0

}

// class Player {
//     constructor(name, chips) {
//       this._name = name;
//       this._chips = chips;
//     }
//     get name() {
//       return this._name;
//     }
//     set name(value) {
//       this._name = value;
//     }
//     get chips() {
//       return this._chips;
//     }
//     set chips(value) {
//       this._chips = value;
//     }
//   }

let playerEl = document.getElementById("player-el").textContent = player.name + ": " + " $" + player.chips;

function startGamble(){
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard;
    renderGamble();
}

function renderGamble(){
    if(sum <= 20){
        message = 'Do you want to draw a new card?\n Yes: Click on "New card"\nNo: Click on "Done"';  
    }

    else if(sum === 21){ // the triple = is preferred to double = because it enforces the data type
        message = "yeah man, you've got a black jack";
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game!"
        isAlive = false;
        player.chips = player.chips - 10;
        document.getElementById("player-el").textContent = player.name + ": " + " $" + player.chips
       
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " ;
    for(let i = 0; i<cards.length;i++){
        cardsEl.textContent += cards[i] + " ";
    }
   
}

function newCard(){
        if(isAlive ===true && hasBlackJack ===false){
            let newCard = getRandomNumber();
            sum += newCard;
            cards.push(newCard) // adding an element to the end of an array
            renderGamble();
        }
}

function done(){
    message = "Your chips are " + player.chips+30;
    messageEl.textContent = message;
}

function getRandomNumber(){
    //Math.random() generates random numbers between 0 and 1 (1 exclusive)
    // Math.floor() takes of the decimal point

    let rand = Math.floor(Math.random() * 13) + 1;  // returns numbers between 1 and 12 inclusive
    if(rand === 1){
        return 11;  // assuming the Ace card is 11 instead of 1
    }
    else if(rand >=11 && rand <=13){
        return 10; // assuming jack,queen and king is 10
    }
    else{
        return rand;
    }
    
}