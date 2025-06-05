const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const myForm = document.getElementById("myform");
const list = document.querySelector("ul");
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
        displayData();
    }


    /////////////////////////////////////////////////
    requ.onupgradeneeded = (e) => {
        let db = e.target.result;

        let objectStore = db.createObjectStore("NameDataBase", {
            keyPath: "id",
            autoIncrement: true
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

///////////////////////////////////////////////
// add Data To DB

const addData = (e) => {
    e.preventDefault();
    let newItem = {
        firstName: fnameInput.value,
        lastName: lnameInput.value
    };

    let transaction = db.transaction(["NameDataBase"], "readwrite");

    let objectStore = transaction.objectStore("NameDataBase");

    let request = objectStore.add(newItem);

    request.onsuccess = () => {
        fnameInput.value = "";
        lnameInput.value = "";
        //displayData();
    }

    transaction.oncomplete = () => {
        console.log("transection Completed On Database");
        displayData();
    }

    transaction.onerror = () => {
        console.log("Error transaction On Database");
    }
}

myForm.addEventListener("submit", addData);

////////////////////////////////////////////
// get Data from DB

const displayData = () => {

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    let objectStore = db.transaction("NameDataBase").objectStore("NameDataBase");

    objectStore.openCursor().onsuccess = (e) => {
        let Data = e.target.result;

        if (Data) {
            let listItem = document.createElement("li");
            let first = document.createElement("p");
            let last = document.createElement("p");

            first.textContent = Data.value.firstName;
            last.textContent = Data.value.lastName;

            listItem.appendChild(first);
            listItem.appendChild(last);
            list.appendChild(listItem);

            listItem.setAttribute("data-id", Data.value.id);

            Data.continue();
        } else {

            if (!list.firstChild) {
                let listItem = document.createElement('li');
                listItem.textContent = "there is no contact ....!!!!";
                list.appendChild(listItem);
            }
        }
    }

}