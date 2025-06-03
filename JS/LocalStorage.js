const myText = document.getElementById("text");

localStorage.setItem("FirstName", "amirhossein"); // add item with FiratName key and amerhossein value

const Fname = localStorage.getItem("FirstName");  // get item value with FirstName key

Fname ? myText.innerText = `Wellcome ${Fname}` : myText.innerText = `nobody to Wellcom`;


var btn = document.getElementById("btn");
var myText2 = document.getElementById("text2");

function addItem(){

    var inputLName = document.getElementById("in").value;

    if(!inputLName){
        alert("input is null");
    }
    else {
        localStorage.setItem("LastName", inputLName);
        myText2.innerText = `hello ${localStorage.getItem("LastName")}`;
        document.getElementById("in").value = "";
    }
}
btn.addEventListener("click", addItem);


