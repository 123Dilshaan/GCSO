var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="pink";
  wall=createSprite(1500,200,60,200);
  wall.shapeColor=(80,80,80);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(0,0,0);  
  fill("red");
 noStroke();
 textSize(27);
 text("Red:Dangerous!!",600,150);
 fill("yellow");
 noStroke();
 textSize(27);
 text("Yellow:Average",600,200);
 fill("green");
 noStroke();
 textSize(27);
 text("Green:Safe:)",600,250);
  car.velocityX= speed;
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation= 0.5 * weight * speed* speed/22500;
    if (deformation>180){
      car.shapeColor= color(255,0,0);
    }
    if (deformation<180 && deformation>100){
      car.shapeColor= color(230,230,0);
    }
    if (deformation<100){
      car.shapeColor= color(0,255,0);
    }
  }
  drawSprites();
}