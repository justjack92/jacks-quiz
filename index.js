

document.getElementById("jacks-quiz").onmouseover = function() {
    changeTitle()};
document.getElementById("jacks-quiz").onmouseout = function() {
    changeBack()};


function changeTitle() {
    var newTitle = "Click below to start!";
    document.getElementById("jacks-quiz").innerHTML = newTitle;
}

function changeBack() {
    var newTitle = "Jack's Quiz";
    document.getElementById("jacks-quiz").innerHTML = newTitle;
}







