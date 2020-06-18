//challenge1 click
function ageInDays() {
  var age = prompt('how old are you? ');
  var ageInDay = age * 365;
  var h2 = document.createElement('h2');
  var answer = document.createTextNode('You Are ' + ageInDay + ' days old!');
  h2.setAttribute('id', 'ageInDays');
  h2.appendChild(answer);
  document.getElementById('flex-box-result').appendChild(h2);
}
//challenge 1 reset
function reset() {
  document.getElementById('ageInDays').remove();
}

//challenge2 cat generator
function cats() {
  var cat =  document.createElement('img');
  cat.setAttribute('src', 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg');
  document.getElementById('result').appendChild(cat)
}

function rpsGame(choice){
  var cpu = Math.floor((Math.random()*3)+1);
  var enemy;
  switch (cpu) {
    case 1:
      enemy = document.getElementById('rock');
      break;
    case 2:
      enemy = document.getElementById('paper');
      break;
    case 3:
      enemy = document.getElementById('scissors');
      break;
    default:

  }
  var map = document.getElementById('flex-box-rps-div');
  var h2 = document.createElement('h2');
  var win = checkWin(choice, enemy);
  if(win == 1){
    choice.setAttribute('style', 'box-shadow: 0px 10px 50px #2ecc71;')
    enemy.setAttribute('style', 'box-shadow: 0px 10px 50px #e74c3c;')
    var won = document.createTextNode('You WON!');
    h2.appendChild(won);
    map.innerHTML = '';
    map.appendChild(choice);
    map.appendChild(h2);
    map.appendChild(enemy);
  }
  else if(win == 0){
    var tie = document.createTextNode('Tie');
    h2.appendChild(tie);
    map.innerHTML = '';
    map.appendChild(choice);
    map.appendChild(h2);
    map.appendChild(enemy);
  }
  else{
    choice.setAttribute('style', 'box-shadow: 0px 10px 50px #e74c3c;')
    enemy.setAttribute('style', 'box-shadow: 0px 10px 50px #2ecc71;')
    var lost = document.createTextNode('You Lost');
    h2.appendChild(lost);
    map.innerHTML = '';
    map.appendChild(choice);
    map.appendChild(h2);
    map.appendChild(enemy);
  }
}

function checkWin(player, computer){
  if(player.id == 'paper'){
    if(computer.id == 'paper'){
      return 0;
    }
    if(computer.id == 'rock'){
      return 1;
    }
    if(computer.id == 'scissors'){
      return -1;
    }
  }

  if(player.id == 'rock'){
    if(computer.id == 'rock'){
      return 0;
    }
    if(computer.id == 'scissors'){
      return 1;
    }
    if(computer.id == 'paper'){
      return -1;
    }
  }

  if(player.id == 'scissors'){
    if(computer.id == 'scissors'){
      return 0;
    }
    if(computer.id == 'paper'){
      return 1;
    }
    if(computer.id == 'rock'){
      return -1;
    }
  }
}
