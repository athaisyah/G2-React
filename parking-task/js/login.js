localStorage.setItem("email", "admin@pms.com");
localStorage.setItem("password", "123");

function cekLogin() {
  let emailStored = localStorage.getItem("email"),
    passwordStored = localStorage.getItem("password");

  // Ambil input dari user
  let emailInput = document.getElementById("inputEmail").value,
    passwordInput = document.getElementById("inputPassword").value;

  if (emailInput == emailStored && passwordInput == passwordStored) {
    window.open("index.html", "_self");
  } else {
    alert("Check you Email/ Password!");
  }
}
