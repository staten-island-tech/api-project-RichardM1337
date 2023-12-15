import "../css/background.css" assert { type: "css" };
import "../css/style.css" assert { type: "css" };
import { DOMSelectors } from "./domselectors";
const form = DOMSelectors.itemSearchForm;
function cardCreator(arr) {
  DOMSelectors.itemcontainer.innerHTML = "";
  arr.forEach((i) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${i.images.icon}" class="itemicon" alt="${i.name}">
      <h1 class="name">${i.name}</h1>
      <p class="itemtype"> ${i.type.displayValue}</p>
      <p class="rarity"> ${i.rarity.displayValue}</p>`;
    DOMSelectors.itemcontainer.appendChild(card);
    card.classList.add(`${i.rarity.value}`);
    card.id = `${i.type.value}`;
  });
}

async function getCosmetics() {
  try {
    const response = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/new`
    );
    const data = await response.json();
    const cosmeticsObject = data.data.items;
    cardCreator(cosmeticsObject.slice(0, 100));
    if (data.status != 200) {
      throw new Error(data.error);
    }
  } catch (error) {
    DOMSelectors.h1.innerHTML = error;
  }
}
async function cosmeticsSearch(input) {
  try {
    const response = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/search/all/?name=${input}`
    );
    const data = await response.json();
    const cosmeticsObject = data.data;
    DOMSelectors.h1.innerHTML = "Fortnite API";
    DOMSelectors.itemcontainer.innerHTML = "";
    console.log(cosmeticsObject); // remove
    cardCreator(cosmeticsObject);
    if (data.status != 200) {
      throw new Error(data.error);
    }
  } catch (error) {
    console.log(error);
    DOMSelectors.h1.innerHTML =
      "Your item wasn't found. Maybe you spelt it wrong?";
    DOMSelectors.h2.innerHTML = "";
  }
}

getCosmetics();
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = DOMSelectors.itemSearchValue.value;
  cosmeticsSearch(input);
});
DOMSelectors.resetbutton.addEventListener("click", function (event) {
  event.preventDefault();
  DOMSelectors.h1.innerHTML = "Fortnite API";
  DOMSelectors.itemcontainer.innerHTML = "";
  getCosmetics();
});

// the api tends to be very specific at times
// differentiate betyween 200, 400, and 404 erros
// errohandling
// nextpage
