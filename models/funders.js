var mongoose = require('mongoose')

var funderSchema = mongoose.Schema({

        funderId: String,
        funderName: String,
        funderDepartment: String,
        funderAdress: {
            street: String,
            poBox: String,
            zipCode: String,
            city: String,
            businessPostcode: String
        },
        funderContact: {
            phoneNumber: String,
            faxNumber: String,
            emailAdress: String
        },
        funderWebsite: String
 })
    
var funderModel = mongoose.model('funders', funderSchema)
module.exports = funderModel;