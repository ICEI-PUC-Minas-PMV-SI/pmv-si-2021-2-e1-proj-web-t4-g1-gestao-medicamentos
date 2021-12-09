//=================EDITAR=PERFIL======================
function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target.className == 'voltar') {
            modal.classList.remove('mostrar');
        }
    });
}
const editarPerfil = document.querySelector('.editarPerfil01');
editarPerfil.addEventListener('click', () => iniciaModal('modal-promocao'));

//=================ALTERAR=DADOS======================
function iniciaModal011(modal011ID){
    const modal011 = document.getElementById(modal011ID);
    modal011.classList.add('mostrar011');
    modal011.addEventListener('click', (e) => {
        if(e.target.className == 'voltar11') {
            modal011.classList.remove('mostrar011');
        }
    });
}
const alterarDados = document.querySelector('.alterarDados');
alterarDados.addEventListener('click', () => iniciaModal011('modal-promocao011'));  

//=================ALTERAR=SENHA======================
function iniciaModal012(modal012ID){
    const modal012 = document.getElementById(modal012ID);
    modal012.classList.add('mostrar012');
    modal012.addEventListener('click', (e) => {
        if(e.target.className == 'voltar12') {
            modal012.classList.remove('mostrar012');
        }
    });
}
const alterarSenha = document.querySelector('.alterarSenha');
alterarSenha.addEventListener('click', () => iniciaModal012('modal-promocao012'));  

//=================DELETAR======================
function iniciaModal013(modal013ID){
    const modal013 = document.getElementById(modal013ID);
    modal013.classList.add('mostrar013');
    modal013.addEventListener('click', (e) => {
        if(e.target.className == 'voltar13') {
            modal013.classList.remove('mostrar013');
        }
    });
}
const deletar = document.querySelector('.deletar');
deletar.addEventListener('click', () => iniciaModal013('modal-promocao013'));  

//=================NOTIFICAÇÕES======================
function iniciaModal02(modal02ID){
    const modal02 = document.getElementById(modal02ID);
    modal02.classList.add('mostrar02');
    modal02.addEventListener('click', (e) => {
        if(e.target.className == 'voltar2') {
            modal02.classList.remove('mostrar02');
        }
    });
}
const notificacoes = document.querySelector('.notificacoes01');
notificacoes.addEventListener('click', () => iniciaModal02('modal-promocao02'));  

//=================AJUDA======================
function iniciaModal03(modal03ID){
    const modal03 = document.getElementById(modal03ID);
    modal03.classList.add('mostrar03');
    modal03.addEventListener('click', (e) => {
        if(e.target.className == 'voltar6') {
            modal03.classList.remove('mostrar03');
        }
    });
}
const ajuda = document.querySelector('.ajuda01');
ajuda.addEventListener('click', () => iniciaModal03('modal-promocao03'));  
