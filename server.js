/**
 * Created by perjohannessen on 01/11/14.
 */

var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var configuration = require('./server/config/environment')[env];

require('./server/config/middleware')(app, configuration);
require('./server/config/mongoose')(configuration);
require('./server/config/routes')(app);

var User = mongoose.model('User');
passport.use(new LocalStrategy(
    function(userName, password, done) {
         console.log('username is: ' + userName);
         console.log('password is: ' + password);
        User.findOne({userName:userName}).exec(function(err, user) {
            console.log('user is: ' + user + ' ... but the error is: ' + err);
            if(user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
    }
));

passport.serializeUser(function(user, done) {
    if (user) {
        done(null, user.id);
    }
});

passport.deserializeUser(function(id, done) {
    User.findOne({_id:id}).exec(function(err, user) {
        if(user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    })
})
app.listen(configuration.port);

console.log("server running on port " + configuration.port);