// check env.
const env = process.env.NODE_ENV || 'development';

// fetch env. config
const config = require('./config.json');
const envConfig = config[env];

// add env. config values to process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);

/* this only currently works for localhost, not connected with mongodb atlas yet*/