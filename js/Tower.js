class Tower {
    constructor(x, y, width, height) {
      var options = {
//set the static body(challenge 2)
isStatic:true
      };
        //Load the image of the tower(challenge 5)
      this.image=loadimage("assets/tower.png")
      this.width = width;
      this.height = height;
      //write the instruction to create a rectangular tower body(challenge1)
      this.body=Bodies.rectangle(x,y,this.width,this.height,options);
      //add the option inside the rectangular body(challenge 2)
World.add(world,this.body);
      //Add this object to the World(challenge 2)
    }
display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    //change the rect as image(challenge 5)
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}