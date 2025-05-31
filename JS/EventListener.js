var BTN = document.getElementById("BTN");
var P = document.querySelector(".P");
var INPUT = document.getElementById("InputText");
var SEL = document.getElementById("Sel");
var DIV = document.getElementById("myDiv");

BTN.addEventListener('click', Event);
function Event(){
    P.style.backgroundColor = (P.style.backgroundColor == "red") ? "blue" : "red";
}


INPUT.addEventListener('focus', function(){
    highlighte(this);
});

function highlighte(element){
    element.style.backgroundColor = "yellow";
}

INPUT.addEventListener('blur', function(){
    highlighte2(this);
});

function highlighte2(element){
    element.style.backgroundColor = "darkolivegreen";
}

SEL.addEventListener('change', function(){
    alert("you changed value of select tag");
});

SEL.addEventListener('change', function(){
    alert("YOU CHANGE VALUE OF SELECT TAG MY FRIEND");
});

DIV.addEventListener("mouseover", MOver);

function MOver(){
    DIV.style.backgroundColor = "cadetblue";
}

DIV.addEventListener("mouseout", () => {
    DIV.style.backgroundColor = "crimson";
});

// function MOut(){
//     DIV.style.backgroundColor = "crimson";
// }


