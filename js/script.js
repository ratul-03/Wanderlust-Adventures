// Get references to the mobile bar and dropdown menu
const mobileBar = document.getElementById('mobile_bar');
const dropdownMenu = document.getElementById('dropdown_menu');

// Add a click event to toggle the dropdown menu
mobileBar.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});
