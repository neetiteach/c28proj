class Ground{
  
    constructor(){
        var opt={
            isStatic:true
        };
        this.body=Bodies.rectangle(400,700,800,200,opt);
        this.width=800;
        this.height=200;
       World.add(world,this.body);
    }
     
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("brown");

        rect(pos.x,pos.y,this.width,this.height);
            
    }



}