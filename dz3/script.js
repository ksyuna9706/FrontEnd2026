let kop = prompt("Введите количество от 1 до 99", 88);
if (kop >= 1 && kop <= 99) {
    if (kop >= 10 && kop <= 20) {
        alert(`${kop} копеек`);
    } else if (kop % 10 == 1) {
        alert(`${kop} копейка`);
    } else if (kop % 10 == 2 || kop % 10 == 3 || kop % 10 == 4) {
        alert(`${kop} копейки`);
    } else {
        alert(`${kop} копеек`);
    }
}
else {
    alert("Некорректное значение");
}