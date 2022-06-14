import galleryItems from "./items_gallery.js";
import Siema from "siema";

const siema = document.querySelector(".siema");

const galleryMarkup = galleryItems
  .map((item) => {
    return `
      <img src="${item.preview}" class="imgSiema">
          `;
  })
  .join("");

siema.insertAdjacentHTML("afterbegin", galleryMarkup);

const mySiema = new Siema({
  duration: 200,
  perPage: 2,
});

document.querySelector(".prev").addEventListener("click", () => mySiema.prev());
document.querySelector(".next").addEventListener("click", () => mySiema.next());

// console.dir(mySiema);

const styleRef = document.querySelectorAll(
  "div[style='float: left; width: 4.16667%;']"
);

styleRef.forEach((img) => (img.style.backgroundColor = "#ab9595"));
// console.log(styleRef);
