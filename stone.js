class Stone{
    constructor(x,y){
        this.body=Bodies.circle(x,y,15,{restitution:0,friction:1,density:1.2});
        this.r=30;
       
        this.image=loadImage("images/stone.png");
       
        World.add(world,this.body);

    }
    display(){
      var pos=this.body.position;
      
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.r*2,this.r*2);
      
      
     
    }
}