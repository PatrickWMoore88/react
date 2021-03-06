
var CreateDeck = () => {
    let deck = []
    dealerHand = []
    playerHand = []
    // Iterate each value through suits for a 52 card deck
    var suits = ['spades', 'clubs', 'diamonds', 'hearts'];
    var values = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];

    // Creates the img URLs 
    for (let suit in suits) {
        for (let value in values) {
            deck.push("images/" + `${values[value]}` + "_of_" + `${suits[suit]}` + ".png");
        }
    }
    // Shuffles the deck for a new game
    shuffledDeck = _.shuffle(deck);
    return shuffledDeck;
}
var newDeck = CreateDeck();
console.log(shuffledDeck);
console.log(dealerHand);
console.log(playerHand);



// Pops the top card and pushes it to the player and dealer hands.
function DealCards(handArray, elementSelector) {
    card = newDeck.pop();
    handArray.push(card);
    cardUrl = card;
    $(elementSelector).append(
        '<img src="' + cardUrl + '">'
    );
    UpdatePoints();
}

// Deal Button Click
$('#deal-button').click(function() {
    var card, cardUrl;

    DealCards(playerHand, '#player-hand');
    DealCards(dealerHand, '#dealer-hand');
    DealCards(playerHand, '#player-hand');
    DealCards(dealerHand, '#dealer-hand');
})

// Hit Button Click
$('#hit-button').click(function() {
    DealCards(playerHand, '#player-hand');
})

// Point System
function PointSystem(newDeck) {
    var points = 0;
    switch (newDeck) {
        case 'ace':
            points = 11
        case '2':
            points = 2;
        case '3':
            points = 3;
        case '4':
            points = 4;
        case '5':
            points = 5;
        case '6':
            points = 6;
        case '7':
            points = 7;
        case '8':
            points = 8;
        case '9':
            points = 9;
        default:
            points = 10;
        
    }
    console.log(PointSystem)
    return points;
}


// Update Score
function UpdatePoints() {
    var dealerPoints = PointSystem(dealerHand);
    $('#dealer-points').text(dealerPoints);
    var playerPoints = PointSystem(playerHand);
    $('#player-points').text(playerPoints);

}
// var deal = (deck) => {
//     // Dealer Deal

//     let img = document.createElement('img');
//     let img1 = document.createElement('img');
//     img.src = "images/9_of_hearts.png";
//     img1.src = "images/queen_of_hearts.png";
//     document.getElementById("dealer-hand").appendChild(img);
//     document.getElementById("dealer-hand").appendChild(img1);

//     // Player Deal
//     let imgPlayer = document.createElement('img');
//     let img1Player = document.createElement('img')
//     imgPlayer.src = deck[deck.length-1];
//     img1Player.src = "images/queen_of_hearts.png";
//     document.getElementById("player-hand").appendChild(imgPlayer);
//     document.getElementById("player-hand").appendChild(img1Player);
// }
// document.getElementById("deal-button").addEventListener("click", function () {
//     deal(newDeck)
// });

// Deal Function



// Hit Logic
// var hit = () => {
//     // Dealer Hit
//     let hitImgDL = document.createElement('img');
//     hitImgDL.src = "images/ace_of_clubs.png";
//     document.getElementById("dealer-hand").appendChild(hitImgDL);

//     // Player Hit
//     let hitImgPL = document.createElement('img');
//     hitImgPL.src = "images/jack_of_spades.png";
//     document.getElementById('player-hand').appendChild(hitImgPL);
// }
// document.getElementById('hit-button').addEventListener("click", hit);

// document.getElementById("hit-button").addEventListener("click", function(){
//     // hit logic
// });

// document.getElementById("stand-button").addEventListener("click", function(){
//     // stand logic
// });