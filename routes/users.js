var express = require('express');
var router = express.Router();
var mongoose= require('mongoose')
var userModel = require('../models/users')
var aidModel = require('../models/aids')
var bcrypt = require('bcrypt');
var uid2 = require('uid2');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); 

/*update informations utilisateur*/
router.post('/update', async function(req, res, next) { 

  var newUserInfo =  await userModel.updateOne (
                        {token : req.body.token},
                        {
                        firstName: req.body.firstnameFromFront,
                        lastName: req.body.lastnameFromFront,
                        email: req.body.emailFromFront,
                        phone: req.body.phoneFromFront,
                        company: req.body.companyFromFront,
                        siret: req.body.siretFromFront,
                        position: req.body.positionFromFront
                      }
                      );
res.json({result: true})
})




/* POST Lecture info perso user. */
router.post('/infouser', async function(req, res, next) {
  
  var user = await userModel.findOne({ token: req.body.token }).populate('userAids').exec();
  var tab=[]

  if (user != null) {
    const resUSer = {
        firstName: user.firstName,
        lastName:  user.lastName,
        email:  user.email,
        siret:  user.siret,
        company:  user.company,
        position:  user.position,
        phone:  user.phone,
        userAids:  user.userAids,  
    }
    for(var i=0;i<user.userAids.length;i++){
      tab.push(await aidModel.findOne({_id: user.userAids[i]}))
    }

    res.json({result: true, user: resUSer,userAids: tab});
  } else {
    res.json({result: false});
  }
});



// router.post('/add', function(req, res, next) {
//   var addUserInfo = new userModel ({
//     firstName: req.body.firstnameFromFront,
//     lastName: req.body.lastnameFromFront,
//     email: req.body.phoneFromFront,
//     phone: req.body.emailFromFront,
//     company: req.body.companyFromFront,
//     siret: req.body.siretFromFront,
//     position: req.body.positionFromFront
//   })

//   const async found = userModel.find(token);

//   var addUserInfo  = await addUserInfo.findByIdAndUpdate();

//   res.json({addUserInfo })

// })


/* POST sign up. */
router.post('/sign-up', async function(req, res, next) { 
  var user= JSON.parse(req.body.user)
  var error = [];
  var result = false;
  var match = await userModel.findOne({ email: user.email });
 
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
      company:"",
      position:"",
      siret:"",
      password: hash,
      token: uid2(32)
    });
    var user = await newUser.save();
    result = true
  } 
  res.json({result, token: user.token,firstName:user.firstName, error})
});


/* POST sign in. */
router.post('/sign-in', async function(req, res, next) {

  console.log('sign-in')
  
  var user = await userModel.findOne({email: req.body.email});
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


  if (result) {
    res.json({result, token: user.token,firstName: user.firstName});
  } else {
    res.json({result, error})
  } 
});

module.exports = router;
