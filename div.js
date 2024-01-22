// alert("hello");
const div = document.getElementById("div1");
let run = 0;

function divrun() {
    run += 1;
    div.style.left = run + "px";
    // console.log(div.style.left);
    // div.style.background = "blue" ;

    requestAnimationFrame(divrun);
}

divrun()