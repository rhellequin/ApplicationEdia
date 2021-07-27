var express = require('express');
var router = express.Router();
var mongoose= require('mongoose')
var userModel = require('../models/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST sign up. */
router.post('/sign-up', async function(req, res, next) { 
  var error = [];
  var result = false;
  var match = await userModel.findOne({ email: req.body.user.email });
  if (match !== null){
    error.push('Email déjà associé à un compte');
  } else if (
    req.body.user.firstName == '' || 
    req.body.user.lastName == '' || 
    req.body.user.password == ''|| 
    req.body.user.siret == ''|| 
    req.body.user.company == ''||
    req.body.user.position == ''||
    req.body.user.password == ''||
    req.body.user.phone == ''){
    error.push('Champ manquant');
  } else {
    var hash = bcrypt.hashSync(req.body.user.password, 10);
    var newUser = new userModel({
      firstName: req.body.user.firstName,
      lastName:req.body.user.lastName,
      email: req.body.user.email,
      siret:req.body.user.siret,
      phone:req.body.user.phone,
      position:req.body.user.position,
      company:req.body.user.company,
      password: hash,
      token: uid2(32)
    });
    var user = await newUser.save();
    result = true
  } 
  res.json({result, user, error})
});


module.exports = router;
