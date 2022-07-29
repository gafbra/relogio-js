function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'imagens/manha1.png'
        document.body.style.background = '#feeb6f'
    } else if (hora >=12 && hora <= 18){
        //BOA TARDE
        img.src = 'imagens/tarde1.png'
        document.body.style.background = '#aed1ef'
    } else {
        //BOA NOITE
        img.src = 'imagens/noite1.png'
        document.body.style.background = '#5f5287'
    }
}