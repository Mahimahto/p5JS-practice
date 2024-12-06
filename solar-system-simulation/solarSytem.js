let sun, planets;
let stars = []; // Array to store star positions

function setup() {
  createCanvas(800, 600);
  
  // Sun ki position aur size
  sun = { x: width / 2, y: height / 2, size: 100 }; 
  
  planets = [
    { distance: 100, size: 20, speed: 0.02, angle: 0, color: "blue" },  // Mercury
    { distance: 150, size: 30, speed: 0.01, angle: 0, color: "green" }, // Venus
    { distance: 200, size: 40, speed: 0.007, angle: 0, color: "red" }   // Earth
  ];

  // Stars ko generate karna
  for (let i = 0; i < 300; i++) { // Add 300 stars in the background
    stars.push({ x: random(width), y: random(height), size: random(1, 3) });
  }
}

function draw() {
  background(0); // Black space
  
  // Stars ko draw karna (for background)
  noStroke();
  fill(255); // White color for stars
  for (let star of stars) {
    circle(star.x, star.y, star.size); // Star draw karein
  }

  // Sun draw karein
  fill("yellow");
  noStroke();
  circle(sun.x, sun.y, sun.size);

  // Draw orbits (just outlines)
  noFill(); // No fill for orbits
  stroke(255); // White color for orbit outlines
  strokeWeight(1);
  for (let planet of planets) {
    circle(sun.x, sun.y, planet.distance * 2); // Orbit outlines (double the distance for diameter)
  }

  // Planets ko draw aur rotate karein (just outlines)
  for (let planet of planets) {
    planet.angle += planet.speed; // Angle update karein
    let x = sun.x + cos(planet.angle) * planet.distance; // Circular motion
    let y = sun.y + sin(planet.angle) * planet.distance;
    
    fill(planet.color); // Planet color (solid fill)
    noStroke(); // No outline for planets
    circle(x, y, planet.size); // Planet draw karein
  }

  // Title likhein
  fill("white");
  textSize(30);
  textAlign(CENTER);
  text("Solar System Simulation", width / 2, 50);
}
