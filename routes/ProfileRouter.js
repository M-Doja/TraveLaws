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

router.param('id', function(req,res,next,id){
  console.log(id);
Profile.findOne({_id:id}, function(err,result){
  if(err) return next(err);
  if(!result) return next({err: "Couldnt find a user with that id"});
  // console.log(result);
  req.profile = result;
  next();
  });
});

router.post('/:id/add_profile', auth,function(req,res,next){
var profile = new Profile(req.body);
profile.members.push(req.user.id);
// console.log(fam);
profile.save(function(err,result){
  // console.log(fam._id);
  // console.log(User);
  // console.log(req.body.familyName);
  profile.update({_id: req.user.id}, {$push: {family: fam}},
    function (err, result) {
  // if (err) res.status(500).send({err: "Error updating"});
  // if(!result) res.status(500).send({err: "Error updating"});
  // console.log(fam);
  res.send(result);
    });
  });
});





module.exports = router;
