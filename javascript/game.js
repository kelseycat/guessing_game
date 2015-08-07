function loserMessage(){
    var loserMessage = document.getElementById('loser-message');
    loserMessage.innerHTML = 'You Lose.' + '<p><img src="images/game-over.gif"></p>'
    }

function winnerMessage(){
  var winnerMessage = document.getElementById('winner-message');
  winnerMessage.innerHTML = 'YOU WIN!' + '<p><img src="images/you-win.jpg"></p>'
}

var SteamGuessing = function(gameAmount){
  this.gameAmount = gameAmount;
  this.guesses = 5;
  this.startGame = function() {
    while (this.guesses) {
      var guess = prompt('How many games do I have on Steam?');
      console.log('Previous guess: ' + guess);

      function addGuessList(){
        var guessListName = document.getElementById('guess-list-name');
        guessListName.innerHTML = 'Guesses';
        var guessListItem = document.createElement('LI');
        var guessNode     = document.createTextNode(guess);
            guessListItem.appendChild(guessNode);
            document.getElementById('guess-list').appendChild(guessListItem);
      }

      if (guess == this.gameAmount) {
          message = 'Wow! You\'re right! How did you know?';
          this.guesses = 0;
          winnerMessage();

        } else if (guess < this.gameAmount) {
          message = 'Nope, I\'ve got a few more than that!';
          this.guesses --;
          addGuessList();
            if(this.guesses === 0){
            loserMessage();}

        } else {
          message = 'I wish I had that many!';
          this.guesses --;
          addGuessList();
            if(this.guesses === 0){
            loserMessage();}

        }

        alert(message);

    }

};

}

// function addGuessList(){
//   var guessListItem = document.createElement('LI');
//   var guessNode     = document.createTextNode(guess);
//       guessListItem.appendChild(guessNode);
//       document.getElementById('guess-list').appendChild(guessListItem);
// }

var newGame = new SteamGuessing(223);


  //   function loserMessage(){
  //   var loserMessage = document.getElementById('loser-message');
  //   loserMessage.innerHTML = 'You Lose.' + '<p><img src="images/game-over.gif"></p>'
  // }
    // alert('You fail.')



// var loserMessage = document.getElementById('loser-message');

// loserMessage.innerHTML = message
