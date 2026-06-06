let chislo = +prompt("Число:", 5);
document.writeln("Факториал числа ",chislo, " -  ( ",chislo, "!)  = ", factorial(chislo));
function factorial(ch) {
    if (ch) {
        return ch * factorial(ch-1);
    }
    return 1;
}

