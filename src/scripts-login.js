//=================script=Login=cadastros=01=====================
function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target.className == 'fechar') {
            modal.classList.remove('mostrar');
        }
    });
}
const criar = document.querySelector('.criar');
criar.addEventListener('click', () => iniciaModal('modal-promocao'));

// =================script=Cadastro=01=e=02=====================

//----------esta-no-script-cadastro01-------

//=================script=login=EsqueceuASenha=01=====================        
function iniciaModal03(modal03ID){
    const modal03 = document.getElementById(modal03ID);
    modal03.classList.add('mostrar03');
    modal03.addEventListener('click', (e) => {
        if(e.target.className == 'fechar') {
            modal03.classList.remove('mostrar03');
        }
    });
}
const link = document.querySelector('.lin');
link.addEventListener('click', () => iniciaModal03('modal-promocao03'));

//=================script=EsqueceuASenha=01=e=02=====================
function iniciaModal04(modal04ID){
    const modal04 = document.getElementById(modal04ID);
    modal04.classList.add('mostrar04');
    modal04.addEventListener('click', (e) => {
        if(e.target.className == 'fechar') {
            modal04.classList.remove('mostrar04'||"mostrar03");
        }
        if(e.target.className == 'volta') {
            modal04.classList.remove('mostrar04');
        }
    });
}
const cont = document.querySelector('.cont');
cont.addEventListener('click', () => iniciaModal04('modal-promocao04')); 
//=========================SENHA==============================
const passwordInput = document.getElementById("password")
const eyeSvg = document.getElementById("eyeSvg")
function eyeClick(){
    let inputTypeIsPassword = passwordInput.type == "password"
    if (inputTypeIsPassword) {
        showPassword()
    }
    else{
        hidePassword()
    }
}
function showPassword(){
    passwordInput.setAttribute("type", "text")
    eyeSvg.setAttribute("src", "imagens/hidden.png")
}
function hidePassword() {
    passwordInput.setAttribute("type", "password")
    eyeSvg.setAttribute("src", "imagens/view.png")
}

























function entrar(){
    let email2 = document.querySelector('#email2');
    let password = document.querySelector('#password');
    let erro1 = document.querySelector('#erro1');
    let typeUser = document.getElementsByName("tipoUsuario");

    let listaUser = []

    let userValid = {
        nome : '',
        sobrenome : '',
        email : '',
        senha : '',
        estado : '',
        cidade : '',
        genero : '',
        user : '',
        data : '',  
     }

     listaUser = JSON.parse(localStorage.getItem('listaUser'))

     listaUser.forEach((item) => {
         if(email2.value == item.emailCad && password.value == item.senhaCad){
             userValid = {
                nome : item.nomeCad,
                sobrenome : item.sobrenomeCad,
                email : item.emailCad,
                senha : item.senhaCad,
                estado : item.estadoCad,
                cidade : item.cidadeCad,
                genero : item.generoCad,
                user : item.userCad,
                data : item.data, 
             }
           
         }
     });
     if(email2.value == userValid.email && password.value == userValid.senha ){
         window.location.href='https://www.darksidebooks.com.br/institucional/editora'
         let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
     }
     
     else{
        email2.setAttribute('style', 'border-color: red')
        password.setAttribute('style', 'border-color: red')
        erro1.setAttribute('style', 'display: block')
        erro1.innerHTML='Usuário ou senha incorrentos'
        email2.focus()
     }

     
}












