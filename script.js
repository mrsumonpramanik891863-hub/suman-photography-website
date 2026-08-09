// Booking form can be function toggleMenu() {
  const menu = document.getElementById("navMenu");

  if (menu) {
    menu.classList.toggle("show");
  }
}


document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll("#navMenu a");

  links.forEach(function (link) {

    link.addEventListener("click", function () {

      const menu = document.getElementById("navMenu");

      if (menu) {
        menu.classList.remove("show");
      }

    });

  });

});


function sendBooking(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const eventType = document.getElementById("eventType").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "91XXXXXXXXXX";

  const text =
    "Hello Suman Photography!%0A%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Phone: " + encodeURIComponent(phone) + "%0A" +
    "Date: " + encodeURIComponent(date) + "%0A" +
    "Event: " + encodeURIComponent(eventType) + "%0A" +
    "Message: " + encodeURIComponent(message);

  window.open(
    "https://wa.me/" + whatsappNumber + "?text=" + text,
    "_blank"
  );
} to your Google Sheet/email before launch.
