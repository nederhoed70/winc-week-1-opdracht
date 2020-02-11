//begroeten en naam vragen
function getUserName() {
  const name = prompt('Welkom bij Guess The Number, wat is je naam?');
  if (name) {
    alert('Hey ' + name + '!', null);
  } else {
    prompt(
      'Zonder je naam kunnen we niet beginnen, vul hieronder je naam in s.v.p.'
    );
  }
  return name;
}
//bepaal het level
function getLevel() {
  let levelInput = prompt(
    'LEVEL:\n[E]asy: 0 - 25, 5 pogingen\n[M]edium: 0 - 100, 10 pogingen\n[H]ard: 0 - 500, 15 pogingen',
    'M'
  );
  let level = levelInput.toLowerCase();
  let maxNum = '';
  let tries = '';
  switch (level) {
    case 'e':
      this.maxNum = 25;
      this.tries = 5;
      break;
    case 'm':
      this.maxNum = 100;
      this.tries = 10;
      break;
    case 'h':
      this.maxNum = 500;
      this.tries = 15;
      break;
    default:
      this.maxNum = 100;
      this.tries = 10;
  }
  return level;
}

//vraag gebruiker om een nieuwe poging
function anotherGame() {
  let again = prompt('Nog een spelletje? [Y] / [N]', 'y');
  if (again === 'n' || again === 'N') {
    alert('Bedankt voor het spelen!');
  } else {
    startGame();
  }
}

//valideer ingevoerde waarde, alert verlies alert bij gewonnen
function validateInput(user, computer) {
  if (user === computer) {
    endGame('won');
  } else {
    alert('Helaas....fout gegokt.');
  }
}
//genereer willekeurig nummer
function getRandomNumber(ceiling) {
  return Math.floor(Math.random() * ceiling + 1);
}
//einde spel
function endGame(reason, player, solution) {
  switch (reason) {
    case 'quit':
      alert('Bedankt voor het spelen, ' + player + '!');
      break;
    case 'won':
      alert('GEFELICITEERD, JE HEBT GEWONNEN !!');
      anotherGame();
      break;
    case 'lost':
      alert(
        'Helaas, ' +
          player +
          ', deze keer heb je het getal niet geraden. Het getal was: ' +
          solution
      );
      anotherGame();
      break;
  }
}
//start spel
function startGame() {
  if (!name) {
    getUserName();
  }

  getLevel();

  this.secretNumber = getRandomNumber(maxNum);

  alert(
    '* laten we beginnen *\n\ngebruik tijdens het spel X om te stoppen. Je hebt ' +
      tries +
      ' pogingen.'
  );

  for (let rounds = 1; rounds <= tries; rounds++) {
    let guess = prompt(
      'Ronde [' +
        rounds +
        '] van [' +
        tries +
        '] raad het getal tussen 0 en ' +
        maxNum
    );
    if (guess === 'x' || guess === 'X') {
      endGame('quit', name, secretNumber);
    }
    if (!typeof guess === 'number' || guess > maxNum) {
      alert(
        'Vul een heel getal in kleiner dan ' +
          maxNum +
          ', geen letters of speciale tekens'
      );
    } else {
      validateInput(guess, secretNumber);
    }
  }
  endGame('lost', name, secretNumber);
}

// tests
//
//console.log(getRandomNumber(500));
//getLevel();

startGame();
