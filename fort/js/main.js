import "../css/background.css" assert { type: "css" };
import "../css/style.css" assert { type: "css" };

let API = `https://fortnite-api.com/v2/cosmetics/br`;
import { DOMSelectors } from "./domselectors";

const input = DOMSelectors.itemSearch.value;

function cardCreator(arr) {
  arr.slice(0, 50).forEach((i) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
                  <img src="${i.images.icon}" class="itemicon" alt="${i.name}">
                  <h1 class="name">${i.name}</h1>
                  <p class="itemtype"> ${i.type.displayValue}</p>
                  <p class="rarity"> ${i.rarity.displayValue}</p>`;
    card.classList.add(`${i.rarity.displayValue}`);
    card.classList.add(`${i.type.value}`);
    DOMSelectors.itemcontainer.appendChild(card);
  });
}

async function getCosmetics(API) {
  try {
    const response = await fetch(API);

    const data = await response.json();
    const cosmeticsObject = data.data;
    console.log(cosmeticsObject.slice(0, 100)); // remove
    cardCreator(cosmeticsObject.slice(0, 50));
  } catch (error) {}
}

getCosmetics(API);

/* need to limit this so ur website doesnt crash loser */

// form add event listener change the API to /search/all/?name=${userinput}
