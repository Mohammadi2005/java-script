var btn = document.getElementById("btn");
var myText = document.getElementById("Text");

function myData(){
    fetch("Ajax.txt")
    .then((res) => res.text())
    .then((data) => myText.innerHTML = data)
}

btn.addEventListener("click", myData);