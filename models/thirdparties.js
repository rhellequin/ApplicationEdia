var mongoose = require('mongoose')

var thirdPartySchema = mongoose.Schema({

        thirdPartyId: String,
        thirdPartyName: String,
        thirdPartyDepartment: String,
        thirdPartyAdress: {
            street: String,
            poBox: String,
            zipCode: String,
            city: String,
            businessPostcode: String
        },
        thirdPartyContact: {
            phoneNumber: String,
            faxNumber: String,
            emailAdress: String
        },
        thirdPartyWebsite: String
 })
    
var thirdPartyModel = mongoose.model('thirdparties', thirdPartySchema)
module.exports = thirdPartyModel;