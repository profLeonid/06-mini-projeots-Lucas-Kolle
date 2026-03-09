"use strict"

const calcularDesconto = function(){
    const preco = document.getElementById("preco")
    const desconto = document.getElementById("desconto")
    const resultado = document.getElementById("resultado")

    const resultadoFinal = Number(preco.value) * (Number(desconto.value) / 100)

    const economia = Number(preco.value) - Number(resultadoFinal)

    if(desconto.value <= 5){
        resultado.textContent = `O valor final é:${resultadoFinal.toFixed(2)} O total economizado foi de:${economia.toFixed(2)}`
    }

    
}