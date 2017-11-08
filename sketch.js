var endpt
//var w = 800
//var h = 800
var lower_bnd = 0.5
var upper_bnd = 1.5
function setup() {
    var w = windowHeight-120
    var h = windowHeight-120
    createCanvas( w, h);
    background(0);
    stroke(255);
    
    noFill()
    ellipseMode(RADIUS);
    angleMode(DEGREES);
    
    
    var gap = 10* Math.ceil(random(5))
    var radius = 10* Math.ceil(random(gap/10,10))
    strokeWeight(gap/10)
    var circumf
    var num_gaps
    console.log(radius)
    for (iter = (radius/gap)-1; iter <= (w/2)/ gap -2; iter= iter+1){
//    for (iter = 0; iter < (w/2)/ gap -2; iter= iter+1){
        num_gaps = Math.floor(2.3 * Math.pow( ( 1+ (1/iter)) , iter ))
        console.log("iter no. "+iter)
        
        circumf = 2 * PI * radius
        var stpt = Math.floor (random (360))
        
        orig_stpt = stpt
        gap_ang = ( gap / circumf) * 360
        
        for ( i = 0 ; i < num_gaps ; i++ ){
            var stpt2 = Math.floor (random (360))
            push()
                translate(w/2, h/2)
                stpt2= stpt2 + random (lower_bnd , upper_bnd) * (360/num_gaps)
                rotate (stpt2)
                if (iter < (w/2)/ gap -3){
                line(radius,0,radius + gap,0);}
            pop()
        }

        for ( i = 0 ; i < num_gaps ; i++ ){
//            var stpt2 = Math.floor (random (360))
//            push()
//                translate(w/2, h/2)
//                stpt2= stpt2 + random (lower_bnd , upper_bnd) * (360/num_gaps)
//                rotate (stpt2)
//                if (iter < (w/2)/ gap -3){
//                line(radius,0,radius + gap,0);}
//            pop()
            
            endpt = stpt + random( gap_ang, random( lower_bnd, upper_bnd) * (360 / num_gaps) );
            temp = endpt - Math.floor (endpt/360);
            if (360-temp <  lower_bnd * (360-( num_gaps * gap_ang)) / num_gaps ){
                    endpt = orig_stpt - gap_ang;
                    push()
                        translate (w/2, h/2);
                        arc (0, 0, radius, radius, stpt, endpt ) 
                    pop()                
                    break;
            }
            if (i == num_gaps-1){
                    endpt = orig_stpt - gap_ang;
                    push()
                        translate (w/2, h/2);
                        arc (0, 0, radius, radius, stpt, endpt ) 
                    pop()                
                    break;
            }

            push()
                translate (w/2, h/2);
                arc (0, 0, radius, radius, stpt, endpt ) 
            pop()

            stpt = endpt + gap_ang
        }
    radius = radius + gap
    }
}

function draw() {
    
}

