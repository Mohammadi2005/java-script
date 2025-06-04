let db;

window.addEventListener("load", () => {
    let requ = window.indexedDB.open("NameDB", 1);

    requ.onerror = () => {
        console.log("Error");
    }

    requ.onsuccess = () => {
        console.log("DataBase Opened Successfully");
    }

    db = requ.result;
})