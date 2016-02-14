var mongoose = require('mongoose');

var github = new mongoose.Schema({
	repos: { type: Number, default: 0 },
	contribSvg: { type: String },
}, {timestamps: true }
);

module.exports = mongoose.model('github', github);
