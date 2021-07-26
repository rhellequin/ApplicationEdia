
var mongoose = require('mongoose');

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology : true
 };


 // Paramètres de connection :
var login = 'adminDb';
var pass = 'Bw48@Rh!';
var dbname = 'edia';

var connectionString =  'mongodb+srv://'+ login +':' + pass +'@cluster0.shfzj.mongodb.net/' + dbname + '?retryWrites=true&w=majority';

mongoose.connect(
    connectionString,
    options,        
    function(err) {
      if (!err) {
        console.log('\x1b[32m%s\x1b[0m', 'Connection MongoDB : ' + dbname + '  OK');  // Green
      } else {
        console.log('\x1b[31m%s\x1b[0m', err); // Red
      }
    } 
);

