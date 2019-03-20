
var game = {
    gameOn: false,
    gameWord: "",
    progressWord: [],
    words: ["xenogenesis", "starseed", "change", "clayark", "pattern", "kindred", "butler", "delaney", "acorn", "robot", "dawn", "asimov", "mule", "crisis", "parable", "lilith", "starship", "fledgeling", "wildseed", "doro", "pelted", "stardancer", "earthrise", "eldritch", "escheuton", "planet", "spaceship", "alliance", "fleet", "change", "companion", "sower", "changeling"],
    guessesLeft: 15,
    totalWins: 0,
    winStreak: 0,
    guessedLetters: [],

    newGame: function () { //reset all values to base values.
        this.gameOn = true;
        this.guessesLeft = 15;
        this.guessedLetters = [];
        this.progressWord = [];
        this.guessedLetters = [];
        document.getElementById("guessesLeft").innerHTML = this.guessesLeft;
        document.getElementById("guessed").innerHTML = this.guessedLetters;
        document.getElementById("wordfield").innerHTML = " ";
    },

    newWord: function () { //randomly pick a word from the words array
        this.gameWord = this.words[Math.floor(Math.random() * this.words.length)];
        console.log(this.gameWord);
        var wordLength = this.gameWord.length;
        for (var i = 0; i < wordLength; i++) {
            this.progressWord.push('_ ');
        } 
        document.getElementById("wordfield").innerHTML = this.progressWord.join('')//print the blanked out version of the word to the html;

    },

    checkGuess: function (guess) {
        var guess = guess.toLowerCase();
        if (this.guessedLetters.indexOf(guess) !== -1) {
            console.log(guess);
        } else if (this.gameWord.indexOf(guess) !== -1) {
            for (var i = 0; i < this.gameWord.length; i++) {
                if (this.gameWord[i] === guess) {
                    this.progressWord[i] = this.gameWord[i];
                }
            }
            document.getElementById("wordfield").innerHTML = this.progressWord.join('');
        } else {
            this.guessedLetters.push(guess);
            document.getElementById("guessed").innerHTML = this.guessedLetters.join(' ');
            this.guessesLeft--;
            document.getElementById("guessesLeft").innerHTML = this.guessesLeft;
        }
    },

    checkEnd: function() {
        if(this.guessesLeft <= 0) {
            this.gameOn = false;
            this.winStreak = 0;
            document.getElementById("guessesLeft").innerHTML = " <strong>Game Over! Press any key to play again.</strong>";
            document.getElementById("winStreak").innerHTML = this.winStreak;
        } else if(this.progressWord.indexOf('_ ') === -1) {
            this.gameOn = false;
            this.totalWins++;
            this.winStreak++;
            document.getElementById("wins").innerHTML = `  ${this.totalWins}`;
            document.getElementById("winStreak").innerHTML = `  ${this.winStreak}`;
            document.getElementById("guessesLeft").innerHTML = " <strong>You Win! Press any key to play again.</strong>";
        }

    },
}



//start the game
document.onkeyup = function () {
    if (game.gameOn === false) {
        game.newGame();
        game.newWord();
    } else {
        var guess = event.key;
        if ((/[a-zA-Z_ ]/.test(guess))) { //check if it's a letter
        console.log(guess);
        game.checkGuess(guess);
        }
        game.checkEnd();
    }
}