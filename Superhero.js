class Superhero {
  constructor(x,y,width,height)
	{
		var options = { 
			isStatic:false,
			restitution:0,
			density: 1.2, 
			friction: 1
		}
		this.body = Bodies.rectangle(x,y,width,height,options);
		this.width = width;
		this.height = height;
		this.image = loadImage("superhero1.png")

	//	this.x=x;
	//	this.y=y;
	//	this.r=r;
	//	this.image=loadImage("superhero1.png");
	//	this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
		    var angle = this.body.angle;
		    var pos = this.body.position;	
		//	var heroPos=this.body.position;		
			push()
            translate(this.body.position.x, this.body.position.y);
		//	translate(heroPos.x, heroPos.y-100);
		//	rectMode(CENTER)
		//	fill(255,0,255)
			imageMode(CENTER);
			this.image(this.image, 0, 0,this.width, this.height);
		//	image(this.image, 0,0,this.r+150, this.r)
			pop()
			
	}
}
