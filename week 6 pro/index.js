var points = 0;
var pointsReset = false; 

for(var i = 0; i < 26 && points < 290; i++){
    if(points == 14 && pointsReset === false){
        points = 25;
        pointsReset = true;
    } else if(i % 2 === 0){
        points = points + 1;
    } else {
        points = points + 0;
    }
    
    console.log("Turns: " + i + " Score: " + points)
}