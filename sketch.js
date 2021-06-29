

var playerName,gameState = "start";
var venon,police,scaredPerson,devil;

var venon1img, venon2img;
var poilce1img,police2img,police3img,police4img;
var scaredPerson1img,scaredPerson2img,scaredPerson3img;
var devil1img,devil2img;
var backgroundImg,endbgImg;
var life =2;

function preload() {
venon1img= loadAnimation("images/venon1.png","images/venon2.png");

  policemain = loadAnimation("images/police1.png", "images/police2.png", "images/police3.png", "images/police4.png");
police1img = loadImage("images/police1.png");
//police2img = loadImage("images/police2.png");
//police3img = loadImage("images/police3.png");
//police4img = loadImage("images/police4.png");
scaredPerson1img = loadImage("images/scaredPerson1.png");
scaredPerson2img = loadImage("images/scaredPerson2.png");
scraedPerson3img = loadImage("images/scaredPerson3.png");
devil1img = loadImage("images/devil1.png");
devil2img = loadImage("images/devil2.png");
backgroungImg1= loadImage("images/bg.jpeg");
backgroundImg2= loadImage("images/bg2.jpeg");
  backgroundImg3 = loadImage("images/bg3.jpeg");
  life1 = loadImage("images/life.png");
  dead = loadImage("images/dead.png");
endbgImg = loadImage("images/endbg.jpeg")
	
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  form = new Form();


  life1 = createSprite(20,50,50,50);
  life1.addImage(life1);
  life1.scale = 0.2;
  life2 = createSprite(80,50,50,50);
  life2.addImage(life1);
  life2.scale = 0.2;
police1 = createSprite(30,30,50,50);
police1.addAnimation(policemain);



  devil1Group = new Group();
  devil2Group = new Group();
 
  


 
}

function draw() {
  background(0);
  if(gameState === "start"){
    form.display();
  }
  if(gameState === "how"){
    form.displayhowtoplay();
  }
  if(gameState === "mission"){
    form.displaymission();
  }

  if(gameState === "end"){
    background(endbgImg);
    textSize(30)
    fill("white")
    text("GAME OVER", width / 2 - 50, height / 2);
    text("Better luck next time "+ playerName,width/2-100,height/2+50);
    

    venon1 = createSprite(70,60,50,50);
    venon1.addAnimation("venon1img");
    drawSprites();
  }
  if(gameState === "play"){
    form.displayPlayScreen();
    //move the player
if(keyWentDown(RIGHT_ARROW)){
  police1.x = police1.x +3
}
    if (keyWentUp(RIGHT_ARROW)) {
      police1.addImage(police1img);

    }
    

    //call functions for spawning devils
    spawndevil1();
    spawndevil2()

      //give condition to loose life
    if(devil1Group.isTouching(police1)){
      life = life -1
    }
    if(devil2Group.isTouching(police1)){
      life = life -1
    }
   
    
    //change image of life to dead
    if(life =1){
      life1.addImage(dead);
    }
    if(life =0){
      life2.addImage(dead);
    }

    //display player name
    drawSprites();
    textSize(28)
    fill("Orange")
    text(playerName , width-500, 40);
  }
  



  
}

function spawndevil1(){
  if (frameCount % 180 === 0) {
    devil1 = createSprite(width, random(30, height), 20, 20);
    devil1.addImage(devil1img);
    devil1.scale = 0.2;
    devil1.velocityX = -(6+(getFarmaeRate()/60));
    devil1.lifetime= width/devil.velocityX;
    devil1Group.add(devil1)

    
}
  
} 
function spawndevil2(){
  if (frameCount % 250 === 0) {
    devil2 = createSprite(width, random(30, height), 20, 20);
    devil2.addImage(devil2img);
    devil2.scale = 0.2;
    devil2.velocityX = -(6+(getFarmaeRate()/60));
    devil2.lifetime= width/devil.velocityX;
    devil2Group.add(devil2)
}
}