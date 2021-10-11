class Action {
    constructor(speed){
        if(!speed) speed = 20;
        this.loopTime = speed;
    }

    setBody(body){
        this.body = body;
        this.init();
        this.animate();
    }

    init(){

    }

    animate(){

    }
}

export default Action;