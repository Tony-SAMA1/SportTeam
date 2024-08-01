const navbar = document.getElementById("nav");
const submit = document.getElementById("submit");
const commentContainer = document.getElementById("commentContainer");
const goToDoctor = document.getElementById("goToDoctor");
const injuries = document.getElementById("Injuries");
const login = document.getElementById("Login");
const loginSubmit = document.getElementById("LoginSubmit");
function ElemGoTo(elem) {
  elem.scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  let top = navbar.offsetTop;
  if (window.scrollY >= top) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.getElementById("name").value != "") {
    let newList = document.createElement("li");
    let newHeader = document.createElement("h2");
    let newP = document.createElement("p");
    newHeader.textContent = document.getElementById("name").value;
    newP.textContent = document.getElementById("comment").value;
    newList.appendChild(newHeader);
    newList.appendChild(newP);
    commentContainer.appendChild(newList);
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  } else {
    alert("Please fill the Requires");
  }
});

goToDoctor.addEventListener("click", (e) => {
  e.preventDefault;
  login.style.display = "flex";
  login.style.flexDirection = "column"
  login.style.gap = "10px"
  navbar.style.display = "none";
});

loginSubmit.addEventListener("click", () => {
  if (
    (document.getElementById("LoginName").value != "") &
    (document.getElementById("LoginAge").value != "")
  ) {
    login.style.display = "none";
    navbar.style.display = "flex";
    let text = injuries.value;
    if (text == 1) {
      alert("Then you should go to Mohamed Mahmoud");
      window.location.href =
        "https://www.vezeeta.com/ar/dr/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D9%85%D8%AD%D9%85%D8%AF-%D9%85%D8%AD%D9%85%D9%88%D8%AF-%D8%B9%D9%84%D8%A7%D8%AC-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A-%D9%88%D8%A7%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%85%D9%84%D8%A7%D8%B9%D8%A8-1";
    } else if (text == 2) {
      alert("Then you should go to Salaam Ali Salaam");
      window.location.href =
        "https://www.vezeeta.com/ar/dr/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D8%B3%D9%84%D8%A7%D9%85--%D8%B9%D9%84%D9%8A-%D8%B3%D9%84%D8%A7%D9%85--%D8%B9%D9%84%D8%A7%D8%AC-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A-%D9%88%D8%A7%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%85%D9%84%D8%A7%D8%B9%D8%A8";
    } else if (text == 3) {
      alert("Then you should go to Mustafa Yusri");
      window.location.href =
        "https://www.vezeeta.com/ar/dr/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D9%85%D8%B5%D8%B7%D9%81%D9%8A--%D9%8A%D8%B3%D8%B1%D9%8A-%D8%AA%D8%AE%D8%B3%D9%8A%D8%B3-%D9%88%D8%AA%D8%BA%D8%B0%D9%8A%D8%A9";
    } else if (text == 4) {
      alert("Then you should go to Ayeh Maher Al-Qasrawi");
      window.location.href =
        "https://www.vezeeta.com/ar/dr/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%D8%A9-%D8%A7%D9%8A%D9%87-%D9%85%D8%A7%D9%87%D8%B1-%D8%A7%D9%84%D9%82%D8%B5%D8%B1%D8%A7%D9%88%D9%8A-%D8%B9%D9%84%D8%A7%D8%AC-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A-%D9%88%D8%A7%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%85%D9%84%D8%A7%D8%B9%D8%A8";
    } else if (text == 5) {
      alert("Then you should go to Nancy Majid");
      window.location.href =
        "https://www.vezeeta.com/ar/dr/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D9%86%D8%A7%D9%86%D8%B3%D9%8A-%D9%85%D8%A7%D8%AC%D8%AF-%D8%B9%D9%84%D8%A7%D8%AC-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A-%D9%88%D8%A7%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%85%D9%84%D8%A7%D8%B9%D8%A8";
    } else if (text == 6) {
      alert("Then you should go to Bishoy Mamdouh");
      window.location.href =
        "https://www.vezeeta.com/ar/dr/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D8%A8%D9%8A%D8%B4%D9%88%D9%8A-%D9%85%D9%85%D8%AF%D9%88%D8%AD-%D8%B9%D9%84%D8%A7%D8%AC-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A-%D9%88%D8%A7%D8%B5%D8%A7%D8%A8%D8%A7%D8%AA-%D9%85%D9%84%D8%A7%D8%B9%D8%A8";
    } else if (text == 7) {
      alert("Then you should go to Ahmed Rushdi Alajmi");
      window.location.href =
        "https://www.vezeeta.com/ar/dr/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D8%A3%D8%AD%D9%85%D8%AF--%D8%B1%D8%B4%D8%AF%D9%8A-%D8%A7%D9%84%D8%B9%D8%AC%D9%85%D9%8A-%D8%B1%D9%88%D9%85%D8%A7%D8%AA%D9%8A%D8%B2%D9%85";
    }
  } else {
    alert("Please fill the Requires");
  }
});
