const form = document.querySelector("form");

const handleSubmit = submitEvent => {
  if (username.classList.contains("invalid")) {
    submitEvent.preventDefault();
  }
};

form.addEventListener("submit", handleSubmit);

const username = document.querySelector("#username");

const validateInput = inputEvent => {
  let isValid = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z*$-+?_&=!%{}/'.]*$/.test(
    inputEvent.target.value
  );
  if (!isValid) {
    inputEvent.target.classList.add("invalid");
    inputEvent.target.classList.remove("valid");
    const msg = document.createElement("p");
    inputEvent.target.parentNode.appendChild(msg);
    msg.innerText =
      "username must contain letters, numbers and ONE special character";
  } else {
    inputEvent.target.classList.add("valid");
    inputEvent.target.classList.remove("invalid");
    inputEvent.target.parentNode.removeChild(
      inputEvent.target.parentNode.children[1]
    );
  }
};

username.addEventListener("blur", validateInput);
