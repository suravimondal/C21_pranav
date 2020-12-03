var fixedRect, movingRect, car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car= createSprite(300,200,50,40);
  car.shapeColor= "red";
car.velocityX= 5;

  wall=createSprite(500,200,30,300);
  wall.shapeColor= "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(IS_TOUCHING(movingRect, wall)){
    textSize(50);
    fill("white");
    text("TOUCHED!!!",400,400);
  }
  BOUNCE_OFF(car,wall);
  drawSprites();
}

