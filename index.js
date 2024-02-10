const hemburger = document.getElementById("hemburger");
const vidBtn = document.getElementById("videoinaction");
const chat = document.getElementById("chatbutton");

{
  const questions = Array(document.querySelectorAll(".question"));
  const answers = Array(document.querySelectorAll(".answer"));

  for (let i = 0; i < questions[0].length; i++) {
    questions[0][i].addEventListener("click", () => {
      if (!answers[0][i].classList.contains("show")) {
        for (answer of answers[0]) {
          if (answer.classList.contains("show")) {
            answer.previousElementSibling.classList.remove("borderradius");
            answer.previousElementSibling.lastElementChild.innerHTML =
              '<path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>';
            answer.classList.remove("show");
          }
        }
        answers[0][i].classList.add("show");
        questions[0][i].classList.add("borderradius");
        document.querySelector(`#${questions[0][i].id} svg`).innerHTML =
          '<path d="M5 11h14v2H5z"></path>';
      } else {
        answers[0][i].classList.remove("show");
        questions[0][i].classList.remove("borderradius");
        document.querySelector(`#${questions[0][i].id} svg`).innerHTML =
          '<path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>';
      }
    });
  }
}

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
