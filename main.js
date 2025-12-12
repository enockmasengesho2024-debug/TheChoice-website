// Runs when the user clicks "Book Now" on a hotel card
function showBookingMessage(hotelName, pricePerNight) {
  const message =
    "You selected " + hotelName +
    " at " + pricePerNight + " per night.\n\n" +
    "We’ll take you to the booking form next!";

  // Popup for the user screen
  alert(message);


  console.log(message);
}
function toggleNav() {
  const nav = document.getElementById("main-nav");
  nav.classList.toggle("nav-open");
}


