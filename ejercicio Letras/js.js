const aTags = document.querySelectorAll("a");
const highlight = document.createElement("span");

highlight.classList.add("highlight");
document.body.appendChild(highlight);

for (let i = 0; i <aTags.length; i++){

aTags[i].addEventListener("mouseenter",function () {

this.style.transform= scale (2)";



const linkCoords=this.getBoundingClient Rect();

const coards = {

width: linkCoords.width,

height: linkCoords.height, top: linkCoords.top + window.scrolly,

left: linkCoords.left + window.scrollx,

