// ========================================
// SUMAN PHOTOGRAPHY
// WEBSITE SCRIPT
// ========================================


// MOBILE MENU
const navLinks = document.querySelector(".nav-links");

const menuButton = document.querySelector(".menu");


if (menuButton && navLinks) {

  menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("open");

  });

}


// CLOSE MOBILE MENU AFTER CLICKING A LINK

if (navLinks) {

  const links = navLinks.querySelectorAll("a");

  links.forEach(function (link) {

    link.addEventListener("click", function () {

      navLinks.classList.remove("open");

    });

  });

}


// CURRENT YEAR IN FOOTER

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

  copyright.innerHTML =
    "© " + year +
    " Suman Photography. All Rights Reserved.";

}
