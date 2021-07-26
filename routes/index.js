var express = require('express');
var router = express.Router();


// Models de toutes les collections :
var aidModel = require('../models/aids');
var typeModel = require('../models/types');
var levelModel = require('../models/levels');
var projectModel = require('../models/projects');
var domainModel = require('../models/domains');
var funderModel = require('../models/funders');
var thirdPartyModel = require('../models/thirdparties');
var territoryModel = require('../models/territories');
var profileModel = require('../models/profiles');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Edia BackEnd' });
});


// GET info globale pour une aide :
router.get('/aidsearch', async function(req, res, next) {

  let aid = {}
  let aidId=req.query.aidId;
  console.log ('\x1b[34m%s\x1b[0m','=============== > GET AidId =', aidId)

// populate sur l'ensemble des collections :
  aid =  await aidModel.findOne({aidId: aidId})
            .populate('aidProfiles')
            .populate('aidProjects')
            .populate('aidLevel')
            .populate('aidTypes')
            .populate('aidTerritories')
            .populate('aidThirdParties')
            .populate('aidFunders')
            .exec();


  if (aid) {
    res.json({result: true, aid: aid})
  } else {
    console.log ('\x1b[31m%s\x1b[0m','=============== > GET AidId Not Found =', aidId)
    res.json({result: false})
  }
})



// GET pour les Types :
router.get('/types', async function(req, res, next) {

  let types = []
  
  console.log ('\x1b[34m%s\x1b[0m','=============== > GET Types')

  types =  await typeModel.find()

  if (types) {
    res.json({result: true, types: types})
  } else {
    console.log ('\x1b[31m%s\x1b[0m','=============== > GET Types Not Found')
    res.json({result: false})
  }
})

// GET pour les Projets :
router.get('/projects', async function(req, res, next) {

  let projects = []
  
  console.log ('\x1b[34m%s\x1b[0m','=============== > GET Projects')
 
  projects =  await projectModel.find()

  if (projects) {
    res.json({result: true, projects: projects})
  } else {
    console.log ('\x1b[31m%s\x1b[0m','=============== > GET Project Not Found')
    res.json({result: false})
  }
})




module.exports = router;
