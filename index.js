const hemburger = document.getElementById("hemburger");
const vidBtn = document.getElementById("videoinaction");
const chat = document.getElementById("chatbutton");

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

chat.addEventListener("click", (e) => {
  const hiddenDiv = document.querySelector('div[aria-hidden="true"]');
  const visibleDiv = document.querySelector('div[aria-hidden="false"]');
  hiddenDiv.style.translate = "0 -50px";
  hiddenDiv.style.visibility = "visible";
  hiddenDiv.setAttribute("aria-hidden", "false");
  visibleDiv.style.translate = "0 -20px";
  visibleDiv.style.visibility = "hidden";
  visibleDiv.setAttribute("aria-hidden", "true");
  console.log(hiddenDiv);
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
