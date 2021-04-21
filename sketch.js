
var monkey , monkey_running
var bananaImage,bananaGroup;

var PLAY=1;
var END=0;
var gameState=1;

var score;
var survialTime;

var obstacleGroup,obstacleImage;
 
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  //To create monkey sprite
  monkey=createSprite(60,height-75,10,10);  
  monkey.addAnimation("run",monkey_running);
  //Scaling to adjust the animation
  monkey.scale=0.110;
  
  ground = createSprite(400,360,900,5);
 ground.velocityX = -4;
  ground.x = ground.width/2;
    invisibleGround = createSprite(497,367,990,5);
  invisibleGround.visible = false;
  
  obstaclesGroup =  new Group();
  bananasGroup = new Group();
  
  score = 0;
  survialTime = 0;
}


function draw() {
  
  background("skyblue");
  

  if (gameState===PLAY){
   ground.velocityX = -4;
 
  }
  if(keyDown("space")&&monkey.y>300){
    monkey.velocityY = -20;
  }
  
       monkey.velocityY = monkey.velocityY + 0.8;
 
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
     monkey.collide(ground);

  
    spawnBananas();
    spawnObstacles();
      

    
  

            
  fill("black");
  stroke("black");
  textSize(20);
 // survialTime = Math.ceil(frameCount/frameRate());
  text("survialTime: " + survialTime, 20, 20);
  
  
      
  fill("black");
  stroke("black");
  textSize(20);
score = score + Math.round(getFrameRate()/61);
  text("Score: " + score, 300, 20);
   
  
  drawSprites();
 
  
 
  

  



function spawnObstacles(){
if (frameCount % 80 === 0) {
   
  var obstacle = createSprite(597,328,10,40);
  //obstacle.y = Math.round(random(250,400));
    obstacle.addImage(obstacleImage);
  
   obstacle.scale = 0.20;
  obstacle.velocityX = -8
  
    obstaclesGroup.add(obstacle);  
  }
  
}


function spawnBananas(){
if (frameCount % 40 === 0) {
   
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.15;
    banana.velocityX = -10;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    bananasGroup.add(banana);  
  }
  
}

}