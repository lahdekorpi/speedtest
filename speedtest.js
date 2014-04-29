var SpeedTest = function(){}; SpeedTest.prototype = {
	file:		'speedtest/dummy-512kb.png',
	getname:	'?time=',
	params:		'&nocache=1',
	size:		524288,
	time:		{
					start: 0,
					end: 0,
					run: 0
				},
	
	test: function(extend) {
		if(extend && extend.onStart) {
			extend.onStart();
		}
		
		var url = this.file + this.getname + (new Date()).getTime() + this.params;
		this.time.start = (new Date()).getTime();
		
		var test = this;
		var image = new Image();
		
		image.onload = function() {
			test.time.end = (new Date()).getTime();
			test.time.run = test.time.end - test.time.start;
			
			if(extend && extend.onEnd) {
				extend.onEnd(test.results());
			}
		}
		image.src = url;
	},
	
	results: function(extend) {
		if(!this.time.run) {
			return null;
		}
		
		return {
			time: this.time,
			mbps: (((this.size * 8 / 1024) / 1024) / (this.time.run / 1000))
		}
	}
}
