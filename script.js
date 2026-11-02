const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let drawing = false

let timeleft = 30;
const timer = document.getElementById("timer") 

document.addEventListener("mousedown", () =>{
    const time = setInterval(() =>{
    if (timeleft <= 0){
        clearInterval(time);
        timer.innerHTML = "time is up";
        timer.style.fontSize = "2em";
    }
    else{
        timer.innerHTML = `${timeleft}`;
        timeleft--
    }

}, 1000);
}, {once:true});

window.addEventListener("load" , ()=> {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
})

const start = () =>{
    drawing = true;
    ctx.beginPath();
}

const draw = (d) => {
    if(!drawing) return;
    ctx.lineTo(d.offsetX, d.offsetY);
    ctx.stroke()
}
canvas.addEventListener("mousedown", start)
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => drawing = false);
