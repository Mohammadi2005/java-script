// document.getElementById("Fname").innerHTML = "amir hossein";
document.querySelector("#Fname").innerHTML = "amir hossein";

// document.getElementsByClassName("Lname")[0].innerHTML = "mohammadi";
document.querySelectorAll(".Lname")[0].innerHTML = "mohammadi";

// var friends = document.getElementsByClassName("friend");
var friends = document.querySelectorAll(".friend");
for (var i = 0; i < friends.length; i++){
    friends[i].innerHTML = "my Friend";
}


console.log(document.querySelector(".friend"));