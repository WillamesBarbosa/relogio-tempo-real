function setHora(){
    const date = new Date();
    const hora = document.querySelector('.hora');
    hora.innerHTML = `${date.toLocaleTimeString('pt-BR',)}`;
}

function setData(){
    const date = new Date();
    const data = document.querySelector('.data');
    let opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    data.innerHTML = `${date.toLocaleDateString('pt-BR', opcoes)}`;

}
function iniciarTempo(){
const tempo = setInterval(function(){
    setData()
    setHora()
},500)
}
iniciarTempo();