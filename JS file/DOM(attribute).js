var myPar = document.getElementById("par");

myPar.innerHTML += "class attribute : " + myPar.hasAttribute("class");
myPar.innerHTML += "<br/> href attribute : " + myPar.hasAttribute("href");
console.log(myPar.attributes);  // list attributes

var myPar2 = document.getElementById("par2");

myPar2.innerHTML += "<br/>class attribute : " + myPar2.hasAttribute("class");
myPar2.setAttribute("class", "paragraph2"); // 
myPar2.innerHTML += "<br/>class attribute : " + myPar2.hasAttribute("class");
myPar2.removeAttribute("class"); //
myPar2.innerHTML += "<br/>class attribute : " + myPar2.hasAttribute("class");


