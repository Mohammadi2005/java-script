function LoadUsers(){
    var requ = new XMLHttpRequest();
    requ.open("GET", "https://api.github.com/users", true);

    requ.onload = function(){
        
        console.log("kjjjjjjjj");
        if(requ.status === 200){
            console.log("hhhhhhhhhhhhhhhhhhhh")
            var myData = JSON.parse(requ.responseText);

            console.log("jjjj");
            console.log(myData);
            
            // for (var i in myData){
            //     // var li = document.createElement("li");
            //     // var liText = document.createTextNode(element);
            //     // li.appendChild(liText);
            //     var LI = document.createElement("li");
            //     // LI.className = "list-group-item user-item text-left";

            //     // var IMG = document.createElement("img");
            //     // IMG.className = "img-circle img-user img-thumbnail";
            //     // IMG.setAttribute("src", myData[i].)

            //     // var H3 = document.createElement("h3");
            //     // var A = document.createElement("a");
            //     // A.innerHTML = myData[i].login;
            // }
            
        }
    }
    requ.send();
}

LoadUsers();