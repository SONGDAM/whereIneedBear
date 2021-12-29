"use strict";

const menu = document.querySelector(".button");
const dropdowns = document.querySelectorAll(".main-menu");

menu.addEventListener("click", function (e) {
    for (const dropdown of dropdowns) {
        dropdown.classList.toggle("show")
        console.log("")
    }
});
