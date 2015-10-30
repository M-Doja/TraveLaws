var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var User = mongoose.model('User');
var jwt = require('express-jwt');
var passport = require('passport');

// this how server knows if user is legit or not
var auth = jwt({
  secret: 'RvAmErIcA',
  userProperty: 'payload'
});

        // reference poll app
        router.post('/register', function(req, res, next) {
          console.log('hi there');
          var user = new User(req.body);
          user.setPassword(req.body.password);
          user.save(function(err, result) {
            if(err) return next(err);
            if(!result) return next("There was an issue registering that user.");
            res.send(result.createToken());
          });
        });

        router.post('/login', function(req, res, next) {
          passport.authenticate('local', function(err, user){
            if(err)return next(err);
            res.send(user.createToken());
          })(req, res, next);
        });






module.exports = router;
