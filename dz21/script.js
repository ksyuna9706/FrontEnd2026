let lengthPath = 5;
let pagination = document.querySelector("pagination");
let product = document.querySelector(".product-cover");
let wrap = document.querySelector(".wrap");
let data = new Array(18);

for (let i = 0; i < data.length; i++) {
    data[i] = document.createElement("div");
    data[i].classList.add("card");
    if (i % 3) {
        data[i].classList.add("blue");
    } else {
        data[i].classList.add("gray");
    }
    let node = document.createTextNode(i + 1);
    data[i].append(node);
    product.append(data[i]);
}

let chunks = splitParrts(data);

renderChunks(0);
function splitParrts(arr) {
    if (arr.length > lengthPath) {
        let chunks = [];
        for (let i = 0; i < arr.length; i += lengthPath) {
            chunks.push(arr.slice(i, i + lengthPath));
        }
        return chunks;
    } else {
        return arr;
    }
}
function renderChunks(part) {
    if (part >= 0 && part <= chunks.length) {
        product.innerHTML = "";
        chunks[part].map(elem => product.append(elem));

    } else {
        return false;
    }
}

function renderChunks(part) {
    if (part >= 0 && part <= chunks.length) {
        product.innerHTML = "";
        chunks[part].map(elem => product.append(elem));
    } else {
        return false;
    }
};

let currentPage = 1;
let buttonDown = document.createElement("button");
buttonDown.classList.add("down");
buttonDown.textContent = "Назад";
wrap.append(buttonDown);
buttonDown.disabled = true;

let buttonUp = document.createElement("button");
buttonUp.classList.add("up");
buttonUp.textContent = "Вперед";
wrap.append(buttonUp);

for (let i = 1; i < lengthPath; i++) {
    let page = document.createElement("button");
    page.classList.add("page" + i, "active");
    page.textContent = i;
    wrap.append(page);

    page.addEventListener("click", function () {
        currentPage = i - 1;
        renderChunks(currentPage);
        page.classList.add("non-active-2");

        if (currentPage >= 3) {
            buttonUp.disabled = true;
            buttonUp.classList.add("non-active");
            buttonDown.classList.remove("non-active");
            buttonDown.disabled = false;

        }
        if (currentPage < 3) {
            buttonUp.disabled = false;
            buttonUp.classList.remove("non-active");
            buttonDown.classList.remove("non-active");
            buttonDown.disabled = false;

        }
        if (currentPage < 1) {
            buttonDown.disabled = true;
            buttonDown.classList.add("non-active");
        }
    });



};
buttonUp.addEventListener("click", function () {
    if (currentPage <= lengthPath - 1) {
        currentPage++;
        renderChunks(currentPage);
        buttonDown.disabled = false;
        buttonDown.classList.remove("non-active");
    }
    if (currentPage >= 3) {
        buttonUp.disabled = true;
        buttonUp.classList.add("non-active");
    }

});
buttonDown.addEventListener("click", function () {
    if (currentPage > 0) {
        currentPage--;
        renderChunks(currentPage);
        buttonUp.disabled = false;
        buttonUp.classList.remove("non-active");
    }
    if (currentPage == 0) {
        buttonDown.disabled = true;
        buttonDown.classList.add("non-active");
    }
});


























