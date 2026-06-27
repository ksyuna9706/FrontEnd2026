//создать 2 класса круг и треугольник .Найти площадь и периметр
// 
class circle {
    constructor(r) {
        this.r = r;


    }
    s() {
        return Math.PI * this.r ** 2;
    }
    p() {
        return 2 * Math.PI * this.r;
    }
}
const circle1 = new circle(12);
console.log("Площадь окружности радиуса "+`${circle1.r} s=` + circle1.s());
console.log("Длина окружности радиуса " +`${circle1.r}  l=` + circle1.p());

const circle2 = new circle(188);
console.log("Площадь окружности радиуса "+`${circle2.r} s=` + circle2.s());
console.log("Длина окружности радиуса " +`${circle2.r}  l=` + circle2.p());

class triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    p() {
        return this.a + this.b + this.c;
    }
    s() {
        const p = this.p() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
    }

}
const triangle1 = new triangle(5, 6, 7);
console.log("Площадь треугольника согласно формуле Герона: " +  `a = ${triangle1.a} ` + `b = ${triangle1.b} ` + `c = ${triangle1.c}  s =` +triangle1.s());
console.log("Периметр треугольника со сторонами :"+ `a = ${triangle1.a} ` + `b = ${triangle1.b} ` + `c = ${triangle1.c}  p =` + + triangle1.p());
const triangle2 = new triangle(8, 9, 10);
console.log("Площадь треугольника согласно формуле Герона со стороной: " + `a = ${triangle2.a} ` + `b = ${triangle2.b} ` + `c =  ${triangle2.c}  s =` + triangle2.s());
console.log("Периметр треугольника со сторонами : "  + `a = ${triangle2.a} ` + `b = ${triangle2.b} ` + `c =  ${triangle2.c}  p =` + triangle2.p());