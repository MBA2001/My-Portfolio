var values;
var low;
var i=1;
var j;

function setup(){
  createCanvas(800,500);
  values = Array(width);
  for(var n=0;n < values.length;n++){
    values[n] = random(height); // or noise(i/100.0)*height if i want them to be lines
  }
  //
  //for(int i= 1;i < values.length;i++){
  //  low = values[i];
  //  int j = i-1;
  //  while(j >= 0 && values[j] > low){
  //    values[j+1] = values[j];
  //    j--;
  //  }
  //  values[j+1] = low;
  //}
}

function draw(){
  background(255);
  if(i < values.length){
    low = values[i];
    j = i-1;
    while(j>=0 && values[j] > low){
      values[j+1] = values[j];
      j--;
    }
    values[j+1] = low;
    i++;
  }

  for(var n=0;n < values.length;n++){
    stroke(0);
    line(n,height,n,height-values[n]);
  }
}
