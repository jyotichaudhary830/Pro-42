var bgImg;
var iss, issImg;
var spacecraft;
var craft1Img, craft2Img, craft3Img, craft4Img;

function preload() {
  bgImg = loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
  craft1Img = loadImage("spacecraft1.png");
  craft2Img = loadImage("spacecraft2.png");
  craft3Img = loadImage("spacecraft3.png");
  craft4Img = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(1515,725);
  //create the iss
  iss = createSprite(700, 300, 50, 50);
  iss.addImage(issImg);
  iss.scale = 1.3;

  //create the spacecraft
  spacecraft = createSprite(600, 600, 60, 60);
  spacecraft.addImage(craft1Img);
  spacecraft.scale = 0.4;
}

function draw() {
  background(bgImg); 
  
  if(keyDown(LEFT_ARROW)) {
    spacecraft.addImage(craft3Img);
    spacecraft.x = spacecraft.x-3;
  }

  if(keyDown(RIGHT_ARROW)) {
    spacecraft.addImage(craft4Img);
    spacecraft.x = spacecraft.x+3;
  }

  if(keyDown(DOWN_ARROW)) {
    spacecraft.addImage(craft2Img);
    spacecraft.y = spacecraft.y+3;
  }

  if(keyDown(UP_ARROW)) {
    spacecraft.addImage(craft2Img);
    spacecraft.y = spacecraft.y-3;
  }

  if(spacecraft.isTouching(iss)) {
    text(20);
    fill("white");
    text("Docking Successful!!", 700, 700);
  }

  iss.display();
  spacecraft.display();
  //drawSprites();
  
}