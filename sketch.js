var ground ;
var trex ,trex_running;
var groundimage 
function preload()
{
   trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
   groundimage=loadImage("ground2.png")
}


function setup()
{
  createCanvas(600,200)
  ground=createSprite (300,190,600,20)  
  ground.addImage(groundimage)
  //create a trex sprite
  trex=createSprite(50,160,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;

}


function draw()
{
  background("white")
  ground.velocityX=-4
  
  if (ground.x<0) {
    ground.x=300
  }
 if(keyDown("space")&& trex>120){
 
   trex.velocityY= -10 
 } 

 
 trex.velocityY=trex.velocityY+0.5
  trex.collide(ground)
 
 
 drawSprites();
 
}
