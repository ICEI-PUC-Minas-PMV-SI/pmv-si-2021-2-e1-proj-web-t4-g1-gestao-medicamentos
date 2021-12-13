//--------------------------------------adicionar-----medicamentos---------------------------------------------------------------------

//------nome-Medicamento------
let nomeMed = document.querySelector('#nomeMed')
let validNomeMed = false

//------estoque------
let estoque = document.querySelector('#estoque')
let validEstoque = false

//----------data-de-----------
let dataDe = document.querySelector('#dataDe');
let validDateDe = false

//----------data-ate-----------
let dataAte = document.querySelector('#dataAte');
let validDateAte = false

//----------horario----------
let horario = document.querySelector('#horario')
let validHorario = false

//----------confiirmar------------
let deuBom = document.querySelector('#deuBom')
let deuRuim = document.querySelector('#deuRuim')

//----------------------------------------------------------------------------------------------------------------------------------------

nomeMed.addEventListener('keyup',() =>{
    if(nomeMed.value.length <= 2){
        nomeMed.setAttribute('style', 'border-color: #E81330')
        validNomeMed = false
    }
    else{
        nomeMed.setAttribute('style', 'border-color: #00d512')
        validNomeMed = true
    }
})

estoque.addEventListener("keyup",()=>{
    if (estoque.value == 0 ){
        estoque.setAttribute('style', 'border-color: #E81330')
        validEstoque = false
    } else {
        estoque.setAttribute('style', 'border-color: #00d512')
        validEstoque = true
    }
})

function validarDataDe(data){
    dataAtual= new Date();
    data=new Date(data);
    if (data >= dataAtual){
        console.log("Data Válida");
        dataDe.setAttribute('style', 'border-color: #00d512')
        validDateDe = true;
        return true;
    } 
    else {
        console.log("Data Inválida");
        dataDe.setAttribute('style', 'border-color: #E81330');
        validDateDe = false;
        return false; 
    }
}

function validarDataAte(data){
    dataAtual= new Date();
    data=new Date(data);
    if (data >= dataAtual){
        console.log("Data Válida");
        dataAte.setAttribute('style', 'border-color: #00d512')
        validDateAte = true;
        return true;
    } 
    else {
        console.log("Data Inválida");
        dataAte.setAttribute('style', 'border-color: #E81330');
        validDateAte = false;
        return false; 
    }
}
horario.addEventListener("keyup",()=>{
    if (horario.value == 00 ){
        horario.setAttribute('style', 'border-color: #E81330')
        validHorario = false
    } else {
        horario.setAttribute('style', 'border-color: #00d512')
        validHorario = true
    }
})
function adicionarMed(){
    if(validNomeMed && validEstoque && validDateDe && validDateAte && validHorario){
        let listaMedicamentos = JSON.parse(localStorage.getItem('listaUser' && 'listaMedicamentos') || '[]')
        listaMedicamentos.push(
            {
                nomeMedCad: nomeMed.value,
                estoqueCad: estoque.value,
                dateDeCad: document.querySelector('#dataDe').value,
                dateAteCad: document.querySelector('#dataAte').value,
                horarioCad: horario.value
            }
        )
        localStorage.setItem('listaMedicamentos', JSON.stringify(listaMedicamentos))
        deuBom.setAttribute('style', 'display: block')
        deuRuim.setAttribute('style', 'display: none')
        
        
        setTimeout(()=>{
            window.location.href ='home-usuario-comum.html'
        }, 3000)  
    }
    else{
        deuRuim.setAttribute('style', 'display: block')
        deuBom.setAttribute('style', 'display: none')
    }
}
