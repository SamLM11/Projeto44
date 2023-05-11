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
      if (keyIsDown(DOWN_ARROW) && this.angle<10  ) {
        this.angle += 1;
      }

      console.log(this.angle)
  
      if (keyIsDown(UP_ARROW) && this.angle>-50 ) {
        this.angle -= 1;
      }

  
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.seta_image, 0, 0, this.width, this.height);
      pop();
      noFill();
    }
  }
  