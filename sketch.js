const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box1;
var engine,world;
var boxes = [];
var ground;


function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(300,390,600,50);
    tankBase = new Wheel(300, 340, 150, 30);
    tankMid = new Ground(300, 310, 120, 30);
    tankTop = new Ground(300, 280, 90, 30);
    tankPipe = new Ground(350, 280, 100, 10);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    tankBase.display();
    tankMid.display();
    tankTop.display();
    tankPipe.display();
    }
    
   
    



