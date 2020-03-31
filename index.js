const form = document.querySelector("form");

const handleSubmit = submitEvent => {
  if (
    username.classList.contains("invalid") ||
    firstName.classList.contains("invalid") ||
    lastName.classList.contains("invalid") ||
    dob.classList.contains("invalid")
  ) {
    submitEvent.preventDefault();
    alert(
      "You're missing some fields - please make sure they're all filled correctly"
    );
  }
};

form.addEventListener("submit", handleSubmit);

const username = document.querySelector("#username");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const dob = document.querySelector("#dob");

const usernameValidateInput = inputEvent => {
  let isValid = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z*$-+?_&=!%{}/'.]*$/.test(
    inputEvent.target.value
  );
  if (!isValid) {
    inputEvent.target.classList.add("invalid");
    inputEvent.target.classList.remove("valid");
    if (inputEvent.target.parentNode.children.length === 1) {
      const msg = document.createElement("p");
      inputEvent.target.parentNode.appendChild(msg);
      msg.innerText =
        "username must contain letters, numbers and ONE special character";
    }
  } else {
    inputEvent.target.classList.add("valid");
    inputEvent.target.classList.remove("invalid");
    if (inputEvent.target.parentNode.children.length > 1) {
      inputEvent.target.parentNode.removeChild(
        inputEvent.target.parentNode.children[1]
      );
    }
  }
};

const nameValidateInput = nameInputEvent => {
  let isNameValid = /^[a-zA-Z]+((\s|\-)[a-zA-Z]+)?$/.test(
    nameInputEvent.target.value
  );
  if (!isNameValid) {
    nameInputEvent.target.classList.add("invalid");
    nameInputEvent.target.classList.remove("valid");
    if (nameInputEvent.target.parentNode.children.length === 1) {
      const msg = document.createElement("p");
      nameInputEvent.target.parentNode.appendChild(msg);
      msg.innerText = "Names can only include letters, hyphens and apostrophes";
    }
  } else {
    nameInputEvent.target.classList.add("valid");
    nameInputEvent.target.classList.remove("invalid");
    if (nameInputEvent.target.parentNode.children.length > 1) {
      nameInputEvent.target.parentNode.removeChild(
        nameInputEvent.target.parentNode.children[1]
      );
    }
  }
};

const dobValidateInput = dobInputEvent => {
  let dateOfBirth = dobInputEvent.target.value;
  let day = new Date();
  let birthYear = dateOfBirth.split("-");
  let age = day.getFullYear() - Number(birthYear[0]);

  let isDobValid = /[\d]/.test(dateOfBirth);
  console.log(isDobValid);
  if (!isDobValid || age < 18) {
    console.log("not valid");
    dobInputEvent.target.classList.add("invalid");
    dobInputEvent.target.classList.remove("valid");
    if (dobInputEvent.target.parentNode.children.length === 1) {
      const msg = document.createElement("p");
      dobInputEvent.target.parentNode.appendChild(msg);
      msg.innerText = "DOB must be a valid date and over 18 years of age";
    }
  } else {
    console.log("valid");
    dobInputEvent.target.classList.add("valid");
    dobInputEvent.target.classList.remove("invalid");
    if (dobInputEvent.target.parentNode.children.length > 1) {
      dobInputEvent.target.parentNode.removeChild(
        dobInputEvent.target.parentNode.children[1]
      );
    }
  }
};

username.addEventListener("blur", usernameValidateInput);
firstName.addEventListener("input", nameValidateInput);
lastName.addEventListener("input", nameValidateInput);
dob.addEventListener("blur", dobValidateInput);
