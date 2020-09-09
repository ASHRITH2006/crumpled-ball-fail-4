
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Paper1 = new paper(200,600,1,1);
	DustBin1 = new dustbin(1200,650,20,50);
	ground1 = new ground(0,780,10,100);

	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  Paper1.display();
  DustBin1.display();
  ground1.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}

