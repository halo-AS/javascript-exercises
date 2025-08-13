const removeFromArray = function(arry) {

    let args = [...arguments];
    args.shift();
    for(let i = 0; i < args.length; i++){
        for(let j = 0; j < arry.length; j++){
            if(arry[j] === args[i]){
                arry.splice(j, 1);
                j --;
            }
        }
    }
    return arry;

};

console.log(removeFromArray([1, 4, 8, 9, 9, "Hello", "Bye", 0], 9, "Bye", 4, 99));

// Do not edit below this line
module.exports = removeFromArray;
