function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (u.length < 3 || p.length !== 8) {
    alert("تأكد من البيانات");
    return;
  }

  localStorage.setItem("user", u);
  window.location = "chat.html";
}

function sendMessage() {
  let msg = document.getElementById("msg").value;
  if (!msg) return;

  let box = document.getElementById("messages");
  box.innerHTML += `<div class="message"><b>${localStorage.user}:</b> ${msg}</div>`;
  document.getElementById("msg").value = "";
}

function toggle() {
  let s = document.getElementById("side");
  s.style.left = s.style.left === "0px" ? "-200px" : "0px";
}

function logout() {
  localStorage.clear();
  window.location = "index.html";
}

if (document.getElementById("user")) {
  document.getElementById("user").innerText =
    "Username: " + localStorage.user;
}

function saveAge() {
  localStorage.age = document.getElementById("age").value;
  alert("تم حفظ العمر");
}
