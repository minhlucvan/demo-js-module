import Body from './body.js';

class Dog extends Body{
    constructor(x, y){
        super(x, y);
        this.render();
        this.defaultStyle();
    }

    render(){
        super.render();
    }

    defaultStyle(){
        super.defaultStyle();
        this.shape.style.backgroundImage = 'url("dog.png")';
        this.shape.style.backgroundSize = "100% 100%";
        this.shape.style.width = '150px';
        this.shape.style.height = '80px';
    }

}

export default Dog;