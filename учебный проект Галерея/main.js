const loadBtn = document.querySelector(".load-btn");
const cleanBtn = document.querySelector(".clean-btn");
const wrap = document.querySelector(".image-container");
const loader = document.getElementById("loader");
const URL = "https://api.thecatapi.com/v1/images/search?limit=10";

function showLoader() {
  loader.style.display = "flex";
}

function hideLoader() {
  loader.style.display = "none";
}

async function loadImage() {
  try {
    showLoader();
    const res = await fetch(URL);
    const data = await res.json();
    data.forEach((cat) => {
      const img = document.createElement("img");
      img.src = cat.url;
      img.alt = "Cat Image";
      wrap.appendChild(img);
    });
  } catch (error) {
    console.error("Ошибка загрузки изображений:", error);
  } finally {
    hideLoader();
  }
}

loadBtn.addEventListener("click", loadImage);

cleanBtn.addEventListener("click", () => {
  wrap.innerHTML = "";
});