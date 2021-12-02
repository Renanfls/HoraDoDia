function carregar() {
    var saldacao = window.document.getElementById('saldacao')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 5 && hora <= 12) {
        img.src = './img/manha.png'
        document.body.style.background = '#fdc980'
        saldacao.innerHTML = `Bom Dia!`
        msg.innerHTML = `Agora são ${hora} horas.`
    } else if (hora >= 12 && hora <= 18) {
        img.src = './img/tarde.png'
        document.body.style.background = '#f8912c'
        saldacao.innerHTML = `Boa Tarde!`
        msg.innerHTML = `Agora são ${hora} horas.`
    } else if (hora >= 19 && hora <= 24) {
        img.src = './img/noite.png'
        document.body.style.background = '#222834'
        saldacao.innerHTML = `Boa Noite!`
        msg.innerHTML = `Agora são ${hora} horas.`
    } else if (hora >= 0 && hora <= 4) {
        img.src = './img/madrugada.png'
        document.body.style.background = '#0e1723'
        saldacao.innerHTML = `Boa Madrugada!`
        msg.innerHTML = `Agora são ${hora} horas.`
    }  
}   
