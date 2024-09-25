function setup() {
  createCanvas(400, 400);
  sy = height;
  cx = width / 2;
  cy = height / 2;
  cd = 50;
}

let sx = -10;
let sy;
let fire = false;
let cx, cy, cd;

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

  fill(0, 255, 0);


  if(dist(sx, sy, cx, cy) < cd) {
    fill(255, 0, 0)
    fire = false;
  }

  circle(cx, cy, cd)

}

function keyPressed() {
  if(key == " ") {
    fire = true;
    sx = mouseX;
  }
}


