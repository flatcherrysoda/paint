const canvas = document.getElementById("canvas");
const tools = document.querySelectorAll(".tool")
const ctx = canvas.getContext("2d");
const fill = document.getElementById("fill-check");

let pensize = 4;
let currenttool = "pen"
let drawing = false
let m1
let m2
let snap 

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

const rect = (d) => {
    if(fill.checked){
        ctx.fillRect(d.offsetX, d.offsetY, m1 - d.offsetX, m2 - d.offsetY)
    } else{
    ctx.strokeRect(d.offsetX, d.offsetY, m1 - d.offsetX, m2 - d.offsetY)
    }
}

const tri = (d) => {
    
}
tools.forEach(t => {
    t.addEventListener("click", () => {
        document.querySelector(".tool").classList.remove(".on");
        t.classList.add(".on");
        currenttool = t.id
        alert(currenttool);
    })
})

const start = (d) =>{
    drawing = true;
    m1 = d.offsetX
    m2 = d.offsetY
    ctx.beginPath();
    ctx.lineWidth = pensize;
    snap = ctx.getImageData(0,0 ,canvas.width, canvas.height )
}

const draw = (d) => {
    if(!drawing) return;
    
    if(currenttool === "pen") {
    ctx.lineTo(d.offsetX, d.offsetY);
    ctx.stroke()
    }
    else if(currenttool === "rectangle") {
        ctx.putImageData(snap , 0, 0)
        rect(d)
    }else if(currenttool === "triangle") {
        ctx.putImageData(snap , 0, 0)
        tri(d)
    }
}
canvas.addEventListener("mousedown", start)
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => drawing = false);
