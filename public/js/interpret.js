function showAns(){
    let ans = document.getElementById("ans");
    ans.style.display="block";
}

let question = document.getElementsByClassName("question")
let questionList = question.getElementsByTagName("li")

let questionText = questionList.innerText;
let questionArr = [...questionText];

console.log(questionList)

// for (i = 0; i < questionArr.length; i++) {
//         // for *
//     if (questionArr[i] == "*") {
//         questionArr.splice(i, 1, `<b> X </b>`);
//     }
//     // for +
//     if (questionArr[i] == "+") {
//         questionArr.splice(i, 1, `<b> + </b>`);
//     }
//     // for -
//     if (questionArr[i] == "-") {
//         questionArr.splice(i, 1, `<b> - </b>`);
//     }
//     // for ^
//     if (questionArr[i] == "^") {
//         questionArr.splice(i, 1, `<sup>${questionArr[i + 1]}</sup>`);
//         questionArr.splice(i + 1, 1);
//     }
//     // for /
//     if (questionArr[i] == "/") {
//         questionArr.splice(i, 1, `<b> / </b>`);
//     }
// }

// questionPreview = questionArr.join("");
// questionList.innerText = `<var> ${questionPreview} </var>`;
