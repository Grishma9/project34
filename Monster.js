class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("monster1.png");
		this.image1=loadImage("monster2.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
		if(this.body.position.x>3000 && this.body.position.y>700){
			textSize(32);
			text("you won" , 100, 50);
		  }
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			imageMode(CENTER);
			image(this.image1, 0,0,this.r, this.r)
			pop()
			
	}
}
