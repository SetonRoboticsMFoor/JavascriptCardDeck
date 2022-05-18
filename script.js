const cards = ["Ace","1","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
const suits = ["Hearts","Diamonds","Clubs","Spades"];
const deck = [];

for(let i in cards) {
    deck.push(cards[i]);
}

alert(deck);