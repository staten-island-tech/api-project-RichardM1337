import "../css/background.css" assert { type: "css" };
import "../css/style.css" assert { type: "css" };

let API = `https://fortnite-api.com/v2/cosmetics/br`;
import { DOMSelectors } from "./domselectors";
const form = DOMSelectors.itemSearchForm;
const input = DOMSelectors.itemSearchValue.value;

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
async function cardFilter(arr, input) {
  const newAPI = `https://fortnite-api.com/v2/cosmetics/br/search/all/$name=${input}`;
  const newResponse = await fetch(newAPI);
  const newData = await newResponse.json();
  const newCosmeticsObject = newData.data;
  cardCreator(newCosmeticsObject);
}

async function getCosmetics(API) {
  try {
    const response = await fetch(API);
    const data = await response.json();
    const cosmeticsObject = data.data;
    console.log(cosmeticsObject.slice(0, 10)); // remove
    cardCreator(cosmeticsObject.slice(0, 100));
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      cardFilter(cosmeticsObject, input);
      console.log(input);
    });
  } catch (error) {}
}

getCosmetics(API);

// form add event listener change the API to /search/all/?name=${userinput}
// what form
