/*
  Classwork
*/
var ballX = 0
    speedX = 5
    fillX = (255,0,0, 70)
    ballY = 0
    speedY = 5
    fillY = (255,150,0, 70);




function setup(){
  createCanvas(windowWidth, windowHeight);
}



function draw(){
  background("white");

  noStroke();

  if (mouseIsPressed) {
    fill(255,150,0, 70);
  } else {
    fill(255,0,0, 70);
  }
  ellipse(ballX, height/2, 100,100);

  if (ballX >= windowWidth){
    speedX = -5;

    }

  if (ballX <= 1){
    speedX = 5;

    }
  ballX = ballX + speedY;

  if (mouseIsPressed) {
		fill(255,0,0, 70);
	} else {
		fill(255,150,0, 70);
	}
  ellipse(width/2, ballY, 100, 100);

  if (ballY >= windowHeight){
    speedY = -5;
  }

  if (ballY <= 1){
    speedY = 5;
  }

  ballY = ballY + speedY;



}
