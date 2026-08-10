let cur = document.querySelector("#currentnote");
let note = JSON.parse(localStorage.getItem("notes"));
 if (note) {
        cur.value = note;
    }
cur.addEventListener("change", function () {
    let notes = cur.value;
    localStorage.setItem("notes", JSON.stringify(notes));
    

})



