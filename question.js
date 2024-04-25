
var answersButtonLength = document.querySelectorAll(".answers").length;

for(var i = 0; i < answersButtonLength; i++) {

    document.querySelectorAll(".answers")[i].addEventListener("click", function() {
        
        if(this.innerHTML === "Hong Kong") {
            this.style.backgroundColor = "green";
            scoreAdd();
        } else if(this.innerHTML === "Apollo") {
            this.style.backgroundColor = "green";
            scoreAdd();           
        } else if(this.innerHTML === "Finland") {
            this.style.backgroundColor = "green";
            scoreAdd();
        } else if(this.innerHTML === "Nike") {
            this.style.backgroundColor = "green";
            scoreAdd();
        } else if(this.innerHTML === "Embarrassment") {
            this.style.backgroundColor = "green";
            scoreAdd();
        } else if(this.innerHTML === "Mexico City") {
            this.style.backgroundColor = "green";
            scoreAdd();
        } else if(this.innerHTML === "Tanzania") {
            this.style.backgroundColor = "green";
            scoreAdd();
        } else if(this.innerHTML === "Saturn") {
            this.style.backgroundColor = "green";
            scoreAdd();
        } else if(this.innerHTML === "Delta") {
            this.style.backgroundColor = "green";
            scoreAdd();
        } else if(this.innerHTML === "British Museum - London") {
            this.style.backgroundColor = "green";
            scoreAdd();
        } else {
            this.style.backgroundColor = "red"
       }       
    })
}
