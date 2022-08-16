// Code your solution in this file!
function distanceFromHqInBlocks(a){
 let distanceFromHq = Math.abs(a-42);

 return distanceFromHq;
}
distanceFromHqInBlocks(34)
function distanceFromHqInFeet(b){
    let feet = distanceFromHqInBlocks(b) 
    return feet * 264;
}
distanceFromHqInFeet(43);
function distanceTravelledInFeet(c, d){
  return Math.abs((c-d)*264)
}
function calculatesFarePrice(start, destination){
    let price;
    let proximity= Math.abs((destination-start)*264)
    if (proximity <= 400){
        price = 0
    }
    else if (proximity>400 && proximity<=2000){
        
        price = 0.02 * (proximity-400);
    }
    else if (proximity > 2000 && proximity <= 2500){
        price = 25 
    }
    else if (proximity > 2500){
        return 'cannot travel that far'
    }
    return price;
}