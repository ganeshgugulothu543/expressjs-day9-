const express=require("express");
const MongoClinet=require('mongoose');
const dotEnv=require('dotenv')
const App=express();

PORT= 5566;
dotEnv.config();

 MongoClinet.connect(process.env.MONGO_URI)
 .then(()=>{
    console.log("MongoDb connected successfully")
 })
 .catch((err)=>{
    console.log(err);
 })


App.listen(PORT,()=>{
    console.log("My port is running on ${PORT} number")
})