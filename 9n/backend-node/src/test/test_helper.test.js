// test/test_helper.js
require("dotenv").config()
const mongoose = require('mongoose');
// tells mongoose to use ES6 implementation of promises
mongoose.Promise = global.Promise;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI);

mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ', error);
    });

    // runs before each test
    beforeEach((done) => {
        mongoose.connection.collections.users.drop(() => {
            done();
        });
});