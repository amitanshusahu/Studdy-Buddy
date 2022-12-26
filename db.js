const mongoose = require("mongoose");
module.exports= function connectToMongo(){
    mongoose.connect(process.env.MONGODB)
    .then(()=>{
        console.log("db connection sucess");
    })
    .catch((err)=>{
        console.log(err);
    });
}
