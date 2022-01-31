const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    modeText.innerHTML = "Light Mode";
  } else {
    modeText.innerHTML = "Dark Mode";
  }
});

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});
