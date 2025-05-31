const MyForm = document.getElementById("frmSend");
const fname = document.getElementById("FirstName");
const lname = document.getElementById("LastName");
const job = document.getElementById("jobTitle");

function sendData() {
    var requ = new XMLHttpRequest();

    var params = 'first name=' + fname +
        "&" +
        'last name=' + lname +
        '&' +
        'job title=' + job;

    requ.open("POST", "api address", true);

    requ.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    requ.send(params);
}

MyForm.addEventListener("submit", sendData);

