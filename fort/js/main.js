import "../css/background.css" assert { type: "css" };
import "../css/style.css" assert { type: "css" };

import { DOMSelectors } from "./domselectors";
const form = DOMSelectors.itemSearchForm;

function cardCreator(arr) {
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
    card.classList.add(`${i.type.value}`);
  });
}

async function getCosmetics() {
  try {
    const response = await fetch(`https://fortnite-api.com/v2/cosmetics/br/`);
    const data = await response.json();
    const cosmeticsObject = data.data;
    console.log(cosmeticsObject.slice(0, 10)); // remove
    cardCreator(cosmeticsObject.slice(0, 100));
    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    if (data.status == 400) {
      throw new Error(data.error);
    }
  } catch (error) {
    DOMSelectors.h1.innerHTML = error;
  }
}

getCosmetics();

// form add event listener change the API to /search/all/?name=${userinput}
// google search "fetch api with endpoint/parameters"
