let reg = document.querySelector(".register");
let str = "";

reg.addEventListener("submit", function (event) {
    event.preventDefault();

    let login = reg.login.value;
    let password = reg.psw.value;
    let password2 = reg.psw2.value;


    if (login == "" || password == "" || password2 == "") {
        alert("Все поля должны быть заполнены!");
    } else if (password != password2) {
        alert("Пароли не совпадают");
    } else if (password.length < 6 && password != 0 && password2 != 0) {
        alert("Слишком короткий пароль");
    } else {
        alert("Регистрация прошла успешно");
        reg.login.value = "";
        reg.psw.value = "";
        reg.psw2.value = "";
    }

})