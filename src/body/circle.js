import Body from "./body.js";

class Cicle extends Body{
    constructor(x, y, r){
        super(x, y);
       if(!r) r = 20;
       this.radius = r;
       this.render();
       this.defaultStyle();
    }

    render(){
        this.shape  = document.createElement("div");
        this.shape.style.width = 2*this.radius + 'px';
        this.shape.style.height = 2*this.radius + 'px';
        this.shape.style.borderRadius = '50%'; 
        
        return this.shape;
    }

    defaultStyle(){
        super.defaultStyle();
        this.shape.style.backgroundColor = "red";
    }
}

export default Cicle;