const userForm = document.querySelector("form"); // It selects the first form element of html file
// console.log(form);
// const form = document.querySelector(".user-form") as HTMLFormElement; // It selects the first form element of html file that class name is "user-form"
// console.log(form);
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#country");
const userFeedback = document.querySelector("#feedback");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        name: userName.value,
        email: userEmail.value,
        country: userCountry.value,
        feedback: userFeedback.value
    };
    console.log(data);
});
export {};
//# sourceMappingURL=index.js.map