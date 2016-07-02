var translate = function(str){
	var stringArr = str.split(' ');

	for (var i = 0; i < stringArr.length; i++) {
		if(stringArr[i][0] === 'q' && stringArr[i][1] === 'u'){
			stringArr[i] = stringArr[i].slice(2) + 'qu'; //check for qu
		} else {
			for (var j = 0; j < stringArr[i].length; j++) {
				if(stringArr[i][0] ==='a'|| 
					stringArr[i][0] ==='e'||
					stringArr[i][0] ==='i'||
					stringArr[i][0] ==='o'||
					stringArr[i][0] ==='u'){ /*console.log('vowel found')*/ }
				else {
					if(stringArr[i][0] === 'q' && stringArr[i][1] === 'u'){
						stringArr[i] = stringArr[i].slice(2) + 'qu';
					}
					else {stringArr[i] = stringArr[i].slice(1) + stringArr[i][0]}
				}
			} //end for j
		}
		stringArr[i] += 'ay'; //and ay to any word after changes
	} //end for i
	// console.log(stringArr.join(' '));
	return stringArr.join(' ');
}