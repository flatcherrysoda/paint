const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const draw = (d) => {
    ctx.lineTo(d.offsetX, d.offsetY);
    ctx.stroke()
}

canvas.addEventListener("mousemove", draw);