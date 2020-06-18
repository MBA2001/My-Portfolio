var values;
var i = 0;

function setup(){
  createCanvas(800,500);
  values = Array(width);
  for(var n =0;n < values.length;n++){
    values[n] = random(height);
  }
  //for (int i = 0; i < values.length -1; i++){
  //    int min_idx = i;
  //    for (int j = i+1; j < values.length; j++){
  //         if (values[j] < values[min_idx])
  //             min_idx = j;
  //         swap(values,i,min_idx);
  //    }
  //}
}
function draw(){
  background(255);
  if(i < values.length -1){
    var min = i;
    for (var j = i+1; j < values.length; j++){
           if (values[j] < values[min]){
               min = j;
            }
     }
     swap(values,i,min);
    i++;
  }

  for(var m=0;m < values.length;m++){
    stroke(0);
    line(m,height,m,height-values[m]);

  }

}


function swap(arr,index1,index2){
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
