
var progressWord = [];

var game = {
    gameOn: false,
    gameWord: "",
    words: ["xenogenesis", "starseed", "change", "clayark", "pattern", "kindred", "butler", "delaney", "acorn", "robot", "dawn", "asimov", "mule", "crisis", "parable", "lilith", "starship", "fledgeling", "wildseed", "doro"],
    guessesLeft: 15,
    wins: 0,
    guessedLetters: [],

    newGame: function () {
        this.gameOn = true;
        document.getElementById("guessesLeft").innerHTML = this.guessesLeft;
    },

    newWord: function () {
        this.gameWord = this.words[Math.floor(Math.random() * this.words.length)];
        console.log(this.gameWord);
        //Space out gameWord
        var wordLength = this.gameWord.length;
        for (i = 0; i < wordLength; i++) {
            gameWord = [this.gameWord.slice(0, i * 2 + 1), ' ', this.gameWord.slice(i * 2 + 1)].join('');
        };
        for (var i = 0; i < wordLength; i++) {
            progressWord.push('-');
        }
        document.getElementById("wordfield").innerHTML = progressWord.join('');

    },

    checkGuess: function (guess) {
        if (this.gameWord.indexOf(guess) !== -1) {
            for (var i = 0; i < this.gameWord.length; i++) {
                if (this.gameWord[i] === guess) {
                    progressWord[i] = this.gameWord[i];
                }
            }
            document.getElementById("wordfield").innerHTML = progressWord.join('');
        } else {
            this.guessedLetters.push(guess);
            document.getElementById("guessed").innerHTML = this.guessedLetters;
            this.guessesLeft--;
            document.getElementById("guessesLeft").innerHTML = this.guessesLeft;
        }
    },

    //   checkGuess: function () {
    //       this.gameWord.forEach(function (guess) {
    //           if (this.gameWord.indexOf(guess) !== -1) {
    //               var i = this.gameWord.indexOf(guess);
    //               progressWord.forEach(i, guess)
    //               progressWord[i] = guess;
    //               document.getElementById("wordfield").innerHTML = progressWord.join('');
    //           } else {
    //               this.guessedLetters.push(guess);
    //               document.getElementById("guessed").innerHTML = this.guessedLetters;
    //              this.guessesLeft--;
    //              document.getElementById("guessesLeft").innerHTML = this.guessesLeft;
    //           }
    //      });
    //  },

    checkWins: function () {

    },
}



//start the game
document.onkeyup = function () {
    if (game.gameOn === false) {
        game.newGame();
        game.newWord();
    } else {
        var guess = event.key;
        game.checkGuess(guess);
        console.log(guess);
    }
}