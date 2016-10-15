var nodeSchedule = require('node-schedule');

var goodreads = require('./goodreads');
var github = require('./github');
var lastFM = require('./last-fm');
var trakt = require('./trakt');
var tmdb = require('./tmdb');

nodeSchedule.scheduleJob('20 0 0 */2 * *', tmdb.getConfig); // Run every 2 days
nodeSchedule.scheduleJob('15 0 0 * * *', trakt.save); // Run daily
nodeSchedule.scheduleJob('10 0 0 * * *', lastFM.save); // Run daily
nodeSchedule.scheduleJob('5 0 0 * * *', goodreads.save); // Run daily
nodeSchedule.scheduleJob('0 0 0 * * *', github.save); // Run daily

/*  // TESTING! \\

lastFM.save();
goodreads.save();
github.save();
trakt.save();

*/
