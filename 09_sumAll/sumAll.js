const sumAll = function(startNum, endNum) {

    if(startNum > endNum){
        const TEMP = startNum;
        startNum = endNum;
        endNum = TEMP;
    }
    if((!Number.isInteger(startNum) || !Number.isInteger(endNum)) || (startNum < 0 || endNum < 0)){
        return "ERROR";
    }

    let sum = 0;

    while(startNum <= endNum){
        sum += startNum;
        startNum++;
    }

    return sum;

};

console.log(sumAll(2, 8));

// Do not edit below this line
module.exports = sumAll;
