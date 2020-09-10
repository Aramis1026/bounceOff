var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(200, 600, 80, 50);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
}


function draw() {
  background(0,0,0);
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  
  bounceOff(movingRect, fixedRect);
  
  drawSprites();
}












