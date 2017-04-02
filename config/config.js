'use strict';

var config = {};

config.environment = process.env.NODE_ENV || 'development';

// Populate the DB with sample data
config.seedDB = false;

// Server settings
config.server = {
    host: process.env.IP || 'localhost',
    port: process.env.PORT || 3000
};

// MongoDB settings
config.mongodb = {
    dbURI: "mongodb://<login>:<password>@ds147979.mlab.com:47979/<collection>"
};

// Export configuration object
module.exports = config;
