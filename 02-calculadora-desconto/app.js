"use strict"

//função para remover as classes criadas no css
const removerClasses = function(){
    const exibirResultado = document.getElementById("exibirResultado")

    exibirResultado.classList.remove("cinco")
    exibirResultado.classList.remove("sete")
    exibirResultado.classList.remove("dez")
}

//função para calcular e exibir o valor do desconto
const calcularDesconto = function(){
    const precoInicial = document.getElementById("precoInicial")
    const valordesconto = document.getElementById("valorDesconto")
    const exibirResultado = document.getElementById("exibirResultado")

    //calcular o valor do desconto
    let desconto = Number(precoInicial.value) * (Number(valordesconto.value) / 100)

    //calcular o preço final
    let precoFinal = Number(precoInicial.value - Number(desconto))

    //calcular o valor economizado
    let valorEconomizado = Number(precoInicial.value) - Number(precoFinal)

    removerClasses()
    //condicional para exibir os resultados
    if(valordesconto.value < 5){
        exibirResultado.textContent = `Preço Final: R$${precoFinal.toFixed(2)}.\nValor do Desconto: R$${valorEconomizado.toFixed(2)}.`
        exibirResultado.classList.add("cinco")

    }else if(valordesconto.value <= 10){
        exibirResultado.textContent = `Preço Final: R$${precoFinal.toFixed(2)}.\nValor do Desconto: R$${valorEconomizado.toFixed(2)}.`
        exibirResultado.classList.add("sete")

    }else if(valordesconto.value > 10){
        exibirResultado.textContent = `Preço Final: R$${precoFinal.toFixed(2)}.\nValor do Desconto: R$${valorEconomizado.toFixed(2)}.`
        exibirResultado.classList.add("dez")

    }else
        exibirResultado.textContent = `Não foi Possível Realizar o Calculo`

}