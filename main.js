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

// change images
function handleResize(e) {
  let cardImages = document.querySelectorAll(".achievments__card")

  if (window.innerWidth <= 600) {
    cardImages.forEach((card) => {
      card.dataset.smallSize = "true"
    })
  } else {
    cardImages.forEach((card) => {
      card.dataset.smallSize = "false"
    })
  }
}

handleResize()

window.addEventListener("resize", handleResize)
