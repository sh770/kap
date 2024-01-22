// alert("hello");
const div = document.getElementById("div1");
let run = 0;
let frameCount = 0;
let raf;

function divrun() {
    run += 5;
    div.style.left = run + "px";
    frameCount ++;
    console.log("frame",frameCount);
    
    raf = requestAnimationFrame(divrun);
    // console.log(div.style.left);
    // if (div.style.right === "0px") {
        if (div.style.left === "1000px") {
        console.log("done");
        cancelAnimationFrame(raf);
    }
}

divrun()

setInterval(() => {
    frameCount = 0;
}, 1000);

// setTimeout(() => {
//     cancelAnimationFrame(raf);
// }, 5500);

// div.style.background = "blue" ;