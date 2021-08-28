
const config = require('./config.json');

const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];

module.exports = environmentConfig