var ul = document.querySelector("ul")
var coffee = document.querySelector(".coffee")

var newLI = document.createElement("li")
newLI.textContent = "tea"
ul.insertBefore(newLI, coffee)


