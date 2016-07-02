var difference = function(arr1, arr2){
	return arr1.filter(function(value){
		var found = 0;
		for (var i = 0; i < arr2.length; i++) {
			if (value === arr2[i]){
				found ++;
			}
		}
		return found === 0;
	})
}

var symmetricDiff = function(arr1,arr2){
	var newArr = difference(arr1,arr2);
	var secondArr = difference(arr2,arr1);
	var thirdArr = newArr.concat(secondArr);
	return thirdArr;
}