var values;
var i =0;
var j=0;

function setup(){
  createCanvas(800,500);
  values = Array(width);
  for(var i=0;i < values.length;i++){
    values[i] = noise(i/100.0)*height; // or random(height) if i want them to be lines
  }

  //sorting
  //for(int i= 0;i < values.length;i++){
  //  for(int j=0;j < values.length-i -1;j++){

  //  }
  //}
}

function draw(){
  background(255);
  textSize(22);
  fill(0);
  text('it is this slow when im looping 100 times per frame',50,50);
  for(var n =0;n < 100;n++){
    if(i < values.length){
      if(values[j] > values[j+1]){
         swap(values,j,j+1);
      }
      j++;
      if(j >= values.length -i -1){
        j =0;
        i++;
      }
    }
    else{
      println("finished");
      noLoop();
    }
  }

  for(var n=0;n < values.length;n++){
    stroke(0);
    line(n,height,n,height-values[n]);
  }

}

function swap(arr,index1,index2){
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
