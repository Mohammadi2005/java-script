let myform = document.getElementById("addPost");
let TitleValue = document.getElementById("title").value;
let BodyValue = document.getElementById("body").value;
let sub = document.querySelector("sub");

function AddPost(e) {
  e.preventDefault();
  fetch("http://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: TitleValue, body: BodyValue })
  }).then((res) => res.json)
    .then((json) => console.log(json));
}

myform.addEventListener("submit", AddPost);





