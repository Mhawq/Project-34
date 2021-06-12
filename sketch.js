const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  backgroundImage = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  superhero = new Superhero(400,800,250);
  //throw = new Throw(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);
  attach= new Throw(superhero.body, { x:100,y:465});

  block1 = new Block(600, 100, 70, 70);
  block2 = new Block(900, 100, 70, 70);
  block3 = new Block(900, 100, 70, 70);
  block4 = new Block(900, 100, 70, 70);

  Engine.run(engine);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display()

  superhero.display();
  //rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{ x:mouseX,y:mouseY});
}

function mouseReleased(){
  attach.fly();
}