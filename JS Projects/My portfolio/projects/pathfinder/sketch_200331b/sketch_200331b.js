var cols = 25;
var rows = 25;
var grid = new Array(cols);
var path =[];
var openSet = [];
var closedSet = [];
var start;
var end;
var w,h;
var count = 0;
var ended = false;
function Node(i,j){
  this.x = i;
  this.y = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.N = [];
  this.prev;
  this.wall = false;

  if(random(1) > 0.8){
    this.wall = true;
  }
  this.show = function(color){
    fill(color);
    if(this.wall){
      fill(0);
    }
    noStroke();
    rect(this.x*w,this.y*h, w-1,h-1);
  }
  this.addN = function(grid){
    if(i < cols-1){
      this.N.push(grid[this.x+1][this.y]);
      // if(j < rows-1){
      //   this.N.push(grid[this.x+1][this.y+1]);
      // }
    }
    if(i > 0){
      this.N.push(grid[this.x-1][this.y]);
    }
    if(j < rows-1){
      this.N.push(grid[this.x][this.y+1]);
    }
    if(j > 0){
      this.N.push(grid[this.x][this.y-1]);
    }
  }
}
function setup() {
  createCanvas(400,400);

  w = width/cols;
  h= height/rows;
  for (var i = 0; i < cols; i++) {
      grid[i] = new Array(rows);
  }
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Node(i,j);
    }
  }
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].addN(grid);
    }
  }
  start = grid[0][0];
  end = grid[cols-1][rows-1];
  start.wall = false;
  end.wall = false;
  openSet.push(start);
  console.log(grid);
}


function draw() {
  background(0);
  if(openSet.length > 0){
    //try finding
    var lowest= 0;
    for (var i = 0; i < openSet.length; i++) {
      if(openSet[i].f < openSet[lowest].f){
        lowest = i;
      }
    }
    var curr = openSet[lowest];
    if(curr == end){
      noLoop();
      ended = true;
      console.log('Done');
    }
    openSet.splice(lowest,1);
    closedSet.push(curr);
    var neib = curr.N;
    for(var i=0;i < neib.length;i++){
      var n = neib[i];
      if(!closedSet.includes(n) && !n.wall){
        var gtemp = curr.g+1;
        if(openSet.includes(n)){
          if(gtemp < n.g){
            n.g = gtemp;
          }
        }
        else{
          n.g = gtemp;
          openSet.push(n);
        }

        n.h = heuristic(n,end);
        n.f = n.g + n.h;
        n.prev = curr;
      }
    }
  }
  else{
    //we are done
    noLoop();
    ended =true;
    console.log('No solution');
  }

  for (let i = 0; i < cols; i++) {
    for(let j =0; j < rows;j++){
      grid[i][j].show(color(255));
    }
  }

  for(let i =0;i < closedSet.length;i++){
    closedSet[i].show(color(255,0,0));
  }
  for(let i =0;i < openSet.length;i++){
    openSet[i].show(color(0,255,0));
  }
  end.show(color(167,167,165));
  path = [];
  var temp = curr;
  path.push(temp);
  while(temp.prev){
    path.push(temp.prev);
    temp = temp.prev;
  }
  for(var i=0;i < path.length;i++){
    path[i].show(color(0,0,255));
  }
  if(ended){
    start.show(color(177,0,255));
    end.show(color(167,167,165));
  }

}

function heuristic(a,b){
  var d = dist(a.x,a.y,b.x,b.y);
  // var d = abs(a.x-b.x) + abs(a.y-b.y);
  return d;
}
