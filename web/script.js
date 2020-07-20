document.addEventListener('DOMContentLoaded', () => {

    const tela = document.querySelector('#tela')

    const contexto = tela.getContext('2d')

    tela.width = 700
    tela.height = 500

    contexto.lineWidth = 2
    contexto.strokeStyle = "black"

    const desenharLinha = (linha) => {

        contexto.beginPath()
        contexto.moveTo(linha.posAnterior.x, linha.posAnterior.y)
        contexto.lineTo(linha.pos.x, linha.pos.y)
        contexto.stroke()
    }
    
    const pincel = {
        ativo: false,
        movendo: false,
        pos: { x: 0, y: 0},
        posAnterior: null
    }

    tela.onmousedown = () => {
        pincel.ativo = true
    }

    tela.onmouseup = () => {
        pincel.ativo = false
    }

    tela.onmousemove = (evento) => {
       pincel.pos.x = evento.clientX
       pincel.pos.y = evento.clientY
       pincel.movendo = true
    }

    const ciclo = () => {
        if(pincel.ativo && pincel.movendo && pincel.posAnterior){
         desenharLinha({pos: pincel.pos, posAnterior: pincel.posAnterior})   
         pincel.movendo = false
        }
        pincel.posAnterior = { x: pincel.pos.x, y: pincel.pos.y }
    
        setTimeout(ciclo, 1)
    
    }

    ciclo()

})












