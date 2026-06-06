let money = document.querySelector(".money");
let moneySum = document.querySelectorAll(".money1");
let count = document.querySelector(".count");
let countSum = document.querySelectorAll(".count1");
let res = 1;
let resEnd = 1;
for (let i = 0; i < moneySum.length; i++) {
    moneySum[i].addEventListener("click", function () {
        let mon = money.value;
        let amount = this.getAttribute("data-pet");
        res =Math.round(mon * amount) ;
        let sum = document.querySelector(".sum");
        sum.innerHTML = res;
    })
}
for (let i = 0; i < countSum.length; i++) {
    countSum[i].addEventListener("click", function () {
        let coun = count.value;
        let amountSum = this.getAttribute("data-sum");
        res = Math.floor(coun / amountSum);    
        let sum1 = document.querySelector(".sum1");
        sum1.innerHTML = res;
    })
}

