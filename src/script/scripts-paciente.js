const date = new Date();

const renderCalendar = () => {
  date.setDate(1);
  const monthDays = document.querySelector(".dias");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  
  var CalendarData = function(lang) {
    var l = lang || 'default'
  
    return  {
      meses: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function(n) {
        return new Date(2021, n, 1).toLocaleString(l, { month: 'long' });
      }),
      dias: [24, 25, 26, 27, 28, 29, 30].map(function(n) {
        return new Date(2021, 9, n).toLocaleString(l, {weekday: 'short' });
      })
    };
  }
  const lang = 'pt-br'
  const months=CalendarData(lang).meses;
  document.querySelector(".mes h1").innerHTML = months[date.getMonth()];

  
  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="data-anterior">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="hoje">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="proxima-data">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();



//Data hoje Home
var data = new Date();

var diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

var nomeDia = diasSemana[data.getDay()];

var dataHoje = document.querySelector(".dia-hoje");

dataHoje.textContent = nomeDia + ", " + data.getDate();




// Expandir/encolher tarefas
function expandir1(){
  var tarefaFechada = document.getElementById("tarefa-1");
  var tarefaAberta = document.getElementById("tarefa-aberta-1");

  if(tarefaFechada.style.display === "none"){
    tarefaFechada.style.display="block";
    tarefaAberta.style.display="none";
  }
  else{
    tarefaAberta.style.display="block";
    tarefaFechada.style.display="none";
  }
}

function expandir2(){
  var tarefaFechada = document.getElementById("tarefa-2");
  var tarefaAberta = document.getElementById("tarefa-aberta-2");

  if(tarefaFechada.style.display === "none"){
    tarefaFechada.style.display="block";
    tarefaAberta.style.display="none";
  }
  else{
    tarefaAberta.style.display="block";
    tarefaFechada.style.display="none";
  }
}

function expandir3(){
  var tarefaFechada = document.getElementById("tarefa-3");
  var tarefaAberta = document.getElementById("tarefa-aberta-3");

  if(tarefaFechada.style.display === "none"){
    tarefaFechada.style.display="block";
    tarefaAberta.style.display="none";
  }
  else{
    tarefaAberta.style.display="block";
    tarefaFechada.style.display="none";
  }
}