// // setup() function ek baar run hota hai jab sketch start hota hai
// function setup() {
//     // Canvas (drawing area) create karna jiska size 400px by 400px hai
//     createCanvas(400, 400);
//   }
  
//   // draw() function har frame par baar-baar run hota hai (default: 60 frames per second)
//   function draw() {
//     // Background ka color set karna (220 ek light gray shade hai)
//     background(220);
  
//     // Mouse ke current position (mouseX, mouseY) par ek circle draw karna
//     // ellipse(centerX, centerY, width, height)
//     ellipse(mouseX, mouseY, 50, 50); // Circle ka width aur height 50px hai
//   }
  

let walker;

function setup() {
  createCanvas(640, 240);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.x = width / 2; // Starting position (center)
    this.y = height / 2;
  }

  show() {
    stroke(0);
    point(this.x, this.y); // Draw object
  }

  step() {
    // Random movement with equal probability
    let choice = floor(random(4));
    if (choice === 0) this.x++; // Right
    else if (choice === 1) this.x--; // Left
    else if (choice === 2) this.y++; // Down
    else this.y--; // Up
  }
}
