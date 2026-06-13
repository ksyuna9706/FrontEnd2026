let car = {
    name: "BMW X5",
    color: [
        "черный",
        "белый",
        "красный",
        "синий",
        "желтый",
        "зеленый"
    ],
    hello: function () {
        document.writeln("Вы выиграли "+car.color[Math.floor(Math.random() * 6)] + " "+car.name);
    }
};
car.hello();