/**
 * Module to connect to the MongoDB Database
 */

const mongoose = require('mongoose');

const connectionURL = `mongodb://127.0.0.1:27017/ooc-backend`;

mongoose.connect(connectionURL);
