let n = prompt("Введите число символов", 15);
let type = prompt("Введите тип символов", "=");
let or = prompt("0 - горизонтальная\n1 - вертикальная\nВведите ориентацию линии: ", 0);
for (let i = 1; i <= n; i++) {
    if (or == 0) {
        document.writeln(type);
    } else if(or==1) {
        document.writeln(type + "<br>");
    } else{
        document.writeln("Такой ориентации не существует");
        break;
    }
} 
