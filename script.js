// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-header nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Automatically update footer year
document.getElementById("year").textContent = new Date().getFullYear();
