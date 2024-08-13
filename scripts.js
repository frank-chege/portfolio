// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
function toggleMenu() {
  const smallNav = document.querySelector(".small_nav");

  // Check the screen width
  if (window.innerWidth <= 768) {
    if (smallNav.style.display === "none" || smallNav.style.display === "") {
      smallNav.style.display = "block";

      // Add event listener for clicks outside the menu
      document.addEventListener("click", closeMenuOnClickOutside);
    } else {
      smallNav.style.display = "none";
      document.removeEventListener("click", closeMenuOnClickOutside);
    }
  } else {
    // Hide smallNav if the screen width exceeds 768px
    smallNav.style.display = "none";
  }
}

// Function to close menu when clicking outside of it
function closeMenuOnClickOutside(event) {
  const smallNav = document.querySelector(".small_nav");
  const menuIcon = document.querySelector(".menu_icon"); // Assuming you have a menu icon

  // Close menu if the click is outside the menu and not on the menu icon
  if (!smallNav.contains(event.target) && !menuIcon.contains(event.target)) {
    smallNav.style.display = "none";
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

// Function to close menu when a menu item is selected
const menuItems = document.querySelectorAll(".side_nav_links li a");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const smallNav = document.querySelector(".small_nav");
    smallNav.style.display = "none";
    document.removeEventListener("click", closeMenuOnClickOutside);
  });
});

// Hide the small nav on window resize if the width exceeds 768px
window.addEventListener("resize", function () {
  const smallNav = document.querySelector(".small_nav");
  if (window.innerWidth > 768) {
    smallNav.style.display = "none";
  }
});
