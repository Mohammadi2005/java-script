var btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    var myObject = { firstName: "mohammad", LastName: "amiri", age: 20 }

    var myArray = [
        { firstName: "mohammad", LastName: "amiri", age: 20 },
        { firstName: "reza", LastName: "meri", age: 50 },
        { firstName: "sara", LastName: "saeedi", age: 25 },
        { firstName: "ahmad", LastName: "karimi", age: 20 },
    ]
    localStorage.setItem("PersonInfo", JSON.stringify(myObject));
    sessionStorage.setItem("Persons", JSON.stringify(myArray));
})