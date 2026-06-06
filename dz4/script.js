//Задача 1//

// let start =10;
// let end = 30;
// let pr=1;
// while(start <=end){
//     if(start%2){
//     document.writeln( "Число " + start + "<br>");
//     pr*=start;}
//     start++;
// }
//  document.writeln( "Произведение = " + pr + "<br>");

//Задача 2//

// let n;
// let count =0;
// let sum=0;
// do {
//     n = +prompt("Введите целое число");
//     document.writeln(n + "<br>");
//     if (n != 0) {
//         count++;
//         sum=sum+n;
//     }

// } while (n != 0);
// document.writeln("Количество: " + count + "<br>");
// document.writeln("Сумма: " + sum + "<br>");
// document.writeln("Среднее арифметическое: " + (sum/count) + "<br>");

// let price=+prompt("Введите стоимость покупки", 1000);
// if(price>500 && price<1000){
//     alert("Скидка 3%");
//     alert( "Итоговая стоимость: " +price*0.97);
// } else if(price>1000){
//     alert("Скидка 5%");
//     alert("Итоговая стоимость:" +price*0.95);
// }
// console.log(`Стоимость покупки без скидки: ${price}`);


// let month = +prompt("ВВедите номер месяца", 1);
// let day = +prompt("Сколько дней в году?", 365)
// switch (month) {
//     case 1:
//         alert("январь-31 день");
//         break;
//     case 3:
//         alert("март-31 день");
//         break;
//     case 5:
//         alert("май-31 день");
//         break;
//     case 7:
//         alert("июль-31 день");
//         break;
//     case 8:
//         alert("август-31 день");
//         break;
//     case 10:
//         alert("октябрь-31 день");
//         break;
//     case 12:
//         alert("декабрь-31 день");
//         break;

//     case 2:
//         if (day == 365) {
//             alert("февраль-28 день");
//         } else {
//             alert("февраль-29 дней");
//         }
//         break;

//     case 4:
//         alert("апрель-30 дней");
//         break;
//     case 6:
//         alert("июнь-30 дней");
//         break;
//     case 9:
//         alert("сентябрь-30 дней");
//         break;
//     case 11:
//         alert("ноябрь-30 дней");
//         break;
//     default:
//         alert("Неверный формат");
// }
