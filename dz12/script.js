let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
month.forEach(function (n) {
    document.writeln("<div align='center' >" + n + "</div>");
});
let el;
for (let i = 0; i < month.length; i++) {
    el = document.querySelectorAll("div")[i];
    el.style.width = "1000px";
    el.style.height = "30px";
    el.style.fontWeight = "bold";
    el.style.background = `rgb(${createColor()},${createColor()},${createColor()})`;
}
function createColor() {
    return Math.floor(Math.random() * 256);
}