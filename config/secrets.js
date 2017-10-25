module.exports = {

  db: process.env.MONGODB_URL || 'mongodb://localhost:27017/personal-site',

  dataApiUrl: process.env.DATA_API_URL || 'http://localhost:8998'

};
