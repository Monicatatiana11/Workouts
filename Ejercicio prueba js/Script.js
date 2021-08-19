let main = document.createElement('main');
main.setAttribute("id", "contenedor");
document.body.append (main);

let div1 =document.createElement('div');
div1.setAttribute("class", "share");
main.append (div1);


let section = document.createElement('section');
section.setAttribute("class", "right");
div1.append (section);

let div2 = document.createElement('div');
div2.setAttribute("class", "texto");
section.append (div2);

let h4 = document.createElement('h4');
h4.append (div2);
h4.innerHTML = " Shift the overall look and fell by adding these wondertul touches to furniture in your home";


let p =document.createElement('p');
p.append(div2);

let aside = document.createElement('aside');
aside.append(div2);


let img = document.createElement("img");
img.setAttribute("id", "botonimg");
img.src="./images/avatar-michelle.jpg";
section.append(img);
















