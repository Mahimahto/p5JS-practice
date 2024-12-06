// setup() function ek baar run hota hai jab sketch start hota hai
function setup() {
    // Canvas (drawing area) create karna jiska size 400px by 400px hai
    createCanvas(400, 400);
  }
  
  // draw() function har frame par baar-baar run hota hai (default: 60 frames per second)
  function draw() {
    // Background ka color set karna (220 ek light gray shade hai)
    background(220);
  
    // Mouse ke current position (mouseX, mouseY) par ek circle draw karna
    // ellipse(centerX, centerY, width, height)
    ellipse(mouseX, mouseY, 50, 50); // Circle ka width aur height 50px hai
  }
  



