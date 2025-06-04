const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const myForm = document.getElementById("myform");
let db;

window.addEventListener("load", () => {
    let requ = window.indexedDB.open("NameDataBase", 1);

    requ.onerror = () => {
        console.log("Error");
    }

    requ.onsuccess = () => {
        console.log("DataBase Opened Successfully");
        db = requ.result;
        console.log(db);
    }


    /////////////////////////////////////////////////
    requ.onupgradeneeded = (e) => {
        let db = e.target.result;

        let objectStore = db.createObjectStore("NameDataBase", {
            keyPath: "id",
            autoIncrement : true
        });

        objectStore.createIndex("firstName", "FirstName", {
            unique: false
        });

        objectStore.createIndex("lastName", "LastName", {
            unique: false
        });

        console.log("Data Base Stupe Successfully...");
    }
})
