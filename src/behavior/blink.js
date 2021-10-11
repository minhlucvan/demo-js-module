import Action from './action.js';

class Blink extends Action{
    constructor(speed){
        if(!speed) speed = 1000;
        super(speed);
    }

    init(){
        this.lastTime = - this.loopTime;
        this.state = -1;
    }
    
    animate(){
        window.setTimeout(this.nextFrane.bind(this), this.loopTime);
    }

    nextFrane(){
        if(this.state === 1){
            this.body.show();
        } else {
            this.body.hide();
        }
        this.state = - this.state;
        this.animate();
    }
}
export default Blink;