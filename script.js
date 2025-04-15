//  FORM ELEMENTS
const ticketForm = document.getElementById("form-ticket");
const fullnameInput = document.getElementById("fullname-input");
const kmInput = document.getElementById("km-input");
const ageInput = document.getElementById("age-input");

// TICKET ELEMENTS

const ticketEl = document.getElementById("section-ticket");
const fullnameTicketEl = document.getElementById("fullname-ticket");
const typeTicketEl = document.getElementById("type-ticket");
const coachTicketEl = document.getElementById("coach-ticket");
const cpCodeTicketEl = document.getElementById("cp-code-ticket");
const priceTicketEl = document.getElementById("price-ticket");
const discountTicketEl = document.getElementById("discount-ticket");

// CONFIG
const pricePerKm = 0.21;
const discountMinor = 0.2;
const discountOver65 = 0.4;

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const generateRandomChar = (
  chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
) => {
  const randomIndex = generateRandomNumber(0, chars.length - 1);
  return chars[randomIndex];
};

ticketForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullname = fullnameInput.value;
  const km = parseInt(kmInput.value);
  const ageRange = ageInput.value;

  console.log("fullname", fullname);
  console.log("km", km);
  console.log("ageRange", ageRange);

  // Calcolo il prezzo del biglietto
  const basePrice = pricePerKm * km;
  let discountAmount = 0;
  let discountType;

  console.log("basePrice", basePrice);

  if (ageRange === "minor") {
    discountAmount = basePrice * discountMinor;
    discountType = "Sconto minorenni";
  }
  if (ageRange === "over65") {
    discountAmount = basePrice * discountOver65;
    discountType = "Sconto over 65";
  }

  const finalPrice = basePrice - discountAmount;

  console.log("basePrice", basePrice);
  console.log("discountAmount", discountAmount);
  console.log("discountType", discountType);
  console.log("finalPrice", finalPrice);

  // Stampo l'output

  fullnameTicketEl.innerText = fullname;
  coachTicketEl.innerText =
    generateRandomChar("ABCDEFGH") + generateRandomNumber(1, 50);
  cpCodeTicketEl.innerText = generateRandomNumber(10000, 99999);
  priceTicketEl.innerText = `€ ${finalPrice.toFixed(2)}`;

  if (discountType) {
    discountTicketEl.innerText = `-€ ${finalPrice.toFixed(2)}`;
    discountTicketEl.classList.remove("d-none");
    typeTicketEl.innerText = `Biglietto con tariffa "${discountType}"`;
  } else {
    discountTicketEl.classList.add("d-none");
    typeTicketEl.innerText = `Biglietto standard`;
  }

  ticketEl.classList.remove("d-none");
});
