var rotX = 0;
var rotY = 0;
var rotZ = 0;

function setup() {
  var canvas = createCanvas(80, 80, WEBGL);
}

function draw() {
  background(255);
  
  rotX += 0.02;
  rotY += 0.01;
  rotZ += 0.002;
  
  push();
  
  
  
  fill(50, 130, 0);
  stroke(20, 100, 0);
  
  strokeWeight(1);
  
  translate(0, 0, 10);
  
  rotateX(rotX);
  rotateY(rotY);
  rotateZ(rotZ);

  sphere(25, 26, 20);
  pop();
}