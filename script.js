let button= document.getElementById("add");

let container = document.getElementById ("container");
let removeBtn= document.createElement("button")



function addQuest() {
let input = document.getElementById("input").Value;

let newQuest= document.createElement("div");
newQuest;
newQuest.innerText= input 
container.appendChild(newQuest)
}

add.addEventListener("click", addQuest);
