require('dotenv').config()
const serverConfig = require("../config/serverConfig");

module.exports = {
     app : {
          url: process.env.url || serverConfig.host,
          port: process.env.DEV_APP_PORT || serverConfig.port,   //local port
          //port: process.env.DEV_APP_PORT || 8080,  // server port
		appName: process.env.APP_NAME || 'NodeHttp',
          env: process.env.NODE_ENV || serverConfig.environment,
          jwtKey: process.env.JWT_SECRET_KEY || 'secretkey'
          
     },
     sms : {
         key: process.env.API_KEY || "3fde567a-40e5-11eb-83d4-0200cd936042",//a0ee3140-86ee-11eb-a9bc-0200cd936042
         header: process.env.HEADER || "CHKDAR",
     },
     fcm : {
          key: process.env.FCM_KEY || "a5008dd9",
     },
     RAZORPAY : {
          MID: process.env.MID ||  serverConfig.mid,
          SECRET: process.env.SECRET ||   serverConfig.secret
     }
}
