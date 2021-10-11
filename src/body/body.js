class Body{
    constructor(x, y){
        if(typeof x === 'number' || typeof y === 'number'){
            this.x = x;
            this.y = y;
        }
    }
    
    defaultStyle(){
        this.shape.setAttribute('class', 'body');
        this.shape.style.position = 'absolute';
        this.shape.style.top = '0';
        this.shape.style.left = '0';
        this.shape.style.bacgroundColor = '#000';
        this.shape.style.color = '#fff';
        this.moveTo(this.x, this.y);
    }

    render(){
        this.shape =  document.createElement("div");
        return this.shape;
    }

    show(){
        this.shape.style.visibility = "";
    }

    hide(){
        this.shape.style.visibility = "hidden";
    }

    getShape(){
        return this.shape;
    }
    moveTo(x, y){
        if(typeof x !== 'number'  || typeof y !== 'number') return;
        this.shape.style.top = y+'px';
        this.shape.style.left = x+'px';
    }
    setBehavior(behavior){
        this.behavior = behavior;
        behavior.setBody(this);
    }

    addTo(container){
        if(! container || typeof container.appendChild !== 'function') return;
        container.appendChild(this.getShape());
    }
}

export default Body;