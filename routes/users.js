var express = require('express');
var router = express.Router();
var mongoose= require('mongoose')
var userModel = require('../models/users')
var bcrypt = require('bcrypt');
var uid2 = require('uid2');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST sign up. */
router.post('/sign-up', async function(req, res, next) { 
  var user= JSON.parse(req.body.user)
  var error = [];
  var result = false;
  var match = await userModel.findOne({ email: user.email });
  console.log(user)
  
  if (match !== null){
    error.push('Email déjà associé à un compte');
  } else if (
    user.firstName == '' || 
    user.lastName == '' || 
    user.password == ''||
    user.email == ''|| 
    user.phone == ''){
    error.push('Champ manquant');
  } else {
    var hash = bcrypt.hashSync(user.password, 10);
    var newUser = new userModel({
      firstName: user.firstName,
      lastName:user.lastName,
      email: user.email,
      phone:user.phone,
      password: hash,
      token: uid2(32)
    });
    var user = await newUser.save();
    result = true
    console.log(result)
  } 
  res.json({result, token: user.token,firstName:user.firstName, error})
});


/* POST sign in. */
router.post('/sign-in', async function(req, res, next) {
  var user = await userModel.findOne({ email: req.body.email });
  var result = false;
  var error = [];
  if (req.body.email == '' || req.body.password == ''){
    error.push('Champ manquant')
  }
  else if(user ==null){
    error.push('Email introuvable')
  }  
  else if (bcrypt.compareSync(req.body.password, user.password)){
    result = true;
    user = user;
  } 
  else { 
    error.push('Mot de passe incorrect');
  };
  console.log(result)
  res.json({result, token: user.token,firstName: user.firstName, error});
});

module.exports = router;
