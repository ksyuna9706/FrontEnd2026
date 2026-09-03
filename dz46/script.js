let request = new XMLHttpRequest();
request.open("GET", "goods.json");
request.send();

let res = document.querySelector(".result");
let items, prices;

request.addEventListener("load", () => {
    if (request.status == 200) {
        items = JSON.parse(request.response);
        // console.log(items);
        items.forEach(item => {
            (typeof item.price === "string") ? prices = item.price : prices = item.price.new;

            res.innerHTML += `
<div class='block'>
    <div class="element">
        <div class='nadp'>
            <a href='#'>
                <h3>${item.name}</h3>
            </a>
            <p> Цена: ${prices}</p>
            <p>${item.ratingRevievs} </p>
</div>
            <div class='photo'><img src=${item.picture}></div>
        </div>
    </div>
</div>
            `
        })
        document.querySelector(".feet").addEventListener("click", () => sortByFeedbacks(items));
        document.querySelector(".price").addEventListener("click", () => sortByPrice(items));

    }
});
function sortByPrice(arr) {
    const temp = JSON.parse(JSON.stringify(arr));
    // let mas = ["рублей","рубль","рубля"];
    temp.forEach(item => {
        if (typeof item.price == "string") {
            item.price = +item.price.replace(/\D/g, "");
        } else {
            item.price = +item.price.new.replace(/\D/g, "");

        }



    })

    temp.sort((a, b) => a.price - b.price);
    res.innerHTML = "";
    temp.forEach(item => {
        res.innerHTML += `
<div class='block'>
    <div class="element">
        <div class='nadp'>
            <a href='#'>
                <h3>${item.name}</h3>
            </a>
            <p> Цена: ${item.price} руб</p>
            <p>${item.ratingRevievs} </p>
</div>
            <div class='photo'><img src=${item.picture}></div>
        </div>
    </div>
</div>
            `
    })
}

function sortByFeedbacks(arr) {
    const temp = JSON.parse(JSON.stringify(arr));
    temp.forEach(item => {
        item.ratingRevievs = +item.ratingRevievs.replace(/\D/g, "");
        // console.log(item.ratingRevievs);

    })
    // temp.sort((a,b) =>a.ratingRevievs >b.ratingRevievs ? 1 : -1);
    temp.sort((a, b) => a.ratingRevievs - b.ratingRevievs);
    res.innerHTML = "";
    let mas = ['отзывов', 'отзыв', 'отзыва']
    temp.forEach(item => {
        (typeof item.price === "string") ? prices = item.price : prices = item.price.new;

        res.innerHTML += `
     <div class='block'>
    <div class="element">
        <div class='nadp'>
            <a href='#'>
                <h3>${item.name}</h3>
            </a>
            <p> Цена: ${prices}</p>
            <p>${item.ratingRevievs} ${countItems(item.ratingRevievs)(mas)} </p>
</div>
            <div class='photo'><img src=${item.picture}></div>
        </div>
    </div>
</div>
            `
    })
    // console.log(temp);
    // temp[1].price = "0";
    // console.log(temp[1]);
    // console.log(items[1]);

}
function countItems(num) {
    let n = num % 10;
    let m = num % 100;
    let chislo = n == 1 && m != 11 ? 1 : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2 : 0;
    return arr => arr[chislo]
}



