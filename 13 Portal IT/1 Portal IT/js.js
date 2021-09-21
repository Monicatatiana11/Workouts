function checkInputs(){

    const inputNamesValue = inputNames.value;
    const inputNitOrNameCompanyValue = inputNitOrNameCompany.value.trim();
    const inputIssueValue = inputIssue.value.trim();
    const inputPhoneValue = inputPhone.value.trim();
    const inputEmailValue = inputEmail.value.trim();

    if(inputNamesValue === ''){
        setErrorFor(inputNames, 'El nombre y apellido es obligatorio');
    }else if(!isName(inputNamesValue)){
        setErrorFor(inputNames, 'Ingrese nombres válidos');
    }else{
        setSuccessFor(inputNames); 
    };

    if(inputNitOrNameCompanyValue === ''){
        setErrorFor(inputNitOrNameCompany, 'El NIT o nombre de la compaía es obligatorio');
    }else if(!isName(inputNitOrNameCompanyValue)){
        setErrorFor(inputNitOrNameCompany, 'Ingrese un NIT o nombre de compañía válido');
    }else{
        setSuccessFor(inputNitOrNameCompany); 
    };

    if(inputIssueValue === ''){
        setErrorFor(inputIssue, 'La descripcion del inconvenniente es obligatoria');
    }else{
        setSuccessFor(inputIssue); 
    };

    if(inputPhoneValue === ''){
        setErrorFor(inputPhone, 'El número de teléfono o celular es obligatorio');
    }else if(!isNumber(inputPhoneValue)){
        setErrorFor(inputPhone, 'Ingrese un número de teléfono valido');
    }else{
        setSuccessFor(inputPhone); 
    };

    if(inputEmailValue === ''){
        setErrorFor(inputEmail, 'El correo electrónico es obligatorio');
    }else if(!isEmail(inputEmailValue)){
        setErrorFor(inputEmail, 'Ingrese un correo válido');
    }else{
        setSuccessFor(inputEmail); 
    };
    
    function setErrorFor(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.querySelector('.fa-info-circle').classList.add('visible')
        small.innerText = message; 
    };

    function setSuccessFor(input){
        const formControl = input.parentElement;
        formControl.querySelector('.fa-info-circle').classList.remove('visible')
    };

    function isName(nameUser){
        return /^[a-z ,.'-]+$/i.test(nameUser);   
    };

    function isNumber(phone){
        return /^\d+$/.test(phone);
    };

    function isEmail(email){
        return /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };
    
};


submit.addEventListener('click', (e) =>{

    e.preventDefault();
    checkbox.checked == false ? window.alert('Acepte primero los términos y condiciones') : checkInputs();

    const showMessage = document.querySelectorAll('i');
    
    showMessage.forEach(i =>{
        i.addEventListener('mouseenter', () =>{
            i.parentElement.querySelector('small').classList.toggle('show');
        });

        i.addEventListener('mouseleave', () =>{
            i.parentElement.querySelector('small').classList.toggle('show');
        });
    })
});

