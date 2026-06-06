let mas = [];
let max = 0;
let ind = 0;
for (let i = 0; i < 10; i++) {
    mas[i] = +prompt("Введите элемент массива");
    if (mas[i] >= max) {
        max = mas[i];
        ind = i;
    }
}
document.writeln("Исходный массив:" + mas + "<br>");
document.writeln("Максимальный элемент в массиве:" + max + "<br>");
mas.splice(ind, 1);
document.writeln("Массив с удалением максимального элемента:" + mas + "<br>");
mas.unshift(max);
document.writeln("Массив с максимальным элементом в начале:" + mas + "<br>");
let indd=mas.indexOf(max);
console.log(indd);
