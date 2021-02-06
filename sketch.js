//Create the engine,world and bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Add the necessary variables
var engine,world;
var Bruce;
var drops = [];
var maxDrops = 100;
var thunderImage;

function preload(){

thunderImage = loadImage("images/thunderbolt/1.png");

}

function setup(){
    //Create the canvas
    var canvas = createCanvas(400,650);

    //Create the engine and world variable 
    engine = Engine.create();
    world = engine.world;

    //Create Bruce Wayne
    Bruce = new Umbrella(200,550,200,200);

    //Add the drops
    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrops(random(0,400),(random(0,400))));
    }
}

function draw(){
    background(0);
    Bruce.display();
    drops.display();
    drops.update();
    thunder();
    drawSprites
}   

function thunder(){
    if(World.frameCount%60){
    var lightning = createSprite(200,100,50,50);
    lightning.addImage("thunderbolt",thunderImage);
    lightning.lifetime = 20;
    }

}