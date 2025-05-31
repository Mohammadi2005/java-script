var names = ["amir", "reza", "ahmad", "zahra", "sara"];

function CreateLiTag(){
    var myUl = document.getElementById("myList");

    for (const element of names) {

        var li = document.createElement("li");
        var liText = document.createTextNode(element);
        li.appendChild(liText);
        myUl.appendChild(li);
    }
}

CreateLiTag();