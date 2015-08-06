var SteamGuessing = function(gameAmount){
  this.gameAmount = gameAmount;
  this.guesses = 3;
  this.startGame = function() {

    while (this.guesses) {
      var guess = prompt('How many games do I have on Steam?');
      console.log(guess);

      if (guess == this.gameAmount) {
          message = 'Wow! You\'re right! How did you know?';
          this.guesses = 0;
        } else if (guess < this.gameAmount) {
          message = 'Nope, I\'ve got a few more than that!';
          this.guesses --;
        } else {
          message = 'I wish I had that many!';
          this.guesses --;
        }
        alert(message);
    }

    alert('You fail.')
  }
};

var newGame = new SteamGuessing(223);
