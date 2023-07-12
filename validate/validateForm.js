const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const date = document.getElementById("date");
const male = document.getElementById("male");
const female = document.getElementById("female");
const statusMale = document.getElementById("status");


// color picker
const colors = ["green", "red", "rgba(133, 133, 200)", "#f15025"];

const btnColor = document.getElementById("btn");
const color = document.querySelector(".color");
const section = document.querySelector(".section");

btnColor.addEventListener("click", () => {
  // get  random number between 0-3

  const randomNumber = getRamdomNumber();
  section.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  console.log(randomNumber);
});

function getRamdomNumber() {
  return Math.floor(Math.random() * colors.length);
}

// show error function

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = "form-control success";
}

// adding keyup

function isvalidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// for input radio
female.addEventListener("click", () => {
  statusMale.style.visibility = "hidden";
});
male.addEventListener("click", () => {
  statusMale.style.visibility = "hidden";
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (female.checked !== true || male.checked !== true) {
    showError(female, "Choose your gental");
  } else {
    statusMale.style.visibility = "hidden";
  }
  if (username.value === "") {
    showError(username, "Name is required");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isvalidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (tel.value === "") {
    showError(tel, "Telephone number is required");
  } else {
    showSuccess(tel);
  }

  if (date.value === "") {
    showError(date, "Date is required");
  } else {
    showSuccess(date);
  }

  username.value = "";
  email.value = "";
  password.value = "";
  date.value = "";
  tel.value = "";
  female.checked = false;
  male.checked = false;
});

username.addEventListener("keyup", () => {
  if (username.value.length > 3) {
    showSuccess(username);
  }
});

password.addEventListener("keyup", () => {
  if (password.value.length > 3) {
    showSuccess(password);
  }
});

email.addEventListener("keyup", () => {
  if (email.value.includes("@")) {
    showSuccess(email);
  }
});

date.addEventListener("keyup", () => {
  if (date.value === true) {
    showSuccess(date);
  }
});

tel.addEventListener("keyup", () => {
  if (tel.value.length > 6) {
    showSuccess(tel);
  }
});