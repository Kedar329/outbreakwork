let gp;
let p = [];
let b;
function setup() {
  createCanvas(1000,600);
  gp = createVector(width/2, height/2);
 //b = new particle(500,100);
  for(i = 0; i < 100;i++){
  p[i] = new particle(random(width),random(height));
}
}

function draw() {
  // put drawing code here
  background(0);
  stroke(255);
  noFill();
  ellipse(gp.x, gp.y,10);
  // b.flow(gp);
  // b.move();
  // b.show();
  // b.boundary();
  for(j = 0; j < p.length; j++){
    p[j].flow(gp);
    p[j].move();
   p[j].show();
   p[j].boundary();
   
}
}
