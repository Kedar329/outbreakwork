class particle {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.spd = p5.Vector.random2D();
    this.accel = createVector();
  }
  show(){
    stroke(100,75);
    noFill();
    ellipse(this.pos.x,this.pos.y,5);
    line(0,0,this.pos.x,this.pos.y);
    line(0,height,this.pos.x,this.pos.y);
    line(this.pos.x,this.pos.y,width,0);
    line(this.pos.x,this.pos.y,width,height);

  }
  move(){
    this.pos.add(this.spd);
    this.spd.add(this.accel);
  }

  flow(gp){
    var d = p5.Vector.sub(gp, this.pos);
    var sq = d.magSq();
    sq = constrain(sq,25,300);
    let G = 6;
    var force = G/sq;
    d.setMag(force);
    this.accel = d;
  }

  boundary(){
    if(this.pos.x < 0){
      this.pos.x = width;
      this.accel = 0;
    }
    if(this.pos.x > width){
      this.pos.x = 0;
      this.accel = 0;
    }
    if(this.pos.y < 0){
      this.pos.y = height;
     this.accel = 0;
    }
    if(this.pos.y > height){
      this.pos.y = 0;
      this.accel = 0;

    }
  }
}
