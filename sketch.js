var moving, fixed, o1, o2

function setup() {
  createCanvas(800,400);
  fixed= createSprite(400, 200, 50, 50);
  moving = createSprite (200,400,50,50);
  o1= createSprite (400,250,20,20);
  o2= createSprite (0,250,20,20);
  o1.velocityX= -2;
  o2.velocityX= 2;



}

function draw() {
  background(0,0,0);  
  drawSprites();
  moving.x= World.mouseX
  moving.y= World.mouseY
  moving.shapeColor="Green"
  fixed.shapeColor="Red"
  moving.debug=true;
  fixed.debug=true; 
  isTouching()
  bounceOff()
}



function isTouching (){

if (fixed.x-moving.x<=fixed.width/2+moving.width/2 &&
  moving.x-fixed.x<=fixed.width/2+moving.width/2 &&
  moving.y-fixed.y<=fixed.height/2+moving.height/2 &&
  fixed.y-moving.y<= fixed.height/2+moving.height/2
  ){

  moving.shapeColor="Blue";
  fixed.shapeColor="Blue";

} else {
  moving.shapeColor="Green"
  fixed.shapeColor="Red"

}



}

function bounceOff (){

  if (o1.x-o2.x<=o1.width/2+o2.width/2 &&
    o2.x-o1.x<=o1.width/2+o2.width/2){

    o1.velocityX= o1.velocityX*-1
    o2.velocityX= o2.velocityX*-1

  }

  if (o1.y-o2.y<=o1.height/2+o2.height/2 &&
    o2.y-o1.y<=o1.height/2+o2.height/2){

    o1.velocityY= o1.velocityY*-1
    o2.velocityY= o2.velocityY*-1

  }


}