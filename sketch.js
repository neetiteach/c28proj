
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var grnd,tree1,boy1;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12;
var marr=[];
var sobj,sling1;
var b1,b2,b3;
function preload()
{
	tree1=loadImage("tree.png");
	boy1=loadImage("images/boy.png");
}

function setup() {
	createCanvas(800,700);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	grnd=new Ground();
	//tree1=new Tree();

	marr[0]=new Mango(500,300);
	marr[1]=new Mango(550,200);
	marr[2]=new Mango(580,260);
	marr[3]=new Mango(560,330);
	marr[4]=new Mango(620,320);
	marr[5]=new Mango(650,220);
	marr[6]=new Mango(670,300);
	marr[7]=new Mango(720,260);
	marr[8]=new Mango(750,320);
	marr[9]=new Mango(640,270);
	marr[10]=new Mango(600,180);
	marr[11]=new Mango(470,350);
	sobj=new Stone(90,500);
	sling1=new Sling(sobj.body,{x:90,y:500});

	//b1=new Box(590,400,50,500);
	//b2=new Box();
	//b3=new Box;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  grnd.display();
  //tree1.display();
 imageMode(CENTER);
 image(tree1,600,370,400,450);
 image(boy1,150,550,200,200);
 /*m1.display();
 m2.display();
 m3.display();
 m4.display();
 m5.display();
 m6.display();
 m7.display();
 m8.display();
 m9.display();
 m10.display();
 m11.display();
 m12.display();*/
for(var i=0;i<12;i++){
	 marr[i].display();
 }
 //b1.display(); 
 sobj.display();
 sling1.display();
  //drawSprites();
  for(var i=0;i<12;i++){
	dcollision(sobj,marr[i]);
   }

}

function mouseDragged(){
 Matter.Body.setPosition(sobj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling1.fly();
}

function dcollision(obj1,obj2){
	var pstone=obj1.body.position;
	var pmango=obj2.body.position;
	//console.log("hi")
	var distance=dist(pstone.x,pstone.y,pmango.x,pmango.y);
	 //console.log(distance);
	 //console.log(obj1.r+obj2.r)
		if(distance<=obj1.r+obj2.r){
			Matter.Body.setStatic(obj2.body,false);
			//console.log("collided")
		}
	}
function keyPressed(){
	if(keyCode===32){
      sling1.attach(sobj.body);
	}
}