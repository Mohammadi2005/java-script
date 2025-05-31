var BTN = document.getElementById("myBtn");
var myData = document.querySelector("#text");

function LoadData(){

    var requ = new XMLHttpRequest();

    requ.open("GET", "Ajax.txt", true);

    // methode one
    // requ.onload = function(){
    //     if(requ.status === 200){
    //         myData.innerHTML = this.response;
    //     }
    // }

    // methode two (is better)
    requ.onreadystatechange = function(){
        if(requ.status === 200 && requ.readyState === 4){
            myData.innerHTML = requ.responseText;
        }
    }

    requ.send();
}

BTN.addEventListener("click", LoadData);



