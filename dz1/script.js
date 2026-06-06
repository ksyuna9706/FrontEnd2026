let num = +prompt("Введите число?", 39671);
let one, two, three, four, five;
one=num%10;
two = parseInt((num/10)%10);
three = parseInt((num/100)%10);
four = parseInt((num/1000)%10);
five = parseInt((num/10000)%10);
sum=one+two+three+four+five;
console.log(one*two*three*four*five);
console.log(sum/5);

