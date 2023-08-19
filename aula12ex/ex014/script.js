function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')   
    var data =  new Date()
    var hora = data.getHours()
    //var hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = './images/morning.jpg'
        document.body.style.background = '#F5DCC8'
    } else if (hora >= 12 && hora < 18) {
        img.src = './images/afternoon.jpg'
        document.body.style.background = '#FE905D'
    } else {
        img.src = './images/night.jpg'
        document.body.style.background = '#101f2c'
    }
}
