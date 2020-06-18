let perceptron;
let points = [];
//ps is the amout of points
let ps;
//b is y-intercept m is the slope
let b,m;
//y is the random y2 FOR THE LINE
let y;
let i=0;
function setup() {
    createCanvas(600,600);
    background(150);
    //create the perceptron
    perceptron = new Perceptron();
    //randomize y and b to change the line and initialize the points
    y=random(0,600);
    ps = 100;
    b = random(-1,1);
    //equation to calculate the slope
    m = random(-1,1);
    //initializing all of the points
    for(let i=0;i < ps;i++){
        points[i] = new Point(m,b,0);
    }
    
}
function f(l){
    return m*l+b;
}

function draw() {
    clear();
    background(150);

    // let point1 = new Point(-1,f(-1),1);
    // let point2 = new Point(1,f(1),1);
    // stroke(3);
    // line(point1.pixelX(),point1.pixelY(),point2.pixelX(),point2.pixelY());
    let p1 = new Point(-1,perceptron.guessY(-1),1);
    let p2 = new Point(1,perceptron.guessY(1),1);
    stroke(1);
    line(p1.pixelX(),p1.pixelY(),p2.pixelX(),p2.pixelY());
    for(let i=0;i < ps;i++){
        points[i].draw();
    }
        let inputs = [points[i].x,points[i].y,points[i].bias];
        perceptron.train(inputs,points[i].label);
        // let guess = perceptron.guess(inputs);
        // if(guess == points[i].label){
        //     fill(0,255,0);
        // }else{
        //     fill(255,0,0);
        // }
        // stroke(1);
        // ellipse(points[i].pixelX(), points[i].pixelY(), 8,8);
        if(i==99){
            i=0
        }else{
            i++;
        }
}

function mousePressed(){
    for(let i=0;i < ps;i++){
        let inputs = [points[i].x,points[i].y,points[i].bias];
        perceptron.train(inputs,points[i].label);
    }
}