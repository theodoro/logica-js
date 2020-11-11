function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')

    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Àgora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        img.src = "img/001.png"
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        img.src = "img/002.png"
        document.body.style.background = '#b9846f'
    }else{
        img.src = "img/003.png"
        document.body.style.background = '#515154'
    }
    
}