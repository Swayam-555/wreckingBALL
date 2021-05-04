class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 500
        }
        
        this.pointB = pointB
        this.ro = Constraint.create(options);
        World.add(world, this.ro);
    }
    

    display(){
        
        if(this.ro.bodyA){
            var pointA = this.ro.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(8)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
           pop()
            
            
        }
    }
    
}