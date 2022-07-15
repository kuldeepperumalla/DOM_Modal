"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
var statusCheck = false;

var updateStatus = (e) => {
    if (e) {
        modal.classList.remove("hidden");
    } else modal.classList.add("hidden");
};

for (let i = 0; btnsOpenModal.length > i; i++) {
    btnsOpenModal[i].addEventListener("click", function () {
        console.log(`Button ${btnsOpenModal[i].textContent} Clicked`);
        updateStatus(true);
    });
}

btnCloseModal.addEventListener("click", function () {
    updateStatus(false);
});
