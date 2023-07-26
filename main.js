const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("emailAddress");
const formPassword = document.getElementById("formPassword");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

const checkInputs = () => {
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = email.value;
  const passwordValue = formPassword.value;

  // checking the value of each input field and check them for error or success
  if (firstNameValue === "") {
    checkError(firstName, "First Name cannot be empty");
  } else {
    setSuccess(firstName);
  }
  if (lastNameValue === "") {
    checkError(lastName, "Last Name cannot be empty");
  } else {
    setSuccess(lastName);
  }
  if (emailValue === "") {
    checkError(email, "Looks like it is not an email");
  } else if (!isEmail(emailValue)) {
    checkError(email, "Email is not valid");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    checkError(formPassword, "Password cannot be empty");
  } else {
    setSuccess(formPassword);
  }
};

const checkError = (input, message) => {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form_control error";
};
const setSuccess = (input) => {
  let formControl = input.parentElement;
  formControl.className = "form_control";
};
const isEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(email);
};
