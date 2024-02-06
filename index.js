const hemburger = document.getElementById("hemburger");
let vidBtn = document.getElementById("videoinaction");

hemburger.addEventListener("click", horizontalNavShowOrHide);
vidBtn.addEventListener("click", () => {
  document
    .getElementById("autoVideo")
    .setAttribute(
      "src",
      "https://typedream-assets.sfo3.cdn.digitaloceanspaces.com/ai-site-builder-landing-page.mp4"
    );
  vidBtn.style.display = "none";
});

function horizontalNavShowOrHide() {
  const hemburger = document.querySelector(".hemburger_navlinks");
  const nav = document.querySelector("nav");
  if (hemburger.classList.contains("show")) {
    hemburger.classList.remove("show");
    nav.style.backgroundColor = "#ffffffb3";
  } else {
    hemburger.classList.add("show");
    nav.style.backgroundColor = "#ffffff";
  }
}
