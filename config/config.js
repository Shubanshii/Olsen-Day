const env = process.env.NODE_ENV || 'development';

const config = require('./config.json');
let envConfig = config[env];

Object.keys(envConfig).forEach((key) => {
  process.env[key] = envConfig[key];
});
