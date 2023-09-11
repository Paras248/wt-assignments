import { Modal } from "./modal.js";
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formValues = this.children;
    const signupDetails = {
        name: formValues[0].value,
        email: formValues[1].value,
        address: formValues[2].value,
        contact: formValues[3].value,
        password: formValues[4].value,
    };
    let i = 0;
    for (const keys in signupDetails) {
        signupDetails[keys] = formValues[i++].value.trim();
    }
    i = 0;
    let modal;
    for (const keys in signupDetails) {
        if (!signupDetails[keys]) {
            modal = new Modal();
            modal.renderModal(
                '<p style="color: red;">Please enter all fields</p>'
            );
            break;
        }
    }
    if (modal) {
        modal.getModalContainer().addEventListener("click", () => {
            modal.removeModal();
        });
    } else {
        localStorage.setItem("signupDetails", JSON.stringify(signupDetails));
        modal = new Modal();
        modal.renderModal(
            '<div><h4>User registered successfully!!!</h4><br> <p style="color:grey;font-size: 13px;">Redirecting to sign in...</p></div>'
        );
        setTimeout(() => {
            modal.removeModal();
            window.location.replace("../signin.html");
        }, 1200);
    }
});
