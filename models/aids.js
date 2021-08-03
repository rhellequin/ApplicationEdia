var mongoose = require('mongoose')

var aidSchema = mongoose.Schema({

  aidId: String,
  aidName: String,
  aidObject: String,
  aidOperation: String,     
  aidCondition: String,
  aidAmountDescription: String,
  aidAmount: Number,
  aidLogo: String,
  aidDiff: String,
  aidDelai: String,
  aidBeneficiary: String,
  aidValidationYear: String,
  aidLevel: {type:mongoose.Schema.Types.ObjectId, ref: 'levels'},
  aidActivitySector: Array,
  aidNumberOfWorker: Array,
  aidProjectDuration: String, 
  aidCompanyAge: Array,
  aidSource: String,
  aidForm: String,
  aidRule: String,
  aidProjects: [ {type:mongoose.Schema.Types.ObjectId, ref: 'projects'}],
  aidProfiles: [ {type:mongoose.Schema.Types.ObjectId, ref: 'profiles'}],
  aidTypes: [ {type:mongoose.Schema.Types.ObjectId, ref: 'types'}],
  aidTerritories: [ {type:mongoose.Schema.Types.ObjectId, ref: 'territories'}],
  aidThirdParties: [ {type:mongoose.Schema.Types.ObjectId, ref: 'thirdparties'}],
  aidFunders: [ {type:mongoose.Schema.Types.ObjectId, ref: 'funders'}]
 

 })
    
var aidModel = mongoose.model('aids', aidSchema)
module.exports = aidModel;
