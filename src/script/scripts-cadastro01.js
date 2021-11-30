//==================================SENHA=============================

const passwordInput2 = document.getElementById("password2")
const eyeSvg2 = document.getElementById("eyeSvg2")

function eyeClick2() {
    let inputTypeIsPassword2 = passwordInput2.type == "password"
    
    if (inputTypeIsPassword2) {
        showpassword2()
    }
    else{
        hidepassword2()
    }
}
function showpassword2(){
    passwordInput2.setAttribute("type", "text")
    eyeSvg2.setAttribute("src", "imagens/hidden.png")
}
function hidepassword2(){
    passwordInput2.setAttribute("type", "password")
    eyeSvg2.setAttribute("src", "imagens/view.png")
}

//=============================CONFIMAR=SENHA===============================

const passwordInput3 = document.getElementById("password3")
const eyeSvg3 = document.getElementById("eyeSvg3")

function eyeClick3() {
    let inputTypeIsPassword3 = passwordInput3.type == "password"
    
    if (inputTypeIsPassword3) {
        showpassword3()
    }
    else{
        hidepassword3()
    }
}
function showpassword3(){
    passwordInput3.setAttribute("type", "text")
    eyeSvg3.setAttribute("src", "imagens/hidden.png")
}
function hidepassword3(){
    passwordInput3.setAttribute("type", "password")
    eyeSvg3.setAttribute("src", "imagens/view.png")
}

// ==================================VALIDAÇÃO=DE=CADASTRO01==============================
let usuarios = [];


//------nome------
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false
let certificacao1 = document.querySelector('#certificacao1')

//------sobrenome-----
let sobrenome = document.querySelector('#sobrenome')
let labelSobrenome= document.querySelector('#labelSobrenome')
let validSobrenome = false
let certificacao2 = document.querySelector('#certificacao2')

//-------email-------
let email = document.querySelector('#email')
let labelEmail= document.querySelector('#labelEmail')
let validEmail = false
let certificacao3 = document.querySelector('#certificacao3')

//------------senha------------
let senha = document.querySelector('#password2')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false
let certificacao4 = document.querySelector('#certificacao4')

//-------confSenha---------
let confSenha = document.querySelector('#password3')
let labelConfSenha = document.querySelector('#labelConfSenha')
let validConfSenha = false
let certificacao5 = document.querySelector('#certificacao5')

//----------estado----------
let estado = document.querySelector('#estado')
let labelEstado = document.querySelector('#labelEstado')
let validEstado = false
let certificacao6 = document.querySelector('#certificacao6')

//----------cidade----------
let cidade = document.querySelector('#cidade')
let labelCidade = document.querySelector('#labelCidade')
let validCidade = false
let certificacao7 = document.querySelector('#certificacao7')


//----------msErrorOuSuccess--------
let labelErro = document.querySelector('#erro')
//-----------------------------------------------------------------------------------------------------------------------------------------------
//------nome------
nome.addEventListener("keypress", function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    if(keyCode > 32 && keyCode < 58 ){
        e.preventDefault();
    }
    if(keyCode == 64){
        e.preventDefault();
    }
    if(keyCode > 122 && keyCode < 192){
        e.preventDefault();
    }
})
nome.addEventListener('keyup', () =>{
    if(nome.value.length <= 2){
        nome.setAttribute('style', 'border-color: #E81330')
        labelNome.setAttribute('style', 'color: #E81330')
        labelNome.innerHTML = '*Insira no minimo 3 caracteres'
        certificacao1.setAttribute("src", "imagens/invalid.png")
        labelErro.setAttribute('style', 'display: none')
        validNome = false
    }
    else{
        nome.setAttribute('style', 'border-color: #00d512')
        labelNome.innerHTML = ''
        certificacao1.setAttribute("src", "imagens/valid.png")
        validNome = true
    }
})
//------sobrenome-----
sobrenome.addEventListener("keypress", function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    if(keyCode > 32 && keyCode < 58 ){
        e.preventDefault();
    }
    if(keyCode == 64){
        e.preventDefault();
    }
    if(keyCode > 122 && keyCode < 192){
        e.preventDefault();
    }
    
})
sobrenome.addEventListener('keyup', () =>{
    if(sobrenome.value.length <= 3){
        sobrenome.setAttribute('style', 'border-color: #E81330')
        labelSobrenome.setAttribute('style', 'color: #E81330')
        labelSobrenome.innerHTML = '*Insira no minimo 4 caracteres'
        certificacao2.setAttribute("src", "imagens/invalid.png")
        labelErro.setAttribute('style', 'display: none')
        validSobrenome = false
    }else{
        sobrenome.setAttribute('style', 'border-color: #00d512')
        labelSobrenome.innerHTML = ''
        certificacao2.setAttribute("src", "imagens/valid.png")
        validSobrenome = true
    }
})

//-----------------email----------

email.addEventListener('keyup', () =>{
    if(!email.checkValidity()){
        email.setAttribute('style', 'border-color: #E81330')
        labelEmail.setAttribute('style', 'color: #E81330')
        labelEmail.innerHTML = '*Email invaido'
        certificacao3.setAttribute("src", "imagens/invalid.png")
        labelErro.setAttribute('style', 'display: none')
        validEmail = false
        
    }
    else{
        email.setAttribute('style', 'border-color: #00d512')
        labelEmail.innerHTML = ''
        certificacao3.setAttribute("src", "imagens/valid.png")
        validEmail = true
    }
})

//------------senha------------

senha.addEventListener('keyup', () =>{
    if(senha.value.length <= 5){
        senha.setAttribute('style', 'border-color: #E81330')
        labelSenha.setAttribute('style', 'color: #E81330')
        labelSenha.innerHTML = '*Senha é Fraca'
        certificacao4.setAttribute("src", "imagens/invalid.png")
        labelErro.setAttribute('style', 'display: none')
        validSenha = false
    }  
    else{
        senha.setAttribute('style', 'border-color: #00d512')
        labelSenha.innerHTML = ''
        certificacao4.setAttribute("src", "imagens/valid.png")
        validSenha = true
    }
})

//-------confSenha---------

confSenha.addEventListener('keyup', () =>{
    if(senha.value != confSenha.value){
        confSenha.setAttribute('style', 'border-color: #E81330')
        labelConfSenha.setAttribute('style', 'color: #E81330')
        labelConfSenha.innerHTML = '*As senhas não conferem'
        certificacao5.setAttribute("src", "imagens/invalid.png")
        labelErro.setAttribute('style', 'display: none')
        validConfSenha = false
    }  
    else{
        confSenha.setAttribute('style', 'border-color: #00d512')
        labelConfSenha.innerHTML = ''
        certificacao5.setAttribute("src", "imagens/valid.png")
        validConfSenha = true
    }
})

//----------estado----------

function getSelectValue(){
    var selectedValue = document.getElementById("estado").value;
    console.log(selectedValue);
    if(selectedValue == 'est'){
        estado.setAttribute('style', 'border-color: #E81330')
        labelEstado.setAttribute('style', 'color: #E81330')
        labelEstado.innerHTML = '*Escolha um estado'
        certificacao6.setAttribute("src", "imagens/invalid.png")
        labelErro.setAttribute('style', 'display: none')
        validEstado = false
    }else{
        estado.setAttribute('style', 'border-color: #00d512')
        labelEstado.innerHTML = ''
        certificacao6.setAttribute("src", "imagens/valid.png")
        validEstado = true
    }
}
//----------cidade----------
cidade.addEventListener("keypress", function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    if(keyCode > 32 && keyCode < 58 ){
        e.preventDefault();
    }
    if(keyCode == 64){
        e.preventDefault();
    }
    if(keyCode > 122 && keyCode < 192){
        e.preventDefault();
    }  
})
cidade.addEventListener('keyup', () =>{
    if(cidade.value.length <= 2){
        cidade.setAttribute('style', 'border-color: #E81330')
        labelCidade.setAttribute('style', 'color: #E81330')
        labelCidade.innerHTML = '*Cidade não encontrada'
        certificacao7.setAttribute("src", "imagens/invalid.png")
        labelErro.setAttribute('style', 'display: none')
        validCidade = false
    }
    else{
        cidade.setAttribute('style', 'border-color: #00d512')
        labelCidade.innerHTML = ''
        certificacao7.setAttribute("src", "imagens/valid.png")
        validCidade = true
    }
})

function continuar(){
    if(validNome && validSobrenome && validEmail && validSenha && validConfSenha && validEstado && validCidade){
        labelErro.setAttribute('style', 'display: none')

        function iniciaModal02(modal02ID){
            const modal02 = document.getElementById(modal02ID);
            modal02.classList.add('mostrar02');
            modal02.addEventListener('click', (e) => {
                if(e.target.className == 'fechar') {
                    modal02.classList.remove('mostrar02' && 'mostrar');
                    
                }
                if(e.target.className == 'volta') {
                    modal02.classList.remove('mostrar02');
                }
            });
        }
         const continuar = document.querySelector('.continuar');
         continuar.addEventListener('click', () => iniciaModal02('modal-promocao02'));   
        
    }else{
        labelErro.setAttribute('style', 'display: block')
    }
}


//===============================================cadastro02==============================================
//-------genero-----
let labelGenero = document.querySelector('#labelGenero');
let certificacao8 = document.querySelector('#certificacao8');
let sexo = ""
let validGenero = false


//---------tipo-de-user-------
let labelUser = document.querySelector('#labelUser');
let certificacao9 = document.querySelector('#certificacao9');
let usuario = "";
let validUser = false

//----------data-de-nascimento-----------
let dataDeNascimento = document.querySelector('#dataDeNascimento');
let labelDate = document.querySelector('#labelDate');
let certificacao10 = document.querySelector('#certificacao10');
let validDate = false
//------------sucesso------------------
let sucesso = document.querySelector('#sucesso');

//--------------------------------------------------------------------------------------------------------------------------------
// -------genero-------
const genero= () => {
    let elementosSexo = document.getElementsByName("sexo");
    for (let i = 0; i < elementosSexo.length; i++){
        if(elementosSexo.item(i).checked){
           sexo = elementosSexo.item(i).value;
            certificacao8.setAttribute("src", "imagens/valid.png");
            certificacao8.setAttribute('style' , 'left: 105px');
            certificacao8.setAttribute('style' , 'max-width:500px','left: 85px');
            labelGenero.setAttribute('style', 'color: ');
            labelGenero.innerHTML = 'Gênero';
            validGenero = true
            console.log(sexo)
            break;
        }
    }
   }
//---------------user-----------------
   const user=() =>{
    let elementosUser = document.getElementsByName("tipoUsuario");
    for (let i = 0 ; i < elementosUser.length; i ++){
        if(elementosUser.item(i).checked){
            usuario = elementosUser.item(i).value;
            certificacao9.setAttribute("src", "imagens/valid.png");
            certificacao9.setAttribute('style' , 'left: 156px');
            certificacao9.setAttribute('style' , 'max-width:500px','left: 138px');
            labelUser.setAttribute('style', 'color: ');
            labelUser.innerHTML = 'Tipo de Usuário';
            validUser = true
            console.log(usuario)
            
        }
    }
}
//-----------data-de-nascimento-----------
function validardataDeNascimento(data){
    dataAtual= new Date();
    data=new Date(data);
    if (data<dataAtual){
        console.log("Data Válida");
        dataDeNascimento.setAttribute('style', 'border-color: #00d512')
        certificacao10.setAttribute("src", "imagens/valid.png");
        certificacao10.setAttribute('style' , 'left: 185px');
        certificacao10.setAttribute('style' , 'max-width:500px','left: 165px');
        labelDate.setAttribute('style', 'color: ');
        labelDate.innerHTML = 'Data de Nascimento';
        validDate = true;
        return true;
    } 
    else {
        console.log("Data Inválida");
        dataDeNascimento.setAttribute('style', 'border-color: #E81330');
        certificacao10.setAttribute("src", "imagens/invalid.png");
        certificacao10.setAttribute('style' , 'left: 145px');
        labelDate.setAttribute('style', 'color: #E81330');
        labelDate.innerHTML = '*Data invalida';
        validDate = false;
        return false;
        
    }
}



function cadastrar(){
    if(validGenero && validUser && validDate){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaUser.push(
            {
                nomeCad: nome.value,
                sobrenomeCad: sobrenome.value,
                emailCad: email.value,
                senhaCad: senha.value,
                estadoCad: estado.value,
                cidadeCad: cidade.value,
                generoCad: sexo,
                userCad: usuario,
                dataCad: document.querySelector('#dataDeNascimento').value,
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        console.log(listaUser)
        sucesso.setAttribute('style', 'display: block')
        setTimeout(()=>{
            window.location.href ='https://icei-puc-minas-pmv-si.github.io/pmv-si-2021-2-e1-proj-web-t4-g1-gestao-medicamentos/src/login2.html'
        }, 3000)
        
    }
    else{
        certificacao8.setAttribute("src", "imagens/invalid.png");
        certificacao8.setAttribute('style' , 'left: 212px');
        labelGenero.setAttribute('style', 'color: #E81330');
        labelGenero.innerHTML = '*Escolha uma das opções';

        certificacao9.setAttribute("src", "imagens/invalid.png");
        certificacao9.setAttribute('style' , 'left: 212px');
        labelUser.setAttribute('style', 'color: #E81330');
        labelUser.innerHTML = '*Escolha uma das opções';

        certificacao10.setAttribute("src", "imagens/invalid.png");
        certificacao10.setAttribute('style' , 'left: 145px');
        labelDate.setAttribute('style', 'color: #E81330');
        labelDate.innerHTML = '*Data invalida';


    }
}



























































