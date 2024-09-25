function setup() {
  createCanvas(400, 400);
  sy = height;
  cx = width / 2;
  cy = height / 2;
  cd = 50;
  cc = color(0, 255, 0);
}

let sx = -10;
let sy;
let fire = false;
let cx, cy, cd;
let cc;

function draw() {
  background(220);

  if(fire) {
    fill(0);
    square(sx, sy, 5)
    sy = sy - 10;
    print("FIRE!")
  }

  if(sy < 0) {
    fire = false;
    sy = height;
  }

  if(dist(sx, sy, cx, cy) < cd) {
    cc = color(255, 0, 0);
    fire = false;
  }

  fill(cc);
  circle(cx, cy, cd)

  cx+=10;

  if(cx > width) {
    cx = -cd/2;
    cc = color(0, 255, 0);
  }

}

function keyPressed() {
  if(key == " ") {
    fire = true;
    sx = mouseX;
  }
}


