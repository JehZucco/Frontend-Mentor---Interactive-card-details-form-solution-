//pega os inputs para manipular
const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const cvcInput = document.getElementById('cvc');

//pega os elementos do cartão para manipular
const nameCard = document.getElementById('replace-name');
const numberCard = document.getElementById('replace-number');
const cvcCard = document.getElementById('card-cvc');
const monthCard = document.getElementById('replace-month');
const yearCard = document.getElementById('replace-year');

//funções para alterar os dados do cartão a partir do input
function replaceDataCardName(){
    if(nameInput.value.trim() === ""){
        nameCard.innerText  = "Jane Appleseed";
    }else {
        nameCard.innerText = nameInput.value;
    }
}
function replaceDataCardNumber(){
    if(numberInput.value.trim() === ""){
        numberCard.innerText = "0000 0000 0000 0000";
    }else {
        numberCard.innerText = numberInput.value;
    }
}
function replaceDataCardCvc(){
    if(cvcInput.value.trim() ===""){
        cvcCard.innerText = "000"
    }else {
        cvcCard.innerText = cvcInput.value;
    }
}
function replaceDataMonth(){
    if(monthInput.value.trim() === ""){
        monthCard.innerText = "00"
    }else {
        monthCard.innerText = monthInput.value;
    }
}
function replaceDataYear(){
    if(yearInput.value.trim() === ""){
        yearCard.innerText = "00"
    }else {
        yearCard.innerText = yearInput.value;
    }
}

//chama as funções que alteram os dados do cartão
nameInput.addEventListener('input', replaceDataCardName);
numberInput.addEventListener('input', replaceDataCardNumber);
cvcInput.addEventListener('input', replaceDataCardCvc);
monthInput.addEventListener('input', replaceDataMonth);
yearInput.addEventListener('input', replaceDataYear);


//para checar de há inputs em branco
function checkBlankInputs(){
    let isValid = true;
    //pega os parágrafos de erro para manipular
    const blankName = document.getElementById('blank-name');
    const blankNumber = document.getElementById('blank-number');
    const blankDate = document.getElementById('blank-date');
    const blankCvc = document.getElementById('blank-cvc');

    //checa o input de nome
    if (nameInput.value.trim() === '') {
        blankName.classList.add('display');
        nameInput.classList.add('error-border');
        isValid = false;
    } else {
        blankName.classList.remove('display');
        nameInput.classList.remove('error-border');
    }

    //checa o input de número do cartão
    if (numberInput.value.trim() === '') {
        blankNumber.classList.add('display');
        numberInput.classList.add('error-border');
        isValid = false;
    } else {
        blankNumber.classList.remove('display');
        numberInput.classList.remove('error-border');
    }

    //checa o input de mês
    if (monthInput.value.trim() === '') {
        blankDate.classList.add('display');
        monthInput.classList.add('error-border');
        isValid = false;
    } else {
        blankDate.classList.remove('display');
        monthInput.classList.remove('error-border');
    }

    //checa o input de ano
    if (yearInput.value.trim() === '') {
        blankDate.classList.add('display');
        yearInput.classList.add('error-border');
        isValid = false;
    } else {
        blankDate.classList.remove('display');
        yearInput.classList.remove('error-border');
    }

    //checa o input de cvc
    if (cvcInput.value.trim() === '') {
        blankCvc.classList.add('display');
        cvcInput.classList.add('error-border');
        isValid = false;
    } else {
        blankCvc.classList.remove('display');
        cvcInput.classList.remove('error-border');
    }
    return isValid;
}

// checa se os formatos estão corretos
function checkFormat(){
    let isValid = true;
    const wrongName = document.getElementById('wrong-name');
    const wrongNumber = document.getElementById('wrong-number');
    const wrongDate = document.getElementById('wrong-date');
    const wrongCvc = document.getElementById('wrong-cvc');

    //checa se o input de nome é apenas letras
    if (/[^a-zA-Z\s]/.test(nameInput.value.trim())) {
        wrongName.classList.add('display');
        nameInput.classList.add('error-border');
        isValid = false;
    } else {
        wrongName.classList.remove('display');
        nameInput.classList.remove('error-border');
    }

    //checa se o input de número é apenas números
    const numberValue = numberInput.value.replace(/\s/g, "");//tirar os espaços
    if ( !/^\d{16}$/.test(numberValue)) {
        wrongNumber.classList.add('display');
        numberInput.classList.add('error-border');
        isValid = false;
    } else {
        wrongNumber.classList.remove('display');
        numberInput.classList.remove('error-border');
    }
    // checa se o input de mês é um número de 01-12
    if ( !/^(0[1-9]|1[0-2])$/.test(monthInput.value.trim())) {
        wrongDate.classList.add('display'); // Exibe o erro
        monthInput.classList.add('error-border'); // Adiciona borda de erro no mês
        isValid = false;
    } else {
        wrongDate.classList.remove('display'); // Remove erro
        monthInput.classList.remove('error-border'); // Remove borda de erro do mês
    }

    // checa se o input de ano são 2 números
    if (!/^\d{2}$/.test(yearInput.value.trim())) {
        wrongDate.classList.add('display'); // Exibe o erro
        yearInput.classList.add('error-border'); // Adiciona borda de erro no ano
        isValid = false;
    } else {
        wrongDate.classList.remove('display'); // Remove erro
        yearInput.classList.remove('error-border'); // Remove borda de erro do ano
    }

    //checa se o cvc são apenas 3 ou 4 números
    if ( !/^\d{3,4}$/.test(cvcInput.value.trim())) {
        wrongCvc.classList.add('display');
        cvcInput.classList.add('error-border');
        isValid = false;
    } else {
        wrongCvc.classList.remove('display');
        cvcInput.classList.remove('error-border');
    }
    return isValid;
}


const completedState = document.getElementById('completed-state-div');
const form = document.getElementById('form-style-div');

function submitData(){
    
    if(checkBlankInputs() && checkFormat()){
        completedState.classList.add('display')
        form.style.display = 'none'
    }
}

function newForm(){
        nameInput.value = "";
        numberInput.value = "";
        monthInput.value = "";
        yearInput.value = "";
        cvcInput.value = "";

        nameCard.innerText  = "Jane Appleseed";
        numberCard.innerText = "0000 0000 0000 0000";
        monthCard.innerText = "00"
        yearCard.innerText = "00"
        cvcCard.innerText = "000";

        completedState.classList.remove('display')
        form.style.display = 'block'
}

