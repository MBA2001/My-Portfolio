class Point{


    constructor(m,b,re) {
        //randomize the points
        if(re ==0){
            this.x = random(-1,1);
            this.y = random(-1,1);
            this.label;
            this.bias =1;
            //check if its below or above the line
            if(this.y > m*this.x+b){
                this.label = 1;
            }else{this.label = -1;}
        }else{
            this.x = m;
            this.y = b;
        }
    }

    pixelX(){
        return map(this.x,-1,1,0,width);
    }
    pixelY(){
        return map(this.y,-1,1,height,0);
    }
    draw(){
        stroke(1);
        if(this.label == 1){    
            fill(color('red'));
        }else{
            fill(color('blue'));
        }
        let px = this.pixelX();
        let py = this.pixelY();
        ellipse(px, py, 8,8);
    }
}