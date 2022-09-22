let solution = document.getElementById("solution")
let selectImageOption = document.getElementById("solution-img-lable");

solution.onmouseover = ()=>{
    selectImageOption.style="display:block;height:auto;";
}

//// subject suggention filter
let subjectInput = document.getElementById("subject");
let subjectSuggBox = document.querySelector(".subject-autocomp-box");

subjectInput.onkeyup = (e)=>{
    let subjectInputValue = e.target.value

    // filtering the input to search it 
    let arr = [];
    if(subjectInputValue){
        // filter
        arr = subjectSuggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(subjectInputValue.toLocaleLowerCase())
        })
        //counting the numer of duplicate elements
        const count={};
        arr.forEach((ele) =>{
            count[ele] = (count[ele] || 0) + 1;
        });
        // to remove duplicate names
        let subjectName = Object.keys(count);
        subjectName = subjectName.map((ele)=>{
            return `<li>${ele}</li>`
        })
        //changes in subjectautocom box
        subjectSuggBox.classList.add("active")
        //show the suggestions
        showSubjectSuggestions(subjectName);

        // for selecting the suggestions
        let allList = subjectSuggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "selectSubject(this)")
        }
    }
    else{
        subjectSuggBox.classList.remove("active")
    }
}
function selectSubject(ele){
    subjectInput.value = ele.innerText;
    console.log(ele)
    subjectSuggBox.classList.remove("active")
}

// function showSubjectSuggestions(filterData){
function showSubjectSuggestions(subjectName){
    let listData;
    // if arr is empty 
    if(!subjectName.length){
        listData = `<li>${subjectInput.value}</li>`
    }
     // else conver to  string 
    else{
        listData = subjectName.join('');
    }
    subjectSuggBox.innerHTML = listData;
}

//// chapter suggention filter
let chapterInput = document.getElementById("chapter");
let chapterSuggBox = document.querySelector(".chapter-autocomp-box");

chapterInput.onkeyup = (e)=>{
    let chapterInputValue = e.target.value

    // filtering the input to search it 
    let arr = [];
    if(chapterInputValue){
        // filter
        arr = chapterSuggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(chapterInputValue.toLocaleLowerCase())
        })
        //counting the numer of duplicate elements
        const count={};
        arr.forEach((ele) =>{
            count[ele] = (count[ele] || 0) + 1;
        });
        // to remove duplicate names
        let chapterName = Object.keys(count);
        chapterName = chapterName.map((ele)=>{
            return `<li>${ele}</li>`
        })
        //changes in chapterautocom box
        chapterSuggBox.classList.add("active")
        //show the suggestions
        showChapterSuggestions(chapterName);

        // for selecting the suggestions
        let allList = chapterSuggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "selectChapter(this)")
        }
    }
    else{
        chapterSuggBox.classList.remove("active")
    }
}
function selectChapter(ele){
    chapterInput.value = ele.innerText;
    chapterSuggBox.classList.remove("active")
}

// function showSubjectSuggestions(filterData){
function showChapterSuggestions(chapterName){
    let listData;
    // if arr is empty 
    if(!chapterName.length){
        listData = `<li>${chapterInput.value}</li>`
    }
     // else conver to  string 
    else{
        listData = chapterName.join('');
    }
    chapterSuggBox.innerHTML = listData;
}

//// topic suggention filter
let topicInput = document.getElementById("topic");
let topicSuggBox = document.querySelector(".topic-autocomp-box");

topicInput.onkeyup = (e)=>{
    let topicInputValue = e.target.value

    // filtering the input to search it 
    let arr = [];
    if(topicInputValue){
        // filter
        arr = topicSuggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(topicInputValue.toLocaleLowerCase())
        })
        //counting the numer of duplicate elements
        const count={};
        arr.forEach((ele) =>{
            count[ele] = (count[ele] || 0) + 1;
        });
        // to remove duplicate names
        let topicName = Object.keys(count);
        topicName = topicName.map((ele)=>{
            return `<li>${ele}</li>`
        })
        //changes in topicautocom box
        topicSuggBox.classList.add("active")
        //show the suggestions
        showTopicSuggestions(topicName);

        // for selecting the suggestions
        let allList = topicSuggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "selectTopic(this)")
        }
    }
    else{
        topicSuggBox.classList.remove("active")
    }
}
function selectTopic(ele){
    topicInput.value = ele.innerText;
    topicSuggBox.classList.remove("active")
}

// function showSubjectSuggestions(filterData){
function showTopicSuggestions(topicName){
    let listData;
    // if arr is empty 
    if(!topicName.length){
        listData = `<li>${topicInput.value}</li>`
    }
     // else conver to  string 
    else{
        listData = topicName.join('');
    }
    topicSuggBox.innerHTML = listData;
}

