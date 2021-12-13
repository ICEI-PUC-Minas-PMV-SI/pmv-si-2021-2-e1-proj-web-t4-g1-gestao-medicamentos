let nomeMeuPerfil = document.querySelector('#nome-meu-perfil');
nomeMeuPerfil.innerHTML = userLogado.nome + ' ' + userLogado.sobrenome;

let mora = document.querySelector('#localizacao');
mora.innerHTML = userLogado.cidade + ', ' + userLogado.estado;

let listaMed = document.querySelector('.lista-medicamentos');


let scroll = document.querySelector('.scroll');


let listaMedCad = JSON.parse(localStorage.getItem('listaMedicamentos'));

let contador = listaMedCad.length;



for (var i = 0; i < contador; i++){
    let semMed = document.querySelector('.sem-med');
    semMed.style.display="none";
    let semMedDois = document.querySelector('.sem-med2');
    semMedDois.style.display="none";

    let horaRemedio = document.createElement('div');
    horaRemedio.classList.add('hora-remedio');



    let horario = document.createElement('div');
    horario.classList.add('horario');

    let hora = document.createElement('span');
    hora.classList.add('hora');

    let hr = document.createElement('hr');
    


    let tarefa = document.createElement('div');
    tarefa.classList.add('tarefa');
    tarefa.classList.add('tarefa-' + (i + 1));

    let remedio = document.createElement('span');
    remedio.classList.add('remedio');

    let span = document.createElement('span');

    let a = document.createElement('a');


    let expandir = document.createElement('img');
    expandir.classList.add('expandir');


    //Tarefa aberta//
    let br = document.createElement('br');

    let feito = document.createElement('a');
    feito.classList.add('feito');
    feito.innerHTML = 'Marcar como feito';

    let opcoes = document.createElement('a');
    opcoes.classList.add('opcoes');
    opcoes.innerHTML = '...';



    hora.innerHTML = listaMedCad[i].horarioCad + 'h';

    horario.appendChild(hora);
    horario.appendChild(hr);

    remedio.innerHTML = listaMedCad[i].nomeMedCad;


    expandir.src = 'imagens/expandir.png';

    a.appendChild(expandir);

    span.appendChild(a);

    tarefa.appendChild(remedio);
    tarefa.appendChild(span);

    horaRemedio.appendChild(horario);
    horaRemedio.appendChild(tarefa);
    scroll.appendChild(horaRemedio);


    let tarefaAberta = document.createElement('div');
    tarefaAberta.classList.add('tarefa-aberta');
    tarefaAberta.innerHTML = '<span class="remedio">' + listaMedCad[i].nomeMedCad + '</span><span><a class="retrair" ><img class="expandido" src="imagens/expandido.png" alt=""></a></span><br><a href="" class="feito">Marcar como feito</a><a href="" class="opcoes">...</a>';
    horaRemedio.appendChild(tarefaAberta);


    //Expandir e retrair os cards
    var retrair = tarefaAberta.querySelector('.expandido');

    expandir.addEventListener("click", function () {
        tarefaAberta.style.display="block";
        tarefa.style.display="none";
    })

    retrair.addEventListener("click", function () {
        tarefa.style.display="block";
        tarefaAberta.style.display="none";
    })
    
    

    let listaM = document.createElement('span');
    if (i <= 2){
        listaM.innerHTML = listaMedCad[i].nomeMedCad + ', ';
        if (i == contador-1){
            listaM.innerHTML = listaMedCad[i].nomeMedCad;
        }
    }

    if (i == 2){
        listaM.innerHTML = listaMedCad[i].nomeMedCad;
    }

    if (i == 3){
        listaM.innerHTML = '...'
    }

    if (i <= 3){
        listaMed.appendChild(listaM);
    }
    
    
}

    