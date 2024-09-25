function setup() {
  createCanvas(400, 400);
  sy = height;
}

let sx = -10;
let sy;
let fire = false;

function draw() {
  background(220);

  if(fire) {
    square(sx, sy, 5)
    sy = sy - 10;
    print("FIRE!")
  }

  if(sy < 0) {
    fire = false;
    sy = height;
  }

}

function keyPressed() {
  if(key == " ") {
    fire = true;
    sx = mouseX;
  }
}


