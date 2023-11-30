import "../css/background.css" assert { type: "css" };

const API = `https://fortnite-api.com/v2/cosmetics/br`;
import { DOMSelectors } from "./domselectors";
/* async function getCosmetics(API) {
  try {
    const response = await fetch(API);

    const data = await response.json();
    const cosmeticsObject = data.data;
    cosmeticsObject.forEach((i) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
            <img src="${i.images.icon}" class="movieimg" alt="${i.name}">
            <h1 class="name">${i.name}</h1>
            <p class="itemtype"> ${i.type.displayValue}</p>
            <p class="rarity"> ${i.rarity.displayValue}</p>`;
      DOMSelectors.moviecontainer.appendChild(card);
    });
  } catch (error) {}
}

getCosmetics(API);
 */

/* need to limit this so ur website doesnt crash loser */
