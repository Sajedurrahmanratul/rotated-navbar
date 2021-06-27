const open = document.getElementById("open");
const close = document.getElementById("close");
const contaienr = document.querySelector(".container");

open.addEventListener("click", function () {
    contaienr.classList.add("show-nav");
});

close.addEventListener("click", function () {
    contaienr.classList.remove("show-nav")
});