var mongoose = require('mongoose')

var userSchema = mongoose.Schema({

        userFirstName: String,
        userLastName: String,
        userEmail: String,
        userSiret: String,
        userCompanyName: String,
        userPosition: String,
        userPhone: String,
        userPassword: String,
        userAids: [ {type:mongoose.Schema.Types.ObjectId, ref: 'aids'}],  

 })
    
var userModel = mongoose.model('users', userSchema)
module.exports = userModel;