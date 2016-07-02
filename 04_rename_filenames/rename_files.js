Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

var renameFiles = function(arr){
	var numArr = [];
	var mappedArr = arr.map(function(elem){
		for (var i = arr.indexOf(elem)+1; i < arr.length; i++) {  //check down stream 
			if (elem.match(/\w+/)[0] === arr[i].match(/\w+/)[0]){  //for matches
				if(/\(/.test(elem)){ //if match, and number, push to numberarray
					numArr.push(Number(elem.match(/\d/)[0]));
					return elem;
				}
				else{ //if it doesn't have a number
					if(!numArr.some(function(elem){
						if(elem === 0){
							return true;
						}})){
						numArr.push(0);
						return elem;
					} else { //if a zero, find min, check if min+1 in numArr, if not, add num+1
						var min = numArr.min();
						for(i = 1; i < 15; i ++){
							if(!numArr.some(function(elem){ //if num + 1 is NOT in num array
								if(elem === min + i){
									return true;
								}})){
								elem += '(' + (min + i) + ')'; //add to elem
								numArr.push(min+i); //push to array 
								return elem; //return elem
							}
						}
					}
				}
			}
		}
		return elem;
	});
	// console.log(numArr);
	return mappedArr;
}//find duplicate
	//check for number
	//add minimum number that's no used