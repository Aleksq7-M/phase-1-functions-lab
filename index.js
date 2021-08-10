function distanceFromHqInBlocks(loc){
    return Math.abs(loc-42);
}

function distanceFromHqInFeet(loc){
    return 264*Math.abs(loc-42);
}

function distanceTravelledInFeet(start,end){
    return 264*Math.abs(end-start);
}

function calculatesFarePrice(start,destination){
    const distance = 264*Math.abs(destination-start);
    switch (true){
        case distance<=400:
            return 0;
        case distance>400&&distance<=2000:
            return ((distance-400)*0.02);
        case distance>2000&&distance<=2500:
            return 25;
        case distance>2500:
            return 'cannot travel that far';
    }
}