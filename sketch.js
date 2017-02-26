var mic;

function setup() {
  createCanvas(windowWidth,windowHeight);
  


  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0,0,0);

  //volume (between 0 and 1.0)
  var vol = mic.getLevel();
  fill(127);
  stroke(0);

  
  var h = map(vol, 0, 1, height, 0);
    noFill();
    stroke(66, 244, 191);
    strokeWeight(4);
    rect(width/2+5, h/2+80, 50, 50);
    rect(width/3+ 100, h/2, 100,100);
    rect(width/3-60,h/3-30, 200,200);
   
}