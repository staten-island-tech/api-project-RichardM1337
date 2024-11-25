import "../css/background.css" assert { type: "css" };
import "../css/style.css" assert { type: "css" };
import { DOMSelectors } from "./domselectors";
const form = DOMSelectors.itemSearchForm;
function cardCreator(i) {
  DOMSelectors.itemcontainer.innerHTML = "";
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <img src="${i.images["icon"]}" class="itemicon" alt="Picture of ${i.name}">
      <h2 tabindex="0" class="itemname">${i.name}</h1>
      <div class="dropdownMenu">
        <details>
          <summary>
            Information
          </summary>
          <p tabindex="0" class="description">Description: "${i.description}"</p>
          <p tabindex="0" class="itemtyperarity"> ${i.rarity.displayValue} ${i.type.displayValue}</p>
          <p tabindex="0" class="partOfSet">${i.set}</p>
          <p tabindex="0" class="introduced">${i.introduction}</p>
      </div>`;
  DOMSelectors.itemcontainer.appendChild(card);
  card.classList.add(`${i.rarity.value}`);
  card.id = `${i.type.value}`;
}

async function getCosmetics() {
  try {
    const response = await fetch(`https://fortnite-api.com/v2/cosmetics/new`);
    const data = await response.json();
    const cosmeticsObject = data.data.items;
    console.log(cosmeticsObject.br[0]);
    cosmeticsObject.br.forEach((cosmetic) => cardCreator(cosmetic));
    if (data.status != 200) {
      throw new Error(data.error);
    }
  } catch (error) {
    console.error(error);
    DOMSelectors.h1.innerHTML = error;
  }
}
async function cosmeticsSearch(input) {
  try {
    const response = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/search?name=${input}`
    );
    const data = await response.json();
    const cosmeticsObject = data.data;
    console.log(cosmeticsObject.id);
    DOMSelectors.h1.innerHTML = "Fortnite API";
    DOMSelectors.itemcontainer.innerHTML = "";
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
  DOMSelectors.itemSearchValue.value = "";
  DOMSelectors.h2.innerHTML = "Now showing newest items";
  getCosmetics();
});

// hover, dropdown, nextpage?
// fix .text in a nonbruteforce way, separate outline color for gifs?
