const PORT = process.env.port || 3000;
const express = require("express");
const app = express();
const db = require("./db");
db();
// // const cors = require("cors")
const bodyParser = require("body-parser");


// / parse requests of content-type - application/x-www-form-urlencoded 
// > for req.body(comes form url) , encodeing
app.use(bodyParser.urlencoded({ extended: true }))

// / middlewares
app.use(express.json());
//// app.use(cors());

// / static content
const { dirname } = require("path");
app.use(express.static("public"));
app.use("/css" , express.static(__dirname + "public/css"));

/// tepleting engine
app.set("view engine" , "ejs");


// / routes
const { getUpload , postUpload, 
    getSubjectTest, postSubjectTest,
    getChapterTest, postChapterTest,
    getTopicTest, postTopicTest  }
     = require(__dirname + "/controllers/userController.js");

app.get("/", (req,res)=>{
    res.render("index")
});
app.get("/upload", getUpload);
app.post("/upload", postUpload);
app.get("/subjecttest" ,getSubjectTest );
app.post("/subjecttest" ,postSubjectTest );
app.get("/chaptertest" ,getChapterTest );
app.post("/chaptertest" ,postChapterTest );
app.get("/topictest" ,getTopicTest );
app.post("/topictest" ,postTopicTest );
app.get("*", (req,res)=>{
    res.render("404")
})

// / server start
app.listen(PORT, ()=>{
    console.log("the espress server has started sucessfuly");
    console.log(PORT)
});
