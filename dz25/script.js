let st = "Это пример строки с несколькими пробелами";
let reg = /\s/g;
document.writeln(st +"<br>");

document.writeln(st.match(reg),"<br>");
let result =st.replace(reg,"_");
document.writeln(result);
        