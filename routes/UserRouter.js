var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var User = mongoose.model('User');
var jwt = require('express-jwt');
// this how server knows if user is legit or not
var auth = jwt({
  secret: 'RvAmErIcA',
  userProperty: 'payload'
});

        // reference poll app







module.exports = router;