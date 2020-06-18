class Perceptron{
    weights = Array(3) ;
    curve =0.1;
    constructor(){
        //randomizing the weights at the beggining
        for(let i=0;i < this.weights.length;i++){
            this.weights[i] = random(-1,1);
        }
    }
    //gives a +1 or a -1
    sign(num){
        if(num >= 0){
            return 1;
        }else{return -1;}
    }
    //guess were the points are
    guess(inputs){
        let sum= 0;
        for(let i=0;i < this.weights.length;i++){
            sum += (this.weights[i]*inputs[i]);
        }
        let output = this.sign(sum);

        return output;
    }

    guessY(x){
        let w0 = this.weights[0];
        let w1  = this.weights[1];
        let w2 = this.weights[2];
        return -(w2/w1) - (w0/w1)*x;
    }

    train(inputs, target){
        let Guess = this.guess(inputs);
        let error = target - Guess;
        for(let i=0;i < this.weights.length;i++){
            this.weights[i] = this.weights[i] + error*inputs[i]*this.curve;
        }
    }

}