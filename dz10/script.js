// let arr = new Array(9);//[1,8,9,6,5,3,7,12,5]=>[9,6,3,12] 

let arr = new Array();
let res = [];
let count = +prompt("Введите количество чисел массива");
for (let i = 0; i < count; i++) {
    let num = +prompt("Введите числа массива");
    arr[i] = num;
}
document.writeln("Исходный массив:" + arr + "<br>");

function mas(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 == 0) {
            console.log(array[i]);
            res.push(array[i]);

        }
    } return res;
}
document.writeln("Новый массив:" + mas(arr));