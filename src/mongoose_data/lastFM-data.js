var lastFMData = function() {
	this.data = {
			timeStamp : null,
			json : null
	}
	this.fill = function(resp) { 
		this.data.timeStamp = resp.timeStamp;
		this.data.json = resp.json;
	};
	this.getInformation = function() {
		return this.data;
	};
};

module.exports = lastFMData;