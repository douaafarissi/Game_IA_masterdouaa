let pursuer1, pursuer2;
let target;// Variable pour stocker la position de la souris
let evasionMode = false; // Variable pour suivre le mode d'évasion
let obstacles = [];
let vehicules = [];
let demo = "poursuite";

let imgVaisseau;
//Slider 
let distanceCercleWanderSlider, wanderRadiusSlider, displaceRangeSlider;


function preload() {
  console.log("preload")
  imgVaisseau = loadImage('assets/images/pc.png');
}

function setup() {
  console.log("setup")
  createCanvas(windowWidth, windowHeight);
  pursuer1 = new Vehicle(100, 100, imgVaisseau);
  pursuer2 = new Vehicle(random(width), random(height), imgVaisseau);

  vehicules.push(pursuer1);
  vehicules.push(pursuer2);

  // On cree un obstace au milieu de l'écran
   // un rectangle de largeur 100px et hauteur 50px
   obstacles.push(new Obstacle(width / 2, height / 2, 100, 50));
   //slider
    // Créer les curseurs pour le comportement wander
    distanceCercleWanderSlider = createSlider(0, 200, 100); // Valeurs minimale, maximale, et initiale
    distanceCercleWanderSlider.position(10, height + 70);

  wanderRadiusSlider = createSlider(0, 100, 50); // Valeurs minimale, maximale, et initiale
  wanderRadiusSlider.position(10, height + 100);

  displaceRangeSlider = createSlider(0, 1, 0.3, 0.01); // Valeurs minimale, maximale, initiale et pas
  displaceRangeSlider.position(10, height + 130);
   // Afficher les curseurs
   background(0);
   fill(255);
   text('Distance Cercle Wander', 10, 35);
   text('Wander Radius', 10, 65);
   text('Displace Range', 10, 95);
}

function draw() {
  // Définir l'opacité du fond pour créer un effet de traînée
  background(0, 0, 0, 100);

  // Créer un vecteur représentant la position de la souris
  let target = createVector(mouseX, mouseY);

  // Dessiner la cible qui suit la souris (un cercle rouge de rayon 32px)
  fill(255, 0, 0);
  noStroke();
  circle(target.x, target.y, 32);

  // Dessiner les obstacles
  obstacles.forEach(obstacle => {
    obstacle.show();
  });

  // Comportement du snake
  if (demo === "snake") {
    vehicules.forEach((vehicle, index) => {
      if (index === 0) {
        // Le premier véhicule suit la cible/souris
        vehicle.applyBehaviors(target, obstacles, vehicules, 0);
      } else {
        // Les véhicules suivants suivent le véhicule précédent avec un décalage
        let previousVehicle = vehicules[index - 1];
        vehicle.applyBehaviors(previousVehicle.pos, obstacles, vehicules, 40);
      }
      // Appliquer la mise à jour et le dessin au véhicule
      vehicle.update();
      vehicle.show();
    });
  } else if (demo === "poursuite") {
    // Comportement de poursuite
    vehicules.forEach((vehicle, index) => {
      if (index === 0) {
        // Le premier véhicule vise un point devant la cible
        vehicle.applyBehaviors(target, obstacles, vehicules, 0);
      } else {
        let leader = vehicules[0];
        let evasionZone = 100;

        if (target && dist(vehicle.pos.x, vehicle.pos.y, target.x, target.y) < evasionZone) {
          // Appliquer la force d'évasion à tous les véhicules, y compris le leader
          vehicules.forEach(v => {
            let evasionForce = v.evade(leader);
            evasionForce.mult(18);
            v.applyForce(evasionForce);
          });
        } else {
          // Placer les véhicules en cercle derrière le point vert
          let pointBehindLeader = leader.pos.copy().sub(leader.vel.copy().setMag(80));
          let angle = (index / (vehicules.length - 1)) * PI;
          let radius = 80;
          let xOffset = cos(angle) * radius;
          let yOffset = sin(angle) * radius;
          let previousVehicle = vehicules[index - 1];
          vehicle.applyBehaviors(previousVehicle.pos, obstacles, vehicules, 40);
          let separationForce = vehicle.separate(vehicules);
          separationForce.mult(0);
          vehicle.applyForce(separationForce);
          // Dessiner le point derrière le leader (en rose)
          fill("pink");
          noStroke();
          ellipse(pointBehindLeader.x, pointBehindLeader.y, 10);
        }
      }
      // Appliquer la mise à jour et le dessin au véhicule
      vehicle.update();
      vehicle.show();
    });
  } else if (demo === "wander") {
    // Mettre à jour les valeurs des curseurs
    let wanderDistance = distanceCercleWanderSlider.value();
    let wanderRadius = wanderRadiusSlider.value();
    let displaceRange = displaceRangeSlider.value();

    // Comportement d'errance pour chaque véhicule
    vehicules.forEach(vehicle => {
      vehicle.wander(wanderDistance, wanderRadius, displaceRange);
      vehicle.applyBehaviors(target, obstacles, vehicules, 0);
      // Appliquer la mise à jour et le dessin au véhicule
      vehicle.update();
      vehicle.show();
    });
  }
}


function mousePressed() {
  evasionMode = !evasionMode;
  obstacles.push(new Obstacle(mouseX, mouseY, random(30, 100), random(20, 80)));

}

function keyPressed() {
  if (key == "v") {
    vehicules.push(new Vehicle(random(width), random(height), imgVaisseau));
  }
  if (key == "d") {
    Vehicle.debug = !Vehicle.debug;
  }
  if (key == "k") {
    for (let i = 0; i < 20; i++) {
      let v = new Vehicle(random(10, 20), random(height/2 -10,height/2 +10 ), imgVaisseau)
      v.maxSpeed = 100;
      v.color = "pink";
      vehicules.push(v);
    }
  }
  if (key == "s"){
      demo = "snake";
  }
  if (key == "p"){
      demo = "poursuite";
  }
  if (key == 'w') {
    demo = "wander";
    let wanderVehicle = new Vehicle(random(width), random(height), imgVaisseau);
    vehicules.push(wanderVehicle);
  }
}