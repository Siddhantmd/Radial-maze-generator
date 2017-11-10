var endpt
//var w = 800
//var h = 800
var lower_bnd = 0.5
var upper_bnd = 1.5
var array;

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
    temp=(radius/gap)
    
    for (iter = temp; iter <= (w/2)/gap -1 ; iter= iter+2){
        array=[];

        for (set_=0; set_<2; set_++){
            array.push([])
            temp3 = Math.floor(2.3 * Math.pow( ( 1+ (1/iter)) , iter ))
            num_gaps =  Math.ceil (random (temp3))
            console.log(num_gaps)
            circumf = 2 * PI * radius
            var stpt = Math.floor (random (360/num_gaps))

            orig_stpt = stpt
            gap_ang = ( gap / circumf) * 360            
            console.log("org stpt "+orig_stpt)
            console.log("num gaps "+ num_gaps)
            console.log("gap ang "+ gap_ang)
            console.log("")
            
            
            for ( i = 0 ; i < num_gaps ; i++ ){

                endpt = stpt + random( gap_ang, random( lower_bnd, upper_bnd) * (360 / num_gaps) );
                
                if ((endpt + gap_ang + ( upper_bnd * 360/num_gaps))-360 >  orig_stpt || i == num_gaps-1){
                        endpt = orig_stpt - gap_ang+360;
                        push()
                            translate (w/2, h/2);
                            arc (0, 0, radius, radius, stpt, endpt ) 
                        pop()
                    diff= endpt-stpt
                    if (endpt > 360){
                        if(set_==1){
                            array[set_].push(stpt)
                            array[set_].push(endpt)
                        }
                        endpt= endpt - 360
                        stpt=endpt-diff
                    }
                    if (stpt > 360){
                        if(set_==1){
                            array[set_].push(stpt)
                            array[set_].push(endpt)
                        }
                        stpt= stpt-360
                        endpt=stpt+diff
                    }
                        array[set_].push(stpt)
                        array[set_].push(endpt)
                        break;
                }
                
//                if (i == num_gaps-1){
//                        if (endpt > orig_stpt + 360){
//                            endpt = (orig_stpt - gap_ang + 360)
//                        }
////                        else {endpt = (orig_stpt - gap_ang) + 360};
//                        push()
//                            translate (w/2, h/2);
//                            arc (0, 0, radius, radius, stpt, endpt ) 
//                        pop() 
//                        array[set_].push(stpt)
//                        array[set_].push(endpt)
//                        break;
//                }

                push()
                    translate (w/2, h/2);
                    arc (0, 0, radius, radius, stpt, endpt ) 
                pop()
                diff= endpt-stpt
                if (endpt > 360){
                    if(set_==1){
                            array[set_].push(stpt)
                            array[set_].push(endpt)
                        }
                        endpt= endpt - 360
                        stpt=endpt-diff
                    }
                    if (stpt > 360){
                        if(set_==1){
                            array[set_].push(stpt)
                            array[set_].push(endpt)
                        }
                        
                        stpt= stpt-360
                        endpt=stpt+diff
                    }
                
                array[set_].push(stpt)
                array[set_].push(endpt)
                stpt = endpt + gap_ang
            }
            
        radius = radius + gap
           
    }

         for (strokes = 0; strokes < array[0].length ; strokes+=2){
             
            
                temp2 = random( array [0] [strokes] , array [0] [strokes+1])
                for (check=0; check < 100; check++){
                    for (iu=0; iu <= array[0].length; iu+=2){
    //                console.log(temp2 > array[1][iu] && temp2 < array[1][iu+1] )
                                 console.log(temp2)

                        if (temp2 > array[1][iu] && temp2 < array[1][iu+1]) {
                            check = 112
                            push()
                                translate(w/2, h/2)
                                rotate (temp2) 
                                line(radius-2*gap,0,radius-gap,0);
                            pop()

                        }
                    }
                    temp2 = random( array [0] [strokes] , array [0] [strokes+1])
                 }
            
             
             

                
//                for ( check=0 ; check==0;){
//                    if (temp2 > array[1][iu] && temp2 < array[1][iu] ){
//                    push()
//                        translate(w/2, h/2)
//                        rotate (temp2) 
//                        line(radius-2*gap,0,radius-gap,0);
//                    pop()
//                    check=1
//                    } 
//                    else{temp2=temp2+1}
//                }

                
            
        }
            
    }
    

console.log(array[0])
console.log(array[1])    
}




function draw() {
    
}
