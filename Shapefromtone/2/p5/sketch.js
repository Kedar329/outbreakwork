let mic;
let v;
let f;
let vhis = [];
let spec;
function setup() {
  angleMode(DEGREES);
  let c = createCanvas(1000,600,WEBGL)
  c.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
}

function draw() {
  background(0);
  v = mic.getLevel();
  vhis.push(v);
  //spec = fft.analyze();
  // for (let j = 0; j < spec.length; j++) {
  // noFill();
  // let col = -height + map(spec[j],0,spec.length,0,255);
  // stroke(col);
  stroke(255);
  noFill();
  beginShape();
  for(i = 0; i < 360; i++) {

      r = map(vhis[i],0,1,20,250);
      x = r * sin(i);
      y = r * cos(i);
      vertex(x,y);
  }
 endShape();
 if(vhis.length > 360){
   vhis.splice(0,1);
 }
//}
}
