const ticketForm = document.getElementById("form-biglietto")
const fullnameInput = document.getElementById("fullname-input")
const kmInput = document.getElementById("km-input")
const ageInput = document.getElementById("age-input")

ticketForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullname = fullnameInput.value;
    const km = kmInput.value;
    const age = ageInput.value;

    console.log("fullname", fullname);
    console.log("km", km);
    console.log("age", age);

    
})