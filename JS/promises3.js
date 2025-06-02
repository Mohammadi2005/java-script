// first methode
function getMessage(callBack) {
    callBack("hello callBack");
}

// promises methode
function Promises_getMessage() {

    return new Promise((resolve, reject) => {
        resolve("hello callBack promises");
    });
}

////////////////////////

function myFunction(message) {
    console.log(message);
}

////////////////////////

getMessage(myFunction);
Promises_getMessage().then(myFunction);



