const inputs = document.querySelectorAll('.controls input');
function updateValues(){
    let pixels = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value+pixels); 
  }

  inputs.forEach(input => input.addEventListener('change', updateValues));

  


/*function updateValues(){
  const pixels = '';
  if(this.dataset.sizing){
      pixels = this.dataset.sizing;
  } else {
      pixels = '';
  }
  document.documentElement.style.setProperty(`--${this.name}`, this.value+pixels); 
};
for(let i = 0; i < inputs.length;i++){
  const posicion = inputs[i];
  posicion.addEventListener('change', updateValues);
}*/



/*const inputSpacing = document.querySelector('#spacing');
inputSpacing.addEventListener('change', function(){
  document.documentElement.style.setProperty(`--${this.name}`, this.value+this.dataset.sizing);
});
const inputBlur = document.querySelector('#blur');
input.addEventListener('change', function(){
  document.documentElement.style.setProperty(`--${this.name}`, this.value+this.dataset.sizing);
});*/



