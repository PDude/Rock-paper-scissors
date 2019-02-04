let words = ['rock' ,'paper', 'scissors'];

let yourChoise = '';
let rounds = 0;

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');

let you = document.getElementById('you');
let bot = document.getElementById('bot');

let reset = document.getElementById('reset');
let response = document.getElementById('response');

let botImg = document.getElementById('bot_img');
let youImg = document.getElementById('you_img');

let youWins = 0;
let botWins = 0;

function botsChoise(){
  let num = Math.floor(( Math.random() * 10 ) % 3);
  let botsChoise = words[num];
  if (num == 0) {
    botImg.setAttribute('src', 'img/rock.png');
    botImg.classList.add('slide_out');
    setTimeout(function() { 
      botImg.classList.remove('slide_out');
    }, 1000);
  } else if (num == 1) {
    botImg.setAttribute('src', 'img/paper.png');
    botImg.classList.add('slide_out');
    setTimeout(function() { 
      botImg.classList.remove('slide_out');
    }, 1000);
  } else if (num == 2) {
    botImg.setAttribute('src', 'img/scissors.png');
    botImg.classList.add('slide_out');
    setTimeout(function() { 
      botImg.classList.remove('slide_out');
    }, 1000);
  }
  return botsChoise;
}

attempts = () => {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;

  setTimeout(function() { 
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
  }, 1000);
  if (rounds <= 3) {
    rounds++;
    if (rounds == 1) {
      console.log('round : ' + rounds);
      console.log('youWins : ' + youWins);
      console.log('botWins : ' + botWins);
      two.classList.add('visible');
      two.classList.remove('hidden');
      one.classList.add('hidden');
      one.classList.remove('visible');
      three.classList.add('hidden');
      three.classList.remove('visible');
      zero.classList.add('hidden');
      zero.classList.remove('visible');
    } else if (rounds == 2) {
      console.log('round : ' + rounds);
      console.log('youWins : ' + youWins);
      console.log('botWins : ' + botWins);
      one.classList.add('visible');
      one.classList.remove('hidden');
      two.classList.add('hidden');
      two.classList.remove('visible');
      three.classList.add('hidden');
      three.classList.remove('visible');
      zero.classList.add('hidden');
      zero.classList.remove('visible');
    } else if (rounds == 3) {
      console.log('round : ' + rounds);
      console.log('youWins : ' + youWins);
      console.log('botWins : ' + botWins);
      zero.classList.add('visible');
      zero.classList.remove('hidden');
      three.classList.add('hidden');
      three.classList.remove('visible');
      one.classList.add('hidden');
      one.classList.remove('visible');
      two.classList.add('hidden');
      two.classList.remove('visible');
    }
  }
}

rock.onclick = () => {
  yourChoise = 'rock';
  compare(yourChoise, botsChoise());
  attempts();
  victory();
  youImg.setAttribute('src', 'img/rock.png');
  youImg.classList.add('slide_out');
  setTimeout(function() { 
    youImg.classList.remove('slide_out');
  }, 1000);
}

paper.onclick = () => {
  yourChoise = 'paper';
  compare(yourChoise, botsChoise());
  attempts();
  victory();
  youImg.setAttribute('src', 'img/paper.png');
  youImg.classList.add('slide_out');
  setTimeout(function() { 
    youImg.classList.remove('slide_out');
  }, 1000);
}

scissors.onclick = () => {
  yourChoise = 'scissors';
  compare(yourChoise, botsChoise());
  attempts();
  victory();
  youImg.setAttribute('src', 'img/scissors.png');
  youImg.classList.add('slide_out');
  setTimeout(function() { 
    youImg.classList.remove('slide_out');
  }, 1000);
}

compare = (yourCh, botsCh) => {
  let countWin = 0;
  let countLose = 0;

  if (yourCh == botsCh) {
    return true;
    
  }
  if (yourCh == 'rock') {
    if (botsCh == 'scissors') {
      if (youWins <= 3) {
        youWins++;
        countWin = youWins;
        you.innerHTML = countWin;
        return true;
      }

    } else {
      if (botWins <= 3) {
        botWins++;
        countLose = botWins;
        bot.innerHTML = countLose;
        return true;
      }
    }
  }
  if (yourCh == 'paper') {
    if (botsCh == 'rock') {
      if (youWins <= 3) {
        youWins++;
        countWin = youWins;
        you.innerHTML = countWin;
        return true;
      }

    } else {
      if (botWins <= 3) {
        botWins++;
        countLose = botWins;
        bot.innerHTML = countLose;
        return true;
      }
    }
  }
  if (yourCh == 'scissors') {
    if (botsCh == 'rock') {
      if (botWins <= 3) {
        botWins++;
        countLose = botWins;
        bot.innerHTML = countLose;
        return true;
      }

    } else {
      if (youWins <= 3) {
        youWins++;
        countWin = youWins;
        you.innerHTML = countWin;
        return true;
      }
    }
  }
}

victory = () => {
  if (rounds == 3) {
    if (youWins > botWins) {
      response.innerHTML = 'You win!';
    } else if (youWins < botWins) {
      response.innerHTML = 'You lose!';
    } else if (youWins == botWins) {
      response.innerHTML = 'It\'s a tie!';
    }

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    rock.classList.add('disabled');
    paper.classList.add('disabled');
    scissors.classList.add('disabled');

    setTimeout(function() { 
      rock.classList.add('pointer_events');
      paper.classList.add('pointer_events');
      scissors.classList.add('pointer_events');
    }, 1000);

    setTimeout(function() { 
     youImg.style.display = 'none';
     botImg.style.display = 'none';
   }, 1000);
  }
}

reset.onclick = () => {
  rounds = 0; 
  youWins = 0;
  botWins = 0;
  you.innerHTML = 0;
  bot.innerHTML = 0;
  zero.classList.remove('visible');
  zero.classList.add('hidden');
  three.classList.add('visible');
  three.classList.remove('hidden');
  one.classList.add('hidden');
  one.classList.remove('visible');
  two.classList.add('hidden');
  two.classList.remove('visible');
  response.innerHTML = '';

  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;

  rock.classList.remove('disabled');
  paper.classList.remove('disabled');
  scissors.classList.remove('disabled');

  youImg.style.display = 'block';
  botImg.style.display = 'block';

  rock.classList.remove('pointer_events');
  paper.classList.remove('pointer_events');
  scissors.classList.remove('pointer_events');
}