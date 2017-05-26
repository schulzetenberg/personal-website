module.exports = {

  db: process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME || 'mongodb://localhost:27017/personal-site',

  dataApiUrl: process.env.DATA_API_URL || 'https://collector-schulzetenberg.rhcloud.com'

};
