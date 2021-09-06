const aTags = document.querySelectorAll("a");  //declarando  constante que es igual  a los elementos//
const highlight = document.createElement("span"); // constante que esta creando elemento span//
highlight.classList.add("highlight"); // es la constante que esta creando la class //
document.body.appendChild(highlight); // higfligth aparecera en body //

for (let i = 0; i < aTags.length; i++) {   //expresión evaluada al final//
aTags[i].addEventListener("mouseenter", function () { // verifica si el mouse esta encima del elemento//
const linkCoords = this.getBoundingClientRect(); //la variable linkcoords es igual a las coordenadas del elemento donde esta el mouse//
const coords = { 
width: linkCoords.width,
height: linkCoords.height,
top: linkCoords.top + window.scrollY,
left: linkCoords.left + window.scrollX,
};
highlight.style.width = `${coords.width}px`,
highlight.style.height = `${coords.height}px`,
highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
this.style.transform = `scale(2)`;
});

aTags[i].addEventListener("mouseleave", function(){
this.style.transform = `scale(1)`;
})


}
