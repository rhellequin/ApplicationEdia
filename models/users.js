var mongoose = require('mongoose')

var userSchema = mongoose.Schema({

        firstName: String,
        lastName: String,
        email: String,
        siret: String,
        company: String,
        position: String,
        phone: String,
        password: String,
        token: String,
        userAids: [ {type:mongoose.Schema.Types.ObjectId, ref: 'aids'}],  

 })
    
var userModel = mongoose.model('users', userSchema)
module.exports = userModel;