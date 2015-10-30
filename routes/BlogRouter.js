var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Blog = mongoose.model('Blog');
var jwt = require('express-jwt');
// this how server knows if user is legit or not
var auth = jwt({
  secret: 'RvAmErIcA',
  userProperty: 'payload'
});

        // reference poll app
  router.post('/',  function(req, res, next) {
    console.log(req.body);
    var blog = new Blog(req.body);
    // blog.createdBy = req.payload._id;
    blog.created = new Date();
    blog.deleted = null;
    blog.save(function(err, result) {
      if(err) return next(err);
      if(!result) return next("Could not create the object. Please check all fields.");
      res.send(result);
    });
  });






module.exports = router;
