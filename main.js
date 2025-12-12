// Runs when the user clicks "Book Now" on a hotel card
function showBookingMessage(hotelName, pricePerNight) {
  const message =
    "You selected " + hotelName +
    " at " + pricePerNight + " per night.\n\n" +
    "We’ll take you to the booking form next!";

  // Popup for the user
  alert(message);

  // Log for you (developer) in the console
  console.log(message);
}
function toggleNav() {
  const nav = document.getElementById("main-nav");
  nav.classList.toggle("nav-open");
}
// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
