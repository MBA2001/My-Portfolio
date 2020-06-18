let board = [
  ['','',''],
  ['','',''],
  ['','',''],
];
xNext = true;
let gameover = false;
function setup() {
  createCanvas(400,400);
}


function draw() {
  background(220);
  let x = 100;
  let y = 100;
  let status;
  let winner = checkWinner();
  
  if(winner){
    status = 'Winner is: ' + winner;
    gameover =true;
  }else{
    status = 'Next Player: ' + (xNext? 'X' : 'O');
  }
  textSize(32);
  fill(0);
  text(status, 50,50);
  for(let i=0;i <3;i++){
    for(let j=0;j < 3;j++){
      textSize(32);
      fill(0);
      text(board[i][j],x,y);
      x+=100;
    }
    y+=100;
    x = 100;
  }
  fill(0);
  line(150,75,150,325);
  fill(0);
  line(250,75,250,325);
  fill(0);
  line(75,150,325,150);
  fill(0);
  line(75,250,325,250);
}

function mouseClicked(){
  if(!gameover){
  if(mouseX > 75 && mouseX < 325 && mouseY > 75 && mouseY < 325){
    if(mouseY < 150 && mouseY > 75){
      //upper third
      if(mouseX > 75 && mouseX < 150){
      //first
        if(!board[0][0]){
          board[0][0] = (xNext? 'x' : 'o');
        }
        else {xNext = !xNext;}
      }
      else if(mouseX > 150 && mouseX < 250){
      //mid
        if(!board[0][1]){
          board[0][1] = (xNext? 'x' : 'o');
        }
        else {xNext = !xNext;}
      }
      else if(mouseX > 250 && mouseX < 325){
      //last
        if(!board[0][2]){
          board[0][2] = (xNext? 'x' : 'o');
        }
        else {xNext = !xNext;}
      }
    }
    if(mouseY > 150 && mouseY < 250){
    //middle third

      if(mouseX > 75 && mouseX < 150){
      //first
        if(!board[1][0]){
          board[1][0] = (xNext? 'x' : 'o');
        }
        else {xNext = !xNext;}
      }
      if(mouseX > 150 && mouseX < 250){
      //mid
        if(!board[1][1]){
          board[1][1] = (xNext? 'x' : 'o');
        }
        else {xNext = !xNext;}
      }
      else if(mouseX > 250 && mouseX < 325){
      //last
        if(!board[1][2]){
          board[1][2] = (xNext? 'x' : 'o');
        }
        else {xNext = !xNext;}
      }
    }
    if(mouseY > 250 && mouseY < 325){
    //lower third
      if(mouseX > 75 && mouseX < 150){
      //first
        if(!board[2][0]){
          board[2][0] = (xNext? 'x' : 'o');
        }
        else {xNext = !xNext;}
      }
      if(mouseX > 150 && mouseX < 250){
      //mid
        if(!board[2][1]){
          board[2][1] = (xNext? 'x' : 'o');
        }
        else {xNext = !xNext;}
      }
      else if(mouseX > 250 && mouseX < 325){
      //last
        if(!board[2][2]){
          board[2][2] = (xNext? 'x' : 'o');
        }
        else {xNext = !xNext;}
      }
    }
  }
  if(xNext){ xNext = false;}
  else{xNext = true;}
  }
}

function checkWinner(){
  let j=0;
  for(let i=0;i < 3;i++){
    if(board[0][j] == board[1][j] && board[1][j] == board[2][j]){return board[1][j];}
    if(board[j][0] == board[j][1] && board[j][1] == board[j][2]){return board[j][1];}
    j++;
  }
  if(board[0][0] == board[1][1] && board[1][1] == board[2][2]){return board[0][0];}
  if(board[2][0] == board[1][1] && board[1][1] == board[0][2]){return board[1][1];}
}
