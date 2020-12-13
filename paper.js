class Paper {
  constructor(x, y) {
    var options = {
         isStactic: false,
        restitution:0.8,
        friction:0.3,
        density:1.0
    }
    this.body = body.cicle(x, y, options);
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    fill("red");
    strokeWeight(7);
    stroke("yellow");
    pop();
  }
};
