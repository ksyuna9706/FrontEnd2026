document.writeln("<div id='demonstration'></div>")
let term = document.querySelectorAll("div")[0];
console.log(term);
term.innerHTML = "Термоста́т — прибор для поддержания постоянной температуры. Поддержание температуры обеспечивается либо за счёт использования терморегуляторов, либо осуществлением фазового перехода(например, таяние льда).Для уменьшения потерь тепла или холода термостаты, как правило, теплоизолируют.Но не всегда.Широко известны автомобильные моторы, где летом нет никакой теплоизоляции и за счёт действия восковых термостатов поддерживается постоянная температура.Другим примером термостата, широко используемого в быту, является холодильник.";
term.style.background = "yellow";
term.style.color = "black";
term.style.width = "256px";
term.style.height = "256px";
term.style.overflow = "scroll";
term.style.outline = "1px dashed red";
term.className = "resetFont";
// let ter = document.getElementsByClassName("resetFont")[0];
let ter = document.querySelector(".resetFont");
console.log(ter);
ter.style.fontSize = "20pt";
ter.style.fontweight = "400";
ter.style.textdecoration = "underline";