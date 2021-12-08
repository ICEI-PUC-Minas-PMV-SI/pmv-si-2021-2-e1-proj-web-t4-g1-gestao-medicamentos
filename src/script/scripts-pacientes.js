//Pego a lista de pacientes no localStorage e transformo em JSON
let listaPacientes = JSON.parse(localStorage.getItem('listaPacientes'));

//Crio um contador com a quantidade de pacientes cadastrados
let contador = listaPacientes.length;

//Busco a div que vai conter os pacientes 
let lista = document.querySelector('.scroll');

//Esse for vai dar voltas criando as div's e mandando elas pro HTML
for (var i = 0; i < contador; i++){

    //Criando uma div e colocando a classe dela (pro css poder estilizar)
    let informacoesPaciente = document.createElement('div');
    informacoesPaciente.classList.add('informacoes-paciente');

    let esquerda = document.createElement('div');
    esquerda.classList.add('esquerda');

    let imagemPaciente = document.createElement('img');

    //Verificando o sexo do paciente e adequando a imagem 
    if(listaPacientes[i].sexoCad == 'F'){
    imagemPaciente.setAttribute('src', 'imagens/perfil-feminino.jpg');
    }
    else{
    imagemPaciente.setAttribute('src', 'imagens/perfil-masculino.png');
    }

    //Acoplando uma div dentro de outra
    esquerda.appendChild(imagemPaciente);

    let direita = document.createElement('div');
    direita.classList.add('direita');

    let nome = document.createElement('h2');
    nome.classList.add('nome');

    //Buscando o nome do paciente no JSON e colocando na div 'nome'
    nome.innerHTML = listaPacientes[i].nomeCad;


    let idade = document.createElement('span');
    idade.classList.add('idade');

    idade.innerHTML = listaPacientes[i].idadeCad + ' anos';


    let br = document.createElement('br');


    let perfil = document.createElement('a');
    perfil.classList.add('perfil');
    perfil.setAttribute('href', 'perfil-paciente.html');
    perfil.innerHTML = 'Ver perfil>';


    //Cria um span com display none que carrega o i->contador
    let cont = document.createElement('span');
    cont.classList.add('cont');
    cont.innerHTML = i;
    cont.style.display = 'none';

    //Acoplo o contador dentro do perfil
    perfil.appendChild(cont);

    //Pego o valor do contador
    let numero = cont.innerText;
    
    perfil.addEventListener("click", function () {
        //Adiciono o contador ao localStorage 
        localStorage.setItem("verPerfil", numero);
    })

    let hr = document.createElement('hr');

    //Acoplando as div's umas dentro das outras
    direita.appendChild(nome);
    direita.appendChild(idade);
    direita.appendChild(br);
    direita.appendChild(perfil);

    informacoesPaciente.appendChild(esquerda);
    informacoesPaciente.appendChild(direita);

    //Mandando as div's criadas e acopladas pra 'lista' que é a div que receberá os pacientes lá no html
    lista.appendChild(informacoesPaciente);
    lista.appendChild(hr);
    
    //Aqui termina o ciclo desse paciente e recomeça até acabarem os pacientes
}
