

document.getElementById("jacks-quiz").onmouseover = function() {
    setTimeout(changeTitle, 250)};
document.getElementById("jacks-quiz").onmouseout = function() {
    setTimeout(changeBack, 250)};


function changeTitle() {
    var newTitle = "Click below to start!";
    document.getElementById("jacks-quiz").innerHTML = newTitle;
}

function changeBack() {
    var newTitle = "Jack's Quiz";
    document.getElementById("jacks-quiz").innerHTML = newTitle;
}







