require('dotenv').config()

const express = require("express");
const jwt = require("jsonwebtoken");
const app = express("jsonwebtoken");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const mongodb = require("./db/db");

const appConfig = require("./config/appconfig")

var mongoose = require("mongoose");

const cron = require('node-cron');

const orderRoutes = require("./route.order");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use((req, res, next) => {
  let err = {}
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
  //verifyToken(req, res,next,err)
});


// Verify Token
function verifyToken(req, res, next,err) {
  if(!req.body.accessId){
     //do nothing
  }else{
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    console.log("token:="+bearerHeader)
     
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      jwt.verify(bearerHeader, appConfig.app.jwtKey, (error, authData) => {
        if(error) {
          err.message = "Problem in verifying token"
        } else if(authData.userId != req.body.accessId){
          err.message = "Wrong token" 
        }
      });
    } else {
          err.message = "Token Field is Empty"
    }
  }  
  if(err.message){
    res.status(403).json({message: err.message});
  }else{
    next();
  }
}

// Routes which should handle requests
app.use("/order", orderRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
      message: error.message
  });
});

//app.listen(8080);
app.listen(appConfig.app.port);
 

module.exports = app;