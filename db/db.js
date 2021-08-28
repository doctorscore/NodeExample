
var mongoose = require("mongoose");
const serverConfig = require("../config/serverConfig");
dbconf = require('../config/db.json');


var dbString = 'mongodb+srv://' + dbconf.dbcredentials.user;
dbString = dbString + ':' + dbconf.dbcredentials.password;
dbString = dbString + '@' + "cluster0.qphwc.mongodb.net/"+serverConfig.database+"?retryWrites=true&w=majority";
console.log('db string is '+dbString);
  
function listen() {
  console.log('Mongoose default connection open to ' + dbString);
}

connection = mongoose.createConnection(dbString, {
     useCreateIndex: true,
     useNewUrlParser: true
   })

connection.then(listen)
   .catch(console.log);


module.exports.connection = connection

