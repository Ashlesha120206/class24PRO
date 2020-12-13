class Ground {
    constructor(x, y, width, height) {
      var options = {
           isStactic: false,
          restitution:0.8,
          friction:0.3,
          density:1.0
      }
      this.body = body.rect(x, y, width, height, options);
      
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        strokeWeight(7);
        stroke("yellow");
        rect(0, 0, this.width, this.height);
        pop();
      }
    };
  