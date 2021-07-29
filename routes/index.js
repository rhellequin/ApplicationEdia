var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

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
const { Mongoose } = require('mongoose');


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

  console.log ('\x1b[34m%s\x1b[0m','=============== > GET Types')

  const types =  await typeModel.find().sort({ typeName: 1 })

  if (types) {
    res.json({result: true, types: types})
  } else {
    console.log ('\x1b[31m%s\x1b[0m','=============== > GET Types Not Found')
    res.json({result: false})
  }
})

// GET pour les Projets :
router.get('/projects', async function(req, res, next) {

  console.log ('\x1b[34m%s\x1b[0m','=============== > GET Projects')
 
  const projects =  await projectModel.find().sort({ projectName: 1 })

  if (projects) {
    res.json({result: true, projects: projects})
  } else {
    console.log ('\x1b[31m%s\x1b[0m','=============== > GET Project Not Found')
    res.json({result: false})
  }
})


// GET pour les Projets :
router.get('/domains', async function(req, res, next) {

  console.log ('\x1b[34m%s\x1b[0m','=============== > GET Domains')
 
  const domains =  await domainModel.find().sort({ domainName: 1 })

  if (domains) {
    res.json({result: true, domains: domains})
  } else {
    console.log ('\x1b[31m%s\x1b[0m','=============== > GET Domains Not Found')
    res.json({result: false})
  }
});

// GET pour les Territoires :
router.get('/territories', async function(req, res, next) {

  console.log ('\x1b[34m%s\x1b[0m','=============== > GET Territories')
 
  const territories =  await territoryModel.find({
                                        "territoryId" : /[0-9]/,
                                        "$expr": { "$lt": [ { "$strLenCP": "$territoryId" }, 3 ] }
                                          }).sort({ territoryId: 1 })
  
  if (territories) {
    res.json({result: true, territories: territories})
  } else {
    console.log ('\x1b[31m%s\x1b[0m','=============== > GET Territories Not Found')
    res.json({result: false})
  }
})





// POST avec les paramètres pour la recherche :
router.post('/search', async function(req, res, next){

  const parameters = JSON.parse(req.body.parameters);
  
  let filter = {};
// construction du filter :
  for (let i=0;i<parameters.length;i++) {
    if (parameters[i].valeur != null) {  
      filter[parameters[i].critere] = parameters[i].valeur
    }
  }


  console.log('Filter :', filter);

//Find avec Populate sur les infos détails :
  const aids =  await aidModel.find(filter)
                              .populate('aidProfiles')
                              .populate('aidProjects')
                              .populate('aidLevel')
                              .populate('aidTypes')
                              .populate('aidTerritories')
                              .populate('aidThirdParties')
                              .populate('aidFunders')
                              .exec();
  if (aids) {
    console.log ('\x1b[34m%s\x1b[0m','=============== > POST Search Aids Found : ', aids.length )
  res.json({result: true, aids: aids})
  } else {
    console.log ('\x1b[31m%s\x1b[0m','=============== > POST Search Nothing Found')
  res.json({result: false})
  }
})


module.exports = router;
