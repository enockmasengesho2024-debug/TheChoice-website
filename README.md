# Thechoice – Travel, Style & Booking

**Course:** SWDV 116  
**Project:** Final – Finishing Your Business Site  

Thechoice is a fake business website that combines curated travel packages, Styles, and a simple online booking experience. This project demonstrates semantic HTML, external CSS, basic JavaScript, and a responsive layout.

## GitHub & Live Site

- **Repo:** (https://github.com/enockmasengesho2024-debug/TheChoice-website.git)  
- **Live Site (GitHub Pages):** (https://github.com/enockmasengesho2024-debug/TheChoice-website)` 



## Project Overview

The site is built as a small multi-page business website:

- Shared header with global navigation on every page  
- Consistent of footer   
- Card-based layouts for travel and style offers  
- Fully styled booking form with realistic fields  
- Mobile-friendly navigation and layouts

The visual style uses a light, clean theme with neutral backgrounds, dark text, and green as the main accent color for calls to action.



## all Pages

### `home.html` (or `index.html`)
The main landing page for Thechoice.

- Hero section with brand intro and primary call-to-action buttons:
  - “Start a Booking” → `booking.html`
  - “Explore Trips” → `travel.html`
- “Why Choose Thechoice?” highlight cards (Curated Travel, Style for Every Trip, Simple Secure Booking)
- “Featured Picks This Week” cards that link to the Travel and Style pages

### `about.html`
Explains what Thechoice is and what the business offers to the client.

- Short story/mission of the brand  
- Overview of how travel packages and style recommendations work together  
- Optional section describing values or how the service supports customers

### `contact.html`
Gives visitors a clear way to reach the products and services.

- Contact details (email and/or phone)  
- Short explanation of typical response time or what users can ask about  
- Link back to the Booking page for people ready to reserve a trip

### `booking.html`
Primary booking form for trips. This page is the fully styled form requirement.

- Fields:
  - Full name  
  - Date of birth  
  - Phone number  
  - Address and city  
  - Email address  
  - Check-in and check-out dates  
  - Number of guests  
  - Room preferences (textarea)  
  - ID upload (file input)  
  - Room type (select)  
  - Payment method (select)  
  - “Allow the agreement” checkbox (required)  
- Submit button: **Book Now**

### `travel.html`
Shows curated travel offers using hotel cards.

- Each card includes:
  - Image  
  - Hotel name  
  - Short description  
  - Price per night  
  - “Book Now” button that triggers a JavaScript popup and then navigates to `booking.html`

### `style.html`
Shows clothing/outfit ideas using style cards.

- Each card includes:
  - Image  
  - Item/collection name  
  - Short description  
  - Optional button linking to more details or a related page


## local setup

- clone or  download the repository:

- git clone `https://github.com/enockmasengesho2024-debug/TheChoice-website`

## open the project folder
 - Open home.html or index.html in your browser (double-click or drag into a browser window).
 - GitHub pages, In the GitHub repo settings, enable GitHub Pages and set the source to the main branch and /root. and visit `https://github.com/enockmasengesho2024-debug/TheChoice-website`

## JavaScript Features

All JavaScript is in `main.js` and loaded via a `<script src="main.js"></script>` tag at the bottom of each page that uses it.

### 1. “Book Now” Popup

```js
function showBookingMessage(hotelName, pricePerNight) {
  const message =
    "You selected " + hotelName +
    " at " + pricePerNight + " per night.\n\n" +
    "We’ll take you to the booking form next!";

  alert(message);
  console.log(message);
}