console.log("home.js");
const array = ["rouge", "vert", "bleu"];
const list = document.getElementById("list");
console.log(list);
const addTextToHtml = (color) => {
    console.log(color);
const newDiv = document.createElement("div");
newDiv.innerHTML = color;
list.appendChild(newDiv);
}
array.map(color => addTextToHtml(color));