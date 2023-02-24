const sumAll = function(lowerLimit, upperLimit) {
    if(typeof(lowerLimit)!="number"||typeof(upperLimit)!="number"|| Math.min(lowerLimit,upperLimit)<0)
        return "ERROR";
    if(lowerLimit>upperLimit)
        [lowerLimit,upperLimit]=[upperLimit,lowerLimit];
    let sum =0;
    for(let num = lowerLimit;num<=upperLimit;num++)
        sum+=num;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
