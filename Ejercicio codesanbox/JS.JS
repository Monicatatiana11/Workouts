const bill = document.getElementById('inp-bill');
const tipBtns = document.querySelectorAll('.tip');
const tipCustom = document.getElementById('inp-tip');
const people = document.getElementById('inp-people');
const errorMsg = document.querySelector('.error-msg');
const results = document.querySelectorAll('.value');
const resetBtn = document.querySelector('.reset');


bill.addEventListener('input', setBillValue);
tipBtns.forEach(btn => {
    btn.addEventListener('click', handleClick);

});
tipCustom.addEventListener('input', setTipCustomValue);
people.addEventListener('input', setPeopleValue);
resetBtn.addEventListener('click', reset);


let billValue = 0.0; //valor por defecto
let tipValue = 0.15; //valor predeterminado -> El botón 15% está activo
let peopleValue = 1; 

function validateFloat(s){
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}

function validateInt(s){
    var rgx = /^[0-9]*$/;
    return s.match(rgx);
}

