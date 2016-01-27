var mongoose = require('mongoose');

var goodreads = new mongoose.Schema({
	bookCount: { type: Number, default: 0 }
}, {timestamps: true } // Auto added by mongoose
);

module.exports = mongoose.model('goodreads', goodreads);
