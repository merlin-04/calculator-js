//display items
function displayContent(content) {
    result.value += content;
}

//clear data
function removeContent() {
    result.value = "";
}

//backspace 
function backspaceContent() {
    result.value = result.value.slice(0, -1);                              //remove last index value from a string
}

//Evaluation
function evaluvate() {
    result.value = eval(result.value);                //for evaluating string predefined method in js
}