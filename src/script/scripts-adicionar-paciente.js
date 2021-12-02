let nome = document.querySelector("#nome")

let sobrenome = document.querySelector("#sobrenome")

let idade = document.querySelector("#idade")

let valideNome = false

let valideSobrenome = false

let valideIdade = false

let msgError = document.querySelector("#msgError")

let msgSuccess = document.querySelector("#msgSuccess")

nome.addEventListener("keyup",()=> {
  if (nome.value.length <= 2) {
    nome.setAttribute("style", "background-color: #ffbbbb")
    valideNome = false
  } else {
    nome.setAttribute("style", "background-color: #bbffbe")
    valideNome = true
  }
})

sobrenome.addEventListener("keyup",()=> {
  if (sobrenome.value.length <= 2) {
    sobrenome.setAttribute("style", "background-color: #ffbbbb")
    valideSobrenome = false
  } else {
    sobrenome.setAttribute("style", "background-color: #bbffbe")
    valideSobrenome = true
  }
})

idade.addEventListener("keyup",()=> {
  if (idade.value < 0 ) {
    idade.setAttribute("style", "background-color: #ffbbbb")
    valideIdade = false
  } else {
    idade.setAttribute("style", "background-color: #bbffbe")
    valideIdade = true
  }
})


function cadastrar() {
  if (valideNome && valideSobrenome && valideIdade) {
        
  let listaPacientes = JSON.parse(localStorage.getItem("listaPacientes") || "[]")
    
    listaPacientes.push(
    {
      nomeCad: nome.value,
      sobrenomeCad: sobrenome.value,
      idadeCad: idade.value
    }
    )
    
    localStorage.setItem("listaPacientes", JSON.stringify(listaPacientes))
    
    msgSuccess.setAttribute("style", "display: block")
    msgSuccess.innerHTML = "<strong>Cadastrando paciente...</strong>"
     msgError.setAttribute("style", "display: none")
    msgError.innerHTML = " "
    
    setTimeout(()=>{
     window.location.href = "pacientes.html"
    },3000)
    
  } else {
    msgError.setAttribute("style", "display: block")
    msgError.innerHTML = "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>"
    msgSuccess.setAttribute("style", "display: none")
    msgSuccess.innerHTML = " "
  }
}

