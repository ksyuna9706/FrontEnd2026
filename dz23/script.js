let input = document.querySelectorAll("input");
let btn = document.querySelector(".btn");
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("click", checkAll);
};
let numChecked;
function checkAll() {
    numChecked = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked ) {
            numChecked++;
        }
        if (numChecked == 1) {
            for (let i = 0; i < input.length; i++) {
                if (!input[i].checked) {
                    input[i].disabled = true;
                }
            }
        } else {
            for (let i = 0; i < input.length; i++) {
                input[i].disabled = false;
            }
        }
    }
}
for (let i = 0; i < input.length; i++) {
    btn.addEventListener("click", concl);
};
function concl() {
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            alert("Выбран: " + input[i].value);

        }
    }
    
}

        