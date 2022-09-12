const { find } = require("../models/userModel.js");
const Upload = require("../models/userModel.js");

module.exports.getUpload = async (req, res, next) => {
    try {
        let fetchUplodData;
        await Upload.find()
        .then((data)=>{
            fetchUplodData = data;
        })
        .catch((err)=>{
            console.log(err)
        })
        // for subjets
        let subjectSuggestions = [];
        for (var i = 0; i < fetchUplodData.length; i++) {
            subjectSuggestions[i] = fetchUplodData[i].subject;
        }
        // for chapters
        let chapterSuggestions = [];
        for (var i = 0; i < fetchUplodData.length; i++) {
        chapterSuggestions[i] = fetchUplodData[i].chapter;
        }
        // for topics
        let topicSuggestions = [];
        for (var i = 0; i < fetchUplodData.length; i++) {
        topicSuggestions[i] = fetchUplodData[i].topic;
        }
        res.render("upload.ejs" , {subjectSugData:subjectSuggestions , chapterSugData:chapterSuggestions, topicSugData:topicSuggestions});
    } catch (ex) {
        next(ex)
    }

}

module.exports.postUpload = async(req, res, next) => {
    try {
        const uploadData = new Upload(req.body);
        uploadData.save()
        .then(()=>{
            res.status(200).redirect("/upload")
        })
        .catch((err)=>{
            console.log(err);
            res.send("<h1>oops something went wrong</h1>")
        })

    } catch (ex) {
        next(ex)
    }

}


module.exports.getSubjectTest = async (req, res, next) => {
    try{
        let fetchData;
        await Upload.find()
        .then((data)=>{
            fetchData = data;
        })
        .catch((err)=>{
            console.log(err)
        })
        // for subject
        let subjectArr = [];
        for (var i = 0; i < fetchData.length; i++) {
            subjectArr[i] = fetchData[i].subject;
        }
        res.render("subjectSelect" , {subjectData:subjectArr});
    }
    catch(ex){
        next(ex)
    }
}

module.exports.postSubjectTest = async (req, res, next) => {
    try{
        const selectedSubject = req.body;
        let fetchData;
        await Upload.find(selectedSubject)
        .then((data)=>{
            fetchData = data;
        })
        .catch((err)=>{
            console.log(err)
        })
        function randarr(arr){
            for (let j = arr.length - 1; j > 0; j--){
                let rand = Math.floor(Math.random() * (j + 1));
                [arr[j], arr[rand]] = [arr[rand], arr[j]];
            }
        }
        let arr = [];
        for(let i = 0; i<fetchData.length; i++){
            arr[i]=fetchData[i];
        }
        randarr(arr);
        res.render("subjectTest" , {selectedSubjectData :selectedSubject.subject , dataArr : arr})
    }
    catch(ex){
        next(ex)
    }
}

module.exports.getChapterTest = async (req, res, next) => {
    try{
        let fetchData;
        await Upload.find()
        .then((data)=>{
            fetchData = data;
        })
        .catch((err)=>{
            console.log(err)
        })
        // for chapters
        let chapterArr = [];
        for (var i = 0; i < fetchData.length; i++) {
            chapterArr[i] = fetchData[i].chapter;
        }
        res.render("chapterSelect" , {chapterData:chapterArr});
    }
    catch(ex){
        next(ex)
    }
}

module.exports.postChapterTest = async (req, res, next) => {
    try{
        const selectedChapter = req.body;
        let fetchData;
        await Upload.find(selectedChapter)
        .then((data)=>{
            fetchData = data;
        })
        .catch((err)=>{
            console.log(err)
        })
        function randarr(arr){
            for (let j = arr.length - 1; j > 0; j--){
                let rand = Math.floor(Math.random() * (j + 1));
                [arr[j], arr[rand]] = [arr[rand], arr[j]];
            }
        }
        let arr = [];
        for(let i = 0; i<fetchData.length; i++){
            arr[i]=fetchData[i];
        }
        randarr(arr);
        res.render("chapterTest" , {selectedChapterData :selectedChapter.chapter , dataArr : arr})
    }
    catch(ex){
        next(ex)
    }
}

module.exports.getTopicTest = async (req, res, next) => {
    try{
        let fetchData;
        await Upload.find()
        .then((data)=>{
            fetchData = data;
        })
        .catch((err)=>{
            console.log(err)
        })
        // for topic
        let topicArr = [];
        for (var i = 0; i < fetchData.length; i++) {
            topicArr[i] = fetchData[i].topic;
        }
        res.render("topicSelect" , {topicData:topicArr});
    }
    catch(ex){
        next(ex)
    }
}

module.exports.postTopicTest = async (req, res, next) => {
    try{
        const selectedTopic = req.body;
        let fetchData;
        await Upload.find(selectedTopic)
        .then((data)=>{
            fetchData = data;
        })
        .catch((err)=>{
            console.log(err)
        })
        function randarr(arr){
            for (let j = arr.length - 1; j > 0; j--){
                let rand = Math.floor(Math.random() * (j + 1));
                [arr[j], arr[rand]] = [arr[rand], arr[j]];
            }
        }
        let arr = [];
        for(let i = 0; i<fetchData.length; i++){
            arr[i]=fetchData[i];
        }
        randarr(arr);
        res.render("topicTest" , {selectedTopicData :selectedTopic.topic , dataArr : arr})
    }
    catch(ex){
        next(ex)
    }
}