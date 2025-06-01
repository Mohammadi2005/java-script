var names = ["amir", "ahmad", "ali", "mohammad"];
var Data = document.getElementById("data");

names.forEach(function(item,index,arr){

    Data.innerHTML += `Item : ${item} Index : ${index} <br>`;
    Data.innerHTML += `${arr} <br><br>`;
})