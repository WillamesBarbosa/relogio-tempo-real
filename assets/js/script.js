function pegarInfo(){
    let tempo = setInterval(function(){
    escreverTempo(horas(), minutos(), segundos())
    escreverDiaSemana(diaSemana())
    escreverData(formatarDia(), mes(), ano())
    },500)
}

function horas(){
    const informações = new Date();
    const hora = informações.getHours();
    let horas;
    
    if (hora < 10){
        horas = `0${hora}`
    }else{
        horas = hora;
    }
    return horas;

}

function minutos(){
    const informações = new Date();
    const minuto = informações.getMinutes();
    let minutos;
    
    if (minuto < 10){
        minutos = `0${minuto}`
    }else{
        minutos = minuto;
    }
    return minutos;
}

function segundos(){
    const informações = new Date();
    const segundo = informações.getSeconds();
    let segundos;
    
    if (segundo < 10){
        segundos = `0${segundo}`
    }else{
        segundos = segundo;
    }
    return segundos;

}

function diaSemana(){
    const informações = new Date();
    const diaSem = informações.getDay();
    let diaSemana;

    switch(diaSem){
        case 0:
            diaSemana = 'Domingo'
            return diaSemana;
        case 1:
            diaSemana = 'Segunda-feira'
            return diaSemana;
        case 2:
            diaSemana = 'Terça-feira'
            return diaSemana;
        case 3:
            diaSemana = 'Quarta-feira'
            return diaSemana;
        case 4:
            diaSemana = 'Quinta-feira'
            return diaSemana;
        case 5:
            diaSemana = 'Sexta-feiira'
            return diaSemana;
        case 6:
            diaSemana = 'Sábado'
            return diaSemana;
        default:
            diaSemana = 'Error'
            return diaSemana
    }

}

function mes(){
    const informações = new Date();
    const mes = informações.getMonth()
    let mesAno;
    switch(mes){
        case 0:
            mesAno = 'Janeiro';
            return mesAno;
        case 1:
            mesAno = 'Fevereiro';
            return mesAno;
        case 2:
            mesAno = 'Março';
            return mesAno;
        case 3:
            mesAno = 'Abril';
            return mesAno;
        case 4:
            mesAno = 'Maio';
            return mesAno;
        case 5:
            mesAno = 'Junho';
            return mesAno;
        case 6:
            mesAno = 'Julho'
            return mesAno;
        case 7:
            mesAno = 'Agosto';
            return mesAno;
        case 8:
            mesAno = 'Setembro';
            return mesAno;
        case 9:
            mesAno = 'Outubro';
            return mesAno;
        case 10:
            mesAno = 'Novembro';
            return mesAno;
        case 11:
            mesAno = 'Dezembro';
            return mesAno;
        default:
            mesAno = 'ErroR'
            return mesAno;
        
    
    }
}

function formatarDia(){
    const informações = new Date();
    const dia = informações.getDate()
    let diaMes;
    if (dia < 10){
        diaMes = `0${dia}`
    }else{
        diaMes = dia;
    }
    return diaMes;
}

function ano(){
    const informações = new Date();
    const ano = informações.getFullYear()
    return ano

}

function escreverData(dia, mes, ano){
    const data = document.querySelector('.data')

    data.innerHTML = `${dia} de ${mes} de ${ano}`
}

function escreverDiaSemana(diaSemana){
    const escreverSemana = document.querySelector('.diaSemana');
    escreverSemana.innerHTML = `${diaSemana}, `
}

function escreverTempo(horas, minutos, segundos){
    const escreverOTempo = document.querySelector('.hora');
    escreverOTempo.innerHTML = (`<p>${horas}</ p> <p>${minutos}</ p> <p>${segundos}</ p>`)
}

pegarInfo()