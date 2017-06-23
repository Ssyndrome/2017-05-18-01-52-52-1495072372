module.exports = function main(input){
	
	//最小值
	var min = input[0];
	for(var i = 1;i < input.length;i++){
		if(input[i]<min){
			min = input[i];
		}
	}
	console.log("o) 最小值 = "+min);
	
	//最大值
	var max = input[0];
	for(var m = 1;m < input.length;m++){
		if(input[m]>max){
			max = input[m];
		}
	}
	console.log("o) 最大值 = "+max);
	
	//元素数量
	console.log("o) 元素数量 =  "+input.length);
	
	//平均值
	var sum = 0;
	for(var m = 0;m < input.length;m++){
		sum += input[m];
	}
	console.log("o) 平均值 = "+~~(sum/input.length*100)/100);
	return;
};
