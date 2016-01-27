module.exports = {

  db: process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME || 'mongodb://localhost:27017/personal-site',
  
  lastFmKey: process.env.LASTFM_API_KEY || '',
  
  goodreadsID: '',
  
  goodreadsKey: ''

};
