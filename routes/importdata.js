var express = require('express');
var router = express.Router();

// Pour générer un nom unique sur le fichier uploadé :
var uniqid = require('uniqid');

// File Systeme et parseur CSV :
const csv = require('csv-parser')
const fs = require('fs')

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


// Chargement du fichier, lecture et mise en tableau des data :
const LoadFile =  async (fileName, destination) => {

  let dataTable = [];

  fs.createReadStream(fileName, {encoding: 'UTF-8'})
        .pipe(csv({ separator: ';' }))
        .on('data', (data) => dataTable.push(data))
        .on('end', () => {
          fs.unlinkSync(fileName);
          DispatchData(dataTable, destination) });
        }


// Reception des data et appel de la fonction en lien avec la destination indiquée :
const DispatchData = (data,destination) => {

  if (destination == 'aids') {
    ImportAids(data);
  } else if (destination == 'types') {
    ImportTypes(data);
  } else if (destination == 'projects') {
    ImportProjects(data);
  } else if (destination == 'levels') {
    ImportLevels(data);
  } else if (destination == 'domains') {
    ImportDomains(data);
  } else if (destination == 'counties') {
    ImportCounties(data);
  } else if (destination == 'territories') {
    ImportTerritories(data);
  } else if (destination == 'profiles') {
    ImportProfiles(data);
  } else if (destination == 'funders') {
    ImportFunders(data);
  } else if (destination == 'thirdparties') {
    ImportThirdParties(data);
  } else {
    console.log ('\x1b[31m%s\x1b[0m','=============== > ERREUR Destination incorrecte, non prise en charge = ', destination )
  }
}


// Import des ThirdParties : 
const ImportThirdParties = async (tb) => {

  // Init : 
  await thirdPartyModel.deleteMany();

  for (let i=0;i<tb.length;i++) {

    var newThirdParty = new thirdPartyModel(
      {
      thirdPartyId : tb[i].thirdPartyId,
      thirdPartyName : tb[i].thirdPartyName,
      thirdPartyDepartment: tb[i].thirdPartyDepartment,
      thirdPartyAdress: {
                    street: tb[i].street,
                    poBox: tb[i].poBox,
                    zipCode: tb[i].zipCode,
                    city: tb[i].city,
                    businessPostcode: tb[i].businessPostcode
                    },
      thirdPartyContact : {
                    phoneNumber: tb[i].phoneNumber,
                    faxNumber: tb[i].faxNumber,
                    emailAdress: tb[i].emailAdress
                    },
      thirdPartyWebsite: tb[i].thirdPartyWebsite              

                    })

    var objSave = await newThirdParty.save();
    }
  }


// Import des Funders : 
const ImportFunders = async (tb) => {

  // Init : 
  await funderModel.deleteMany();

  for (let i=0;i<tb.length;i++) {

    var newFunder = new funderModel(
      {
      funderId : tb[i].funderId,
      funderName : tb[i].funderName,
      funderDepartment: tb[i].funderDepartment,
      funderAdress: {
                    street: tb[i].street,
                    poBox: tb[i].poBox,
                    zipCode: tb[i].zipCode,
                    city: tb[i].city,
                    businessPostcode: tb[i].businessPostcode
                    },
      funderContact : {
                    phoneNumber: tb[i].phoneNumber,
                    faxNumber: tb[i].faxNumber,
                    emailAdress: tb[i].emailAdress
                    },
      funderWebsite: tb[i].funderWebsite              

                    })

    var objSave = await newFunder.save();
    }
  }
  


// Import des Profiles : 
const ImportProfiles = async (tb) => {

  // Init : 
  await profileModel.deleteMany();
  
  for (let i=0;i<tb.length;i++) {

    var newProfile = new profileModel(
      {
      profileId : tb[i].profileId,
      profileName : tb[i].profileName
      }
    )
    var objSave = await newProfile.save();
  }
} 

// Import des Counties (départements) : 
const ImportTerritories = async (tb) => {
  
  // Init : 
  await territoryModel.deleteMany();
  
  for (let i=0;i<tb.length;i++) {
    var newTerritory = new territoryModel(
      {
      territoryId : tb[i].territoryId,
      territoryName : tb[i].territoryName
      }
    )
    var objSave = await newTerritory.save();
  }
} 


// Import des Domains : 
const ImportDomains = async (tb) => {
  
  // Init : 
  await domainModel.deleteMany();
  
    for (let i=0;i<tb.length;i++) {
      var newDomain = new domainModel(
        {
        domainId : tb[i].domainId,
        domainName : tb[i].domainName
        }
      )
      var objSave = await newDomain.save();
    }
} 
// Import des Levels : 
const ImportLevels = async (tb) => {

  // Init : 
   await levelModel.deleteMany();
  
  for (let i=0;i<tb.length;i++) {
    var newLevel = new levelModel(
      {
      levelId : tb[i].levelId,
      levelName : tb[i].levelName
      }
    )
    var objSave = await newLevel.save();
  }
} 
// Import des Types 
const ImportTypes = async (tb) => {
  // Init : 
  await typeModel.deleteMany();

  for (let i=0;i<tb.length;i++) {
    var newType = new typeModel(
      {
      typeId : tb[i].typeId,
      typeName : tb[i].typeName
      }
    )
    var objSave = await newType.save();
  }
} 
// Import des Projects
const ImportProjects = async (tb) => {
  
// Init : 
  await projectModel.deleteMany();

  for (let i=0;i<tb.length;i++) {
    var newProject = new projectModel(
      {
      projectId : tb[i].projectId,
      projectName : tb[i].projectName,
      projectDomain : tb[i].projectDomain
      }
    )
    var objSave = await newProject.save();
  }
} 

// Import du détail des Aids :
const ImportAids = async (tb) => {


// Init : 
  await aidModel.deleteMany();

  let numberOfAids = 0;
  for (let i=0;i<tb.length;i++) {


    // on recherche pour chacune des valeurs en tableau les Id MongoDb pour transformer 
    // le tableau de valeur en tableau d'ObjectId :
    // Aids doit être importé en dernier !

    let thirdParties = await FindThirdParties(tb[i].aidThirdParties.split(','));
    let levels = await FindLevels(tb[i].aidLevel.split(','));
    let projects = await FindProjects(tb[i].aidProjects.split(','));
    let funders = await FindFunders(tb[i].aidFunders.split(','));
    let territories = await FindTerritories(tb[i].aidTerritories.split(','));
    let profiles = await FindProfiles(tb[i].aidProfiles.split(','));
    let types = await FindTypes(tb[i].aidTypes.split(','));
    
    var newAid = new aidModel({
      
        aidId: tb[i].aidId,
        aidName: tb[i].aidName,
        aidObject: tb[i].aidObject,
        aidOperation: tb[i].aidOperation,    
        aidCondition: tb[i].aidCondition,
        aidAmountDescription: tb[i].aidAmountDescription,
        aidAmount: 0,
        aidBeneficiary: tb[i].aidBeneficiary,
        aidValidationYear: tb[i].aidValidationYear,
        aidLevel: levels,
        aidActivitySector: tb[i].aidActivitySector,
        aidNumberOfWorker: tb[i].aidNumberOfWorker.split(','),
        aidProjectDuration: tb[i].aidProjectDuration, 
        aidCompanyAge: tb[i].aidCompanyAge.split(','),
        aidSource: tb[i].aidSource,
        aidForm: tb[i].aidForm,
        aidRule: tb[i].aidRule,
        aidProjects: projects,
        aidProfiles: profiles,
        aidTypes: types,
        aidTerritories: territories,
        aidThirdParties: thirdParties,
        aidFunders: funders

    })
    var objSave = await newAid.save();
    numberOfAids++;
  }
  console.log('\x1b[32m%s\x1b[0m','=============== > Fin Aids : ', numberOfAids)
} 
// Recherche des Id des thirdparties :
const FindThirdParties = async (tb) => {
  let thirdParties = [];
  for (let i=0; i<tb.length;i++) {
    const Id = tb[i].trim();
    await thirdPartyModel.findOne({thirdPartyId: Id})
      .then(p => {
            if (p != null) {
              thirdParties.push(p._id); 
            } else {
              console.log ('\x1b[31m%s\x1b[0m','=============== > FindThirdParties Id Not Found =', Id )
            }        
            })
  }
  return thirdParties;
}
// Recherche des Id des levels :
const FindLevels = async (tb) => {
  let levels = [];
  for (let i=0; i<tb.length;i++) {
    const levelName = tb[i].trim();
    await levelModel.findOne({levelName: levelName})
      .then(p => {
            if (p != null) {
              levels.push(p._id); 
            } else {
              console.log ('\x1b[31m%s\x1b[0m','=============== > FindLevels levelName Not Found =', levelName )
            }        
            })
  }
  return levels;
}
// Recherche des Id des projects :
const FindProjects = async (tb) => {
  let projects = [];
  for (let i=0; i<tb.length;i++) {
    const Id = tb[i].trim();
    await projectModel.findOne({projectId: Id})
      .then(p => {
            if (p != null) {
              projects.push(p._id); 
            } else {
              console.log ('\x1b[31m%s\x1b[0m','=============== > projectModel Id Not Found =', Id )
            }        
            })
  }
  return projects;
}
// Recherche des Id des funders :
const FindFunders = async (tb) => {
  let funders = [];
  for (let i=0; i<tb.length;i++) {
    const Id = tb[i].trim();
    await funderModel.findOne({funderId: Id})
      .then(p => {
            if (p != null) {
              funders.push(p._id); 
            } else {
              console.log ('\x1b[31m%s\x1b[0m','=============== > FindFunders Id Not Found =', Id )
            }        
            })
  }
  return funders;
}
// Recherche des Id des territoires :
const FindTerritories = async (tb) => {
  let territories = [];
  for (let i=0; i<tb.length;i++) {

    const Id = new String(tb[i]).trim();
    await territoryModel.findOne({territoryId: Id})
      .then(p => {
            if (p != null) {
              territories.push(p._id); 
            } else {
              // console.log ('\x1b[31m%s\x1b[0m','=============== > FindTerritories Id Not Found =', Id )
            }        
            })
  }
  return territories;
}
// Recherche des Id des profils :
const FindProfiles = async  (tb) => {
  let profiles = [];
  for (let i=0; i<tb.length;i++) {
    const Id = tb[i].trim();
    await profileModel.findOne({profileId: Id})
      .then(p => {
            if (p != null) {
              profiles.push(p._id); 
            } else {
             console.log ('\x1b[31m%s\x1b[0m','=============== > FindProfiles Id Not Found =', Id )
            }        
            })
  }
  return profiles;
}
// Recherche des Id des types :
const FindTypes = async  (tb) => {
  let types = [];
  for (let i=0; i<tb.length;i++) {
    const Id = tb[i].trim();
    await typeModel.findOne({typeId: Id})
      .then(p => {
            if (p != null) {
              types.push(p._id); 
            } else {
              console.log ('\x1b[31m%s\x1b[0m','=============== > FindTypes Id Not Found =', Id )
            }        
            })
  }
  return types;
}
 
// POST du fichier 
router.post('/loadfile', async function(req, res, next){

  const destination = req.body.destination;
  console.log ('\x1b[34m%s\x1b[0m','=============== > Destination : ', destination)
  console.log ('\x1b[34m%s\x1b[0m','=============== > File : ', req.files.datafile.name)
  let result = true;
  let message = 'OK';
  const fileName = './tmp/'+uniqid()+'.csv';
  let resultCopy = await req.files.datafile.mv(fileName);
  if(!resultCopy) {
    result = true
    LoadFile(fileName, destination);
  } else {
    result = false
  }
  res.json({
    result: result,
    message: message
  })
})


// GET info globale pour une aide :
router.get('/aidinfo', async function(req, res, next) {

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



// POST pour la mise a jour des ages et effectifs :
router.post('/updateaids', async function(req, res, next){

  const aids =  await aidModel.find();
  let nbOfAidsUpdated = 0;
  let changing = false;
  for (let i=0;i<aids.length;i++) {

    for (let j=0;j<aids[i].aidNumberOfWorker.length;j++) {
      aids[i].aidNumberOfWorker[j] = aids[i].aidNumberOfWorker[j].trim();
      changing = true;
    }
    for (let k=0;k<aids[i].aidCompanyAge.length;k++) {
      aids[i].aidCompanyAge[k] = aids[i].aidCompanyAge[k].trim();
      changing = true;
    }
    if (changing) { 
      const aid =  await aidModel.updateOne(
                              {aidId: aids[i].aidId}, 
                              {aidNumberOfWorker: aids[i].aidNumberOfWorker, aidCompanyAge: aids[i].aidCompanyAge} );

    
      changing = false;
      nbOfAidsUpdated++;
    }
  }



  res.json({nbOfAidsUpdated : nbOfAidsUpdated})
  
})

// POST pour mise a jour montant :
router.post('/updateamount', async function(req, res, next){
  let nbOfAidsUpdated = 0;
  const aids =  await aidModel.find();
  for (let i=0;i<aids.length;i++) {

    var amount = (Math.floor( Math.random() * 10 ) +1) * 1000;
    const aid =  await aidModel.updateOne(
                              {aidId: aids[i].aidId}, 
                              {aidAmount: amount} ); 
                                           
    nbOfAidsUpdated++;
    
  }
  res.json({nbOfAidsUpdated : nbOfAidsUpdated})
});




//Test Route :
router.post('/test', function(req, res, next) {

  const descriptionTest = req.body.description;
  res.json({result: true, message: 'Vous avez dit : '+ descriptionTest})
});






module.exports = router;
