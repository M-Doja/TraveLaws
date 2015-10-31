var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var User = mongoose.model('User');
var Blog = mongoose.model('Blog');
var jwt = require('express-jwt');
var passport = require('passport');

// this how server knows if user is legit or not
var auth = jwt({
  secret: 'RvAmErIcA',
  userProperty: 'payload'
});

console.log('user router');


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


// show profile page
router.get('/:id', function(req, res, next) {
  Profile
  .findOne({_id: req.params.id}, function(err, result)  {
    if(err) return next(err);
    res.send(result);
  });
});

    // add new profile
  console.log('testing the router');
router.post('/', auth,function(req, res, next) {
  console.log('in the router');
  var pro = new Profile(req.body);
  pro.save(function(err, result) {
    if(err) return next(err);
    res.send(result);
  });
});



console.log('here on router');
router.get('/:id', function(req,res,next){
  console.log("made it to route file");
  Profile
  .findOne({_id: req.params.id},
    function(err,result){
      if(err) return next(err);
      console.log(result);
      res.send(result);
    });
});






module.exports = router;
