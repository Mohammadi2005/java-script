var myText = document.getElementById("text");

function myData() {
    fetch("readJSON.json")
        .then((res) => res.json())
        .then((JS) => {
            let output = "";
            JS.forEach(function (user) {
                output += `<ul>
                    <li>${user.age}</li>
                    <li>${user.name}</li>
                    <li>${user.city}</li>
                    </ul>`
            })
            myText.innerHTML = output;
        });
}

myData();
