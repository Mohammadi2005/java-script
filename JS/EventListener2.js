var DIV1 = document.getElementById("DIV1");
var P1 = document.getElementById("P1");

DIV1.addEventListener("click", function(){
    alert("DIV1");
});


P1.addEventListener("click", function(){
    alert("P1");
});

var DIV2 = document.getElementById("DIV2");
var P2 = document.getElementById("P2");

DIV2.addEventListener("click", function(){
    alert("DIV2");
}, true);


P2.addEventListener("click", function(){
    alert("P2");
}, true);

var BTN = document.getElementById("BTN");
var P3 = document.getElementById("P3");

document.addEventListener("mousemove", randomNumber);

function randomNumber(){
    P3.innerHTML = Math.random();
}

BTN.addEventListener("click", Stop);

function Stop(){
    document.removeEventListener("mousemove", randomNumber);
}
