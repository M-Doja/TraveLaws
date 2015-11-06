var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Blog = mongoose.model('Blog');
var Profile = mongoose.model('Profile');
var User = mongoose.model('User');
var jwt = require('express-jwt');
// this how server knows if user is legit or not
var auth = jwt({
  secret: 'RvAmErIcA',
  userProperty: 'payload'
});


router.param('id', function(req, res, next, id){
  // console.log('blah blah');
  Blog.findOne({_id: req.params.id}, function(err, result){
    if(err) return next(err);
    if(!result) return next('Could not find story of id: ' + id);
    req.blog = result;
    next();
  });
});

        // reference poll app

        // ADD BLOG
router.post('/',  function(req, res, next) {
  console.log('hello world');
  // console.log(req.body);
  var blog = new Blog(req.body);
  blog.created = new Date();
  blog.deleted = null;
  blog.save(function(err, result) {
    if(err) return next(err);
    if(!result) return next("Could not create the object. Please check all fields.");
    res.send(result);
  });
});

      // GETS ALL BLOGS
router.get('/', function(req, res, next) {
  Blog.find({}, function(err, result) {
    if(err) return next(err);
    res.send(result);
  });
  // Profile
  //   .findOne({_id: req.params.id},'blogs',function(err,result){
  //     if(err) return next(err);
  //     if(!result) return next({err: "Couldnt find a user with that id"});
  //     // console.log(result);
  //   })
  //   .populate('createdBy', 'user')
  //   .exec(
  //     function(err,result){
  //       if(err) return next(err);
  //       console.log(result);
  //       res.send(result);
  //     });
});


      // GET SINGLE BLOG BY ID
// router.get('/:id', function(req, res, next) {
//   console.log("in the one blog route");
//   Blog.findOne({_id: req.params.id}, function(err, result) {
//     if(err) return next(err);
//     console.log(result);
//     res.send(result);
//   });
// });

      // EDIT BLOG
router.put('/', function(req, res, next) {
  Blog.update({_id: req.body.IDofBlogToEdit}, req.body.edittedBlog, function(err, result) {
    if(err) return next(err);
    if(!result) return next(err);
    res.send(result);
  });
});

    // REMOVE BLOG
router.delete('/:id', function(req, res, next){
  Blog.remove({_id: req.params.id}, function(err, result){
    if(err) return next(err);
    res.send();
  });
});

//  posting comment   //----------
router.post('/',  function(req, res, next){
console.log('right in post router');
var comment = {
body: req.body.body
// commenter: req.payload.username
};
req.blog.comments.push(comment);
req.blog.save(function(err, result){
if(err) return next(err);
if(!result) return next(err);
console.log('leaving router');
res.send(req.blog);
});
});



module.exports = router;
