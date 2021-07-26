var mongoose = require('mongoose')
var profileSchema = mongoose.Schema({
        profileId: String,
        profileName: String  
 })
var profileModel = mongoose.model('profiles', profileSchema)
module.exports = profileModel;