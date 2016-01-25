var mongoose = require('mongoose');

var lastfm = new mongoose.Schema({
	songCount: { type: Number, default: 0 }
}, {timestamps: true } // Auto added by mongoose
);

module.exports = mongoose.model('lastfm', lastfm);
