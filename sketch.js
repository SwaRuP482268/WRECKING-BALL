const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4, box5, box6, box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,
B23,box24,box25,box26;
var rope,ground,ball;


function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  

  ball = new Ball(500,50,50);
  rope = new Rope(ball.body, { x: 500, y: 50 });
  ground = new Ground(1500, 600, 3000, 20);
  //lane1
  box1 = new Box(600, 130, 70, 70);
  box5 = new Box(600, 200, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);
  box8 = new Box(600, 100, 70, 70);
  box9 = new Box(600, 100, 70, 70);
  box10 = new Box(600, 100, 70, 70);
  box11 = new Box(600, 100, 70, 70);
 
  //lane2
  box12 = new Box(700, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
 
  
  //lane3
  box18 = new Box(800, 100, 70, 70);
  box19 = new Box(800, 100, 70, 70);
  box20 = new Box(800, 100, 70, 70);
  box21 = new Box(800, 100, 70, 70);
  box22 = new Box(800, 100, 70, 70);
  

  //lane4
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  B23 = new Box(900, 100, 70, 70);
  box24 = new Box(900, 100, 70, 70);
  box25 = new Box(900, 100, 70, 70);
  box26 = new Box(900, 100, 70, 70);


}

function draw() {
  background("white");
  Engine.update(engine);
  //ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  B23.display();
  box24.display();
  box25.display();
  box26.display();
 
  ball.display();
  rope.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX , y:mouseY});
}
