var R1, R2;
function setup(){
    createCanvas(1200,600);
    R1=createSprite(200,200,80,50);
    R2=createSprite(400,200,50,80);
    R1.shapeColor="green";
    R2.shapeColor="green";

}
function draw(){
    background("white");
    R2.x=mouseX;
    R2.y=mouseY;
  if(isTouching(R1,R2)){
    R1.shapeColor="red";
    R2.shapeColor="red";     
  } 
 else{
    R1.shapeColor="green";
    R2.shapeColor="green";
 }
    drawSprites();
}