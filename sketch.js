var ball 
function setup() {
  createCanvas(400,400);
  ball = createSprite(150, 90, 80, 50);
}

function draw() 
{
  background(30);
  if (keyDown(RIGHT_ARROW)){
ball.position.x = ball.position.x + 5}

if (keyDown(LEFT_ARROW)){
  ball.position.x = ball.position.x - 5
}
  
drawSprites()
}




