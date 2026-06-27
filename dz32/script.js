let name = document.querySelector(".name");
let email = document.querySelector(".email");
let qw = document.querySelector(".qw");
let form = document.querySelector("form");
let modal = document.querySelector("#modal");
document.querySelector("#btn").addEventListener("click", function () {
    modal.style.display = "block";

})
document.querySelector(".close").addEventListener("click", function () {
    modal.style.display = "none"
})

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
})


form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Сохраненные данные: Имя:" + name.value +" Электронная почта:"+ email.value+" Вопрос:"+ qw.value);

})
