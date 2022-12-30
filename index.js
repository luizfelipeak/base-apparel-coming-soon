const form = document.getElementById("form-email");
const email = document.getElementById("input-email");
const placeholder = document.getElementsByClassName("hero__send-email__warning")[0];
const error = document.getElementsByClassName("hero__send-email__error")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = Object.fromEntries(new FormData(form));
  const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(result.email);

  if(validation) {
    email.classList.remove("invalid");
    placeholder.classList.remove("show");
    error.classList.remove("show");
  }
  else {
    email.classList.add("invalid");
    placeholder.classList.add("show");
    error.classList.add("show");
  }
});