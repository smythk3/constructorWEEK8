var circles = [];
var numCircles = 15;
var circleSize = 20;
var speed;

function setup() {
  createCanvas(800, 800);

  // populate the array of objects
  for (var i = 0; i < numCircles; i++) {
    circles[i] = new Circle();
  }

}

function draw() {
  background(255);
  //access the populated array and do stuff with each one
  for (var i = 0; i < circles.length; i++) {
    circles[i].display();
    circles[i].move();
  }
}

function mousePressed() {
  circles.push(new Circle());

}
function keyPressed() {
  circles.splice(0,1);
}
//Here begins the CONSTRUCTOR
function Circle() {
  this.x = random(25, width - 25);
  this.y = random(25, height - 25);
  this.speed = random(5);
  this.colour = random(255);

  this.display = function() {
    fill(this.colour);
    ellipse(this.x, this.y, random(circleSize,100), random(circleSize,100));
  }

  this.move = function() {
    this.x = this.x + this.speed;

    if (this.x > (width - 25)) {
      this.speed = -this.speed;
    }

    if (this.x < 25) {
      this.speed = -this.speed;
    }
  }
}