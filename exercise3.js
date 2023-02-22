function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawFishMan();
}

function drawMan(x, y, size, colorHat){
  push();
  translate(x, y);
  scale(size);
  //head
  fill("blanchedalmond")
  ellipse(20, 35, 30);
  //hat
  fill(colorHat);
  rect(10, 0, 20, 20);
  rect(0, 20, 40, 5);
  //hat band
  fill("gold");
  rect(10, 15, 20, 5);
  pop();
}

function drawFish(x, y, size, colorBody, colorFin){
  push();
  translate(x, y);
  scale(size);
  noStroke();
  //body
  fill(colorBody);
  ellipse(20, 15, 35, 15);
  triangle(42, 0, 42, 30, 30, 15);
  //fin
  fill(colorFin);
  triangle(18, 13, 18, 18, 28, 15);
  pop();
}

function drawFishMan(){
  if (mouseIsPressed){
    drawFish(mouseX, mouseY, 2, "blue", "turquoise");
  } else {
    drawMan(mouseX, mouseY, 2, "black");
  }
}
