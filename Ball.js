class Ball{
    constructor(x,y,r,angle){
        var options={
            
            friction:1.0,
            density:0.04,
            restitution:1.5

        }
        this.body = Bodies.circle(x,y,50,options);
        this.r =50;
        World.add(world,this.body);
    } 
    display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.r);
        pop();
    }
    

    
}