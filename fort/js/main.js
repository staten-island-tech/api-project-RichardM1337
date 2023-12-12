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
                      <p class="rarity"> ${i.rarity.id}</p>`;
    DOMSelectors.itemcontainer.appendChild(card);
    card.classList.add(`${i.rarity.id.toLowerCase()}`);
    card.classList.add(`${i.type.value}`);
  });
}

async function cosmeticsSearch(input) {
  try {
    const response = await fetch(
      `https://fortniteapi.io/v2/items/list?lang=en`,
      {
        headers: {
          Authorization: "2742ddbe-5e58be8f-c2bf24a2-98f1c48e",
        },
      }
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
