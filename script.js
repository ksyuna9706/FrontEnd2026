"use strict";
// let firstName = "Admin"; //var, let, const

// console.log(firstName);

// let  age = "25";
// console.log(age);

// let lastName = "Hello";
// console.log(lastName);

// let LastName = "World";
// console.log(LastName);


// let a = 5.4;
// console.log(a, typeof(a));
// console.log(a, typeof a);

// let b = 5;//Инициализация
// b = 10;
// b = "hello";
// console.log(b);

// let a;
// a = 10;
// console.log(a);

// let str1 = "ДВойные ковычки";
// let str2 = 'Одинарные \nковычки';



// console.log(str1 +" "+ str2);//Конкатенация

// let str = "Данные для входа: \nВаш логин:\"admin\"";
// console.log(str);

// let str1="Новый\t текст.";
// console.log(str1);

// let a =5;
// let str =`Обратные ${a} ${a+2}
// ковычки`;
// console.log(str);


// let firstName="Sergey"
// // alert("Hello," + firstName);
// alert(`Hello, ${firstName}`);

// let kol = 365;
// let World = "Земля";
// let people = "7 млд.";
// let sun = "Солнца";
// alert(`Мы живем на планете" она делает один оборот вокруг ${sun} за ${kol} дней. Население нашей
// планеты составляет примерно ${people} человек.`);

// alert("\"Мы живем на планете" + kol + "она делает один оборот вокруг" +  sun+ "за" + kol + "дней.Население нашей  планеты составляет примерно " + people + "человек.\"");

// const WEEK = 7;

// console.log(WEEK);

// let res = confirm("Знаете ли вы HTML?");
// console.log(res);
// if (res){
//     alert("Пора учить JavaScript");}
//     else{
//         alert("Нужно выучить HTML");
//     }


// OK true
// NO false
// console.log( true, typeof true);

// console.log( 5<2);

// let a;
// console.log(a, typeof a);

// let a = null;
// console.log(a, typeof a);

// let res = prompt("Введите ваше имя", "Виктор");
// alert(`Привет ${res}!`)
// console.log(res);


// let a = 12;
// let b = 8;
//  console.log("+:", a + b);
//  console.log("-:", a - b);
//  console.log("*:", a * b);
//  console.log("/:", a / b);
//  console.log("**:", a ** b);
//  console.log("%:", a % b);

//  let a = 5;


//  let b = 7;

//  let c = 3;

//  let sum = a+b+c;
//  console.log("Сумма", sum);
//  console.log("Произведение", a * b * c);
//  console.log("Ср.арифм", sum/3);


//  let a = +prompt("ВВедите число", 5);


//  let b =  parseInt(prompt("ВВедите число" , 7));

//  let c =  Number(prompt("ВВедите число", 3));
//  let sum = a + b + c;

//  console.log("Сумма", a + b + c);
//  console.log("Произведение", a * b * c);
//  console.log("Ср.арифм", sum/3);


// console.log(parseInt("21.84"));
// console.log(parseFloat("21.84"));
// console.log(Number("21.84"));
// console.log(Number("21.84656465").toFixed(3));

// console.log(+"21.84");
// console.log(+1*"21.84");

// let a = 23;
// let b = +"6";
// console.log(a + b);
// console.log("Результат: " +(a + b));
// console.log("Результат: " +a + b);

// let a = prompt("Введите число", 4);
// console.log("Квадрат:", a**2);
// console.log("Куб:", a**3);
// console.log("4-я степень:", a**4);

// let num = 4321;
// let one, two, three, four;
// one = num % 10;
// two = (parseInt(num/10)%10);
// three= (parseInt(num/100)%10);
// four= (parseInt(num/1000)%10);
// num=one*1000+two*100+three*10+four;
// console.log(num);
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);
// console.log(one*1000 + two*100 + three*10 + four);



// let num = 4321;  // 1200
// let one, two, three, four;

// console.log(num);

// one = num % 10;  // 1
// console.log(one);
// num = parseInt(num / 10);  // 432
// two = num % 10;  // 2
// console.log(two);
// num = parseInt(num / 10);  // 43
// three = num % 10;  // 3
// console.log(three);
// num = parseInt(num / 10);
// four = num % 10;  // 4
// console.log(four);

// console.log(one * 1000 + two * 100 + three * 10 + four);

// let a = 0, b = 0;
// a = a+1;
// let c = ++a;
// console.log(a);
// console.log(c);
// let d= b++;
// console.log(b);
// console.log(d);

// let a = 0, b = 0;
// let c = a++ +2;
// let d = ++b +2;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let a = 1;
// let b = a++;
// let c = b + 5 + a;
// console.log(c);

// let a = 1;
// let b = a++;
// let c = b + 5 + a;
// console.log(c);

// let a = 1;
// let b = a++;
// let c = ++b;
// console.log(a);
// console.log(b);
// console.log(c);

// let a = 5;
// let b = ++a - 3;
// console.log(a);
// console.log(b);

// let a = 5;
// let b = 3;
// let c = a++ * ++b;
// console.log(a);//6
// console.log(b);//4
// console.log(c);//20

// let a = 3;
// let b = ++a - 3;
// let c = a++ + 2 + ++b;
// console.log(a);//5
// console.log(b);//2
// console.log(c);//8

// let a = 3;
// console.log(++a);
// console.log(a);

// let a = 3;
// let b = 5 + a-- -1;
// console.log(a);
// console.log(b);

// let a = 3;
// a+=5;
// // a = a+5;
// console.log(a);

// a -=3;
// console.log(a);

// a**=2;
// console.log(a);

// let a =+prompt("Введите 1 число: ", 5);
// let b =+prompt("Введите  число: ", 4);
// let c= +prompt("Введите 3 число: ", 6);
// let sum = a +b +c;
// console.log("Сумма чисел: " + sum);

// let sum = +prompt("Введите 1 число: ", 5);
// sum += +prompt("Введите 2 число: ", 4);
// sum += +prompt("Введите 2 число: ", 6);
// console.log("Сумма чисел: " + sum);

// console.log(5 =="5");
// console.log(5 ===5);


// console.log(5 !="5");
// console.log(5 !== 3);

// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 <= 5);

// console.log(+true);
// console.log(+false);


// let a = 5 + true;
// console.log(a);


// 7 > 3 ? alert("7"): alert("3");
// let age = prompt("Введите возраст:");
// age >=18 ? alert("Совершеннолетний"):alert("Несовершеннолетний");

// let ch = prompt("Угадайте число от 1 до 10");
// let num =7;
// // ch == num? alert("Угадали") : alert("Не угадали");
// ch == num ? alert("Угадали") : ch < num ? alert("Загаданное число больше"): alert("Загаданное число меньше");

// let temp = prompt("Введите температуру");

// let res = temp >30? "Очень жарко"
// : temp >20 ? "Тепло"
// : temp > 10? "Прохладно"
// :temp > 0 ? "Холодно"
// :"Очень холодно";
// alert(res);

// let a = 12;
// let b = 0;
// if (b!=0){
//     let res = a/b;
//     alert("Результат: " + res)
// }
// else {
//     alert("Делить на \"0\" нельзя")
// }

// let value=prompt("ВВедите число: ");
// if(value % 2 == 0)
//      alert("Число четное");
// else
//     alert("Число нечетное");

// let a = 32;
// let b = 22;
// if(a > b){
//     alert(a + ">" +b)
// } else{
//     alert(a + "<" +b)
// }
// if (a == b){
//     alert(a + "==" +b)
// }
//  if(a<b){
//     alert(a + "<" +b)
//  }

// let a = 22;
// let b = 22;
// if(a > b){
//     alert(a + ">" +b)
// } else if(a == b){
//     alert(a + "==" +b)
// }
//  else{
//     alert(a + "<" +b)
//  }

// let day = prompt("Введите день недели цифрами");

// if (day == 1){
//     alert("Понедельник");
// } else if(day == 2){
//       alert("Вторник");
// } else if(day == 3){
//       alert("Среда");
// }
//  else if(day == 4){
//       alert("Четверг");
// }
// else if(day == 5){
//       alert("пятница");
// }
// else if(day == 6){
//       alert("Суббота");
// }
//  else if(day == 7){
//       alert("Воскресенье");
// } else{
//     alert("В неделе 7 дней");
// }

// let a = 5>3;
// if (a){
// console.log("true");

// } else{
//     console.log("false");

// }

// console.log(a);

// let login = prompt("Введите логин:", "admin");

// if (login) {
//     if (login == "admin") {
//         let pas = prompt("Введите пароль :","password");
//         if (pas) {
//             if (pas == "password") {
//                 alert("ДОбро пожаловать");
//             } else {
//                 alert("Пароль неверен");
//             }
//         } else {
//             alert("Вход отменен");
//         }
//     } else {
//         alert("Я вас не знаю");
//     }
// } else {
//     alert("Вход отменен");
// }

// if (5==5 || 5 > 2 ){
//     console.log("TRUE");

// } else{
//     console.log("FALSE");

// }

// let age= prompt("Введите возраст");
// if (age >17 && age<70){
//     alert("Вы можете получать права");
// } else{
//     alert("Права не давать");
// }

// let age= prompt("Введите возраст");
// if (age < 18||age > 69){
//     alert("Права не давать");
// } else{
//     alert("Вы можете получать права");
// }

// let a= prompt("ВВедите значение", 10);
// let b= prompt("ВВедите значение", 20);
// let c= prompt("ВВедите значение", 10);
// if (a==b && b==c){
//     alert("Треугольник равносторонний");
// }  else if (a == b ||  b==c ||a==c){
//     alert("Треугольник равнобедренный");
// } else {
//     alert("Треугольник разносторонний");
// }

// let a = +prompt("Введите первую сторону треульника");
// let b = +prompt("Введите вторую сторону треульника");
// let c = +prompt("Введите третью сторону треульника");

// if (a == b && b == c && a == c) {
//     alert("Треульник равносторонний");
// } else if (a == b || b == c || c == a) {
//     alert("Треугольник равнобедренный")
// } else {
//     alert("Треугольник разносторонний")
// }

// console.log(!"HEllo");

// if("hello"){
//     console.log("true");
// }

// console.log(!(7==5));

// let ch = prompt("ВВедите количество ворон", 5);
// if(ch >=0 && ch <=9){
// if( ch ==1){
//     alert(`На ветке ${ch} ворона`);
// } else if ( ch >=2 && ch<=4){
// alert(`На ветке ${ch} вороны`);
// } else {
//     alert(`На ветке ${ch} ворон`);
// }
// }else {
//     alert("Недопустимое значение");
// }

// let ch = prompt("ВВедите количество ворон", 5);
// if(ch >=0 && ch <=9){
// if( ch ==1){
//     alert(`На ветке ${ch} ворона`);
// } else if ( ch >=2 && ch<=4){
// alert(`На ветке ${ch} вороны`);
// } if( ch>= 5 && ch <=9 || ch==0) {
//     alert(`На ветке ${ch} ворон`);
// }
// }else {
//     alert("Недопустимое значение");
// }

// switch (условие) {
//     case value:

//         break;

//     default:
//         break;
// }

// let a = +prompt("ВВедите число");
// switch (a) {
//     case 1:
//         alert("код 1")
//         break;
//     case 2:
//         alert("Код 2");
//         break;
//     case 3:
//         alert("код 3");
//         break;
//         default:
//             alert("я таких значений не знаю");
// }

// let a = +prompt("ВВедите результат `2+2`");
// switch (a) {
//     case 4:
//         alert("верно");
//         break;
//     case 3:
//     case 5:
//         alert("не верно");
//         break;
//     default:
//         alert("я таких значений не знаю");
// }

// let error = 202;
// switch (error) {
//     case 404:
//         console.log("Страницы не существует");
//         break;
//     case 200:
//         console.log("Запрос успешно обработан");
// break;
// case 500:
//     console.log("Ошибка сервера");
//     break;
//     default:
//         console.log("НЕизвестная ошибка");

// }

// let day = "пятницfа";
// switch (day) {
//     case "суббота":
//     case "воскресенье":
//         alert("выходной");
//         break;
// case "понедельник":
// case "вторник":
// case "среда":
// case "четверг":
// case "пятница":
//     alert("Рабочий день");
//     break;
//     default:
//         alert("Некорректный день");
// }

// let m = +prompt("Введите номер месяца");
// let n;
// switch (m) {
//     case 1: n ="январь"; break;
//     case 2: n ="февраль"; break;
//     case 3: n ="Март"; break;
//  default: n ="Неправильный номер месяца";
// }
// alert("вы ввели: " + n)

// let m = +prompt("Введите номер месяца");
// let n;
// switch (m) {
//     case 1:
//     case 2:
//     case 12:
//         n = "Зима"; break;
//     case 3:
//     case 4:
//     case 5:
//         n = "весна"; break;
//     case 6:
//     case 7:
//     case 8:
//         n = "Лето"; break;
//     case 9:
//     case 10:
//     case 11:
//         n = "Осень"; break;
//     default:
//         n="Ошибка ввода данных";
//         break;
// }
// alert(`Время года - ${n}`);

// let operator = prompt("Действие: +, -, /, *, % :");
// let num1 = +prompt("Введите 1 число", 5);
// let num2 = +prompt("Введите 2 число", 2);
// switch (operator) {
//     case "+":
//         alert("сумма :" + (num1 + num2));
//         break;
//     case "-":
//         alert("Разность :" + (num1 - num2));
//         break;
//     case "*":
//         alert("Произведение:" + num1 * num2);
//         break;
//     case "/":
//         if (num2 == 0) {
//             alert("Делить на 0 нельзя");
//         } else
//             alert("Частное:" + num1 / num2);
//         break;
//     case "%":
//         if (num2 == 0) {
//             alert("Нельзя посчитать остаток от деления на 0, тк на 0 делить нельзя");
//         } else
//             alert("Остаток от деления:" + num1 % num2);
//         break;
//     default:
//         alert("я такого оператора не знаю");
//         break;
// }

// document.writeln("<p>Текст <br>выведен <b>в окно</b> браузера</p>");

// document.writeln('<p> <img src="1.jpg" alt="ffd"> Еще текст  </p>');

//Do WHILE (Постусловие)//
// do {
//     тело цикла
// } while (условие);

// итерация цикла-1 шаг цикла

// let i = 0; //переменная счетчик
// do {
//     document.writeln("Это номер :" + i +"<br>");
//     i++;//изменение счетчика
// } while (i<5);

// let i = 1;
// do {
//     document.writeln("Квадрат числа " + i +" Равен " + i**2 + "<br>");
//     i++;
// } while (i < 8);

// let i = 0;
// do {
//     document.writeln("Это номер :" + i +"<br>");
//     i=i+5;
// } while (i<25);

// let i = 10;
// do {
//     document.writeln("Это номер :" + i +"<br>");
//     i--;
// } while (i>0);

// let i = 1;
// do {
//     if( i%2 ==0){
//     document.writeln("i= " + i +"<br>");}
//     i++;
// } while (i <=20);

// let i = 2;
// do {
//     document.writeln("i= " + i +"<br>");
//    i+=2; // i=i+2;
// } while (i <=20);


// //Вывод диапазона//
// let n = +prompt("Введите начало диапазона", 1);
// let m = +prompt("Введите конец диапазона", 5);
// let i = n;
// let sum = 0;
// do {
//     if (i % 2) {
//         document.writeln(i + "<br>");//1 3 5
//         sum=sum +i;
//     }
//     i++;
// } while (i <= m);// 1<=5
// document.writeln( "сумма целых нечетных чисел:" +sum + "<br>");//сумма целых нечетных чисел

// let n = +prompt("Введите начало диапазона", 1);
// let m = +prompt("Введите конец диапазона", 5);
// // let i = n;
// let sum = 0;
// do {
//     if (n % 2) {
//         // document.writeln(n+ "<br>");//
//         sum+=n;
//     }
//     n++;
// } while (n <= m);
// document.writeln( "сумма целых нечетных чисел:" +sum + "<br>");

// let a = 5;//глобальная переменная

// if (a >0 && a<10){
//     let b=6; //локальная переменная
//     document.writeln(a);
// }
// document.writeln(b);

// let b=1;
// let i = 0; //переменная счетчик
// do {
//     document.writeln("Это номер :" + i +"<br>");
//     b=b+1;
//     i++;//изменение счетчика
// } while (i<5);
// document.writeln(b);

//Цикл WHILE-цикл с предусловием
// while (условие) {
//     тело цикла(действие)
// }

// let i = 0;
// while (i < 5) {
//     document.writeln("Это номер:" + i + "<br>");
//     ++i;
// }

// let j = 0;
// do {
//     document.writeln("Это номер:" + j );
//     j++;
// } while (j > 5);

// let count = prompt("Укажите количество звездочек");
// let i = 0;
// while(i < count){
//       document.writeln("*");
//     i++;
// }


// let i = 1;
// while(i <= 30){
//     if(i%3){
//       document.writeln(i + "<br>");}
//     i++;
// }

// let start = 5;
// let end = 10;
// let pr=1;
// while(start <=end){
//     document.writeln( "Число " + start + "<br>");
//     pr*=start;
//     start++;
// }
//  document.writeln( "Произведение=" + pr + "<br>");

// let i =3;
// while(i){
//     document.writeln(i + "<br>");
//     i--;
// }


// let n;
// let count = -1;
// do {
//     n = prompt("ВВедите целое число");

//     document.writeln(n + "<br>");
//     if (n != 0) {
//         count++;
//     }

// } while (n != 0);
// document.writeln("КОличество:" + count + "<br>");


// let sum = 0;
// let n;
// let count = -1;
// let max = 0;
// let min = 0;
// do {
//     n = +prompt("ВВедите число");
//     sum += n;
//     count++;
//     if ( n > max ) {
//         max = n;
//     }

// } while (n != 0);
// document.writeln(sum);
// document.writeln("Среднее арифметическое:" + sum / count);
// console.log("sum:", sum);
// console.log("count:", count);
// document.writeln("MAX:" + max);

// let n = +prompt("ВВедите число");// 4
// let max = n;
// let min = n;
// let sum = n;
// let count = 0;
// while (n != 0) {
//     n = +prompt("ВВедите число");//9  3  11  0
//     if (n > max && n != 0) {
//         max = n;
//     }
//     if (n < min && n != 0) {
//         min = n;
//     }
//     sum += n
//     count++;
// }

// document.writeln("MAX:" + max);
// document.writeln("Min:" + min);
// console.log("sum:", sum);
// console.log("count:", count);
// document.writeln("Среднее арифметическое:" + (sum / count).toFixed(2) );



// let res = 1;
// do {
//     let n = +prompt("ВВедите число");

//     if (n < 0) {
//         break;
//     }
//     if(n ==0){
//       continue;
//     }
//     res *= n;
// } while (true);
//  console.log("res:", res);

// let i = 0;
// do {

//     if (i == 6) {
//         break;
//     }
//     if(i ==3){
//         i++;
//         continue;
//     }document.writeln(i + "");
//     i++;
// } while (i < 10);

// let res = 1;
// do {
//     let n = +prompt("ВВедите число");

//     if (n == 0) {
//         break;
//     }
//     res *= n;
// } while (true);
//  console.log("res:", res);

// let res = 1;
// let n;
// do {
//     n = +prompt("ВВедите число");
//     if (n == 0) {
//         continue;
//     } res *= n;
// } while (n != 0);
// console.log("res:", res);

// for(цикл со счетчиком)

// for(инициализация переменной; преверка условия; изменение переменной){
//     тело цикла
// }

// for (let i =1; i<6 ; i++){
//     document.writeln(i + "<br>")
// }


// let i=1;
// while (i<6) {
//     document.writeln(i + "<br>");
//     i++;
// }

// for (let i =1; i<12 ; i++){
//     if(i ==3){
//         continue;
//     }
//     if(i ==6){
//         break;
//     }
// document.writeln(i + "<br>")
// }


// let n = +prompt("n=");
// let sum = 0;
// let count = 0;
// for (let i = 0; i < n; i++) {
//    let num  = +prompt("->");
//     document.writeln(num + "<br>")
//     sum+=num;
//     if( num != 0){
//         count++;
//     }
// }
// console.log(sum);
// console.log(count);
// document.writeln("Среднее арифметическое:" + (sum / count).toFixed(2) );

// let i = 1
// for (; ;) { //i<7
//     if (i == 7) {
//         break;
//     }
//     document.writeln(i + "<br>");
//      i++;
// }

// let i = 1
// for (; i < 6; i++) {
//     document.writeln(i + "<br>");
// }
// console.log(i);

//Сумм четных и произведение нечетных в диапазоне

// let start = +prompt("ВВедите начало диапазона", 5);
// let end = +prompt("ВВедите начало диапазона", 10);
// let sum = 0;
// let res = 1;
// for (let i = start; i <= end; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
//    else {
//         res *= i;
//     }
// }
// document.writeln("Сумма:" + sum + "<br>");
// document.writeln("Произведение:" + res + "<br>");

//Разбить число на цифры и ввести в обратном порядке

// let n =65165165;
// document.writeln("Исходное число :" +n +"<br>");
// for (let i = 1; ; i *= 10) {
//     let res = parseInt(n / i);
//     if (res == 0) {
//         break;
//     }
//     document.writeln(res%10 +"<br>");
// }
// let sum = 0;
// for (let i = 5; i <= 30; i++) {
//     if (i % 3 == 0 && i > 0) {
//         sum += i;
//         console.log(i);
//     }


// } document.writeln(sum + "<br>");

// let ch = 321;
// document.writeln("Исходное число:" + ch + "<br>");
// for (let i = 1; ; i*=10) {
//     let res = parseInt(ch / i);
//     if (res == 0) {
//         break;
//     }
//     document.writeln(res%10 + "<br>");
// }

// let count = +prompt("Введите кол-во", 7);
// if (count !== 0 || count!==Nan) {

//     document.writeln(count);
//     console.log(count);

// } else {
//     alert("Вы не ввели данные")
// }

// let i = 0;
// while (i < 4) {
//     document.writeln("+++<br>");
//     let j = 0;
// while(j<2){
//     document.writeln("---<br>");
//     j++;
// }
//     i++;
// }

// for (let i = 0; i < 4; i++) {
//     document.writeln("+++<br>");
//     for (let j = 0; j < 2; j++) {
//         document.writeln("---<br>");
//     }
// }

//Таблица в Джаваскрипт

// let symbol = prompt("Введите символ", "*");
// let tr = +prompt("Введите количество строк", 5);
// let td = +prompt("Введите количество столбцов",10);
// document.writeln("<table border='1' width='150'>");
// for (let i = 0; i < tr; i++) {
//     document.writeln("<tr align='center'>");
//     for (let j = 0; j < td; j++) {
//         document.writeln("<td>"+ symbol +"</td>");

//     } document.writeln("</tr>");
// }
// document.writeln("</table>");


//Таблица умножения

// document.writeln("<table border='1' width='150' align='center'>");
// for (let i = 1; i < 11; i++) {
//     document.writeln("<tr align='center'>");
//     for (let j = 1; j < 11; j++) {
//         document.writeln("<td>"+ i*j +"</td>");

//     } document.writeln("</tr>");
// }
// document.writeln("</table>");

// document.writeln("<table border='1' width='150' align='center'>");
// for (let i = 1; i < 11; i++) {

//     document.writeln("<tr align='center'>");
//     for (let j = 1; j < 11; j++) {
//         if(i%2==0){
//              document.writeln("<td bgcolor='red'>"+ i*j +"</td>");
//         } else{
//             document.writeln("<td bgcolor='yellow'>"+ i*j +"</td>");
//         }

//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");

// document.writeln("<table border='1' width='150' align='center'>");
// for (let i = 1; i < 11; i++) {

//     document.writeln("<tr align='center'>");
//     for (let j = 1; j < 11; j++) {
//         if(i%2==0){
//              document.writeln("<td bgcolor='red'>"+ i*j +"</td>");
//         } else{
//             document.writeln("<td bgcolor='yellow'>"+ i*j +"</td>");
//         }

//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");


//Массивы
// let mas = [2, 6, 8];
// document.writeln(mas[2]);
// console.log(mas);

//let mas1 =[5];//Массив на 1 элемент со значением 5
//console.log(mas1);

// let mas2 = new Array(2,6,8);
// document.writeln(mas2);
// console.log(mas2);

// let mas3 = new Array(5); //Массив на 5 элементов без значений
// console.log(mas3);

// let mas4 = [];
// let mas5 = new Array();
// console.log(mas4);
// console.log(mas5);

// let mas = [2, 6, 8];
// document.writeln(mas +"<br>");
// console.log(mas);
// document.writeln(mas.length);

// let arr =[1,2,3,4,5,6];
// document.writeln(arr +"<br>");
// document.writeln(arr.length +"<br>");

// arr.length=3;
// document.writeln(arr +"<br>");
// document.writeln(arr.length +"<br>");

// arr.length=6;
// document.writeln(arr +"<br>");
// document.writeln(arr.length +"<br>");
// document.writeln(arr[4] +"<br>");
// console.log(arr);

// arr.length=0;
// document.writeln("Пустой массив:" +arr +"<br>");
// document.writeln(arr.length +"<br>");
// console.log(arr);

//последний индекс массива = длина массива - 1
// lenght= последний индекс массива + 1

// let arr1 = [1,2,3,4,5,6];
// document.writeln(arr1 +"<br>");
// document.writeln(arr1[arr1.length-1] +"<br>");
// console.log(arr1 +[7,8,9]);

// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6];
// for (let i = 0; i < arr.length; i++) {
//     document.writeln(arr[i] **2 + "<br>");
// }

//заменить все отрицательные значения элементов массива их модулями
// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]<0){
//         arr[i]*=-1;
//     }
//     document.writeln(arr[i]  + "<br>");
// }
// console.table(arr);

//посчитать в массиве сумму всех отрицательных элементов
// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         sum += arr[i];
//         document.writeln(arr[i] + "<br>");
//     }

// }
//   document.writeln(sum + "<br>");

// let arr=new Array();//=[]
// arr[0]=15;
// arr[1]=6;
// arr[2]=9;
// arr[3]=4;
// arr[6]=59;
// arr[7]="Hello";

// console.log(arr);

// let arr = new Array(5);//=[]

// for (let i = 0; i < arr.length; ) {
//     arr[i] = prompt("Введите " + ++i +" элемент массива");

// }
// document.writeln(arr +"<br>")

//Записать массив в обратном порядке
// let arr = new Array(5);//=[]

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = prompt("Введите " + (i + 1) + " элемент массива");

// }
// document.writeln(arr + "<br>");
// console.log(arr);

// for (let i = arr.length - 1; i >= 0; i--) {
//     document.writeln(arr[i] + "")
// }

// let arr = ['a', 'b', 'c'];
// arr[0]=arr[0]+"!";
// arr[1]=arr[1]+"!!";
// arr[2]=arr[2]+"!!!";

// console.log(arr);

// let arr=[1,2,3,4];
// arr[0]++;
// ++arr[1];
// arr[2]--;
// --arr[3];
// console.log(arr);

// let count = +prompt("Введите количество элементов в массиве");
// let arr = new Array(count);
// for (let i = 0; i < arr.length; i++) {
//     if (count >= 5) {
//         arr[i] = 0;
//     } else {
//         arr[i] = +prompt("Введите значение");
//     }
// }
// document.writeln(arr + "<br>")

// let count = +prompt("Введите количество элементов в массиве:");
// let arr = [];
// for (let i = 0; i < count; i++) {
//     if (count > 5) {
//         arr[i] = 0;
//     } else {
//         arr[i] = +prompt("Введите значение");
//     }
// }
// document.writeln(arr + "<br>")


// let n = +prompt("Введите количетсво элементов в массиве:");
// let mas = new Array(n);

// for (let i = 0; i < mas.length; i++) {
//     mas[i] = +prompt("->");
// }
// console.log(mas);
// for (let i = 0; i < mas.length; i++) {
//     if (mas[i - 1] < mas[i]) {
//         document.writeln(mas[i] + " ");
//     }
// }

// let mas = new Array(20);
// let count = 0;
// let sum = 0;
// for (let i = 0; i < mas.length; i++) {
//     mas[i] = +prompt("->");
//     if (mas[i] % 2 == 0) {
//         count += 1;
//     } else {
//         sum += mas[i];
//     }
// }
// document.writeln("Количество четных элементов:" + count + "<br>");
// document.writeln("Сумма нечетных элементов массива:" + sum + "<br>");

// let mas = [49,22,13,31,43,22,10,20,28,10,40,19,38,30,48,48,31,38,35,25];
// let count = 0;
// let sum = 0;
// for (let i = 0; i < mas.length; i++) {
//     if (mas[i] % 2 == 0) {
//         count ++;
//     } else {
//         sum += mas[i];
//     }
// }
// document.writeln("Количество четных элементов:" + count + "<br>");
// document.writeln("Сумма нечетных элементов массива:" + sum + "<br>");

// let arr = [2, 6, 7, "JJJ", true, 1.5];
// console.log(arr);
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// } document.writeln(arr[i] * 5 + "<br>");

// ВЛоженные массивы
// let mas = [[2, 1, 1], [6, 3, 7], [8, 5, 6,]];
// console.log(mas);
// console.table(mas);
// document.writeln(mas[1][2]);
// document.writeln(mas[0][2][1]);

// for (let i = 0; i < mas.length; i++) {
//     for (let j = 0; j < mas[i].length; j++) {
//         document.writeln(mas[i][j] + " ");
//     }
//     document.writeln("<br>");
// }

// let mas = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// for (let i = 0; i < mas.length; i++) {
//     for (let j = 0; j < mas[i].length; j++) {
//         document.writeln(mas[i][j] + " - - - ");
//     } document.writeln("<br>");
// } document.writeln("<br>");

// for (let i = 0; i < mas.length; i++) {
//     for (let j = 0; j < mas[i].length; j++) {
//         document.writeln(mas[i][j] ** 2 + " - - - ");
//     } document.writeln("<br>");
// }


// let questions = ["В каком году произошло Крещение Руси?", "Кто написал роман «Война и мир»?", "Сколько планет в Солнечной системе?", "Какая река самая длинная в мире?", "Кто создал картину «Звёздная ночь»?", "Сколько игроков в хоккейной команде?", "Какой газ преобладает в атмосфере Земли?", "Сколько байт в одном килобайте?"];
// let answers = [[988, 1025, 1074, 974], ["Пушкин", "Толстой", "Чехов", "Достоевский"][7, 8, 9, 10], ["Амазонка", "Нил", "Миссисипи"], ["Ван Гог", "Поль Гоген", "Жорж Сера", "Поль Сезан"], [5, 6, 7, 8], ["Азот", "Водород", "Кислород", "Гелий"], [256, 128, 1024, 2048]];
// let sum = 0;
// let money=[5000,10000,10000,500000,1000000];
// let res = new Array();
// for (let i = 0; i < questions.length; i++) {
//     for (let j = 0; j < answers[i].length; j++) {
//         let answer = prompt(questions[i] +"\n" +answers[i][j]+ "\n" +answers[i][j+1] +"\n" +answers[i][j+2] +"\n" +answers[i][j+3]);
//         if (answer == answers[i][j]) {
//             res[i] = money[i];
//             sum += res[i];
//             alert("Поздравляем, вы выиграли " + res[i] + 100 + " денежных единиц.");
//         } else {
//             res[i] = 0;
//             alert("Конец игры!\nВы проиграли((");
//             alert("Вы выиграли " + sum + " денежных единиц");
//             break;
//         }
//     }if (sum == 80) {
//     alert("Ура!\nВы победили))\nТеперь Вы миллионер");
// }
// }

// let questions = ["На ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой?", "2x2 будет 8?", "Дельфины - это рыбы?", "Мадонна - это настоящее имя певицы?", "Первая мировая война началась 1 сентября 1939 года?"];
// let answers = [false, true, false, false, false, false, false];
// let sum = 0;
// let res = new Array();
// for (let i = 0; i < questions.length; i++) {
//     let answer = confirm(questions[i]);
//     if (answer == answers[i]) {
//         res[i] = 10;
//         sum+=res[i];
//     } else {
//         res[i] = 0;
//     }
// }
// console.log(res);
// console.log(sum);
// document.writeln("<table border='1' width='500'");
// document.writeln("<tr>")
// document.writeln("<th> Вопрос </th>")
// document.writeln("<th> Баллы </th>")
// document.writeln("</tr>")
// for(let i=0;i<questions.length;i++){
//     document.writeln("<tr>");
//     document.writeln("<td>"+questions[i] +"</td>")
//     document.writeln("<td align='center'>"+res[i] +"</td>")
//     document.writeln("</tr>");
// }

// document.writeln("<tr>")
// document.writeln("<th> Итог </th>")
// document.writeln("<th>" +sum+"</th>")
// document.writeln("</tr>")
// document.writeln("</table>");

// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//     console.log(elem);
//     // document.writeln( elem +"<br>");

// }

// for (let i = 0; i < arr.length; i++) {
//     document.writeln(arr[i] + "<br>")
// }

// let colors=["red","blue","green"];
// for(let color of colors){
//     document.writeln(color +"<br>");
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let flag = false;

// for (let elem of arr) {
//     if (elem == 3) {
//         flag = true;
//         break;
//     }

// } console.log(flag);
// if (flag == true) {
//     console.log("+++");
// } else {
//     console.log("---");
// }

// let arr = [7, 55, 9, 33, 2];
// let max = arr[0];
// let sum=0;

// for (let num of arr) {
//     sum+=num;
//     }
// console.log(sum);

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// let text1=document.getElementById("text_1");
// console.log(text1);
// console.log(text1.textContent);
// text1.textContent="Новое содержимое";

// let text2=document.getElementById("text_2");
// text2.innerHTML="Новое содержимое с <b>HTML разметкой</b>";


// let res = +prompt("Выберите изображение", "1-собака,2-кот,3-птица,4-рыба");
// document.writeln("<div id='image'></div>");
// let img=document.getElementById("image");
// switch(res){
//     case 1:
//         img.innerHTML="<img src='img/dog.jpg'>";
//         break;
//     case 2:
//         img.innerHTML="<img src='img/cat.jpg'>";
//         break;
//     case 3:
//         img.innerHTML="<img src='img/bird.jpeg'>";
//         break;
//     case 4:
//         img.innerHTML="<img src='img/fish.jpeg'>";
//         break;
//         default:
//             alert("Такого изображения нет");
// }

// let tag = document.getElementsByTagName("p")[2];
// console.log(tag);
// tag.innerHTML = "Hello <u>tag</u>";
// tag.style.color="blue";
// tag.style.fontWeight="bold";
// tag.style.background="silver";
// tag.style.padding="10px 20px";
// tag.id="test";
// tag.className="x";
// let tag = document.getElementsByTagName("p");
// tag[2].innerHTML="Hello ";
// tag[2].style.color="blue";
// tag[1].style.color="orange";
// let q=document.getElementsByClassName("two");
// console.log(q);
// q[1].style.color="red";

// document.querySelector("CSS");
// document.querySelectorAll("CSS");

// let id = document.querySelector("#text_1");
// console.log(id);
// id.style.color="red";

// let id = document.querySelectorAll("#text_1")[0];
// console.log(id);
// id.style.color="red";

//  let id = document.querySelector(".two");
// console.log(id);
// id.style.color="red";

//  let id = document.querySelectorAll(".two")[1];
// console.log(id);
// id.style.color="red";

//  let id = document.querySelectorAll("div")[1];
// console.log(id);
// id.style.color="red";

// let el = document.querySelector("h2");
// el.style.color = "red";
// el.style.fontSize

// let el2=document.querySelectorAll("h2")[1];
// let el2 = document.querySelector("h1+h2");
// el2.style.color = "red";

// let lists = document.querySelectorAll("li");
// console.log(lists.length);
// for (let i = 0; i < lists.length; i++) {
//     lists[i].innerHTML += "!!!";
// }

// let purple=document.querySelectorAll(".purple li");
// console.log(purple.length);
// for(let i=0;i<purple.length;i++){
//     purple[i].style.color="purple";
//     purple[i].innerHTML+="???"
// }

// // let m=document.querySelectorAll(".red li")[1];
// let m=document.getElementsByClassName("red")[0].getElementsByTagName("li")[1];
// m.style.color="orange";

// задача 3
// document.writeln("<div id='divSample'></div>");
// // let div=document.getElementById("divSample");
// let div = document.querySelector("#divSample");
// console.log(div);
// div.textContent = "Дюбель — конструктивный элемент, который используется для укрепления винта или предмета на стене, на потолке или на полу в помещении или под открытым небом в различных материалах(бетон, кирпич и прочее).Сам дюбель удерживается в конструкции при помощи сил трения.С некоторого времени элементы связи и укрепления, дюбели и винт(шуруп) объединяют в одно целое и используются, прежде всего, для тяжёлых нагрузок.Дюбели предлагаются в различныхnвеличинах, которые руководствуются диаметром дюбеля(и соответственно необходимым отверстием), измеренным в миллиметрах.. "
// div.style.background="#f0f";
// div.style.color="#99ffff";
// div.style.width="50%";
// div.style.outline="10px dotted #000";
// div.className="resetFont";
// let div2=document.querySelector(".resetFont");
// div2.style.fontSize="12pt";
// div2.style.fontWeight="bold";
// div2.style.textDecoration="line-through";

// let el=document.querySelector(".elem");
// console.log(el.closest(".content"));
// // el.style.color="green";
// // let blue=el.closest(".content");
// // blue.style.color="blue";
// console.log(el.closest(".container"));
// console.log(el.closest("h1"));

// let all=document.querySelectorAll("*");
// let all=document.querySelectorAll("[class='two']"); элемент только с конкретным классом
// let all=document.querySelectorAll("[class~='two']"); все элементы с классом
// let all=document.querySelectorAll("[class^='cont']");начинается с ...
// let all=document.querySelectorAll("[class$='ner']"); //заканчивается на...
// let all=document.querySelectorAll("[class*='ne']"); //включает...
// let all=document.querySelectorAll(":empty"); //парные тэги...
// console.log(all);
// let title=document.querySelector("h1");
// title.style.color="red";

// Методы массива
// let js = ["нужно", "Учить", "JavaScript"];
// document.writeln(js + "<br>");
// console.log(js);
// let last = js.pop();
// console.log(last);//Удаляет последний элемент из массива и возвращает удаленный элемент,при этом урезает массив
// console.log(js);
// js.push("JavaScript", "!");//добавляет элемент в конец массива
// console.log(js);
// console.log(js.shift());//удаляет только один первый элемент массива и возвращает удаленный элемент
// console.log(js);
// js.unshift("Почему", "Нужно");//добавляет элемент в начало массива друг за другом и возвращает новую длинну массива
// console.log(js);
// let arr=["апельсин","банан","груша"];
// document.writeln(arr.length);
// document.writeln(arr +"<br>");

// arr.push("яблоко","ананас");
// arr.unshift("грейпфрут");
// document.writeln(arr.length);
// document.writeln(arr +"<br>")
// arr.pop();
// arr.shift();
// document.writeln(arr.length);
// document.writeln(arr);
// let mas = [];
// let n = prompt("Введите кол-во элементов массива:");
// for (let i = 0; i < n; i++) {
//     let x = prompt("Введите число:");
//     // mas.push(x);
//     // mas.unshift(x);
//     mas[i]=x;
// }
// for (let i = 0; i < n; i++) {
//     document.writeln(mas[i] + " ")
// }

// let masFirst=[1,2,3];
// let masSecond=[11,22,33];
// let masEnd=[];
// for(let i=0;i<masFirst.length;i++){
//     masEnd.push(masFirst[i]);
//     masEnd.push(masSecond[i]);
// }
// document.writeln(masEnd)
// console.log(masEnd);


// let mas = [];
// let n;
// do {
//     n = prompt("ВВедите элемент массива:");
//     if (n >= 0) {
//         mas.push(n);
//     } else {
//         break;
//     }
// } while (true);
// document.writeln(mas + "<br>");
// let k = prompt("Введите индекс для удаления: от 0 до " +(mas.length-1));
// if (k <= mas.length && k >= 0) {
//     mas.splice(k, 1);
// }
// else {
//     alert("Недопустимый индекс")
// }
// for (let el of mas) {
//     document.writeln(el + " ");
// }

// let index=js.indexOf("сложный");//возвращает первый индекс,по которому данный элемент может быть найден в массиве или "-1" если элемент не найден
// console.log(index);
// js.push("сложный");
// console.log(js);
// let index1=js.indexOf("сложный",index+1);//указывает начальный индекс для поиска
// console.log(index1);

// let index2=js.lastIndexOf("сложный",);//указывает начальный индекс для поиска
// console.log(index2);

// let mas=[];
// let max=0;
// let ind=0;
// for(let i=0;i<10;i++){
//     mas[i]=prompt("Введите элемент массива");
// if(mas[i]>max){
//     max=mas[i];
//     ind=i;
// }
// }
// document.writeln(mas +"<br>");
// document.writeln(max + "<br>");
// mas.splice(ind,1);
// document.writeln(mas +"<br>");
// mas.unshift(max);
// document.writeln(mas +"<br>");
// let indd=mas.indexOf(max);
// console.log(indd);

// let arr = js.slice(1, 3);//slice(begin,end)-копирует участок массива от бегин до энд не включая значение энд
// console.log(arr);
// console.log(js.slice(1));//если end не указан,продолжается коп ирование до конца массива,при этом исходный массив не изменяется

// let range = js.toSpliced(1, 2);//получение элементов вне диапазона
// console.log(range);
// console.log(js);

// delete js[1];//Удаляет значения по заданному индексу
// console.log(js);

// js.splice(1, 1);//splice(start,lenght)-удаляет из массива указанное число элементов начиная с позиции старт ,второй параметр указывает количество элементов для удаления
// console.log(js);
// js.splice(0, 2, "Мы", "изучаем");//так же можем добавлять элементы
// console.log(js);
// js.splice(2, 0, "сложный", "язык");//если мы не хотим удалять элементы,а хотим их добавить,то вторым параметром указываем значение 0 и после него с третьего параметра указываем добавляемые элементы
// console.log(js);

// js.splice(-3, 0, "но", "очень", "интересный");//работает с отр индексами ,отсчет ведется с конца
// console.log(js);

// let isValue=js.includes("интересный");//проверяет,содержит ли массив определнное значение
// console.log(isValue);

// let str=js.join(" ");//преобразование символов массива в строку через символ разделитель(объединитель)
// console.log(str);

// js.reverse();//Меняет порядок следования элементов в массиве на обратный
// console.log(js);

//необходимо найти уникальные элементы массива
// let array=["5",7,4,1,4,7,4,1,4,7,7,1,4,5];
// let res=[];
// for(let el of array){
//     if(!res.includes(el)){
//     res.push(el);}
// }
// for (let el of res){
//     document.writeln(el + " ");
// }

//запросить поочередно фио(массив) у пользователя и на выходе получить фио   в строкес пробелами между словами
// let st=["Фамилия","Имя","Отчество"]
// let fio=new Array(3);
// for(let i=0;i<fio.length;i++){
//     fio[i]=prompt("Введите данные:\n"+st[i]);
// }

// alert(fio.join(" "));

// let people=["tom","Bob",["alice","Kate",["Sam","Ann"]]];
// let arr=people.flat(2);//упрощает массив с указанным уровнем вложенности,уровни указываются если они больше 1
// console.log(arr);
// // let a=[1,2];
// let b=a.concat(3,4);
// console.log(b);
// let c=["a","b","c"];
// let num=a.concat(b,c);//создает новый массив,в который копируются элементы из иходного массива(создает новый массив,объед.несколько массивов либо в массив добавляются элементы)
// console.log(num);
// let users= ['Tom', 'Bob', 'Alice', 'Kate', 'Sam', 'Ann'];
// // let modified=users.with(0,"Tomas");//изменяет элемент массива при этом сохраняет старое состояние исходного массива
// console.log(users);
// console.log(users.sort());

// let firstName = prompt("Как вас зовут?", "Ксения");
// let favorite = "";
// let arr = [];

// while (favorite != null) {
//     favorite = prompt("Введите любимое имя:");
//     arr.push(favorite);
// }
// arr[arr.length - 1] = firstName;
// console.log(arr.sort());

// let index = arr.indexOf(firstName);
// console.log(index);

// for (let i = 0; i < arr.length; i++) {
//     if (i == index) {
//         document.writeln("<span style='color:blue; text-decoration:underline'>" + arr[i] + "</span>");
//     } else {
//         document.writeln(arr[i] + " ");
//     }

// }

// let n = [1, 5, 15, 2];
// n.sort((a, b) => a - b);//ИСПОЛЬЗУЕМ ФУНКЦИЮ
// console.log(n);

//!!!!!!ФУНКЦИЯ!!!!!!
//Function Declaration(Определение функции)

/*
function имя функции(аргументы){
тело функции
}

*/

// // function hello(name){
// //     document.writeln("Hello," +name+"<br>")
// // }
// // hello("Igor");
// // hello("Irina");

// // function caption() {
// //     for (let i = 1; i <= 6; i++) {
// // document.writeln("<h"+i + ">Заголовок "+i+"</h"+i+">");
// //     }
// // }
// // caption();

// // function test(a, b, c) {
// //     // alert(a + b + c);
// //     let res = a + b + c;
// //     return res;
// // }
// // let n1 = 10, n2 = 20, n3 = 30, m1 = 1, m2 = 2, m3 = 3;
// // let sum = test(n1, n2, n3); //60
// // // let sum = 60;Число присвоилось в переменную потому что есть ретурн return
// // // test(m1, m2, m3);//6
// // console.log(sum);

// // function test2(n, m) {
// //     if (m == 0) {
// //         return "Делить на 0 нельзя";
// //     }
// //          return n / m;


// // }
// // let a1 = test2(10, 2);
// // let a2 = test2(10, 0);
// // alert(a1);
// // alert(a2);

// //Попросить пользователя ввести 2 числа:Если 1 число больше 2 го то найти разность чисел,если наоборот то сумму


// // function result(n, m) {
// //     if (n > m){
// //         return n-m;
// //     }
// //     return n+m;
// // }
// // let a = +prompt("Ведите 1 число");
// // let b = +prompt("Ведите 2 число");
// // let res = result(a, b);
// // alert(res);

// //Функция для выч суммы элементов массива

// // function sum(arr) {
// //     let res = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //         res += arr[i];
// //     }
// //     return res;
// // }
// // document.writeln(sum([3, 8, 9, 4, 1, 2, 5]) + "<br>");
// // document.writeln(sum([1, 2, 5]) + "<br>");

// //Функция для нахождения двух чисел

// // function num(a, b) {
// //     if (a > b) {
// //         return "Большее число: " +a;
// //     } else if (a < b) {
// //         return "Большее число: " +b;
// //     }
// //     return "Числа равны";
// // }
// // let n = +prompt("Введите 1 число");
// // let m = +prompt("Введите 2 число");
// // document.writeln(num(n,m));

// // let arr = new Array(9);//[1,8,9,6,5,3,7,12,5]=>[9,6,3,12]
// // let arr = new Array(9);
// // let res = [];
// // for (let i = 0; i < 9; i++) {
// //     let num = +prompt("Введите числа массива");
// //     arr[i] = num;
// // }
// // document.writeln("Исходный массив:" +arr + "<br>");

// // function mas(array) {
// //     for (let i = 0; i < array.length; i++) {
// //         if (array[i] % 3==0) {
// //             console.log(array[i]);
// //             res.push(array[i]);

// //         }
// //     }return res;
// // }
// // document.writeln("Новый массив:" +mas(arr));

// // function showArrayContent(arrayToShow) {
// //     if (arrayToShow.length == 1) {
// //         return arrayToShow;
// //     } else {
// //         let last = arrayToShow.pop();//удаление и возвращение последнего элемента
// //         console.log(last);
// //         let str=arrayToShow.join(", ");
// //         let res = str + " и " + last;
// //         return res;
// //     }
// // }

// // let a = new Array('Текст');
// // let b = new Array('день', 'ночь');
// // let c = new Array('зима', 'весна', 'лета', 'осень');
// // alert(showArrayContent(a));
// // alert(showArrayContent(b));
// // alert(showArrayContent(c));

// // 2 ТИП ФУНКЦИИ Function expression(Функциональное выражение)

// // let func=function(аргументы){
// // тело функции
// // }
// // function(параметры);
// // alert(sum1(20,30));
// // function sum1(a,b){
// //     return a+b;
// // }
// // let sum2=function(a,b){
// //     return a+b;
// // }

// // alert(sum2(2,3));

// //дан массив целы чисел.Определить ср арифм этих чисел

// // let average = function(arr){
// // let sum=0;
// // for(let i=0;i<arr.length;i++){
// //     sum+=arr[i];
// // }
// // return (sum/arr.length).toFixed(2);
// // }
// // document.writeln(average([3,8,9,4,1,2,5]) + "<br>");
// // document.writeln(average([8,2,4]) + "<br>");

// //Нахождение макс числа из массива

// // let max = function (arr) {
// //     let num = 0;
// //     for (let i = 0; i < arr.length; i++) {

// //         if (arr[i] > num) {
// //             num = arr[i];
// //         }
// //     } return num;

// // }
// // document.writeln(max([3, 8, 9, 4, 1, 2, 5]) + "<br>");
// // document.writeln(max([8, 2, 4]) + "<br>");
// // let max = function(arr) {
// //     let num1 = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //         if (num1 < arr[i]) {
// //             num1 = arr[i];
// //         }
// //     }
// //     return num1;
// // }
// // document.writeln(max([2, 5, 7, 9, 3, 4, 12, 8, 10]) + "<br>");
// // document.writeln(max([1, 2, 5]) + "<br>");

// //Immediately Invoked Function Expression-анонимная функция
// // (function(){
// //     alert("Привет, мир!");
// // })();

// // (function(n){
// //     alert(n*n);
// // })(4)

// //Arrow function-стрелочная функция
// // function test(a, b, c) {
// //     let res = a + b + c;
// //     return res;
// // }
// // alert(test(10, 20, 30));

// // let test2 = (a, b, c) =>a + b + c;
// // alert(test2(1, 2, 3));

// // let hello = () => alert("hello");
// // hello();

// // let double = n => n ** 2;

// // let arr = [5, 3, 8, 2];
// // let res = [];
// // for (let i = 0; i < arr.length; i++) {
// //     res[i] = double(arr[i]);
// // }

// // console.log(res);

// // let symbol = (count, a, b) => {
// //     for (let i = 0; i < count; i++) {
// //         document.writeln(i % 2 ? b : a);
// //     }
// //     document.writeln("<br>");
// // }
// // symbol(9, "+", "-");
// // symbol(7, "X", "0");

// // let change = (lst) => {
// //     // let a = lst[lst.length - 1];
// //     // lst[lst.length - 1] = lst[0];
// //     // lst[0]=a;
// //     let last=lst.pop();
// //     let first=lst.shift();
// //    lst.push(first);
// //    lst.unshift(last);
// //     return lst;
// // }
// // document.writeln(change([1, 2, 3]) + "<br>");
// // document.writeln(change([9, 12, 33, 54, 105]) + "<br>");
// // document.writeln(change(['c', 'л', 'о', 'н']) + "<br>");

// // let a = 5;
// // let b = 7;

// // let temp = a;
// // a = b;
// // b = temp;

// // console.log("a =", a, "b =", b);

// // let isGreater = (x, y) => x > y ? true : false;

// // document.writeln(isGreater(10,5) + "<br>");
// // document.writeln(isGreater(5,10) + "<br>");

// // let checkPassword = password => {
// //     let hasUpper = false;
// //     let hasLower = false;
// //     let hasNum = false;

// //     for (let ch of password) {
// //         // console.log(ch);

// //         if ("A" <= ch && ch <= "Z") {
// //             hasUpper = true;
// //         }
// //         if ("a" <= ch && ch <= "z") {

// //             hasLower = true;
// //         }
// //         if ("0" <= ch && ch <= "9") {
// //             hasNum = true;
// //         }

// //     }

// //     if (password.length >= 8 && hasUpper && hasLower && hasNum) {
// //         return true;
// //     }
// //     return false;
// // }
// // let psw = prompt("Введите пароль:");
// // if (checkPassword(psw)) {
// //     document.writeln("Надежный пароль");
// // } else {
// //     document.writeln("Ненадежный пароль");
// // }

// //Найти факториал числа

// // let factorial = n => {
// //     let fact = 1;
// //     for (let i = 1; i <= n; i++) {
// //         console.log(i);
// //         fact *=i;
// // }return fact;
// // }
// // document.writeln(factorial(5));

// // function getNames() {
// //     let firstName = "Irina", lastName = "Vetrova",age=25;
// //     return [firstName, lastName,age];
// // } let names = getNames();
// // console.log(names);
// // // let surName=names[1];
// // // console.log(surName);
// // let [name1,surName,year]=getNames();//деструктуризация
// // console.log(name1);
// // console.log(surName);
// // console.log(year);

// // function max(a, b) {
// //     if (a > b) {
// //         return "Наибольшее число:" + a;
// //     } else if (a < b) {
// //         return "Наибольшее число:" + b;
// //     } else if (a == b) {
// //         return "Числа равны";
// //     }
// // }
// // document.writeln(max(1, 10) + "<br>");
// // document.writeln(max(6, 5) + "<br>");
// // document.writeln(max(6, 6) + "<br>");

// // let max = function (a, b) {
// //     if (a > b) {
// //         return "Наибольшее число:" + a;
// //     } else if (a < b) {
// //         return "Наибольшее число:" + b;
// //     } else if (a == b) {
// //         return "Числа равны";
// //     }
// // }
// // document.writeln(max(1, 10) + "<br>");
// // document.writeln(max(6, 5) + "<br>");
// // document.writeln(max(6, 6) + "<br>");

// // let max = (a, b) =>{
// //     if (a > b) {
// //         return "Наибольшее число:" + a;
// //     } else if (a < b) {
// //         return "Наибольшее число:" + b;
// //     } else if (a == b) {
// //         return "Числа равны";
// //     }
// // }
// // document.writeln(max(1, 10) + "<br>");
// // document.writeln(max(6, 5) + "<br>");
// // document.writeln(max(6, 6) + "<br>");


// // Callback

// // function isOdd(number) {
// //     return number % 2;//0   1
// // }

// // function isEven(number) {
// //     return number % 2 == 0;//0   1
// // }

// // function filter(numbers, fn) {
// //     let results = [];
// //     for (let number of numbers) {
// //         if (fn(number)) {
// //             results.push(number);
// //         }
// //     }
// //     return results;
// // }
// // let num = [1, 2, 4, 7, 3, 5, 6];
// // console.log(filter(num, isOdd));
// // console.log(filter(num, isEven));

// // function filter(numbers, calback) {
// //     let results = [];
// //     for (let number of numbers) {
// //         if (calback(number)) {
// //             results.push(number);
// //         }
// //     }
// //     return results;
// // }
// // let num = [1, 2, 4, 7, 3, 5, 6];

// // // let oddNumbers = filter(num, function (number) {
// // //     return number % 2;//0
// // // });
// // let oddNumbers = filter(num, number => number % 2);


// // console.log(oddNumbers);

// //forEach()-цикл
// // let numbers = [1, 2, 3, 4, 5, 6];

// // numbers.forEach(function (n) {
// //     document.writeln("Квадрат числа: " + n + " равен " + n ** 2 + "<br>");
// // });
// // numbers.forEach(n=>document.writeln("Квадрат числа: " + n + " равен " + n ** 2 + "<br>"));/
// // ["Hello", "World"].forEach(console.log);

// // let textArray = ["Hello", "World"];
// // for (let i = 0; i < textArray.length; i++) {
// //     alert(textArray[i]);
// // };

// // ["Hello", "World"].forEach((item,index,array)=>{
// //     alert(` У ${item} индекс ${index} в ${array}`);
// // })

// // let numbers = [1, 2, 3, 4, 5, 6];
// // let squares = numbers.map(n => n ** 3);//Возвращает новый массив
// // console.log(squares);


// // let lengths=["Hello","World","!"].map(item=>item.length);
// // console.log(lengths);

// // let number = [1, -12, 8, -4, 25, 42];

// // let passed = number.filter(n => n > 0);
// // console.log(passed);

// // let mas = [];
// // for (let i = 0; i < number.length; i++) {
// //     if (number[i] > 0) {
// //         mas.push(number[i]);
// //     }
// // };
// // console.log(mas);

// // let colors = ["red", "orange", "green", "yellow",];
// // let newColors = colors.filter(color => color.length > 5);
// // console.log(newColors);

// // let number = [1, -12, 8, -4, 25, 42];
// // let passed = number.filter(n => n > 0);
// // console.log(passed);

// // let number = [1, -12, 8, -4, 25, 42];
// // let passed = number.every(n => n > 0);//Проверяет,все ли элементы соответствуют определенному условию
// // console.log(passed);

// // let number = [1, -12, 8, -4, 25, 42];
// // let passed = number.some(n => n > 0);//Проверяет,соответствует ли хотя бы 1 элемент определенному условию
// // console.log(passed);

// //массив.reduce и массив.reduceRight
// //используются для вычисления единого значения на основе массива

// // let arr = [1, 2, 3, 4, 5];
// // let result = arr.reduce((sum, current) => sum + current*2, 0);
// // document.writeln(result);

// // document.writeln(Math.floor(7.9) + "<br>");//округление в нижнюю сторону
// // document.writeln(Math.ceil(7.2) + "<br>");//округление в верхнюю сторону
// // document.writeln(Math.round(7.499) + "<br>");//округление по законам математики

// // (function(){
// // document.writeln(Math.random() +"<br>");//генерирует число от 0 до 1(1 не включается)
// // })();
// // (function (min, max) {
// //     document.writeln(Math.floor(Math.random() * (max - min) + min) + "<br>");//генерирует число от 0 до 1(1 не включается)
// // })(2, 9);
// // document.writeln(Math.floor(Math.random() * 9) + "<br>");//от 0 до 9(не вкл)
// // document.writeln(Math.floor(Math.random() * 7 + 2) + "<br>");//от 0 до 9(не вкл)
// // document.writeln(Math.floor(parseInt(Math.random() * 8 + 6) + "<br>"));//от 0 до 9(не вкл)

// // let pickRandom = function (arr) {
// //     return arr[Math.floor((Math.random() * arr.length))];
// // };

// // let randomWord = ["Цикл", "Массив", "Условие", "Функция","Переменная"];
// // let word = pickRandom(randomWord);
// // document.writeln(word);

// // document.writeln("<div id='block'></div>");
// // let id = document.getElementById("block");
// // id.style.height = "100px";
// // id.style.width = "100px";
// // // id.style.background="rgb(0,0,0)";
// // createColor();
// // function createColor(){
// //     let r=Math.floor(Math.random()*256);
// //     let g=Math.floor(Math.random()*256);
// //     let b=Math.floor(Math.random()*256);
// //     // id.style.background="rgb("+r+","+g+","+b+")";
// //     id.style.background=`rgb(${r},${g},${b})`;
// // }

// // document.writeln("<div id='block'></div>");
// // let id = document.getElementById("block");
// // id.style.height = "100px";
// // id.style.width = "100px";
// // id.style.background=`rgb(${createColor()},${createColor()},${createColor()})`;

// // function createColor(){
// //    return Math.floor(Math.random()*256);

// // }


// // function fn(a, b, ...args) {
// //     console.log("a =", a, ",b =", b, "args = ", args);

// // }
// // fn(1);
// // fn(1, 2, 3, "A", "B", "C");//Оcтаточный параметр
// // Сумма элементов
// // function sum(...args) {
// //     let total = 0;
// //     for (let a of args) {
// //         total += a;
// //     } 
// //     return total;
// // }
// // function sum(...args) {
// //     return args
// // .filter(function(e){
// //     return typeof e==='number';
// // })
// // }
// // function sum(...args) {
// //     return args
// //         .filter(e => typeof e === 'number')
// //         .reduce((prev, curr) => prev + curr);
// // }
// // // console.log(sum(1, 2, 3));
// // // console.log(sum(5, 7, 9, 6, 8, 2, 3));
// // console.log(sum(10, "Hi", null, undefined, 20));

// // let combine =(...args)=>args.reduce((prev,curr)=>prev+" "+curr);
// // console.log(combine("Hello","World","!"));

// // function hello(name) {
// //     name = name || "Незакомец"
// //     document.writeln("Привет ," + name + "!<br>");
// // }
// // hello("Сергей");
// // hello();

// // function hello(name = "Незакомец") {//значение по умолчанию "Незакомец"

// //     document.writeln("Привет ," + name + "!<br>");
// // }
// // hello("Сергей");
// // hello();

// // function fn(a=0, b=0) {
// //     console.log(a + b);
// // }
// // fn(1, 2);
// // fn(1);
// // fn();

// // function rectangle(w, h = 100, fon = "gold") {
// //     document.writeln("<div id='shape'></div>");
// //     let id = document.getElementById("shape");
// //     id.style.width = w + "px";
// //     id.style.height = h + "px";
// //     id.style.background = fon;
// // }
// // rectangle( );
// // rectangle(200 );
// // rectangle(200, 100 );
// // rectangle(50, 40, "red");
// // rectangle(200, 100,"green" );

// // let j = 2;//глобальная область видимости
// // function ch() {
// //     let j = 3;//локальная область видимости
// // }
// // ch();
// // console.log(j);

// // let j = 2;//глобальная область видимости
// // function ch() {
// //      j = 3;//локальная область видимости,переменная перезаписалась
// // }
// // ch();
// // console.log(j);


// // function func(num1, num2) {
// //     function square(num) {
// //         return num * num
// //     }
// //     return square(num1) + square(num2);
// // }
// // console.log(func(2, 3));
// // console.log(square(4));

// // function test(num1, num2) {
// //     function func() {
// //         console.log(num1 + num2);
// //     }
// //     num1 = 2;
// //     func();
// // }
// // test(5, 2);
// // function test(num) {
// //     function func(localNum) {
// //         console.log((localNum));//7

// //     }
// //     func(num + 2);//5+2=7
// // }
// // test(5);
// // function func(num1) {
// //     return function (num2) {
// //         return num1 + num2;

// //     }
// // }
// // console.log((func(1)(2)));

// //func(2)(3)(4)(5)()=>[2,3,4,5]

// // function func(num1) {//2
// //     return function (num2) {//3
// //         return function (num3) {//4
// //             return function (num4) {//5
// //                 return function () {
// //                     return [num1, num2, num3, num4]
// //                 }
// //             }
// //         }
// //     }
// // }

// // console.log(func(2)(3)(4)(5)());


// // function hello() {
// //     console.log("Привет");
// // }
// // let fn = hello;
// // console.log(fn);
// // console.log(hello());


// //Замыкание
// // function test(){
// //     let num=5;
// //     return function(){
// //         console.log(num);

// //     }
// // }
// // let func=test();
// // // console.log(func);
// // func();

// // function outer(n) {
// //     return function (x) {
// //         return n + x;
// //     }
// // }
// // let add5 = outer(5);
// // console.log(add5(10));

// // let add6=outer(6);
// // console.log(add6(10));

// // function test(city) {
// //     let num = 0;
// //     return function () {
// //         num++;
// //         console.log(city, num);
// //     }
// // }
// // let func1 = test("Москва");
// // func1();
// // func1();
// // func1();
// // let func2=test("Сочи");
// // func2();
// // func2();
// // func2();
// // func2();

// //Фильтрация данных массива


// // function isBetween(a, b) {
// //     return function (x) {
// //         return x >= a && x <= b;
// //     }

// // }
// // function isArray(arr) {
// //     return function (x) {
// //         return arr.includes(x);
// //     }

// // }

// // let arr = [1, 2, 3, 4, 5, 6, 7,1,2];
// // console.log((arr.filter(isBetween(3, 6))));
// // console.log((arr.filter(isArray([1,2,10]))));

// //Написать функцию ,которая будет выбирать только значения между 3 и 6(ВКЛЮЧИТЕЛЬНО)
// //Написать функцию ,которая будет выбирать только элементы, совпадающие с одним из элементов массива [1,2,10]

// // let kop = prompt("Введите количество от 1 до 99", 88);
// // if (kop >= 1 && kop <= 99) {
// //     if (kop >= 10 && kop <= 20) {
// //         alert(`${kop} копеек`);
// //     } else if (kop % 10 == 1) {
// //         alert(`${kop} копейка`);
// //     } else if (kop % 10 == 2 || kop % 10 == 3 || kop % 10 == 4) {
// //         alert(`${kop} копейки`);
// //     } else {
// //         alert(`${kop} копеек`);
// //     }
// // }
// // else {
// //     alert("Некорректное значение");
// // }

// // let kop = prompt("Введите количество от 1 до 99", 88);

// // function format(kop){
// //     return function (x) {
// //         return 
// //     }

// // }

// // if (kop >= 1 && kop <= 99) {
// //     if (kop >= 10 && kop <= 20) {
// //         alert(`${kop} копеек`);
// //     } else if (kop % 10 == 1) {
// //         alert(`${kop} копейка`);
// //     } else if (kop % 10 == 2 || kop % 10 == 3 || kop % 10 == 4) {
// //         alert(`${kop} копейки`);
// //     } else {
// //         alert(`${kop} копеек`);
// //     }
// // }
// // else {
// //     alert("Некорректное значение");
// // }

// // let mas = [" Копеек", " Копейка", " Копейки", "-Число за пределами диапазона"];
// // let first = 1;
// // let last = 99;
// // let ch = prompt("Введите количество копеек", 5);
// // document.writeln(ch, countKop(first, last, ch)(mas));
// // function countKop(start, end, num) {
// //     let n = num % 10;
// //     let m = num % 100;
// //     let chislo = !(start <= num && num <= end) ? 3
// //         : n == 1 && m != 11 ? 1
// //             : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2
// //                 : 0;

// //     return arr => arr[chislo];
// // }

// // let str = "I\'m a JavaScript \"programmer\"";
// // document.writeln(str + "<br>");
// // document.writeln(str[2] + "<br>");

// // // str = str[2] + "y";
// // // document.writeln(str + "<br>");
// // // let a = 5;
// // // a = 7 + 2;
// // // console.log(a);
// // // document.writeln(str.length + "<br>");//29

// // // // document.writeln(str[6] + "<br>");
// // // // document.writeln(str.at(6) + "<br>");
// // // // document.writeln(str.at(-2) + "<br>");

// // // // for(let ch of str){
// // // //     console.log(ch);

// // // // }



// // // // let s = "Написать скрипт подсчитывающий количество каждой буквы русского алфавита в тексте.";
// // // // countLetters(s);

// // // // function countLetters(st) {
// // // //     let letters = ["а", "б", "в"];
// // // //     for (let i = 0; i < letters.length; i++) {
// // // //         let count = 0;
// // // //         for (let j = 0; j < st.length; j++) {
// // // //             if (st[j] == letters[i]) {
// // // //                 count++;
// // // //             }
// // // //         }
// // // //         document.writeln("Символ '" + letters[i] + "' встретился " + count + "  раз<br>");
// // // //     }
// // // // }

// // // document.writeln(str.toUpperCase() + "<br>");//преобразование в верхний регистр
// // // document.writeln(str.toLowerCase() + "<br>");//преобразование в нижний регистр


// // let n=prompt("Введите имя","марк");
// // alert(first(n));

// // function first(st){
// //     // let newStr=st.at(0).toUpperCase();
// //     let newStr=st[0].toUpperCase();

// //     for(let i=1;i<st.length;i++){
// //         // newStr+=st.at(i).toLowerCase();
// //         newStr+=st[i].toLowerCase();
// //     }
// //     return newStr;
// // }

// // let str1 = " Я учу JavaScript. Мне нравится JavaScript";

// // str = str.concat(".", str1);
// // document.writeln(str + "<br>");
// // let message = "*";
// // document.writeln(message.repeat(30) + "<br>");

// // document.writeln(str.indexOf("JavaScript") + "<br>");


// // document.writeln(str.indexOf("JavaScript", 7) + "<br>");//возвращает индекс,на котором находится подстрока или -1 если ничего не найдено,второй параметр-начвло для поиска
// // document.writeln(str.lastIndexOf("JavaScript") + "<br>");//последнее совпадение

// // // let email;
// // // do {
// // //     email = prompt("Введите email:", "test");
// // //     if (email.indexOf("@") == -1) {
// // //         alert("Некорректно,повторите операцию");
// // //         continue;
// // //     }
// // //     break;
// // // } while (true);
// // // alert("Спасибо за сотрудничество");

// // let str = prompt("Введите строку", "12345622245632");
// // let count = 0;
// // countNumber(str);
// // function countNumber(str) {
// //     let n = str.at(-1);
// //     for (let i = 0; i < str.length; i++) {
// //         if (n == str.at(i)) {
// //             count++;
// //         } 
// //     } 
// //     document.writeln("В числе " +str+" цифра " +str.at(-1) + " встречается " + count + "раз<br>");

// // }

// // document.writeln(str.includes("JavaScript") + "<br>");
// // document.writeln(str.startsWith("JavaScript", 6) + "<br>");
// // document.writeln(str.endsWith("JavaScript", 47) + "<br>");
// // document.writeln(str.length + "<br>");
// // console.log(str.split(" ",3));

// // let arr=str.split("JavaScript");//делит строку по слову в ковычках делит его на массив
// // console.log(arr);
// // let st=arr.join("C++");
// // document.writeln(st +"<br>");

// // // let text=st.replace("C++","JavaScript");
// // let text=st.replaceAll("C++","JavaScript");
// // document.writeln(text);

// // document.writeln(str.slice(0, 3) + "<br>");
// // document.writeln(str.slice(6) + "<br>");
// // document.writeln(str.slice(-23, -10) + "<br>");

// // document.writeln(str.substring(0, 3) + "<br>");
// // document.writeln(str.substring(6) + "<br>");
// // document.writeln(str.substring(-23) + "<br>");

// //background-color=>backgroundColor
// //list-style-type
// // let style= prompt("Введите свойство CSS","background-color");
// // alert(def(style));

// // function def(st){
// //     let arr=st.split("-");
// //     console.log(arr);
// //     for(let i=1;i<arr.length;i++){
// //         // arr[i]=arr[i].at(0).toUpperCase() +arr[i].slice(1);
// //         arr[i]=arr[i][0].toUpperCase() +arr[i].slice(1);
// //     }
// //     return arr.join("");
// // }

// //УБирает все пробелы
// // let hello = "   Hello  ";
// // console.log(">" + hello + "<");
// // let beforeLength = hello.length;
// // console.log("Длина строки до : " + beforeLength);

// // hello = hello.trim();
// // let afterLength = hello.length;
// // console.log("Длина строки после : " + afterLength);

// // let add = hello.padStart(15,"_");//слева добавилось 10 символов(пробелы)
// // console.log(">" + add + "<");
// // add=hello.padEnd(15,"_");//справа добавилось 10 символов(пробелы)
// // console.log(">" + add + "<");

// // document.writeln(5)

// // document.writeln("hello">"Hello");
// // document.writeln("hello".codePointAt(0));//индекс элемента 0 в строке по Юникод
// // document.writeln("Hello".codePointAt(0));//индекс элемента 0 в строке по Юникод
// // document.writeln("А".codePointAt(0));//1040
// // document.writeln("а".codePointAt(0));//1072
// // document.writeln("Я".codePointAt(0));//1071
// // document.writeln("я".codePointAt(0));//1103
// // document.writeln("Ё".codePointAt(0));//1025
// // document.writeln("ё".codePointAt(0));//1105
// // document.writeln("Й".codePointAt(0));//1049
// // document.writeln("й".codePointAt(0));//1081

// //ё...от А до Яа-я...ё

// // document.writeln(String.fromCodePoint(104));
// // document.writeln(String.fromCodePoint(1025));

// // let a = 122;//z
// // let b = 97;//a
// // if (a > b) {
// //     for (let i = b; i <= a; i++) {
// //         document.writeln(String.fromCodePoint(i));
// //     }
// // } else {
// //     for (let i = a; i <= b; i++) {
// //         document.writeln(String.fromCodePoint(i));
// //     }
// // }

// ///Рандомный пароль генерация
// // let minASCII = 33;
// // let maxASCII = 126;
// // let shortTest = 12;
// // let longTest = 18;

// // function randomPassword() {
// //     let randomLength = rand(shortTest, longTest);
// //     let res = "";
// //     for (let i = 0; i < randomLength; i++) {
// //         let randomChar = String.fromCodePoint(rand(minASCII, maxASCII));
// //         res = res + randomChar;
// //     }
// //     return res;
// // }

// // function rand(min, max) {
// //     return Math.floor(Math.random() * (max - min + 1) + min);
// // }
// // document.writeln("Ваш случайный пароль :" + randomPassword());

// //!!!!!!!!!!!!!!!!!!!!Рекурсия!!!!!!!!!!!!!!!!!!!!

// // function elevator(n) {
// //     if (n == 0) {
// //         document.writeln("Вы в подвале<br>");
// //         return;
// //     }
// //     console.log(n);
// //     elevator(n - 1);
// //     document.writeln(n + " ");
// // }
// // let n1 = prompt("На каком вы находитесь этаже:", 5);
// // elevator(n1);

// // Сумма чисел от 1 до заданного числа n с помощью рекурсии
// // function sum(n) {
// //     if (n <= 1) {
// //         return n;
// //     }
// //     console.log(n);

// //     return n + sum(n - 1);
// // }
// // document.writeln(sum(20));//1+2+3+4+5

// // let chislo = +prompt("Число:", 2);
// // let stepen = +prompt("Степень :", 4);
// // document.writeln(chislo, " в степени ", stepen, " = ", degree(chislo, stepen));
// // function degree(ch, st) {
// //     if (st) {
// //         return ch * degree(ch,st-1);
// //     }
// //     return 1;
// // }

// //Найти факториал числа
// // let chislo = +prompt("Число:", 2);

// // document.writeln(chislo, " !  = ", degree(chislo, stepen));
// // function degree(ch, st) {
// //     if (st) {
// //         return ch * degree(ch,st-1);
// //     }
// //     return 1;
// // }


// //Факториал через рекурсию

// // let factorial = n => {
// //     let fact = 1;
// //     for (let i = 1; i <= n; i++) {
// //         fact *= i;
// //     }
// //     return fact;
// // }
// // document.writeln(factorial(5));

// // let chislo = +prompt("Число:", 5);
// // document.writeln(chislo, " !  = ", factorial(chislo));
// // function factorial(ch) {
// //     if (ch) {
// //         return ch * factorial(ch-1);
// //     }
// //     return 1;
// // }

// // let factorial = n => (n > 0) ? n * factorial(n - 1) : 1;
// // document.writeln(factorial(5));
// // function toStr(n, base) {
// //     let convert = "0123456789ABCDEF";
// //     if (n < base) {
// //         return convert[n]
// //     } else {
// //         return toStr(parseInt(n / base), base) + convert[n % base];
// //     }
// // }
// // document.writeln(toStr(254, 16));

// // События
// // function loadStr() {
// //     alert("Страница была загружена");
// // }
// // let m= document.getElementById("mes");
// // function over() {
// //     m.style.color = "red";
// // }
// // function out() {
// //   m.style.color = "yellow";
// // }

// // function change(){
// //     let id=document.querySelector("h2");
// //     id.style.color="blue";
// // }

// // function randomBg(){
// //     let r=Math.floor(Math.random()*256);
// //     let g=Math.floor(Math.random()*256);
// //     let b=Math.floor(Math.random()*256);
// //     document.body.style.background=`rgb(${r},${g},${b})`;
// // }
// // let newImg=document.getElementById("newImg");
// // function on(){
// // newImg.src="night.png";
// // }
// // function off(){
// // newImg.src="day.png";
// // }

// // let but = document.getElementById("but");
// // but.onclick = function () {
// //     alert("Спасибо");
// // }

// // function hello() {
// //     alert("Спасибо");
// // }
// // but.onclick = hello();

// // let hex = "0123456789ABCDEF".split("");
// // console.log(hex);

// // let button = document.getElementById("btn");
// // let color = document.querySelector(".color");

// // button.onclick = function () {
// //     let hexColor = generateHex();
// //     console.log(hexColor);
// //     color.textContent = hexColor;
// //     document.body.style.background = hexColor;

// // }
// // function generateHex() {
// //     let hexColor = "#";
// //     for (let i = 0; i < 6; i++) {
// //         hexColor += hex[getRandomNumber()];
// //     }
// //     return hexColor;
// // }
// // function getRandomNumber() {
// //     return Math.floor(Math.random() * hex.length);
// // }

// // function change(id){
// // id.innerHTML="Новый текст";
// // id.style.color="red";
// // }
// // function change(id){
// // id.innerHTML="Новый текст";
// // id.style.color="red";
// // }

// // function setColor(color) {
// //     document.body.style.background = color.className;
// // }
// // let el=document.querySelector("#elem");
// // //элемент.addEventListener("тип события",функция)
// // el.addEventListener("click",function(){
// //     el.innerHTML="новый текст";
// // });
// // el.addEventListener("contexmenu",function(){
// // el.style.color="green";
// // el.style.background="yellow";
// // });
// // let searchInput = document.querySelector("#searchInput");
// // let list = document.querySelectorAll("#list li");
// // searchInput.addEventListener("input", function () {
// //     let searchTerm = this.value.toLowerCase();
// //     // console.log(searchTerm);
// //     // console.log(list.length);

// //     for (let i = 0; i < list.length; i++) {
// //         let item = list[i];
// //         // console.log(item);
// //         if (item.textContent.toLowerCase().indexOf(searchTerm) != -1) { //содержимое элемента без ли
// //             item.style.display = "block";
// //         }else{
// //             item.style.display="none";
// //         }
// //     }

// // });
// // let but = document.querySelector("button");

// // but.addEventListener("click", function (event) {
// //     console.log(event);

// // });

// // let buttons = document.querySelectorAll("input");

// // let handleClick = function (event) {
// // console.log("Кликнули по :", event.target.value);

// // }
// // for (let i = 0; i < buttons.length; i++) {
// // buttons[i].addEventListener("click",handleClick);
// // }
// // document.addEventListener("mousemove", function (event) {
// //     let c = document.querySelector("#ev");
// //     let x = event.clientX;
// //     let y = event.clientY;
// //     console.log(event);

// //     c.textContent = "X=" + x + " y=" + y;
// //     c.addEventListener("dblclick",function(){
// //         event.target.style.background="red";
// //     })
// // });
// // let section=document.querySelector("section");
// // let div=document.querySelector("div");
// // let p=document.querySelector("p");
// // section.addEventListener("click",function(){
// //     section.style.background="red";

// // });
// // div.addEventListener("click",function(event){
// //     div.style.background="orange";
// //     event.stopPropagation();
// // });
// // p.addEventListener("click",function(event){
// //     p.style.background="yellow";
// //     event.stopPropagation();
// // });
// // let link=document.querySelector("a");

// // link.addEventListener("click",function(event){
// //     event.preventDefault();
// //     console.log("Переход по ссылке отменен");

// // })

// // let input=document.querySelector("#but");

// // input.addEventListener("click",handle);

// // function handle(){
// //     alert("Спасибо!");
// //     input.removeEventListener("click",handle);
// // }

// // setTimeout(функция,задержка);
// // setTimeout("alert('Текст')",3000);//миллисекунды 1с=1000мс
// // setTimeout("hello()",3000);
// // setTimeout(hello,3000,'Привет','друг');

// // // setTimeout("hello('Привет','друг')",3000);
// // function hello(h,n){
// //     alert(h+", "+n+"!");
// // }

// // setTimeout(hello);
// // function hello(){
// //     alert("привет");
// // }

// // document.writeln("<div id='dt'>Создание анимированного текста</div>");

// // let tag = document.querySelector("#dt");
// // let text = document.querySelector("#dt").innerHTML;
// // let i = 0;

// // window.addEventListener("load", animText);

// // function animText() {
// //     tag.innerHTML = text.substring(0, i);
// //     i++;
// //     console.log(i);
// //     if (i > text.length) {
// //         i = 0;
// //     }

// //     setTimeout(animText, 200);//функция сама себя вызыввет каждые 100мс
// // }

// // let d = new Date();
// // document.writeln(d + "<br>");
// // document.writeln(d.toDateString() + "<br>");
// // document.writeln(d.getFullYear() + "<br>");
// // document.writeln(d.getMonth() + "<br>");//от 0 до 11
// // document.writeln(d.getDate() + "<br>");//12
// // document.writeln(d.getDay() + "<br>");//0-вск
// // document.writeln(d.getMilliseconds() + "<br>");//0-вск
// // let d = new Date().getTime();  ///1 января 1970года
// // console.log(d);
// // let d = new Date(2024,11,18,10,0,0).getTime();  
// // console.log(d);

// // setInterval(функция,интервал);


// // document.writeln("<input type='button' value='Start/Stop'>");
// // document.querySelector("input").addEventListener("click", st);

// // function setColor() {
// //         let x = document.body;
// //         x.style.background = (x.style.background == "yellow") ?
// //                 "orange" : "yellow";
// // }
// // let act, run;
// // console.log(run);

// // function st() {
// //         if (!run) {
// //                 act = setInterval(setColor, 1000);
// //                 // run = true;
// //         } else {
// //                 clearInterval(act);
// //                 // run = false;
// //         }
// //         run = !run;
// // }

// // document.writeln("<input type='button' value='Start'>");
// // document.writeln("<input type='button' value='Stop'>");
// // document.querySelector("input").addEventListener("click", st);
// // document.querySelectorAll("input")[1].addEventListener("click", st2);

// // function setColor() {
// //         let x = document.body;
// //         x.style.background = (x.style.background == "yellow") ?
// //                 "orange" : "yellow";
// // }
// // let act;
// // function st() {
// //         act = setInterval(setColor, 1000);
// //         console.log(act);
// // };
// // function st2() {
// //         clearInterval(act);
// // }


// // document.writeln("<div id='text'>Время</div>");

// // // window.addEventListener("load", function(){
// // //         setInterval(time, 1000);
// // // })
// // window.addEventListener("load", () => setInterval(time, 1000));

// // function time() {
// //         let d = new Date();
// //         let hour = d.getHours();
// //         let min = d.getMinutes();
// //         let sec = d.getSeconds();
// //         if (min < 10) {
// //                 min = "0" + min;
// //         }
// //         if(sec<10){
// //                 sec = "0" + sec;
// //         }
// //         let t = hour + ":" + min + ":" + sec;
// //         document.querySelector("#text").innerHTML = t;
// // }

// //                        Секундомер
// // document.writeln(`
// //      <input type="text" id="timer" value="0.0" size="4">   
// //      <input type="button" value="start/stop">
// //      <input type="button" value="clear">
// //         `);
// // document.querySelector("input[value='start/stop']").addEventListener("click", startTimer);
// // function startTimer() {
// //         setInterval(incTimer, 100);
// // }
// // document.querySelector("input[value='clear']").addEventListener("click", resetTimer);
// // let tsec = 0;
// // function incTimer() {
// //         tsec++;
// //         let t = tsec / 10.0;
// //         if (tsec % 10 == 0) {
// //                 t += ".0";
// //         }
// //         document.getElementById("timer").value = t;
// // }
// // let act, run;
// // function startTimer() {
// //         if (!run) {
// //                 act = setInterval(incTimer, 100);

// //         } else {
// //                 clearInterval(act);

// //         }
// //         run = !run;
// // }
// // function resetTimer() {
// //         tsec = 0;
// //          document.getElementById("timer").value = "0.0";
// // }

// // let coutdownElement = document.querySelector(".countdown");
// // let items = document.querySelectorAll(".countdown-item>h4");

// // let countdownDate = new Date(2026, 3, 18, 16, 30, 0).getTime();
// // // console.log(countdownDate);

// // function getCountTime() {
// //         let now = new Date().getTime();

// //         // console.log(now);
// //         let distance = countdownDate - now;
// //         // console.log(distance);
// //         /*
// //         1c=1000mc;
// //         1min=60c;
// //         1 ч=60с;
// //         1 день=24часа;
// //         */
// //         let oneDay = 24 * 60 * 60 * 1000;
// //         let oneHour = 60 * 60 * 1000;
// //         let oneMinute = 60 * 1000;
// //         let days = Math.floor(distance / oneDay);
// //         let hours = Math.floor(distance % oneDay / oneHour);
// //         let min = Math.floor(distance % oneHour / oneMinute);
// //         let sec = Math.floor(distance % oneMinute / 1000);
// //         let values = [days, hours, min, sec];
// //         items.forEach(function (item, index) {
// //                 item.textContent = values[index];
// //         })
// //         if (distance < 0) {
// //                 clearInterval(countDown);
// //                 console.log(countDown);
// //                 coutdownElement.innerHTML="<h4 class='expired'>Время вышло</h4>"
// //         }

// // }


// // let countDown = setInterval(getCountTime, 1000);
// // console.log(countDown);

// // getCountTime();

// // let but = document.querySelector("#cl");
// // but.addEventListener("click", myMove);
// // function myMove() {
// //         let elem = document.getElementById("animate");
// //         let pos = 0;
// //         let id = setInterval(frame, 20);
// //         function frame() {
// //                 if (pos == 350) {
// //                         clearInterval(id);  
// //                          but.addEventListener("click", myMove);  
// //                 } else {
// //                         pos++;
// //                         elem.style.top = pos + "px";
// //                         elem.style.left = pos + "px";
// //                         but.removeEventListener("click",myMove)
// //                 }
// //         }
// // }

// // document.image.border="1";
// // document.writeln("<br>Ширина изображения: "+document.image.width);
// // document.writeln("<br>Ширина изображения: "+document.image.height);

// // document.image.width=200;
// // document.image.height=50;
// // document.writeln("***********")
// // document.writeln("<br>Ширина изображения: "+document.image.width);
// // document.writeln("<br>Ширина изображения: "+document.image.height);

// // document.image.src="blue_star.png"

// // document.image.addEventListener("click", changeImage);

// // let flag = 0;
// // function changeImage() {
// //         if (flag == 0) {
// //                 document.image.src = "blue_star.png";
// //                 flag = 1;
// //         } else {
// //                 document.image.src = "golden_star.png";
// //                 flag = 0;
// //         }
// // }

// // слайдер

// // let array = new Array("2.jpg", "3.jpg", "4.jpg");
// // document.writeln("<input type='button' value='<' name='left'>");
// // document.writeln("<img id='sl' src='" + array[0] + " '>");
// // document.writeln("<input type='button' value='>' name='right'>");

// // document.getElementsByName("right")[0].addEventListener("click", setRight);
// // document.getElementsByName("left")[0].addEventListener("click", setLeft);


// // let i = 0;
// // let image = document.getElementById("sl");
// // function setRight() {
// //         i++;
// //         if (i == array.length) {
// //                 i = 0;
// //         }
// //         image.src = array[i];
// // }
// // function setLeft() {
// //         i--;
// //         if (i < 0) {
// //                 i = array.length - 1;
// //         }
// //         image.src = array[i];
// // }

// // let imgTime = ["c0.gif", "c1.gif", "c2.gif", "c3.gif", "c4.gif", "c5.gif", "c6.gif", "c7.gif", "c8.gif", "c9.gif"];
// // let masImg = document.querySelectorAll("#block img");
// // console.log(masImg);

// // clock();

// // function clock() {
// //         let time = new Date();
// //         let hours = time.getHours();
// //         let minutes = time.getMinutes();
// //         let seconds = time.getSeconds();
// //         getImg(hours, minutes, seconds);
// //         setTimeout(clock, 1000);

// // }
// // function getImg(h, m, s) {
// //         masImg[0].src = imgTime[Math.floor(h / 10)];
// //         masImg[1].src = imgTime[h % 10];

// //         masImg[3].src = imgTime[Math.floor(m / 10)];
// //         masImg[4].src = imgTime[m % 10];

// //         if (s < 10) {
// //                 masImg[6].src = imgTime[0];
// //                 masImg[7].src = imgTime[String(s)[0]];
// //         } else {
// //                 masImg[6].src = imgTime[String(s)[0]];
// //                 masImg[7].src = imgTime[String(s)[1]];
// //         }

// // }


// // document.querySelector("button").addEventListener("click",function(){
// //      console.log(document.querySelector("input"));   
// // });




// //объектная модель документа

// alert(document.head.innerHTML);
// alert(document.body.innerHTML);
// alert(document.documentElement.innerHTML);
// let myTitle=document.querySelector("h1").innerHTML;
// console.log(myTitle);
// let title3=document.querySelector("h3").firstChild.nodeValue;
// let title3=document.querySelector("h3").lastChild.nodeValue;
// let title3=document.querySelector("h3").childNodes[0].nodeValue;
// console.log(title3);

// document.querySelector("h1").innerHTML=document.querySelector("h3").innerHTML;
// let myTitle=document.querySelector("h1").firstChild;
// alert(myTitle.nodeName);//Возвращает имя h1 в верхнем регистре(Вернул Н1)
// alert(myTitle.nodeType);//Возвращает имя h1 в верхнем регистре(Вернул Н1)
// let elem = document.querySelector("#root");

// let tag = document.createElement("p");//Создается тег р ,но не отображается
// let node = document.createTextNode("Новый текст");
// tag.append(node);//к тэгу р добавляем node
// elem.append(tag);//добавляет новый элемент последним дочерним элементом внутри родительского

// elem.prepend(tag);//добавляет новый элемент первым дочерним элементом внутри родительского

// elem.before(tag);//добавляет новый элемент до выбранного id
// elem.after(tag);//добавляет новый элемент после выбранного id
// elem.replaceWith(tag);//заменяет элемент

// let tree = document.querySelector(".tree");
// for (let li of tree.querySelectorAll("li")) {
//         console.log(li);
//         let span = document.createElement("span");
//         li.prepend(span);//<li><span></span></li>
//         span.append(span.nextSibling);//Вложили содержимое li  в span
// }

// tree.addEventListener("click",function(event){
// if(event.target.tagName!="SPAN"){
//         return;
// }
// let childrenContaner=event.target.parentNode.querySelector("ul");
// if(!childrenContaner){
//         return;
// }
// childrenContaner.hidden=!childrenContaner.hidden;
// })

// let list = document.querySelector("ul");
// let newItem = document.createElement("li");
// newItem.textContent = "Новый элемент списка";

// list.append(newItem);

// let i = 1;
// document.querySelector("#func1").addEventListener("click", change)
// document.querySelector("#func2").addEventListener("click", add)

// function change() {
//         let elem = document.querySelector("#list2").lastChild;
//         document.querySelector("#list1").append(elem);

// }
// function add() {
//         let elem = document.createElement("li");
//         elem.innerHTML = "Watter" + i;
//         document.querySelector("#list2").append(elem);
//         i++;
// }

//Календарь//
// let calendar = document.getElementById("calendar");
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth() + 1;

// createCalendar(calendar, year, month);

// function createCalendar(elem, year, month) {
//         let curDate = new Date(year, month - 1, 1);
//         let findDate = new Date(year, month, 0);
//         while (curDate.getDay() != 1) {
//                 curDate.setDate(curDate.getDate() - 1);
//         }
//         let currentMonth = [
//                 "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
//         ];
//         let current = document.createElement("h2");
//         current.textContent = `${currentMonth[month - 1]} ${year}`;
//         elem.append(current);
//         let table = document.createElement("table");
//         table.innerHTML = `
//         <tr>
//         <th>пн</th>
//         <th>вт</th>
//         <th>ср</th>
//         <th>чт</th>
//         <th>пт</th>
//         <th>сб</th>
//         <th>вс</th>
//         </tr>
//         `;
//         while (curDate <= findDate) {
//                 let tr = document.createElement("tr");
//                 for (let i = 0; i < 7; i++) {
//                         let td = document.createElement("td");
//                         if (curDate.getMonth() == month - 1) {
//                                 td.textContent = curDate.getDate();
//                         }
//                         tr.append(td);
//                         curDate.setDate(curDate.getDate() + 1);
//                 }

//                 table.append(tr);
//         }
//         elem.append(table);
// }

// let div=document.querySelector("#root");
// div.insertAdjacentHTML("beforebegin","<p>До выбранного элемента</p>");
// div.insertAdjacentHTML("afterend","<p>После выбранного элемента</p>");
// div.insertAdjacentHTML("afterbegin","<p>Первым внутри выбранного элемента</p>");
// div.insertAdjacentHTML("beforeend","<p>Последним внутри выбранного элемента</p>");
// let child=document.querySelector("#p1");
// // child.remove();
// let second=document.querySelector("#p2");
// second.after(child);

// let ul=document.querySelector("ul");
// let li=ul.cloneNode(true);
// li.querySelector("li").innerHTML="Начало клонируемых элементов";
// ul.after(li);

// let list = document.querySelector(".list");//ul
// list.insertAdjacentHTML("beforebegin", "<h2>Список</h2><hr>")
// let listInner = document.querySelector("h2");
// listInner.insertAdjacentText("beforeend", " планет");
// list.insertAdjacentHTML("afterbegin", "<li>Солнце</li>")
// list.insertAdjacentHTML("beforeend", "<li>Марс</li>");
// list.insertAdjacentHTML("afterend", "<hr>");
// let hr = document.querySelectorAll("hr")[1];
// let h4 = document.createElement("h4");
// h4.innerHTML = "Конец списка";
// hr.insertAdjacentElement("afterend", h4);
// let idRemove = setInterval(function () {
//         let li = document.querySelector("li:last-child");
//         if (li === null) {
//                 clearInterval(idRemove);
//                 // alert("список удален");
//                 list.insertAdjacentHTML("afterbegin","<li>Список удален</li>");
//         } else {
//                 li.remove();
//         }

// }, 500);

// let div=document.querySelector("div");
// div.className="alert";
// let activeDiv=document.querySelector(".active");
// activeDiv.classList.add("hidden");//Добавление имени класса
// // activeDiv.classList.remove("hidden");///удаление имени класса
// activeDiv.classList.toggle("hidden");//если класс есть,то он его удаляет,а если его нет,то добавляет
// activeDiv.classList.replace("active","alert");//заменяет класс activ  на alert

// подсвечивание при наведении на элемент

// let menu =document.querySelector(".menu");
// let child=document.querySelectorAll(".menu li");
// menu.addEventListener("click",(event)=>{
//     if(event.target.tagName=="LI"){
//       for(let item of child){
//         item.classList.remove("active");
//     }
// event.target.classList.add("active");  
//     }

// })

// let menuElem = document.getElementById("sweeties");
// let titleElem = menuElem.querySelector(".title");
// titleElem.addEventListener("click", function () {
//     menuElem.classList.toggle("open");
// })

//графический редактор

// let brush = document.createElement("div");
// brush.classList.add("brush");
// brush.hidden = true;

// document.addEventListener("mouseover", function () {
//     // console.log("Соб");
//     brush.hidden = false;

// });
// document.addEventListener("mouseout", function () {
//     // console.log("Соб");
//     brush.hidden = true;

// });

// document.addEventListener("mousemove", function (event) {
//     // console.log("Соб");
//     brush.style.left = `${event.clientX}px`;
//     brush.style.top = `${event.clientY}px`;
//     // console.log(event.buttons);
//     if (event.buttons === 1){
//         let paint=document.createElement("div");
//         paint.classList.add("paint");

//         paint.style.left=`${event.clientX}px`;
//         paint.style.top=`${event.clientY}px`;
//         document.body.append(paint);
//     }

// });

// document.addEventListener("mousedown", function () {
//     // console.log("Событие работает");
//     brush.style.scale = "0.8"

// })
// document.addEventListener("mouseup", function () {
//     // console.log("Событие работает");
//     brush.style.scale = "1"

// })

// document.body.append(brush);

// let frogImg = document.getElementById("green-frog");
// console.log(frogImg.id);
// console.log(frogImg.alt);
// console.log(frogImg.className);
// console.log(frogImg.title);
// console.log(frogImg.src);
// console.log(frogImg.getAttribute("src"));
// frogImg.title="Новый текст подсказки";
// frogImg.setAttribute("src","4.jpg");//замена 
// frogImg.removeAttribute("src");
// console.log(frogImg.hasAttribute("src"));
// console.log(frogImg.getAttribute("data-frog"));
// console.log(frogImg.dataset.frog);//нахождение data-frog

//фильтрация и пагинация


// let lenghtPath = 5;//кол-во эл-в на одной странице
// let pagination = document.querySelector(".pagination");
// let product = document.querySelector(".product-cover");
// let data = new Array(18);
// let filter = document.querySelector(".buttons");

// for (let i = 0; i < data.length; i++) {
//     data[i] = document.createElement("div");
//     data[i].classList.add("card");
//     if (i % 3) {
//         data[i].classList.add("blue");
//     } else {
//         data[i].classList.add("gray");
//     }
//     let node = document.createTextNode(i + 1);
//     data[i].append(node);
//     product.append(data[i]);
// }

// let chunks = splitParrts(data);
// renderPagination();
// renderChunks(0);
// pagination.addEventListener("click", e => {
//     let item = e.target.closest(".pagination-item");
//     if (item) {
//         let active = pagination.querySelector(".pagination-item.active"), part;
//         if (item.classList.contains("item-prev") || item.classList.contains("item-next")) {
//             if (item.classList.contains("disable")) {
//                 return false;
//             }
//             part = +active.dataset.part;
//             part = item.classList.contains("item-prev") ? part - 1 : part + 1;
//             renderChunks(part);
//             active.classList.remove("active");
//             pagination.querySelector(`.pagination-item[data-part='${part}']`).classList.add("active");

//         }
//         else {
//             active.classList.remove("active");
//             item.classList.add("active");
//             part = +item.dataset.part;
//             renderChunks(part);

//         }
//         let prev = pagination.querySelector(".pagination-item.item-prev");
//         let next = pagination.querySelector(".pagination-item.item-next");
//         if (prev.classList.contains("disable")) {
//             prev.classList.remove("disable");
//         }
//         if (next.classList.contains("disable")) {
//             next.classList.remove("disable");
//         }
//         if (part === 0) {
//             prev.classList.add("disable");
//         }
//         if (part === chunks.length - 1) {
//             next.classList.add("disable");
//         }
//     }
// })

// function splitParrts(arr) {
//     if (arr.length > lenghtPath) {
//         let chunks = [];
//         for (let i = 0; i < arr.length; i += lenghtPath) {
//             chunks.push(arr.slice(i, i + lenghtPath));
//         }
//         return chunks;
//     } else {
//         return arr;
//     }
// }
// function renderChunks(part) {
//     if (part >= 0 && part <= chunks.length) {
//         product.innerHTML = "";
//         chunks[part].map(elem => product.append(elem));

//     } else {
//         return false;
//     }
// }
// renderChunks(0);
// function splitParrts(arr) {
//     if (arr.length > lenghtPath) {
//         let chunks = [];
//         for (let i = 0; i < arr.length; i += lenghtPath) {
//             chunks.push(arr.slice(i, i + lenghtPath));
//         }
//         return chunks;
//     } else {
//         return arr;
//     }
// }
// function renderChunks(part) {
//     if (part >= 0 && part <= chunks.length) {
//         product.innerHTML = "";
//         chunks[part].map(elem => product.append(elem));

//     } else {
//         return false;
//     }
// }

// function renderPagination() {
//     if (chunks.length > 1) {
//         chunks.map((elem, i) => pagination.insertAdjacentHTML("beforeend", `<li class='pagination-item ${i === 0 ? " active" : " "}' data-part="${i}"><a href="#">${i + 1}</a></li>`));
//         pagination.insertAdjacentHTML("afterbegin", "<li class='pagination-item item-prev disable'><a href='#'>prev</a></li>");
//         pagination.insertAdjacentHTML("beforeend", "<li class='pagination-item item-next '><a href='#'>next</a></li>");
//     }
// }

// filter.addEventListener("click", e => {
//     let btn = e.target.closest(".btn");
//     pagination.innerHTML ="";//очистка пагинации
//     if (btn) {//нажата ли кнопка
//         if (btn.dataset.filter != "all") {
//             chunks = splitParrts(data.filter(elem => elem.classList.contains(btn.dataset.filter)));
//         } else {
//             chunks = splitParrts(data);

//         }
//     }
//     renderChunks(0);
//     renderPagination();
// });

//работа с формами

// let form = document.querySelector("form");
// console.log(form.length);//кол-во тэгов внутри
// console.log(form.elements);//массив эл-в внутри,представляет их в виде массива
// console.log(form.name);//значение атрибута 
// console.log(form.action);//адрес метода action
// console.log(form.method);//значение метода 

// // document.form1.style.background = "silver";
// document.forms[0].style.margin="20px";
// document.forms["form1"].style.padding="16px";//значение атрибута name-универсальный способ
// document.forms.form1.style.border="2px dotted gray";

// let key = form.elements[0];
// console.log(key);
// let key2=form.elements["name1"];
// console.log(key2);
// document.form1.name1.style.background = "blue";
// document.form1["name1"].style.color = "black";
// let txt = document.querySelector("#text1");
// let but = document.querySelector("button");
// but.addEventListener("click", content);
// function content() {
//     alert(txt.value);
// }

//Счетчик на кол-во элементов в строке
// let text = document.querySelector("input");
// let output = document.querySelector("#length");
// text.addEventListener("input", function () {
//     output.textContent = text.value.length + " / 30";
// })

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     console.log("Сохраненные данные: " + form.elements.value.value);
//     event.preventDefault();//отмена действия(переход по ссылке)
// })

// let reg = document.querySelector(".register");
// let h2 = document.querySelector("h2");
// let win = document.createElement("p");
// h2.after(win);


// reg.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let login = reg.login.value;
//     let password = reg.psw.value;
//     let password2 = reg.psw2.value;
//     let errors = "";

//     if (login == "" || password == "" || password2 == "") {
//         win.className = "red";
//         win.innerText = "Все поля должны быть заполнены!";
//         return;
//     }
//     if (password != password2) {
//         errors += "Пароли не совпадают<br>";
//     }
//     if (password.length < 6) {
//         errors += "Слишком короткий пароль";
//     }
//     if (errors == "") {
//         win.className = "green";
//         win.innerHTML = "регистрация прошла успешно";
//     } else {
//         win.className = "red";
//         win.innerHTML = errors;
//     }
//     reg.login.value = "";
//     reg.psw.value = "";
//     reg.psw2.value = "";


// })

// Список задач с редактированием
// let input = document.querySelector("#input");
// let list = document.querySelector("#list");
// input.addEventListener("keypress", function (event) {
//     if (event.key == "Enter") {
//         let li = document.createElement("li");
//         let task = document.createElement("span");
//         task.classList.add("task");
//         task.textContent = input.value;
//         task.addEventListener("dblclick", function () {
//             let text = this.textContent;
//             this.textContent = "";

//             let edit = document.createElement("input");
//             edit.value = text;
//             this.append(edit);

//             let self = this;
//             edit.addEventListener("keypress", function (event) {
//                 if (event.key == "Enter") {
//                     self.textContent = edit.value;
//                 }
//             })
//         })
//         li.append(task);

//         let remove = document.createElement("span");
//         remove.textContent = "Удалить";
//         remove.classList.add("remove");
//         remove.addEventListener("click", function () {
//             // li.remove();//Удалить элемент
//             remove.parentNode.remove();  //Удалить род.элемент
//         })
//         li.append(remove);

//         let mark = document.createElement("span");
//         mark.textContent = "Выполнено";
//         mark.classList.add("mark");
//         mark.addEventListener("click",function(){
//             mark.parentNode.classList.add("done");//toggle
//             // mark.addEventListener("click",function(){
//             //     mark.parentNode.classList.remove("done");
//             // })
//         });
//         li.append(mark);
//         list.append(li);
//         input.value = "";
//     }
// })

// let checkbox = document.querySelector("#purple");
// checkbox.addEventListener("change", function () {
//     document.body.style.background = checkbox.checked ? "mediumpurple" : "";
//     console.log(checkbox);

// })
// console.log((Array.from(checkboxs).map(checkbox=>checkbox.value)));//.map-цикл для прохождения по массиву//преобразования в массив-Array.from
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     let checkboxs = document.querySelectorAll("input[name='language']:checked");
//     let selected = Array.from(checkboxs).map(checkbox => checkbox.value);
//     console.log(selected);

//     alert("Выбранные языки:" + selected.join(","));
//     console.log(selected.join(","));



// })
// let input = document.querySelectorAll("input");
// let form1 = document.forms.form1;
// // console.log(input);
// // console.log(form1.length);
// for (let i = 0; i < form1.length; i++) {
//     input[i].addEventListener("click", checkAll);
// };
// let numChecked;
// function checkAll() {
//     numChecked = 0;
//     for (let i = 0; i < form1.length; i++) {
//         if (input[i].checked && input[i].type == "checkbox") {
//             numChecked++;
//         }
//         if (numChecked == 3) {
//             for (let i = 0; i < form1.length; i++) {
//                 if (!input[i].checked && input[i].type == "checkbox") {
//                     input[i].disabled = true;
//                 }
//             }
//         } else {
//             for (let i = 0; i < form1.length; i++) {
//                 input[i].disabled = false;
//             }
//         }
//         console.log(numChecked);

//     }
// }
// let input = document.querySelectorAll("input[type='checkbox']");
// // let form1 = document.forms.form1;
// // console.log(input);
// // console.log(input.length);
// for (let i = 0; i < input.length; i++) {
//     input[i].addEventListener("click", checkAll);
// };
// let numChecked;
// function checkAll() {
//     numChecked = 0;
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].checked ) {
//             numChecked++;
//         }
//         if (numChecked == 3) {
//             for (let i = 0; i < input.length; i++) {
//                 if (!input[i].checked) {
//                     input[i].disabled = true;
//                 }
//             }
//         } else {
//             for (let i = 0; i < input.length; i++) {
//                 input[i].disabled = false;
//             }
//         }
//         console.log(numChecked);

//     }
// }
// let choose = document.querySelector("input[type='button']");
// choose.addEventListener("click", chooseColor);
// function chooseColor() {
//     let f = document.form3;
//     document.body.style.background = f.radio2.value;
// }

// function chooseColor() {
//     let f = document.form3;
//     console.log(f.length);
//     console.log(f.radio2.length);

//     for (let i = 0; i < f.radio2.length; i++) {
//         if (f.radio2[i].checked) {
//             document.body.style.background = f.radio2[i].value;
//         }

//     }
// }

// let f = document.form3;
// for (let i = 0; i < f.radio2.length; i++) {
//     f.radio2[i].addEventListener("change", chooseColor);
// }
// function chooseColor(event) {
//     document.body.style.background = event.target.value;
// }

//Переключатели
// let languages = document.querySelector("#languages");
// let languageOptions = ['Python', 'JavaScript', 'C++', 'Java'];
// languages.innerHTML = languageOptions.map(language => `
//     <div>
//     <input type='radio' name='language' value='${language}' id='${language}'>
// <label for='${language}'>${language}</label>
//     </div>
//     `).join("");
// let radioButtons = document.querySelectorAll('input[name="language"]');


// for (let radioButton of radioButtons) {
//     radioButton.addEventListener("change", showSelectedLanguage);
// }
// function showSelectedLanguage() {
//     if (this.checked) {
//         document.querySelector("#languageOutput").textContent = `Вы выбрали: ${this.value}`;
//     }
// }

// let city = document.querySelector("#city");
// city.addEventListener("change", setImage);


// //Атрибуты
// // свойства select
// //select.options-коллекция из подъэлементов <option>
// //select.value-значение выбранного в данный момент <option>
// //selected.index-номер(индекс) выбранного  <option>

// function setImage() {
//     let cities = city.selectedIndex;
//     let options = city.options;
//     let code = options[cities].value;
//     console.log(code);
// let div=document.querySelector("#image");
// div.innerHTML="<img src='img/"+code+".png'>"
// }

// let select = document.querySelector("select");
// let output = document.querySelector("#output");

// select.addEventListener("change", function () {
//     let number = 0;
//     for (let i = 0; i < select.options.length; i++) {
//         let option = select.options[i];
//         if (option.selected) {
//             number += Number(option.value);
//         }
//     }
//     output.textContent = number;
// })
//от выбора страны будет выбор городов
// let countries = document.querySelector("#countries");

// let ruCities = document.querySelector("#ru");
// let byCities = document.querySelector("#by");

// countries.addEventListener("change", function () {
//     document.querySelector(".cities.active").classList.remove('active');
//     if (this.value == 'ru') {
//         ruCities.classList.add('active');
//     }
//     if(this.value=='by'){
//         byCities.classList.add("active");
//     }
// })

// let option = new Option("Текст", "value", true);
// console.log(option);
//Список задач и удаление их
// let btnAdd = document.querySelector("#btnAdd");
// let btnRemove = document.querySelector("#btnRemove");
// let taskInput = document.querySelector("#task");
// let taskList = document.querySelector("#taskList");

// btnAdd.addEventListener("click", e => {
//     e.preventDefault();
//     if (taskInput.value.trim() == "") {//удаляем пробелы тримом
//         alert("ВВедите название задачи");
//         return;
//     }
//     let option = new Option(taskInput.value, taskInput.value);
//     taskList.add(option, undefined);
//     taskInput.value = '';
//     // taskInput.focus();

// })
// btnRemove.addEventListener("click", e => {
//     e.preventDefault();
//     let selectedTasks = [];
//     for (let i = 0;i<taskList.options.length;i++){
//         selectedTasks[i]=taskList.options[i].selected;

//     }
//     let index=taskList.options.length;
//     while(index--){
//         if(selectedTasks[index]){
//             taskList.remove(index);
//         }
//     }
// })
//определение типа файла
// let input = document.querySelector("input");
// input.addEventListener("change", function () {
//     if (input.files.length > 0) {
//         let file = input.files[0];
//         console.log("Вы выбрали:", file);
//         if (file.type) {
//             console.log("У него тип:", file.type);
//         }

//     }
// })

//Калькулятор бензина
// let gas = document.querySelector(".gallon");
// let petrol = document.querySelectorAll(".petrol");
// let res = 1;
// for (let i = 0; i < petrol.length; i++) {
//     petrol[i].addEventListener("click", function () {
//         let gallons = gas.value;
//         let amount = this.getAttribute("data-pet");
//         res = gallons * amount;
//         let sum = document.querySelector(".sum");
//         // sum.textContent = res;
//         sum.innerHTML = res;
//     })
// }
// document.getElementById("slider").addEventListener("input", function () {
//     document.getElementById("slider-value").textContent = this.value;
// })
// let tds = document.querySelectorAll("td");
// for (let i = 0; i < tds.length; i++) {
//     tds[i].addEventListener("click", function func() {
//         let input = document.createElement("input");
//         input.value = this.innerHTML;
//         this.innerHTML = '';
//         this.append(input);
//         console.log(this);

//         let td = this;
//         input.addEventListener("blur", function () {
//             td.innerHTML = this.value;
//             td.addEventListener("click",func);
//         });
//         this.removeEventListener("click",func);

//     })
// }
//Форма для ввода имени//ГОСТЬ

// let userInput = document.getElementById("userInput");
// let name = document.getElementById("displayName");
// userInput.addEventListener("input", function(){
//     name.textContent = this.value || "Гость";
// })

// // Валидация данных формы
// let form = document.getElementById("myForm");
// form.addEventListener("submit", function (event) {
//     // if(!form.checkValidity()){
//     //     
//     //     
//     // }
//    // console.log(username);
//     // let formData = new FormData(form);
//     // console.log(formData.get("username"));
//     // console.log(formData.get("password"));
//     let username = form.username.value;
//     let password = form.password.value;
//     if(username.length<3){
//         event.preventDefault(); 
//         alert("Имя пользователя должно быть больше 3х символов");
//     }
//     if(password.length<6){
//          event.preventDefault(); 
//         alert("Пароль должно быть больше 6 символов");
//     }
//     console.log(typeof username);
//     console.log(typeof password);
// });
// Методы для работы с шаблонами регулярных выражений
// Search-Возвращает индекс элемента(позицию),на которой регулярное выражение совпадаеи с вызывающей строкой, или "-1" если совпадений нет
// match-ПОлучит все совпадения с регулярным выражением 
// Replace-поиск и замена
// Split-делит строку на массив,разбивая ее по указанной подстроке
// Test-поиск совпадений регулярного выражения со строкой.Возвращает булевое значение либо true либо false
// СИнтаксис записи шаблона рег.выражений
// let regexp = new RegExp("шаблон","флаги");
// let regexp = /шаблон/флаги;
// let str = 'Я ищу совпадения в 2026 году 78954774 Hello_World Ё';
// // let regexp = /[206]/g;
// document.writeln(str + "<br><br>");
// document.writeln(str.search(regexp) + "<br>");
// document.writeln(str.match(regexp) + "<br>");
// document.writeln(regexp.test(str) + "<br>");
// Флаги
// g(global)-ищет все совпадения с шаблонам как глобальный поиск
// let regexp = /[я]/g;
// i(ignorСase)-регистрозависимый поиск(Ищем буквы вне зависимости от регистра)
//u-поддержка юникода(Unicode)
//m-munltiline-многострочный поиск
//s-(dotAll)-позволяет сопоставить точку с любым символом текста(\n)
// let regexp = /[я]/gi;
//нахождение цифр закладывается диапазоном от 0 до 9 [0-9].Задавать можно любой диапазон
// let regexp = /[0-9]/gi;
//НАхождение букв от а до я
// let regexp = /[а-я]/gi;
// let regexp = /[А-Яа-я]/g;
// let regexp = /[А-я]/g;
// let regexp = /[A-za-z]/g;Для англ языка только такой поиск
//Поиск букв русского алфавита
// let regexp = /[А-яЁё]/g;


// document.writeln(str.match(regexp) + "<br>");
// console.log("A","А".codePointAt(0));//1040
// console.log("a","а".codePointAt(0));//1072
// console.log("Я","Я".codePointAt(0));//1071
// console.log("я".codePointAt(0));//1103
// console.log("Ё".codePointAt(0));//1025
// console.log("ё".codePointAt(0));//1105
// console.log("Й".codePointAt(0));//1049
// console.log("й".codePointAt(0));//1081
//Преобразование в нижний регистр
// function lowerCase(str){
// return str.replace(/[А-я]/g,u=>u.toLowerCase());
// }
// console.log(lowerCase("Несколько слов"));

// let regexp = /[^0-9]/g;//^-Отрицание,исключающий диапазон, ни один из указанных символов

/*
{3}-количество символов, идущих подряд
{1,}-от 1 до бесконечного количества повторений
{2,5}-от 2х до 5 повторений
*/
// let regexp = /[0-9]{2,5}/g;//3 значения в [] подряд
// document.writeln(str.match(regexp) + "<br>");

// let html = `
// <table>
// <tr>
// <td bgcolor="#CCC">
// < img src="222.png">
// </td>
// <td bgcolor="#003399">
// < img src="af3.png">
// </td>
// <td bgcolor="#00ccdd">
// < img src="fff.png">
// </td>
// </tr>
// </table>
// `;
// let exp =/#([0-9a-f]{3}){1,2}/ig;
// console.log(html.match(exp));
// let exp =/#([0-9a-f]{3}){1,2}/ig;
// console.log(html.match(exp));
// спецсимфолы-
// \d-digit-любая цифра
// \s-spase-пробел(табуляция,перевод строки)
// \w(word)-цифры,буквы,символы почеркивания(не поддерживает русскую раскладку)
// let regexp = /\w/g;
// document.writeln(str.match(regexp) + "<br>");
// let st = "Это пример строки с несколькими пробелами";
// let reg = /\s/g;
// document.writeln(st +"<br>");

// document.writeln(st.match(reg),"<br>");
// let result =st.replace(reg,"_");
// document.writeln(result);



//log
// let result=...;
// console.log(result);//Это пример строки с несколькими пробелами -пробелы заменить на _

// let string = "Мой номер телефона: +7 (999) 123-45-67.Номер телефона моего друга 7 (987) 654-32-10."
// let ex =/\+\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g;
// let phoneNumbers = string.match(ex);
// console.log(phoneNumbers);


// let regex =/\d{2}[-:]\d{2}/g;
// document.writeln("Завтрак будет в 09:00. Ужин в 21-30".match(regex));

// обратное значение
// \D-все кроме цифр
// \S-не пробел
// \W-все кроме букв,цифр(латиница), символов подчеркивания
// \b-граница слова
// let regex =/\b/g;
// document.writeln(str.match(regex)+"<br>");
// document.writeln("Hello,Java!".match(/\bJava\b/g)+"<br>");
// document.writeln("Hello,Java!".match(/\bJava!/g)+"<br>");
// document.writeln("Hello,JavaScript!".match(/\bJava/g)+"<br>");
// document.writeln("1 23 456 78".match(/\b\d\d\b/g)+"<br>");
// document.writeln("12-,34,56".match(/\b\d{2}\b/g)+"<br>");
// document.writeln("1 23 456 78".match(/\d{2}/g)+"<br>");

// document.writeln("Завтра в 09:00 в комнате 123:456.".match(/\b\d{2}:\d{2}\b/g));
//Все буквы
// let regexp=/[\p{Alpha}\p{Nd}]/gu; 
// \p-служебный элемент
// let regexp=/[\p{L}]/gu;
// let regexp=/[\p{L}\p{N}]/gu;
// document.writeln(str.match(regexp) + "<br>");

/**
 * ^-начало строки(если стоит не в квадратных скобках)-перед последовательностью ничего не должно быть
 * $-Конец строки-после последовательности ничего не должно быть
 * / */
// let html = "909";
// let exp =/^\d{3}$/;
// document.writeln(html.match(exp) + "<br>");

// function capitalize(st){
//     return st.replace(/^[а-я]/,u=>u.toUpperCase())
// }
// console.log(capitalize("несколько слов"));

/*Количество повторений
+=>от 1 до бесконечности {1,}
?=> от 0 до 1 {0,1}
*=> от 0 до бесконечности {0,}
*/
// let st="+7(903)-123-45-67";
// document.writeln(st.match(/\d+/g) + "<br>");
// document.writeln("100 10 1".match(/\d0*/g) + "<br>");
// document.writeln("10, +23, -8, 5".match(/[+-]?\d+/g) + "<br>");
// document.writeln("0 1 12.345 7890".match(/\d+\.\d+/g) + "<br>");
// document.writeln("..Привет!...Как дела?.....".match(/\.{3,}/g));
// function extractLinks(text){
// // let regex=/https?:\/\/[^\s]+/g;
// let regex=/https?:\/\/[\w.]+/g;
// return text.match(regex) || [];
// }
// console.log(extractLinks("<a href='https://htmlbook.ru'> и <a href='https://webref.ru'>"));

// function validateEmail(email){
// // let regexp=/^[a-z0-9%_+.-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
// let regexp=/^[^\s]+@[^\s]+\.[^\s]{2,}$/i;
// return regexp.test(email);
// }
// console.log(validateEmail("user@example.com"));

// let st=`JavaScript
// javascript
// JAVASCRIPT`
// // console.log(st.match(/^\w+/gm));
// let mas=st.match(/^\w+/gm);
// mas.map((el)=>console.log(el));

// let re=/CS.3/;
// document.writeln("Стандарт CSS3".match(re)+"<br>");
// document.writeln("Стандарт CS-3".match(re)+"<br>");
// document.writeln("CS 3".match(re)+"<br>");
// let st = "Hello\nworld";
// console.log(st);
// let exp =/Hello.world/s;
// console.log(exp.test(st));
// let regexp =/html|css|java(script)?/gi;
// let st = "Сначала появился язык Java, затем HTML, потом JavaScript";
// document.writeln(st.match(regexp))

// let html = `
// <b>my text</b>
// <img src="222.jpg">
// <span>else</span>
// <img src="dfsdf222.png">
// <img src="img.png">
// <img src="uio.gif">
// `
// let ex=/\w+\.(jpg|jpeg|png|bmp|gif)/ig;
// document.writeln(html.match(ex));
//номер телефона в формате регистрации
// function validatePhoneNumber(phoneNumber){
//     let phoneRegex=/^(\+7|8)?\d{10}$/;
//     return phoneRegex.test(phoneNumber)
// }

// let phone="+79123456789";
// // let phone="89123456789";
// // let phone="9123456789";
// if(validatePhoneNumber(phone)){
//     console.log("Номер телефона валиден!");

// } else{
//     console.log("Номер телефона невалиден!");
// }

// let regex = /java(script)?|php|c(\+{2})?/gi;
// let regex = /\w+(\++)?/gi;
// let st = "Java JavaScript, PHP, C, C++";
// document.writeln(st.match(regex));


//Метод replace
// document.writeln("aaa".replace("a","b")+"<br>");
// document.writeln("aaa".replace(/a/g,"b")+"<br>");
// let text = 'I kill your black dog';
// document.writeln(text + "<br>");
// let exp =/book|kill|black/ig;
// text=text.replace(exp,"***");
// document.writeln("<p>"+text+"</p>");

// let st = "<p>Heloo,world!</p>";

// console.log(st.match(reg));
// жадные и ленивые квантификаторы
// жадный(максималка)
// let reg =/<.+>/g;
// ленивый(минималка)
// let reg =/<.+?>/g;
// let st ="123456789";
// let reg=/\d{2,4?}/g;

// ленивый квантификатор-минимальное значение из поиска
/*
*?,+?,??-min
{2,4}?,{2,}?,{2}?


*/
// let st = "<p>Heloo,world!</p>";
// // let reg =/<.+>/g;
// let reg =/<[^>]+>/g;
// console.log(st.match(reg));
// let st = "...<!--My -- comment text --> .. <!----> ..";
// let reg =/<.+>/g;
// let reg =/<[^>]+>/g;
// let reg =/<!--.*-->/g;
// console.log(st.match(reg));
// alert(st.match(reg));

// let st="<> <a href='#'> <input type='radio' checked><b>";
// let reg=/<\w.*>/g;
// let reg=/<[^<>].+>/g;
// let reg =/<[^>]+>/g;
// alert(st.match(reg));

// let html="Дмитрий Васильев";
// let exp=/(Дмитрий) Васильев/;
// document.writeln(html.match(exp)+"<br>");

// let html="site.com и my.site.com";
// let exp=/(\w+\.)+\w+/g;
// document.writeln(html.match(exp)+"<br>");
// let st="<h1>Hello,world!</h1>";
// let tag=st.match(/<.*>/);-max
// let tag=st.match(/<.*?>/);-min
// let tag=st.match(/<(.*?)>/);
// alert(tag[0]);
// alert(tag[1]);

// let date = "2026-05-30";
// let reg = /^(\d{4})-(\d{2})-(\d{2})$/;
// let match = date.match(reg);
// let format =match;
//     console.log(format[3]+"."+format[2]+"."+format[1]);
// let st = "<span class='my'>";
// let exp = /<(([a-z]+)\s*([^>]*))>/;
// let res = st.match(exp);
// // alert(res[1]);
// let date = "2026-05-30 2026-10-15";
// let reg = /(?<year>[0-9]{4})-(?<month>\d{2})-(?<day>\d{2})/g;
// let match = date.match(reg).groups;
// let format = match;

// console.log(match.year + "." + match.month + "." + match.day);
// let match = date.match(reg).groups;
// let format = match;
// let res = date.matchAll(reg);
// for(let result of res){
//     let {year,month,day}=result.groups;
//     document.writeln(`${day}.${month}.${year}`);
// }
// console.log(res);


// let st="-1.5 0 2 -123.4.5678";
// // let reg=/.+\.+\d/g;
// // let reg=/-?\d+(\.\d+)?/g;
// let reg=/-?\d+(\.\d+)?/g;
// document.writeln(st.match(reg));//-1.5,0,2,-123.4
// let st = "John Smith";
// let reg=/(\w+)\s(\w+)/;
// document.writeln(st.replace(reg,"$2 $1"))

// function add(str){
// return str.replace(/([A-Z])/g," $1")
// }

// console.log(add("camelCase"));
// console.log(add("helloWorldItIsMe"));

// let text = "red color: #F00 and green: #090";
// let ex = /(#[A-F0-9]{3})/ig;
// // console.log(text.match(ex));
// text = text.replace(ex,"<span style='color:$1'>$1</span>");
// document.writeln("<p>"+text+"</p>")

// let text = "I like google.com and yandex.ru";
// let ex = /(([a-z0-9-]{2,}\.)+[a-z]{2,4})/ig;
// // console.log(text.match(ex));
// text = text.replace(ex,"<a href='https://$1'>$1</a>");
// document.writeln("<p>"+text+"</p>")

// 7 (XXX) XXX-XX-XX или 8 (XXX) XXX-XX-XX

// function formatPhoneNumber(phone) {
//     let cleaned =phone.replace(/\D/g,"");
//     return cleaned.replace(/(7|8)?(\d{3})(\d{3})(\d{2})(\d{2})/g,"$1 ($2)$3-$4-$5");
// }
// console.log(formatPhoneNumber("+7 999 1234567"));
// console.log(formatPhoneNumber("+7 945 1246567"));
// console.log(formatPhoneNumber("945 1246567"));
// console.log(formatPhoneNumber("+7 (999) 1234567"));

// document.writeln("Люблю HTML".replace(/HTML/,"$& и JavaScript"));

// let st =`Он сказал: "I'm at home".`;
// // let re=/(["'])(.*)\1/g;
// let re=/(?<guote>[]/g;
// document.writeln(st.match(re) + "<br>")
// опережающие и ретроспективные проверки
// позитивные и негативные
// позитивная опережающая проверка
// X(?=Y)
// x,если за ним следует y
// let st = "1 курс стоит 30 руб";
// document.writeln(st.match(/\d+(?= руб)/g))
// негативная опережающая проверка
// X(?!Y)
// let st = "1 курс стоит 30 руб";
// document.writeln(st.match(/\d+(?= руб)/g) + "<br>")
// document.writeln(st.match(/\d+(?! руб)/g) + "<br>")
// позитивные ретроспективные проверки
// (?<=Y)X
// x если следует за y
// let st = "1 курс стоит $30 руб";
// document.writeln(st.match(/(?<=\$)\d+/) + "<br>")
// негативная ретроспективные проверки
//  (?<!Y)X
// x если не следует за y
// let st = "1 курс стоит $30 руб";
// document.writeln(st.match(/(?<!\$)\d+/g) + "<br>");

// document.writeln("Hello, Error".match(/^(?=.*[eE][rR][rR][oO][rR]).{1,50}$/))

// // (?=.*...)

// function validPassword(psw){
// let pswEx=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}/
// return pswEx.test(psw);
// }
// console.log(validPassword("QWer23!#"));
// console.log(validPassword("QWEr23!#"));

// let but = document.querySelector("#but");
// but.addEventListener("click", smsUser);
// function smsUser() {
//     let name = document.querySelector("#your_name").value;
//     let text = document.querySelector("#text").value;
//     let regExpBBMail = /([\w.]+@[0-9a-z_^.]+\.[a-z]{2,3})/ig;
//     text = text.replace(regExpBBMail,"<span style='color:red'>$1</span>");
//     // document.writeln(`
//     //    <fieldset> 
//     //    <legend>${name}</legend>
//     //    <div>${text}</div>
//     //    </fieldset> 
//     //     `)
//     // console.log(name);
//     let form = document.querySelector("form");
//     form.insertAdjacentHTML("afterend", `<fieldset>
//              <legend><b>${name}</b></legend>
//              <div>${text}</div>
//          </fieldset>  `);

// }
// let st = "   текст строки первой   ";
// st = st.replace(/^\s+|\s+$/g, "");
// console.log(">" + st + "<");
// split
// let date = "25-10-2026, 14/09/2025, 10.03.2022, 12:02:2014";
// let re = date.split(/[-\/,.:]/);
// // document.writeln(re);
// console.log(re);
// console.log("Вносим изменения");
// console.log("Вносим изменения на другом рабочем месте");
// let registrationForm = document.getElementById("registrationForm");
// let errorMessages = document.getElementById("errorMessages");
// registrationForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let [username, email, password] = registrationForm.elements;
//     errorMessages.innerHTML = "";
//     //  console.log(username,email,password);
//     if (!username.value.trim()) {
//         displayError("Имя пользователя обязательно!");
//         return;
//     }
//     if (!email.value.trim()|| !isValidEmail(email.value)) {
//         displayError("Введите адрес электронной почты!");
//         return;
//     }
//     if(!password.value.trim() ||!isStrongPassword(password.value)){
//         displayError("Пароль должен состоять как минимум из 8 символов и как минимум одну заглавную букву,одну строчную букву,одну цифру и один спец.символ");
//     }
//     alert("Register successfull!");
//     registrationForm.reset();
// });
// function displayError(message) {
//     errorMessages.innerHTML += `<div class="error">${message}</div>`
// }
// function isValidEmail(email){
// return /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
// }
// function isStrongPassword(password){
//     return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
// }
//ОБЪЕКТЫ
// let car = new Object();
// let car1 = {};
// console.log(car);
// console.log(car1);
// let car = new Object();
// car["type"] = "BMW";
// car["color"] = "white";
// console.log(car);
// // alert(car);
// document.writeln(car["type"] + "" + car["color"]+"<br>");
// let car1 = new Object();
// car1.type = "BMW";
// car1.color = "black";
// document.writeln(car1.type + "" + car1.color);

// let menu1 = {};
// menu1.width = 300;
// menu1.height = 200;
// menu1.title = "Menu";
// console.log(menu1);
// document.writeln(menu1.title + ":" + menu1.width + "x" + menu1.height + "<br>");
// let menu = {
//     width: 300,
//     height:200,
//     title:"Menu"
// };

// delete menu.width;
// document.writeln(menu.title + ":" + menu.width + "x" + menu.height + "<br>");
// console.log("width" in menu);
// console.log("height" in menu);

// let counter=0;
// for(let key in menu){
//     document.writeln("<br>Ключ ="+key+",значение="+menu[key]);
//     counter++;
// }
// document.writeln("<br><br>Всего свойств :"+counter+"<br>");
// document.writeln("<br><br>Всего свойств :"+Object.keys(menu)+"<br>");
// document.writeln("<br><br>Всего свойств :"+Object.keys(menu).length+"<br>");
// document.writeln(Object.keys(menu));
// Object.keys(menu).forEach(function(key){
//     document.writeln("<br>"+key+" " +menu[key]);
// })
// Object.values(menu).forEach(function(v){
//     document.writeln("<br>"+v);
// })
// console.log(Object.values(menu));
// console.log(Object.entries(menu));

// for(let el of Object.entries(menu)){
//     console.log(el[0],el[1]);
//     document.writeln("<br>"+el)
// }

//Крестики нолики
// let area = document.getElementById("area");
// let currentPlayer = document.getElementById("curPlayer");
// let player = "x";
// let cell;
// let stat = {
//     "x": 0,
//     "o": 0,
//     "d": 0,
// }
// let winIndex = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, , 9],
//     [3, 5, 7]
// ]
// for (let i = 1; i <= 9; i++) {
//     area.innerHTML += "<div class='cell' data-pos='" + i + "'></div>"
// }
// cell = document.querySelectorAll(".cell");
// for (let i = 0; i < cell.length; i++) {
//     cell[i].addEventListener("click", cellClick)
// }
// function cellClick() {
//     let data = [];
//     if (!this.innerHTML) {
//         this.innerHTML = player;
//     } else {
//         alert("Ячейка занята");
//         return;
//     }
//     // console.log(cell);

//     for (let i in cell) {
//         if (cell[i].innerHTML == player) {
//             data.push(cell[i].getAttribute("data-pos"));
//         }
//     }
//     if (checkWin(data)) {
//         stat[player] += 1;
//         restart("выиграл:" + player);
//     } else {
//         let draw = true;
//         for (let i in cell) {
//             if (cell[i].innerHTML == "") {
//                 draw = false;
//             }
//         } if (draw) {
//             stat.d += 1;
//             restart("Ничья");
//         }
//     }
//     player = player == 'x' ? "0" : "x";
//     currentPlayer.innerHTML = player.toUpperCase();

//     console.log(data);

// }
// function checkWin(data) {
//     for (let i in winIndex) {
//         let win = true;
//         for (let j in winIndex[i]) {
//             let id = String(winIndex[i][j]);
//             let ind = data.indexOf(id);
//             if (ind == -1) {
//                 win = false;
//             }
//         }
//         if (win) {
//             return true;
//         }
//     }
//     return false
// }
// function restart(text) {
//     alert(text);
//     for (let i = 0; i < cell.length; i++) {
//         cell[i].innerHTML = "";
//     }
//     updateStat();
// }
// function updateStat() {
//     document.getElementById("sX").innerHTML = stat.x;
//     document.getElementById('sO').innerHTML = stat.o;
//     document.getElementById("sD").innerHTML = stat.d;
// }
// let car = {
//     name: "Volvo",
//     year: 2019,
//     colors: {
//         first: "yellow",
//         second: "blue"
//     },
//     color: [
//         "black",
//         "white",
//         "red",
//         "blue"
//     ],
//     hello: function () {
//         document.writeln("Privet<br>");
//     }
// };
// console.log(car);
// document.writeln(car.name + " " + car.color[1] + " " + car.colors.second);//свойство
// car.hello();//метод
// let fill = car.color.filter(function (elem) {
//     return elem.length < 5;
// });
// document.writeln(fill + "<br>");
// let mas = car.color.map(function (elem, index, all) {
//     return index + ")" + elem + " массив " + all + "<br>";
// });
// document.writeln("<br>" + mas + "<br>");
// let mas1 = car.color.map(elem => elem.toUpperCase());
// document.writeln("<br>" + mas1 + "<br>");
// let mas2 = Object.keys(car.colors).map(function(elem){
//     return elem + ":"+car.colors[elem]+"<br>";
// });
// document.writeln("<br>" + mas2 + "<br>");
// console.log(car.colors);

// let calc = {
//     num1: 5,
//     num2: 6,
//     calculate: function () {
//         this.res = this.num1 * this.num2;

//     }
// };

// calc.calculate();
// document.writeln(calc.res)

// let x = 15;
// let y = 10;
// // let coords = {
// //     x: x,
// //     y: y,
// //     calcSq:function(){
// //         document.writeln(this.x*this.y);
// //     }
// // }
// let coords = {
//     x,
//     y,
//     calcSq(){
//         document.writeln(this.x*this.y);
//     }
// }
// coords.calcSq();
// let user = {
//     login: {
//         firstName:"Kate",
//         lastName:"Pavlova"
//     },
//     psw: "qwerty",
//     role: "guest"
// };
// let log = user.login.firstName;
// console.log(log);
// let {login:{firstName:f,lastName:l},...rest} = user;
// document.writeln(f+" "+l+" "+rest.psw+" "+rest.role);

//Создать объект ,который будет выводить на экран имя пользователя и автомобиль(Цвет случайным образом).Имя-ключ,выиграл-просто,краный-массив цветов и марка автомобиля.Вывод инф-ии идет через метод
//Имя в ключ :Игорь выиграл красный бэнтли
