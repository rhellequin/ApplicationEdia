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

  let types = []
  
  console.log ('\x1b[34m%s\x1b[0m','=============== > GET Types')

  types =  await typeModel.find().sort({ typeName: 1 })

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
 
  projects =  await projectModel.find().sort({ projectName: 1 })

  if (projects) {
    res.json({result: true, projects: projects})
  } else {
    console.log ('\x1b[31m%s\x1b[0m','=============== > GET Project Not Found')
    res.json({result: false})
  }
})



// POST avec les paramètres pour la recherche :
router.post('/search', async function(req, res, next){

  //const parameters = req.body.parameters;
  

  let parameters = [
    {
      param : 'aidFunders',
      value : '60fc1b0fa82b6b286c08b2b2'
    },
    {
      param : 'aidThirdParties',
      value : '60fc204cb139a23b903dab4c'
    }
  ]


  



  console.log ('\x1b[34m%s\x1b[0m','=============== > Search Parameters : ', parameters)


  let filter = {};

  for (let i=0;i<parameters.length;i++) {

    if (parameters[i].value != null) {  

      filter[parameters[i].param] = parameters[i].value

  


    }

  }


console.log('filter :', filter);


// populate sur l'ensemble des collections :
  const aid =  await aidModel.find(filter);
          


  if (aid) {
  res.json({result: true, aid: aid})
  } else {
  console.log ('\x1b[31m%s\x1b[0m','=============== > POST Search Nothing Found')
  res.json({result: false})
  }

})


module.exports = router;
