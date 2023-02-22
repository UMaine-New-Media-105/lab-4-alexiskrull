function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  myTri(100, 100, 150, 100, 150, 150);
  myEllipse(200, 200, 100, 50);
  myRect(200, 300, 75, 40);
}

function myTri(x1, y1, x2, y2, x3, y3){
  triangle(x1, y1, x2, y2, x3, y3);
}

function myEllipse(x, y, size1, size2){
  ellipse(x, y, size1, size2);
}

function myRect(x, y, size1, size2){
  rect(x, y, size1, size2);
}
