/**
 * Created by liu.xing on 14-2-20.
 */
var mongoose = require('mongoose');
var dbConfig = require('./config/dbConfig.json');
mongoose.connect(dbConfig.url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("mongodb is ready!");
});