const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    dropdownMenu.classList.toggle("visible");
  }  
})

dropdownMenu.addEventListener("mouseleave", (e) => {
  const hideTimeout = setTimeout(removeFunc, 2000);
  
  
})

dropdownMenu.addEventListener("mouseenter", () => {
  clearTimeout(hideTimeout);
});

function removeFunc(){
  dropdownMenu.classList.remove("visible");
}