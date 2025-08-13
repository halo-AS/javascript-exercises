const reverseString = function(str) {
    let arrayStr = Array.from(str);
    let backwardsStr = "";
    for(let i = (arrayStr.length - 1); i > -1; i--){
        backwardsStr += arrayStr[i];
    }
    return backwardsStr;
};

console.log(reverseString("Hello World"))

// Do not edit below this line
module.exports = reverseString;
