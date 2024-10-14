const randomNumber = parseInt(Math.random()*100 + 1);
// console.log(randomNumber);


 const submit = document.querySelector('#subt');
 const userInput = document.querySelector('#gussField');
 const guessSlot = document.querySelector('.guesses');
 const remaining = document.querySelector('.lastResult');
 const lowOrHi = document.querySelector('.lowOrHi');
 const startOver = document.querySelector('.resultParas');

 const p = document.createElement('p');

  let prevGuess = [];
  let numGuess = 1;

  let playGame = true;
  if (playGame){
    submit.addEventListener('click',function(e){
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGusse(guess);
    });
  }

  function validateGusse(guess){
    if (isNaN(guess)) {
      alert('please enter a valid number')
    }else if(guess < 1){
      alert('please enter a number more than 1')
    }else if(guess >100){
      alert('please enter a number less than 100')
    }else {
      prevGuess.push(guess)
      if (numGuess===11){
        displayGusse(guess)
        displayMessage(`Game Over. Random number was ${randomNumber}`)
        endgame()
      }else{
        displayGusse(guess)
        checkGusse(guess)
        
      }
    }

    }

  
  function checkGusse(guess){
    if(guess === randomNumber){
      displayMessage('you gessed it right')
      endgame()
    }else if( guess < randomNumber){
    displayMessage(`Number is Tooo Low`)
    }else if( guess > randomNumber){
      displayMessage(`Number is Tooo height`)
      }
  }
  function displayGusse(guess){ //cleanup methoerd
     userInput.value = ''
     guessSlot.innerHTML += `${guess}, `;
     numGuess++;
     remaining.innerHTML = `!${11 - numGuess}`;
  }
  function displayMessage(meassage){
  lowOrHi.innerHTML = `<h2>${meassage}</h2>`;
  }
  
  function endgame(){
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id= "newGame"> Start new Game</h2>`;
  startOver.appendChild(p);
  playGame =false;
  newgame();
  }

  function newgame(){
 const newGameButton = document.querySelector('#newGame')
 newGameButton.addEventListener('click', function(e){
  randomNumber = parseInt(Math.random()* 100 + 1);
  prevGuess = []
  numGuess = 1
  guessSlot.innerHTML = ''
  remaining.innerHTML = `${11 - numGuess}`;
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)

  playGame = true
 })
  }



  //react is a core faundational library which is use to take take all the Refrences