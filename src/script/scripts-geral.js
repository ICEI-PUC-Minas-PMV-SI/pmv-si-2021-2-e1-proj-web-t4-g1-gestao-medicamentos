if (localStorage.getItem('token') == null){
    window.location.href='login2.html'
}

function sair(){
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
}

let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let nomeUsuario = document.querySelector('#nome-usuario');
nomeUsuario.innerHTML = userLogado.nome;

fotoPerfil = document.querySelector('#foto-perfil')
fotoMeuPerfil = document.querySelector('#foto-meu-perfil')

if (userLogado.genero == 'feminino'){
    fotoPerfil.setAttribute('src', 'imagens/perfil-feminino.jpg')
    fotoMeuPerfil.setAttribute('src', 'imagens/perfil-feminino.jpg')
}
else{
    fotoPerfil.setAttribute('src', 'imagens/perfil-masculino.png')
    fotoMeuPerfil.setAttribute('src', 'imagens/perfil-masculino.png')
}