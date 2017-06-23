"use strict";
module.exports = function main(){
	'use strict'
function cacl(arr, callback) {
    var ret;
    for (var i=0; i<arr.length;i++) {
        ret = callback(arr[i], ret);
    }
    return ret;
}

Array.prototype.max = function () {
    return cacl(this, function (item, max) {
        if (!(max > item)) {
            return item;
        }
        else {
            return max;
        }
    });
};
Array.prototype.min = function () {
    return cacl(this, function (item, min) {
        if (!(min < item)) {
            return item;
        }
        else {
            return min;
        }
    });
};
Array.prototype.sum = function () {
    return cacl(this, function (item, sum) {
        if (typeof (sum) == 'undefined') {
            return item;
        }
        else {
            return sum += item;
        }
    }
	       );
};
Array.prototype.avg = function () {
    if (this.length == 0) {
        return 0;
    }
    return +~~(this.sum(this) / this.length*100)/100;
};

var theArray = [6, 9, 15, -2, 92, 11];
console.log( 
"o) 最小值 = "+theArray.min()+"<br>"+
"o) 最大值 = "+theArray.max()+"<br>"+
"o) 元素数量 = "theArray.length+"<br>"+
"o) 平均值 = "+theArray.avg()
);
};
