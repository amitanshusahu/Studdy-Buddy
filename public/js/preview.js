let previewBox = document.getElementById("preview-box");
let preview = document.getElementById("preview");

// for question
let questionInput = document.getElementById("question");
questionInput.onkeyup = (e) => {
    let questionInputValue = e.target.value;
    let questionArr = [...questionInputValue];
    let questionPreview;
    let i;
    let next = true;
    if (questionInputValue) {
        for (i = 0; i < questionArr.length; i++) {
                // if(next){
                    // for *
                if (questionArr[i] == "*") {
                    questionArr.splice(i, 1, `<b> X </b>`);
                }
                // for +
                if (questionArr[i] == "+") {
                    questionArr.splice(i, 1, `<b> + </b>`);
                }
                // for -
                if (questionArr[i] == "-") {
                    questionArr.splice(i, 1, `<b> - </b>`);
                }
                // for ^
                if (questionArr[i] == "^") {
                    questionArr.splice(i, 1, `<sup>${questionArr[i + 1]}</sup>`);
                    questionArr.splice(i + 1, 1);
                }
                // for /
                if (questionArr[i] == "/") {
                    questionArr.splice(i, 1, `<b> / </b>`);
                }
                // // for |
                // if (questionArr[i] == "|") {
                //     questionArr.splice(i, 1, `<hr>`);
                // }
                // if (questionArr[i] == " ") {
                //     addNewBox();
                //     next = false;
                //     break;
                // }
                // }
        }

        previewBox.style.height = "100px";
        questionPreview = questionArr.join("");
        if(next){
            console.log("this is working")
            preview.innerHTML = `<var> ${questionPreview} </var>`;
        }
        
    }else {
        previewBox.style.height = "0";
    }
}

//  for answers
let answerInput = document.getElementById("answer");

answerInput.onkeyup = (e) => {
    let answerInputValue = e.target.value;
    let answerArr = [...answerInputValue];
    let answerPreview;
    let i;
    let next = true;
    if (answerInputValue) {
        for (i = 0; i < answerArr.length; i++) {
                // if(next){
                    // for *
                if (answerArr[i] == "*") {
                    answerArr.splice(i, 1, `<b> X </b>`);
                }
                // for +
                if (answerArr[i] == "+") {
                    answerArr.splice(i, 1, `<b> + </b>`);
                }
                // for -
                if (answerArr[i] == "-") {
                    answerArr.splice(i, 1, `<b> - </b>`);
                }
                // for ^
                if (answerArr[i] == "^") {
                    answerArr.splice(i, 1, `<sup>${answerArr[i + 1]}</sup>`);
                    answerArr.splice(i + 1, 1);
                }
                // for /
                if (answerArr[i] == "/") {
                    answerArr.splice(i, 1, `<b> / </b>`);
                }
                // // for |
                // if (answerArr[i] == "|") {
                //     answerArr.splice(i, 1, `<hr>`);
                // }
                // if (answerArr[i] == " ") {
                //     addNewBox();
                //     next = false;
                //     break;
                // }
                // }
        }

        previewBox.style.height = "100px";
        answerPreview = answerArr.join("");
        if(next){
            console.log("this is working")
            preview.innerHTML = `<var> ${answerPreview} </var>`;
        }
        
    }else {
        previewBox.style.height = "0";
    }
}

//for solutions 
let solutionInput = document.getElementById("solution");

solutionInput.onkeyup = (e) => {
    let solutionInputValue = e.target.value;
    let solutionArr = [...solutionInputValue];
    let solutionPreview;
    let i;
    let next = true;
    if (solutionInputValue) {
        for (i = 0; i < solutionArr.length; i++) {
                // if(next){
                    // for *
                if (solutionArr[i] == "*") {
                    solutionArr.splice(i, 1, `<b> X </b>`);
                }
                // for +
                if (solutionArr[i] == "+") {
                    solutionArr.splice(i, 1, `<b> + </b>`);
                }
                // for -
                if (solutionArr[i] == "-") {
                    solutionArr.splice(i, 1, `<b> - </b>`);
                }
                // for ^
                if (solutionArr[i] == "^") {
                    solutionArr.splice(i, 1, `<sup>${solutionArr[i + 1]}</sup>`);
                    solutionArr.splice(i + 1, 1);
                }
                // for /
                if (solutionArr[i] == "/") {
                    solutionArr.splice(i, 1, `<b> / </b>`);
                }
                // // for |
                // if (solutionArr[i] == "|") {
                //     solutionArr.splice(i, 1, `<hr>`);
                // }
                // if (solutionArr[i] == " ") {
                //     addNewBox();
                //     next = false;
                //     break;
                // }
                // }
        }

        previewBox.style.height = "100px";
        solutionPreview = solutionArr.join("");
        if(next){
            console.log("this is working")
            preview.innerHTML = `<var> ${solutionPreview} </var>`;
        }
        
    }else {
        previewBox.style.height = "0";
    }
}