//Задача1
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.who = function () {
        document.writeln("Я " + this.name + " мне " + this.age + " лет. Я работаю " + this.job + "<br>")
    }
}


const person1 = new Person("Дмитрий", 26, "Дизайнером.");
const person2 = new Person("Станислав", 29, "Программистом.");
const person3 = new Person("Сергей", 35, "Менеджером.");
person1.who();
person2.who();
person3.who();

//Задача 2

function Automobile(color, model, year, manufact) {
    this.color = color;
    this.model = model;
    this.year = year;
    this.manufact = manufact;
    this.whatColor = function () {
        document.writeln(`
Цвет машины: ${this.color}
`)
    }
    this.autoInfo = function () {
        document.writeln(`
            Модель машины: ${this.model}
            Год выпуска: ${this.year}
            Производитель: ${this.manufact}<br>
            `)
    }
};
const car1 = new Automobile("Красный", "Nissan Skyline", 2007, "Nissan");
const car2 = new Automobile("Черный", "Toyota Corolla", 2009, "Toyota");
const car3 = new Automobile("Синий", "Volkswagen Golf", 2009, "Volkswagen");
car1.whatColor();
car1.autoInfo();
car2.whatColor();
car2.autoInfo();
car3.whatColor();
car3.autoInfo();



