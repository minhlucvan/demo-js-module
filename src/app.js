import Circle from "./body/circle.js";
import Dog from "./body/dog.js";
import Square from "./body/square.js"

import Blink from "./behavior/blink.js";
import Spin from "./behavior/spin.js";
import Bounce from "./behavior/bounce.js";

class App{
    constructor(){
        this.actions = [Blink, Spin, Bounce];
        this.bodies = [];
        this.render();
    }

    render(){
        this.container = document.getElementById("container");
        var body1 = new Circle(80, 150, 20);
        var body2 = new Dog(180, 150);
        var body3 = new Square(400, 150);
        this.addBody(body1);
        this.addBody(body2);
        this.addBody(body3);
        this.addAnimate();
    }

    addAnimate(){
        this.bodies.forEach((body) => {
            var action = this.getRandomAction();
            body.setBehavior(action);
        });

       // setTimeout(this.addAnimate.bind(this), 1000*60);
    }

    getRandomAction(){
        var num = Math.floor(Math.random()*(this.actions.length));
        var action = new this.actions[num];
        this.actions.splice(num, 1);
        return action;
    }

    addBody(body){
        this.container.appendChild(body.getShape());
        this.bodies.push(body);
    }
}

window.app = new App();