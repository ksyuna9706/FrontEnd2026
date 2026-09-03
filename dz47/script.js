document.querySelector("#load").addEventListener("click", load);

async function load() {
    try {
        let url = "https://json-placeholder.mock.beeceptor.com/todos";
        let response = await fetch(url);
        let data = await response.json();
        let html = data.map(function (item) {

            if (item.completed === true) {
                return "<li> Пользователь :" + item.userId + " с ID: " + item.id + " выполнил задачу " + item.title + "  со значнием " + item.completed + "</li>"
            }
        })
        document.querySelector("#list").insertAdjacentHTML("afterbegin", html.join(" "));

    }
    catch (error) {
        console.error("Ошибка при загрузке :", error)
    }
}