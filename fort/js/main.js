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
    card.classList.add(`${i.type.value}`);
  });
} /*
async function getCosmetics() {
  try {
    const response = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/new`
    );
    const data = await response.json();
    const cosmeticsObject = data.data.items;
    cardCreator(cosmeticsObject.slice(0, 100));
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      const input = await DOMSelectors.itemSearchValue.value; // works
      const newResp = await fetch(
        `https://fortnite-api.com/v2/cosmetics/br/search/all/?name=${input}`
      );
      const data = await newResp.json();
      const searchObject = data.data;
      DOMSelectors.itemcontainer.innerHTML = "";
      if (data.status == 200) {
        DOMSelectors.h1.innerHTML = "Fortnite API";
        cardCreator(searchObject);
      } else {
        DOMSelectors.h1.innerHTML = data.error; // my current workaround for errors not being parsed thru search
      }
      console.log(data);
    });
    if (data.status != 200) {
      throw new Error(data.error);
    }
  } catch (error) {
    DOMSelectors.h1.innerHTML = error;
  }
} */
async function getCosmetics() {
  try {
    const response = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/new`
    );
    const data = await response.json();
    const cosmeticsObject = data.data.items;
    cardCreator(cosmeticsObject.slice(0, 100));
    const input = await DOMSelectors.itemSearchValue.value; // works
    const newResp = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/search/all/?name=${input}`
    );
    const newdata = await newResp.json();
    const searchObject = newdata.data;
    form.addEventListener("submit", async function (event) {
      event.preventDefault;
      cardCreator(searchObject);
    });
  } catch (error) {
    DOMSelectors.h1.innerHTML = error;
  }
}

getCosmetics();

// form add event listener change the API to /search/all/?name=${userinput}
// google search "fetch api with endpoint/parameters"
