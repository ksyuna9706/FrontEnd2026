let str = prompt("Введите число:", "12345622245632");
let count = 0;
countNumber(str);
function countNumber(str) {
    let n = str.at(-1);
    for (let i = 0; i < str.length; i++) {
        if (n == str.at(i)) {
            count++;
        } 
    } 
    document.writeln("Цифра " +str.at(-1) + " встречается " + count + " раз<br>");

}