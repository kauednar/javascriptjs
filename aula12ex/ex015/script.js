function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
               // criança
               img.setAttribute('src', './images/bebe-m.jpg')
            } else if (idade < 22) {
                // jovem
                img.setAttribute('src', './images/jovem-m.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', './images/adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', './images/idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', './images/bebe-f.jpg')
             } else if (idade < 22) {
                 // jovem
                 img.setAttribute('src', './images/jovem-f.jpg')
             } else if (idade < 50) {
                 // adulto
                 img.setAttribute('src', './images/adulto-f.jpg')
             } else {
                 //idoso
                 img.setAttribute('src', './images/idoso-f.jpg')
             }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}