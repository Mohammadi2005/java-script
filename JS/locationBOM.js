var hostName = location.host;

alert(`host : ${hostName}`);


var hrefName = location.href;

alert(`href : ${hrefName}`);


var protocolNAme = location.protocol

alert(`protocol : ${protocolNAme}`);


var pathName = location.pathname;

alert(`path : ${pathName}`);


var btn = document.querySelector("#reload");

btn.addEventListener("click", function(){
    location.reload();
})


var btnCodeyad = document.getElementById("goCodeYad");

btnCodeyad.addEventListener("click", () => {
    location.replace("https://www.codeyad.com");
})


