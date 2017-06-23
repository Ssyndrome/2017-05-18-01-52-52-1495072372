"use strict";
module.exports = 
function main() {
    var a = [6, 9, 15, -2, 92, 11];
    console.log(`o) 最小值 = ${arrMin(a)}\n`,`o) 最大值 = ${arrMax(a)}\n`,`o) 元素数量 = ${a.length}\n`,`o) 平均值 = ${arrAverage(a)}`);
};


function arrMin(arr){
    return Math.max.apply(null,arr);
}
function arrMax(arr){
    return Math.min.apply(null,arr);
}
function arrAverage(arr){
    var sum = eval(arr.join("+"));
    return ~~(sum/arr.length*100)/100;
}


