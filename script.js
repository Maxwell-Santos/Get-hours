
function carregar(){

    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var tit = document.getElementById('header')
    var data = new Date()//as variáveis so funcionam se esse também for criada
    var hora = data.getHours() //hora atual do seu computador
    var min = data.getMinutes() //pega os minutos atuias do seu computador

    
    //se as horas do seu computador for maior ou igual à 5h, e menor que que 12h, vai fazer este comando falando bom dia
    if(hora >= 5 && hora < 12){
        //bom dia
        img.src = "img/manha.png"

        msg.innerHTML = `Já são ${hora}:${min} Ainda é cedo, tome um café da manhã e relaxe por agora... hoje o dia vai ser longo.`
        tit.innerHTML = 'BOM DIA'
        document.body.style.background = "rgb(163, 153, 144, .6)"


    }else if(hora >= 12 && hora < 18){//se for maior ou igual à 12h, e menor que que 18h, vai fazer este comando falando boa tarde
        //boa tarde
        img.src = "img/tarde.png"

        msg.innerHTML = `Já são ${hora}:${min} Dia duro né... eu imagino. Já vai anoitecer e você logo voltará pro conforto da sua casa. 
        Tudo ficará bem, sempre fica.`
        tit.innerHTML = 'BOA TARDE'
        document.body.style.background = "rgb(242, 123, 29, .8)"

    }else if(hora >= 18 && hora < 24){ //se for maior ou igual à 18h, e menor que que 24h, vai fazer este comando falando boa noite
        //boa noite
        img.src = "img/noite.png"

        msg.innerHTML = `Já são ${hora}:${min} Quem diria, hein? Mais um dia se passou e você está aí mais uma vez. <br> Está escurecendo, 
        você deu seu melhor hoje para ser um bom dia, estou orgulhoso de você.`
        tit.innerHTML = 'BOA NOITE'
        document.body.style.background = "rgba(55, 41, 66)"

    }else{ //se não for nenhuma das opções acima, logo é madrugada, e aqui está (implicitamente é das 1h até 5h)
        //boa madrugada
        img.src =  "img/madrugada.png"

        msg.innerHTML = `Já são ${hora}:${min} Sem sono? Tudo bem... É madrugada, você deveria descansar. Teve um dia cheio ontem e amanhâ é outro dia.`
        tit.innerHTML = 'Boa madrugada?'
        document.body.style.background = "rgb(78, 51, 32)"
    }

}

