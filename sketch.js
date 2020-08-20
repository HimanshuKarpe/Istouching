var movingRect, rectangle1;
var gameObject1, gameObject2;

function setup() {
  createCanvas(800,800);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor="blue";
  movingRect.debug=true;
  rectangle1 = createSprite(200,300,40,50);
  rectangle1.shapeColor="blue";
  rectangle1.debug=true;
  gameObject1=createSprite(300,250,30,45);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(350,150,25,55);
  gameObject2.shapeColor="green";
}

function draw() {
  background(0,255,255);
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor="red";
    gameObject1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    gameObject1.shapeColor="green";
  }

  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x < object1.width/2 + object2.width/2 &&
    object2.x-object1.x < object1.width/2 + object2.width/2 &&
    object1.y-object2.y < object1.height/2 + object2.height/2 &&
    object2.y-object1.y < object1.height/2 + object2.height/2){
      return true;
    }
    else{
      return false;
    }
}