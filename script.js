const navMenu = document.querySelector(".nav");
const humburgerMenu = document.querySelector(".hamburger");
const naItem = document.querySelectorAll(".nav_item");

humburgerMenu.addEventListener("click", () => {
  humburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav_item").forEach((n) =>
  n.addEventListener("click", () => {
    humburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// navbar ends

// todo list
const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");
const required = document.querySelector(".required");

inputBox.addEventListener("keyup", () => {
  required.style.display = "none";
});

function addTask() {
  if (inputBox.value === "") {
    required.style.display = "block";
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showData = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showData();

// modal js
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelector(".show-modal");
console.log("value:", btnOpenModal.textContent);
btnOpenModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  window.scrollTo({ top: 0, left: 100, behavior: "smooth" });
});

function closeModal(){
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
btnCloseModal.addEventListener("click",closeModal)

overlay.addEventListener("click",closeModal)
