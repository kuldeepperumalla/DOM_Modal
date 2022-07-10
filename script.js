'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.close-modal');
const btn = document.querySelector('.show-modal');

btn.addEventListener('click', function () {
    modal.classList.remove("hidden");
})

overlay.addEventListener('click', function () {
    modal.classList.add("hidden");
})