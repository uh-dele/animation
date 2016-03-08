/*
  Homework
*/

var cloudLarge = 100
    cloudMedium = 75
    cloudSmall = 50
    rainStart = windowHeight/2
    rainSpeed = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){

  if(mouseX > windowWidth/2){
    background(0, 102, 102);
    fill(255, 255, 102);
    strokeWeight(25);
    stroke(255, 153, 51, 50);
    ellipse(mouseX,windowHeight/2,50,50);
    //this is the lightning bolt
    fill(255, 255, 230);
    noStroke();
    triangle(80,0,200,0,80,300);
    triangle(90,250,220,280,80,300);
    triangle(220,280,160,280,130,460);
    triangle(130,460,140,420,290,440);
    triangle(290,440,240,440,180,550);

  }else{
    background(153, 255, 255);
    strokeWeight(40);
    stroke(255, 153, 51, 75);
    fill(255, 255, 102);
    ellipse(mouseX,windowHeight/2,100,100);

  }

//cloud2 baby
    noStroke();
    fill(224, 235, 235);
        ellipse(windowWidth/2+100,windowHeight/2+60,cloudSmall,cloudSmall);
        ellipse(windowWidth/2+125,windowHeight/2+60,cloudMedium,cloudMedium);
        ellipse(windowWidth/2+150,windowHeight/2+50,cloudSmall,cloudSmall);
        ellipse(windowWidth/2+175,windowHeight/2+40,cloudMedium,cloudMedium);
        ellipse(windowWidth/2+150,windowHeight/2+80,150,40);

        noStroke();
        fill(224, 235, 235);
            ellipse(windowWidth,windowHeight/2-125,cloudLarge+50,cloudLarge+50);
            ellipse(windowWidth-100,windowHeight/2-75,cloudLarge,cloudLarge);
            ellipse(windowWidth-150,windowHeight/2-125,cloudMedium,cloudMedium);
            ellipse(windowWidth-175,windowHeight/2-75,cloudMedium,cloudMedium);
            ellipse(windowWidth-50,windowHeight/2-50,400, 75);

//Cloud 1 (center)
    noStroke();
    fill(239, 239, 245);
      ellipse(windowWidth/2,windowHeight/2,cloudLarge,cloudLarge);
      ellipse(windowWidth/2+40,windowHeight/2+40,cloudMedium,cloudMedium);
      ellipse(windowWidth/2-50,windowHeight/2,cloudSmall,cloudSmall);
      ellipse(windowWidth/2-50,windowHeight/2+40,cloudMedium,cloudMedium);
      ellipse(windowWidth/2,windowHeight/2+60,250,50);

}
