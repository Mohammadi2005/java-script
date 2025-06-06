const NextBtn = document.getElementById("Next");
const BackBtn = document.getElementById("Back");

NextBtn.addEventListener("click", () => {
    window.history.forward();
})


BackBtn.addEventListener("click", function(){
    window.history.back();
})



