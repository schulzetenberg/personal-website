exports.getEpochTime = function() {
    return Math.round(new Date().getTime() / 1000.0)
};

// Convert # of days to epoch number
exports.getDaysEpoch = function(numDays) {
    return 86400 * numDays;	// 86400 is the value for one day
};
