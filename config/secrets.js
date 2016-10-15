module.exports = {

  db: process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME || 'mongodb://localhost:27017/personal-site',

  lastFmKey: process.env.LASTFM_API_KEY || '',

  goodreadsID: process.env.GOODREADS_ID || '',

  goodreadsKey: process.env.GOODREADS_API_KEY || '',

  githubUser: process.env.GITHUB_USER || 'schulzetenberg',

  githubToken: process.env.GITHUB_TOKEN || '',

  traktID: process.env.TRAKT_ID || '',

  traktSecret: process.env.TRAKT_SECRET || '',

  tmdbKey: process.env.TMDB_KEY || ''

};
