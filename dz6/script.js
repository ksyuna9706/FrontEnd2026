//1 Вариант

// document.writeln("<table border='1' width='150' align='center'>");
// for (let i = 1; i < 11; i++) {
//     document.writeln("<tr align='center'>");
//     for (let j = 1; j < 11; j++) {
//         if (i % 2 && j % 2 || i % 2==0 && j % 2==0) {
//             document.writeln("<td bgcolor='red'>" + i * j + "</td>");
//         } else {
//             document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
//         }
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");

// document.writeln("<table border='1' width='150' align='center'>");
// for (let i = 1; i < 11; i++) {
//     document.writeln("<tr align='center'>");
//     for (let j = 1; j < 11; j++) {
//         if ((i +j)%2==0) {
//             document.writeln("<td bgcolor='red'>" + i * j + "</td>");
//         } else {
//             document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
//         }
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");

// document.writeln("<table border='1' width='150' align='center'>");
// for (let i = 1; i < 11; i++) {
//     document.writeln("<tr align='center'>");
//     for (let j = 1; j < 11; j++) {
//         if (i % 2 == j % 2) {
//             document.writeln("<td bgcolor='red'>" + i * j + "</td>");
//         } else {
//             document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
//         }
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");


// 2 Вариант

// document.writeln("<table border='1' width='150' align='center'>");
// for (let i = 0; i <= 10; i++) {
//     document.writeln("<tr align='center' >");
//     for (let j = 0; j <= 10; j++) {
//         if (i == 0) {
//             document.writeln("<td bgcolor='white'>" + j + "</td>");
//         } else if (j == 0) {
//             document.writeln("<td bgcolor='white'>" + i + "</td>");
//         }
//         else if ((i+j)%2==0) {
//             document.writeln("<td bgcolor='red'>" + i * j + "</td>");
//         } else {
//             document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
//         }
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");

// document.writeln("<table border='1' width='150' align='center'>");
// document.writeln("<tr>");
// for (let i = 0; i < 11; i++) {
//     document.writeln("<th" +i +"</th");
// }
// document.writeln("</tr>");
// for (let i = 1; i < 11; i++) {
//     document.writeln("<tr align='center' >");
//     document.writeln("<th" +i +"</th");
//     for (let j = 1; j < 11; j++) {
//         if ((i + j) % 2 == 0) {
//             document.writeln("<td bgcolor='red'>" + i * j + "</td>");
//         } else {
//             document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
//         }
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");


// document.writeln("<table border='1' width='260' align='center'>");
// document.writeln("<tr>");
// for (let i = 0; i < 11; i++) {
//     document.writeln("<th>" + i + "</th>");
// }
// document.writeln("</tr>");
// for (let i = 1; i < 11; i++) {
//     document.writeln("<tr align='center'>");
//     document.writeln("<th>" + i +"</th>");
//     for (let j = 1; j < 11; j++) {
//         if (i % 2 == j % 2) {
//             document.writeln("<td bgcolor='red'>" + i * j + "</td>");
//         } else {
//             document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
//         }
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");