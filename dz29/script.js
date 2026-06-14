let reg_email=/^[a-z0-9%_+.-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
function check(id, reg) { 
    let st = document.getElementById(id);
    let v = document.getElementById(id).value;
    if (reg.test(v)) {
        st.style.border = '1px solid black';
        return true;
    }
    else {
        st.style.border = '1px solid red';
        return false;
    }
}