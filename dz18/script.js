let but = document.querySelector("#cl");
but.addEventListener("click", myMove);


function myMove() {
    let elem = document.getElementById("animate");
    let pos = 0;
    let id = setInterval(frame, 20);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
             but.addEventListener("click", myMove);  
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
            but.removeEventListener("click",myMove)
        }

    }
    }


// 2 способ
// function off() {
//     document.getElementById("cl").style.display = "none";
// }
// let but = document.querySelector("#cl");
// but.addEventListener("click", myMove);
// function myMove() {
//     let elem = document.getElementById("animate");
//     let pos = 0;
//     let id = setInterval(frame, 20);
//     function frame() {
//         if (pos == 350) {
//             clearInterval(id);
//               document.getElementById("cl").style.display = "block";
//         } else {   
//              document.getElementById("cl").style.display = "none";
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }

//     }
// }