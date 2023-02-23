const repeatString = function(string, times) {
    if(times<0)
        return "ERROR";
    let finalString = "";
    while(times--){
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
