import Body from "./body.js";

class Square extends Body{
    constructor(x, y, l){
        super(x, y);
       if(!l){
           l = 40;
       }
       this.length = l;
       this.render();
       this.defaultStyle();
    }

    render(){
        this.shape  = document.createElement("div");
        this.shape.style.width = this.length + 'px';
        this.shape.style.height = this.length + 'px';
        
        return this.shape;
    }

    defaultStyle(){
        super.defaultStyle();
        this.shape.style.backgroundColor = "green";
    }
}

export default Square;