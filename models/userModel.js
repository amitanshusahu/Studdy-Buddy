const mongoose = require("mongoose");
const {Schema} = mongoose;

const uploadSchema = new Schema({
    subject:{
        type: String,
        required:true,
    },
    chapter:{
        type: String,
        required:true,
    },
    topic:{
        type: String,
        required:true,
    },
    question:{
        type: String,
        required:true,
    },
    answer:{
        type: String,
        required:true,
    },
    solution:{
        type: String,
    },
})

module.exports = mongoose.model("Upload" , uploadSchema);