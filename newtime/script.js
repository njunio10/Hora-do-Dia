function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) { 
        // BOM DIA
        img.src = 'manha.jpg';
        document.body.style.background = '#FBE590'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'tarde.jpg';
        document.body.style.background = '#DE4F00'
    } else {
        // BOA NOITE
        img.src = 'noite.jpg';
        document.body.style.background = '#0B1717'
    }
}
