// rules of the war game:
//1. there are only two players
//2. do nothing when there is a tie in the round
//3. Shuffle the deck of cards.
//4. Divide the deck evenly between two players, 26 each .
//5. Each player takes the top card from their deck and places it face up in the center.
//6. The player with the higher card gets the higher point.
//7. The game continues until one player has all the cards.
//8. Ties result in zero points for both Players.
//9. After all cards have been played, display the score and declare the winner.


// so, we need three classes: card, deck, player
 // card has three properties and a constructor method as a class: 
  //the properties are: 1. face, 2. value, 3. suit
// deck has empty parameter assigned, because we want to include all the card properties inside the deck
// deck has a constructor method 


//create a class called card
class card {
//use the constructor method inside the class that has three arguments(face,value,suit)
    constructor(face, value, suit){
//define each argument and give them value
        this.face = face;
        this.value = value;
        this.suit = suit;
    } 
}
//use console.log as the friend to console out each code
console.log(card);


//now that I defined a card, it's time to create a deck of cards
//create a class called deck, it will be the parent class
class deck {
//use the constructor method and define the whole deck as a makeDeck method
    constructor() {
    this.wholeDeck = this.makeDeck();  
    }
//in the makeDeck method, make variables of values, suits, and deckOfCards
//assign values to each variable created according to a deck of 52 cards
    makeDeck(){
    let values = [2,3,4,5,6,7,8,9,10,'J','Q','k','A'];
    let suits = ['♣️','♦️','♠️','❤️'];
//use the empty array for deckOfCards to include any cards 
    let deckOfCards = [];
       
//iterate a for loop and initiate the value from 0
//the cards stay in the length of the values defined
//each index x adds one to it
       for (let x = 0; x < values.length; x++){
//also, inside the for loop, create another for loop
//define the value of suit as s which stands within the value length of the cards
//and each time, the suit adds one value
            for (let s = 0; s < suits.length; s++){
//create a variable called war inside the second for loop
//each new card is called war and has the values of suit, value
//x is the index of the current value being assigned to the card.
//x+2 is added to ensure that the value assigned to the card is correct
//since we have two index (x and s), x + 2 is used instead of x + 1.
                let War = new card(x+2,values[x],suits[s]);
                console.log(War);
//now, push the function which means add it to the class
                deckOfCards.push(War);
            }
       }
// Shuffle the deck of cards using the Fisher-Yates shuffle algorithm.
       deckOfCards = deckOfCards.sort((a, b) => 0.5 - Math.random());
        return deckOfCards;
        console.log(deckOfCards);
    }
}


//create a variable and assign the value of a new deck to it
//you can name it whatever you like. I name this value after my name, Najmeh
const Najmeh = new deck();
console.log(Najmeh);

//I need to reate a function that allows to play
//create a function called playGame
//remember we defined the variable wholeDeck above as makeDeck
//now, it's time to include our new deck with makeDeck as the arguments of playGame 

playGame(Najmeh.wholeDeck);
//assign the argument deck for the function because we want to play the deck
function playGame(deck){
//define round 1 and create variable player 1 in the round 1
    round = 1;
    let player1 = {
//Divide the deck evenly between two players, 26 each 
    hand: deck.splice(0,26), 
    }
//define round 2 and create variable player 2 in the round 2
    let player2 = {
    hand: deck,
    }
//log it out to make sure it works, use curly brackets inside paranthesis to define
   console.log({player1});
   console.log({player2}); 
//show your top card using alert
//alert(`player1 plays a ${player1.hand[0].face}; player2 plays a${player2.hand[0].face}`);

// create variables to store each player's current score
let player1Score = 0;
let player2Score = 0;

// create a while loop that will continue until one player has all the cards
while (player1.hand.length > 0 && player2.hand.length > 0) {
// get the top card from each player's hand
const player1Card = player1.hand.shift();
const player2Card = player2.hand.shift();

 // compare the values of the cards using an if loop
 if (player1Card.face > player2Card.face) {
// player 1 wins the round
console.log(`player 1 wins.${player1Card.face}`)
    player1Score++;
  } else if (player1Card.face < player2Card.face) {
// player 2 wins the round
    player2Score++;
  } else {
// tie, do nothing
  }

// log the results of the round
  console.log(`Round ${round}: player1 plays a ${player1Card.value}, player2 plays a ${player2Card.value}`);

// increment the round number
  round++;
}
// display the final score and declare the winner
if (player1Score > player2Score) {
    console.log(`Player 1 wins with a score of ${player1Score}-${player2Score}`);
  } else if (player1Score < player2Score) {
    console.log(`Player 2 wins with a score of ${player2Score}-${player1Score}`);
  } else {

    console.log(`It's a tie with a score of ${player1Score}-${player2Score}`);
  }
}











