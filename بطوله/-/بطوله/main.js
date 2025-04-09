let chekBox = document.querySelector(".toggle-checkbox");
let page = document.querySelector(".page");
makeHover();
chekBox.addEventListener("click", changeColors);

function changeColors() {
  if (chekBox.checked == true) {
    page.style.backgroundColor = "#252525";
    document.querySelector("h1").style.color = "white";
    document.querySelector(".head").style.backgroundColor = "black";
    document.querySelector(".side-bar").style.backgroundColor = "black";

    for (let i = 0; i < 4; i++) {
      let a = document.querySelectorAll("ul a");
      let li = document.querySelectorAll("ul li");
      a[i].style.color = "white";
      li[i].addEventListener("mouseover", function () {
        li[i].style.backgroundColor = "#412c2c";
      });

      li[i].addEventListener("mouseout", function () {
        li[i].style.backgroundColor = "";
      });
    }

    document.querySelector("h3").style.color = "white";

    document.querySelector(".active").style.backgroundColor = "#412c2c";
    document.querySelector(".notification i").style.color = "white";
  } else {
    page.style.backgroundColor = "#f1f5f9";
    document.querySelector("h1").style.color = "black";
    document.querySelector(".head").style.backgroundColor = "white";
    document.querySelector(".side-bar").style.backgroundColor = "white";
    document.querySelectorAll("ul a")[0].style.color = "black";
    document.querySelectorAll("ul a")[1].style.color = "black";
    document.querySelectorAll("ul a")[2].style.color = "black";
    document.querySelectorAll("ul a")[3].style.color = "black";
    document
      .querySelectorAll("ul li")[0]
      .addEventListener("mouseover", function () {
        document.querySelectorAll("ul li")[0].style.backgroundColor = "#f6f6f6";
      });
    document
      .querySelectorAll("ul li")[0]
      .addEventListener("mouseout", function () {
        document.querySelectorAll("ul li")[0].style.backgroundColor = "";
      });
    document
      .querySelectorAll("ul li")[1]
      .addEventListener("mouseover", function () {
        document.querySelectorAll("ul li")[1].style.backgroundColor = "#f6f6f6";
      });
    document
      .querySelectorAll("ul li")[1]
      .addEventListener("mouseout", function () {
        document.querySelectorAll("ul li")[1].style.backgroundColor = "";
      });
    document
      .querySelectorAll("ul li")[2]
      .addEventListener("mouseover", function () {
        document.querySelectorAll("ul li")[2].style.backgroundColor = "#f6f6f6";
      });
    document
      .querySelectorAll("ul li")[2]
      .addEventListener("mouseout", function () {
        document.querySelectorAll("ul li")[2].style.backgroundColor = "";
      });
    document
      .querySelectorAll("ul li")[3]
      .addEventListener("mouseover", function () {
        document.querySelectorAll("ul li")[3].style.backgroundColor = "#f6f6f6";
      });
    document
      .querySelectorAll("ul li")[3]
      .addEventListener("mouseout", function () {
        document.querySelectorAll("ul li")[3].style.backgroundColor = "";
      });
    document.querySelector(".active").style.backgroundColor = "#f6f6f6";
    document.querySelector("h3").style.color = "black";
    document.querySelector(".notification i").style.color = "black";
  }
}

function makeHover() {
  document
    .querySelectorAll("ul li")[0]
    .addEventListener("mouseover", function () {
      document.querySelectorAll("ul li")[0].style.backgroundColor = "#f6f6f6";
    });
  document
    .querySelectorAll("ul li")[0]
    .addEventListener("mouseout", function () {
      document.querySelectorAll("ul li")[0].style.backgroundColor = "";
    });
  document
    .querySelectorAll("ul li")[1]
    .addEventListener("mouseover", function () {
      document.querySelectorAll("ul li")[1].style.backgroundColor = "#f6f6f6";
    });
  document
    .querySelectorAll("ul li")[1]
    .addEventListener("mouseout", function () {
      document.querySelectorAll("ul li")[1].style.backgroundColor = "";
    });
  document
    .querySelectorAll("ul li")[2]
    .addEventListener("mouseover", function () {
      document.querySelectorAll("ul li")[2].style.backgroundColor = "#f6f6f6";
    });
  document
    .querySelectorAll("ul li")[2]
    .addEventListener("mouseout", function () {
      document.querySelectorAll("ul li")[2].style.backgroundColor = "";
    });
  document
    .querySelectorAll("ul li")[3]
    .addEventListener("mouseover", function () {
      document.querySelectorAll("ul li")[3].style.backgroundColor = "#f6f6f6";
    });
  document
    .querySelectorAll("ul li")[3]
    .addEventListener("mouseout", function () {
      document.querySelectorAll("ul li")[3].style.backgroundColor = "";
    });
}
