"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; btnsOpenModal.length > i; i++) {
    btnsOpenModal[i].addEventListener('click', function () {
        console.log(`Button ${btnsOpenModal[i].textContent} Clicked`);
        modal.classList.remove('hidden')
    });
}