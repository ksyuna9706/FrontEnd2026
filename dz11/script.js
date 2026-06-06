// 1 задача 1 способ:

// function max(a, b) {
//     if (a > b) {
//         return "Наибольшее число:" + a;
//     } else if (a < b) {
//         return "Наибольшее число:" + b;
//     } else if (a == b) {
//         return "Числа равны";
//     }
// }
// document.writeln(max(1, 10) + "<br>");
// document.writeln(max(6, 5) + "<br>");
// document.writeln(max(6, 6) + "<br>");

// 1 задача 2 способ:

// let max = function (a, b) {
//     if (a > b) {
//         return "Наибольшее число:" + a;
//     } else if (a < b) {
//         return "Наибольшее число:" + b;
//     } else if (a == b) {
//         return "Числа равны";
//     }
// }
// document.writeln(max(1, 10) + "<br>");
// document.writeln(max(6, 5) + "<br>");
// document.writeln(max(6, 6) + "<br>");

// 1 задача 3 способ:
// let max = (a, b) =>{
//     if (a > b) {
//         return "Наибольшее число:" + a;
//     } else if (a < b) {
//         return "Наибольшее число:" + b;
//     } else if (a == b) {
//         return "Числа равны";
//     }
// }
// document.writeln(max(1, 10) + "<br>");
// document.writeln(max(6, 5) + "<br>");
// document.writeln(max(6, 6) + "<br>");

// 2 задача 1 способ:

// function maxNum(array){
//     let max=0;
//     for(let i=0;i<array.length;i++){
//         if(array[i]>max){
//             max=array[i];
//         }
//     } 

//     return "Максимальный элемент:"+max;
// }
// document.writeln(maxNum([1,8,9,6,5,3,7,12,5]) +"<br>");
// document.writeln(maxNum([3,8,9,4,1,2,5]));

// 2 задача 2 способ:

// let maxNum = function(array) {
//     let max = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }

//     return "Максимальный элемент: " + max;
// }
// document.writeln(maxNum([1, 8, 9, 6, 5, 3, 7, 12, 5]) +"<br>");
// document.writeln(maxNum([3,8,9,4,1,2,5]));

// 2 задача 3 способ:

// let maxNum = array=> {
//     let max = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }

//     return "Максимальный элемент:" + max;
// }
// document.writeln(maxNum([1, 8, 9, 6, 5, 3, 7, 12, 5]) +"<br>");
// document.writeln(maxNum([3,8,9,4,1,2,5]));