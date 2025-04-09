getElements();

let chekbox = document.querySelector(".toggle-checkbox");

chekBox.addEventListener("click", changer);
function changer() {
  let box = document.querySelectorAll(".box");
  if (chekbox.checked == true) {
    for (let i = 0; i < box.length; i++) {
      box[i].style.backgroundColor = "black";
      box[i].style.boxShadow = "0 2px 15px rgb(255 255 255 / 10%)";
      box[i].style.color = "white";
    }
  } else {
    for (let i = 0; i < box.length; i++) {
      box[i].style.backgroundColor = "white";
      box[i].style.boxShadow = "0 2px 15px rgb(0 0 0 / 10%)";
      box[i].style.color = "black";
    }
  }
}

async function getElements() {
  const response = await fetch("./main.json");
  const names = await response.json();

  let div = document.createElement("div");
  let content = document.querySelector(".content");

  div.classList.add("main");

  for (let i = 0; i < Object.values(names).length; i++) {
    let box = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");

    box.classList.add("box");

    h3.innerHTML = Object.values(Object.values(names)[i])[0];
    img.setAttribute("src", Object.values(Object.values(names)[i])[1]);

    box.appendChild(img);
    box.appendChild(h3);
    div.appendChild(box);
    content.appendChild(div);
  }
}
