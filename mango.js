class Mango{
    constructor(x,y){
        this.body=Bodies.circle(x,y,50/2,{restitution:0.5,friction:0.8,density:1.8,isStatic:true});
        this.r=50;
       
        this.image=loadImage("images/mango.png");
        //Matter.Body.setScale(this.body,{x,y});
        World.add(world,this.body);

    }
    display(){
      var pos=this.body.position;
      //push();
     //rotate(this.body.angle);
      //translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.r,this.r);
       //ellipseMode(RADIUS);
       //ellipse(0,0,this.r,this.r)
      
      //pop();
    }
}