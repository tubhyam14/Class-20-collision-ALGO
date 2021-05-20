var movRect, fixRect;

function setup() {
  createCanvas(1200,800);

  movRect= createSprite(400,200,80,30);
  movRect.shapeColor="green";
  movRect.debug=true;

  fixRect= createSprite(600,400,50,80)
  fixRect.shapeColor="green";
  fixRect.debug=true;

  
}

function draw() {
  background("black");  
   movRect.x= World.mouseX;
   movRect.y= World.mouseY;

 if(movRect.x-fixRect.x< fixRect.width/2+movRect.width/2 && 
  fixRect.x-movRect.x< fixRect.width/2+ movRect.width/2 &&
  movRect.y-fixRect.y< fixRect.height/2+movRect.height/2 && 
  fixRect.y-movRect.y< fixRect.height/2+ movRect.height/2){
  movRect.shapeColor="red";
  fixRect.shapeColor="red";

 }
 else{
  movRect.shapeColor="green";
  fixRect.shapeColor="green";

 }
  drawSprites();
}