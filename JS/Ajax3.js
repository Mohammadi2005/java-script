var BTN = document.getElementById("btn");
var text = document.querySelector("#text");

function LoadDoc(){

    var requ = new XMLHttpRequest();
    requ.open("GET", "data.xml", true);
    requ.onreadystatechange = function(){
        LoadXML(this);
    }
    requ.send();

}

function LoadXML(xml){

    var XmlData = xml.responseXML;
                     
    var cd = XmlData.getElementsByTagName("CD");
    var TR = document.createElement("tr");
    var TH1 = document.createElement("th");
    var TH2 = document.createElement("th");
    TH1.appendChild(document.createTextNode("ARTIST"));
    TH2.appendChild(document.createTextNode("TITLE"));
    TR.appendChild(TH1);
    TR.appendChild(TH2);
    text.appendChild(TR);
    //TH1.after(TH2);
    for(let i = 0; i < cd.length; i++){
        var TR = document.createElement("tr");
        var TDart = document.createElement("td");
        var TDtit = document.createElement("td");
        // var art = cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
        var art = cd[i].querySelector("ARTIST").childNodes[0].nodeValue;
        var tit = cd[i].querySelector("TITLE").childNodes[0].nodeValue;
        // var tit = cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;

        // TDart.appendChild(document.createTextNode(art));
        TDart.appendChild(document.createTextNode(art));
        TDtit.appendChild(document.createTextNode(tit));
        console.log(art);
        TR.appendChild(TDart);
        TR.appendChild(TDtit);
        text.appendChild(TR);
    }
    //console.log(cd);
}

BTN.addEventListener("click", LoadDoc);


