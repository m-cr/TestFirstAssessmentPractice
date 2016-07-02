var sometimes = function(func){
	var counter = 1;
	return function(){
		if(counter < 4){
			counter ++;
			return func.apply(null,arguments);
		} else if(counter%2 === 0){
			counter ++;
			return "I do not know!"
		} else{
			counter ++;
			return func.apply(null,arguments); 
		}
	}
}