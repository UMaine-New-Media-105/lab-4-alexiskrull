function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  myTri(100, 100, 150, 100, 150, 150, 60, 100, 50, 1);
  myEllipse(200, 200, 100, 50, 210, 100, 50, 1);
  myLine(200, 300, 275, 240, 320, 100, 50, 1);
}

function myTri(x1, y1, x2, y2, x3, y3, hue, sat, light, alpha) {
  fill("hsla(" + hue + "," + sat + "%," + light + "%," + alpha + ")");
  triangle(x1, y1, x2, y2, x3, y3);
}

function myEllipse(x, y, size1, size2, hue, sat, light, alpha) {
  fill("hsla(" + hue + "," + sat + "%," + light + "%," + alpha + ")");
  ellipse(x, y, size1, size2);
}

function myLine(x1, y1, x2, y2, hue, sat, light, alpha) {
  push();
  strokeWeight(4);
  stroke("hsla(" + hue + "," + sat + "%," + light + "%," + alpha + ")");
  line(x1, y1, x2, y2);
  pop();
}
