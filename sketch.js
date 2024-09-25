function setup() {
  createCanvas(400, 400);
  sy = height;
  cx = width / 2;
  cy = height / 2;
  cd = 50;
  cc = color(0, 255, 0);
  difficulty = 1;
  circleShot = false;
  fire = false;
  sx = -10;
}

function preload() {
  img = loadImage("https://picsum.photos/200")
}

let sx, sy;
let cx, cy, cd, cc;
let fire;
let difficulty;
let circleShot;
let img;

function draw() {
  background(220);
  image(img, 0, 0, width, height)

  if(fire) {
    fill(0);
    square(sx, sy, 5)
    sy = sy - 25;
    print("FIRE!")
  }

  if(sy < 0) {
    fire = false;
    sy = height;
  }

  if(dist(sx, sy, cx, cy) < cd) {
    cc = color(255, 0, 0);
    fire = false;
    circleShot = true;
    sx = -10;
    sy = -10;
  }

  fill(cc);
  circle(cx, cy, cd)

  cx = cx + difficulty;

  if(cx > width) {
    cx = -cd/2;
    cc = color(0, 255, 0);
  }

  if(circleShot) {
    difficulty+=1;
    circleShot = false; 
  }

  fill(0)
  textSize(25);
  text(difficulty, 10, 25)

}

function keyPressed() {
  if(key == " ") {
    fire = true;
    sx = mouseX;
  }
}


