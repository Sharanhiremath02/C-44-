const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var man,manImg;
var arrow,arrowImg;
var bow,bowImg;
var archeryBoard,archeryBoardImg;

function preload(){
    backgroundImg = loadImage("images/archery bacground3.jpg");
    manImg = loadImage("images/archery2.png");
   // arrowImg = loadImage("images/archery arrow2.png");
    archeryBoardImg = loadImage("images/archery board 2.png");
}


function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
}




function draw(){
    background(backgroundImg);
    Engine.update(engine);
    image(archeryBoardImg,width-500,height/2-50,400,400);
    image(manImg,100,height/2-100,200,400);
    textSize(20);
    fill("blue");
    text(mouseX+","+mouseY,mouseX,mouseY);
    //drawSprites();
  
}


