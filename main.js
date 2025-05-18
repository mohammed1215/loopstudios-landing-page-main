let openBarButton = document.querySelector(".header__bar")
let closeBarButton = document.querySelector(".header__nav__close")

function handleOpenMenu(e) {
  document.querySelector(".header__nav").dataset.isActive = "true"
}
function handleCloseMenu(e) {
  document.querySelector(".header__nav").dataset.isActive = "false"
}

openBarButton.addEventListener("click", handleOpenMenu)
closeBarButton.addEventListener("click", handleCloseMenu)
