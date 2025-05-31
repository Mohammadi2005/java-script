var btn = document.getElementById("btn");

function Event(){

    var par = document.querySelector(".paragraph");

    par.style.backgroundColor = (par.style.backgroundColor == "red") ? "blue" : "red";

}

btn.onclick = Event;

function highlightInput(element){

    element.style.backgroundColor = "yellow";
}

function highlightInput2(element){

    element.style.backgroundColor = "green";
}

var DIV = document.getElementById("myDiv");

DIV.onmouseover = function() {
    DIV.style.backgroundColor = "cadetblue";
}

DIV.onmouseout = function(){
    DIV.style.backgroundColor = "crimson";
}