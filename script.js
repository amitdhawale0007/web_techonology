
const form = document.getElementById("loginForm");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const captchaText = document.getElementById("captchaText");
const captchaInput = document.getElementById("captchaInput");
const message = document.getElementById("message");

function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";

    for (let i = 0; i < 6; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }

    captchaText.textContent = code;
    captchaInput.value = "";
}

document.getElementById("refreshCaptcha")
    .addEventListener("click", generateCaptcha);

togglePassword.addEventListener("click", () => {
    const isHidden = password.type === "password";
    password.type = isHidden ? "text" : "password";
    togglePassword.textContent = isHidden ? "Hide" : "Show";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (captchaInput.value.trim().toUpperCase()
        !== captchaText.textContent) {
        message.style.color = "#ff7070";
        message.textContent = "Incorrect CAPTCHA. Please try again.";
        generateCaptcha();
        return;
    }

    message.style.color = "#00ffb3";
    message.textContent =
        "Demo validation successful! No account was created.";

    generateCaptcha();
});
