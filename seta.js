class Seta {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.seta_image = loadImage("seta.png");
    }
    display() {
      if (keyIsDown(UP_ARROW) && this.angle<70  ) {
        this.angle += 1;
      }
  
      if (keyIsDown(DOWN_ARROW) && this.angle>-30 ) {
        this.angle -= 1;
      }

  
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      pop();
      noFill();
    }
  }
  