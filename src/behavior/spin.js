import Action from './action.js';

class Spin extends Action{
    constructor(speed){
        if(!speed) speed = 3;
        super(speed);
    }

    init(){
        this.angle = 0;
        this.lastTime = null;
    }
    
    animate(){
        window.requestAnimationFrame(this.nextFrane.bind(this));
    }

    nextFrane(time){
        if(this.lastTime && time - this.lastTime < this.loopTime/24)  return;
        this.lastTime = time;
        if(this.angle >= 360){
            this.angle = 0;
        } else {
            this.angle += 15;
        }
        this.body.shape.style.transform = "rotate("+ this.angle + 'deg)';
        this.animate();
    }
}
export default Spin;