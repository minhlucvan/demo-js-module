import Action from './action.js';

class Bounce extends Action{
    constructor(speed){
        if(!speed) speed = 2000;
        super(speed);
    }

    init(){
        this.lastTime = null;
        this.state = -1;
    }
    
    animate(){
        window.setTimeout(this.nextFrane.bind(this), 50);
        window.setInterval(this.nextFrane.bind(this), this.loopTime + 50);
    }

    nextFrane(){
        this.up();
        setTimeout(this.down.bind(this), this.loopTime/2);
    }

    up(){        

        this.body.shape.style.transition = "all ease-out 1s";
        this.body.moveTo(this.body.x,  this.body.y - 100);
    }

    down(){

        this.body.shape.style.transition = "all ease-in 1s";
        this.body.moveTo(this.body.x,  this.body.y + 100);
    }
}
export default Bounce;