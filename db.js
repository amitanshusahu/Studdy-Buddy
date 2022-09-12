const mongoose = require("mongoose");
module.exports= function connectToMongo(){
    mongoose.connect("mongodb://localhost/test")
    .then(()=>{
        console.log("db connection sucess");
    })
    .catch((err)=>{
        console.log(err);
    });
}