document.getElementById("loginForm").addEventListener("submit", function(e) {
 e.preventDefault();
 const user = document.getElementById("username").value.trim();
 const pass = document.getElementById("password").value;
 const msg = document.getElementById("message");
 if (!user || !pass) msg.textContent = "Enter username and password.";
 else msg.textContent = "Login submitted (demo only).";
});