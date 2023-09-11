const user = JSON.parse(localStorage.getItem("signupDetails"));
const cardContent = document.getElementById("cardContent");

const name = `<p>${user.name}</p>`;
const email = `<p>${user.email}</p>`;
const contact = `<p>${user.contact}</p>`;
const address = `<p>${user.address}</p>`;

cardContent.innerHTML += name;
cardContent.innerHTML += email;
cardContent.innerHTML += contact;
cardContent.innerHTML += address;
