// Password confirmation 

const passwordInput = document.querySelector("#password");
const passwordConfInput = document.querySelector("#confirm-password");
const submitBtn = document.querySelector("submittion")

submitBtn.addEventListener("click",function() {
    const password = passwordInput.value;
    const passwordConfirmation= passwordConfInput.value;

    if (password === passwordConfirmation) {
        passwordConfInput.classList.remove("invalid");
        passwordConfInput.classList.add("valid");
    } else {
        passwordConfInput.classList.add("invalid");
        passwordConfInput.classList.invalid("valid");
    }
})
