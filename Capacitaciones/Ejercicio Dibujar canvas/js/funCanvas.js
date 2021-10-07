const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = flase;
let lastX = 0;
let LastY = 0;

let hue = 0;

let direction = true:

function draw(e){
    if(!isDrawing) return;
    console.log(e);

    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, LastY);
    
}