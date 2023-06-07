function verificar() {

    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number ( fano.value) > ano ) {
        window.alert('ERRO')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','assets/bebe-m.png.jpg')
            }
            else if (idade < 21){
                img.setAttribute('src', 'assets/jovem-m.png.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src','assets/adulto-m.png.jpg')

            }
            else {
                img.setAttribute('src','assets/idoso-m.png.jpg')
            }
        }
        else if (fsex[1].checked)  {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','assets/bebe-f.png.jpg')
            }
            else if (idade < 21){
                img.setAttribute('src', 'assets/jovem-f.png.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src','assets/adulto-f.png.jpg')

            }
            else {
                img.setAttribute('src','assets/idoso-f.png.jpg')
            }
        }
        res.innerHTML= `Detctamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}