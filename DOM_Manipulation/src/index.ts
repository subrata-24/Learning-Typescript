const userForm = document.querySelector("form") as HTMLFormElement; // It selects the first form element of html file
// console.log(form);

// const form = document.querySelector(".user-form") as HTMLFormElement; // It selects the first form element of html file that class name is "user-form"
// console.log(form);

const userName = document.querySelector("#name") as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userCountry = document.querySelector("#country") as HTMLSelectElement;
const userFeedback= document.querySelector("#feedback") as HTMLTextAreaElement;

userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        name: userName.value,
        email: userEmail.value,
        country: userCountry.value,
        feedback: userFeedback.value
    }
    console.log(data)
})