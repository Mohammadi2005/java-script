var InName = document.getElementById("name");
var myForm = document.getElementsByName("form");
var sub = document.querySelector("#subName");
var rem = document.querySelector("#removeName");

// myForm.addEventListener("submit", (e) => {
//     e.preventDefault();
// });

sub.addEventListener("click", () => {
    sessionStorage.setItem("name", InName.value);
})

rem.addEventListener("click", () => {
    sessionStorage.removeItem("name");
})

var MyText = document.getElementById("MyText");

const Name = sessionStorage.getItem("name");

Name 
    ? (MyText.innerText = `Welcome ${Name}`) 
    : (MyText.innerText = "nobody to wellcome");
