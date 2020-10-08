class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle
    //push captures the new settings
    push();
    //translate changes 0 of the axes to given x and y position=remaps the position on the canvas
    // since we are writting pos.x and pos.y in translate make the x and y potions in rect(0,0)
    translate(pos.x,pos.y)
    //rotate the body with an angle
    rotate (angle)
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    //pop reverts to the old settings
    pop();
  }
};
