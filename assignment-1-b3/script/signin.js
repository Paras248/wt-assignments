import { Modal } from "./modal.js";

const signinForm = document.querySelector("#signin-form");

signinForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!localStorage.getItem("signupDetails")) {
        const modal = new Modal();

        modal.renderModal(
            '<div><h4>Please Sign up first</h4><br> <p style="color:grey;font-size: 13px;">Redirecting to sign up...</p></div>'
        );

        setTimeout(() => {
            modal.removeModal();
            window.location.replace("../signup.html");
        }, 1200);
    } else {
        const user = JSON.parse(localStorage.getItem("signupDetails"));
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        if (
            email.value.trim().length === 0 ||
            password.value.trim().length === 0
        ) {
            const modal = new Modal();
            modal.renderModal(
                '<p style="color: red;">Please enter all fields</p>'
            );
            modal.getModalContainer().addEventListener("click", () => {
                modal.removeModal();
            });
            return;
        }
        if (user.email !== email.value || user.password !== password.value) {
            const modal = new Modal();
            modal.renderModal(
                '<p style="color: red;">Email or password don\'t match</p>'
            );
            modal.getModalContainer().addEventListener("click", () => {
                modal.removeModal();
            });
        } else {
            const modal = new Modal();
            modal.renderModal(
                '<p style="color: green;">User signed in successfully</p>'
            );
            setTimeout(() => {
                modal.removeModal();
            }, 1000);

            const signupLink = document.getElementById("signup-link");
            signupLink.innerText = "Profile";
            signupLink.href = "../profile.html";
            const signinLink = document.getElementById("signin-link");
            signinLink.innerText = "Signout";
            signinLink.addEventListener("click", () => {
                localStorage.removeItem("signupDetails");
            });
            signinLink.href = "../homepage.html";
        }
    }
});
