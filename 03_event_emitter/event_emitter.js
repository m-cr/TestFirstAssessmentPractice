var MyEventEmitter = function(){
	this.events = {};
}

MyEventEmitter.prototype.emit = function(event, name){
	var arr = [name];
	for (var i = 0; i < this.events[event].length; i++) {
		this.events[event][i].apply(null,arr);
	}
};

MyEventEmitter.prototype.addListener = function(event, callback){
	if(!Array.isArray(this.events[event])){
		this.events[event] = [];
	}
	this.events[event].push(callback);
};