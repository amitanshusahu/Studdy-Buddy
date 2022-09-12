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
        let subjectName = Object.keys(count);
        let subjectCount = Object.values(count);
        console.log(subjectName)
        console.log(subjectCount)
        //changes in subjectautocom box
        subjectSuggBox.classList.add("active")
        //show the suggestions
        showSubjectSuggestions(subjectName,subjectCount);

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
function showSubjectSuggestions(subjectName,subjectCount){
    let listData;
    let listCount = 0;
    // if arr is empty 
    if(!subjectName.length){
        listData =  subjectInput.value
    }
     // else conver to  string 
    else{
        listData = subjectName.join('');
        listCount = subjectCount.join('')
    }
    subjectSuggBox.innerHTML = `<span class="flex-between" style="position:relative; text-align:left;">
    <li> ${listData} </li>
    <i style="position:absolute;right:10px;padding:10px;">${listCount}</i>
    </span>`;
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
        let chapterName = Object.keys(count);
        let chapterCount = Object.values(count);
        console.log(chapterName)
        console.log(chapterCount)
        //changes in chapterautocom box
        chapterSuggBox.classList.add("active")
        //show the suggestions
        showChapterSuggestions(chapterName,chapterCount);

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
function showChapterSuggestions(chapterName,chapterCount){
    let listData;
    let listCount = 0;
    // if arr is empty 
    if(!chapterName.length){
        listData = chapterInput.value
    }
     // else conver to  string 
    else{
        listData = chapterName.join('');
        listCount = chapterCount.join('');
    }
    chapterSuggBox.innerHTML = `<span class="flex-between" style="position:relative;">
    <li> ${listData} </li>
    <i style="position:absolute;right:10px;padding:10px;">${listCount}</i>
    </span>`;
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
        let topicName = Object.keys(count);
        let topicCount = Object.values(count);
        console.log(topicName)
        console.log(topicCount)
        //changes in topicautocom box
        topicSuggBox.classList.add("active")
        //show the suggestions
        showTopicSuggestions(topicName,topicCount);

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
function showTopicSuggestions(topicName,topicCount){
    let listData;
    let listCount = 0;
    // if arr is empty 
    if(!topicName.length){
        listData = topicInput.value
    }
     // else conver to  string 
    else{
        listData = topicName.join('');
        listCount = topicCount.join('')
    }
    topicSuggBox.innerHTML = `<span class="flex-between" style="position:relative;">
    <li> ${listData} </li>
    <i style="position:absolute;right:10px;padding:10px;">${listCount}</i>
    </span>`;
}

