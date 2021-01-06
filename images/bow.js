class Bow{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
       this.bowShot = Constraint.create(options);
        World.add(world, this.bowShot);
    }
    attach(body){
        this.bowShot.bodyA = body;
    }
    
    fly(){
        this.bowShot.bodyA = null;
    }

    display(){
       
        if(this.bowShot.bodyA){
            var pointA = this.bowShot.bodyA.position;
            var pointB = this.pointB;
            push();
            
            
            
           
                
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
                
            
           
            
            pop();
        }
    }
}   