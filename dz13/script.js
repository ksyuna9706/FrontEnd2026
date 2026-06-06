let mas = [" Копеек", " Копейка", " Копейки", "-Число за пределами диапазона"];
let first = 1;
let last = 99;
let ch = prompt("Введите количество копеек", 5);
document.writeln(ch, countKop(first, last, ch)(mas));

function countKop(start, end, num) {
    let n = num % 10;
    let m = num % 100;
    let chislo;
    if (start <= num && num <= end) {
        chislo = n == 1 && m != 11 ? 1
            : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2
                : 0;
    } else {
        chislo = 3;
    }
    return function (arr) {
        return arr[chislo];
    }

}