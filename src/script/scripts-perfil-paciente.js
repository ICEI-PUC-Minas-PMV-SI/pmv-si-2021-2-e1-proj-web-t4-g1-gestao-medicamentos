let numero = localStorage.verPerfil

let informacoesPaciente = JSON.parse(localStorage.getItem('listaPacientes'))

let nome = informacoesPaciente[numero].nomeCad
let sobrenome = informacoesPaciente[numero].sobrenomeCad

let idade = informacoesPaciente[numero].idadeCad

let sexo = informacoesPaciente[numero].sexoCad

let medicamentos = informacoesPaciente[numero].medicamentoCad

document.querySelector('.nome').innerHTML = nome + ' ' + sobrenome

document.querySelector('.idade').innerHTML = idade + ' anos'

if (sexo == 'F'){
    document.querySelector('.imagem-paciente').setAttribute('src', 'imagens/perfil-feminino.jpg');
}
else{
    document.querySelector('.imagem-paciente').setAttribute('src', 'imagens/perfil-masculino.png');
}

document.querySelector('.lista-medicamentos').innerHTML = medicamentos