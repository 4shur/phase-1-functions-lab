// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks-42)
}
function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264
}
function distanceTravelledInFeet(start,destination){
    return Math.abs(start-destination)*264
}
function calculatesFarePrice(start,destination){
    if (distanceTravelledInFeet(start,destination)<400){
        return 0
    }
    if (distanceTravelledInFeet(start,destination)<=2000){
        return (distanceTravelledInFeet(start,destination)-400)*0.02
    }
    if (distanceTravelledInFeet(start,destination)>2500){
        return `cannot travel that far`
    }
    if (distanceTravelledInFeet(start,destination)>2000){
        return 25
    }
}