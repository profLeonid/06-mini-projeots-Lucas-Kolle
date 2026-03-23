"use strict"
//declarando variávreis correspondentes ao html
const inserirNota1 = document.getElementById("inserir-nota1")
const inserirNota2 = document.getElementById("inserir-nota2")
const inserirNota3 = document.getElementById("inserir-nota3")
const exibirResultado = document.getElementById("exibir-resultado")
const botaoCalcular = document.getElementById("botao-calcular")

//função para mostrar os valores
const mostrarValores = function(){

    let mediaAluno
    mediaAluno = calcularMedia(inserirNota1.value, inserirNota2.value, inserirNota3.value)

    let situacaoAluno
    situacaoAluno = definirSituacao(mediaAluno)

    if(situacaoAluno == "APROVADO"){
        exibirResultado.classList.remove("aprovado", "reprovado", "recuperacao")
        exibirResultado.classList.add("aprovado")
        return exibirResultado.textContent = (`Média do Aluno(a):${mediaAluno}\nSituação do Aluno(a):${situacaoAluno}`)

    }else if(situacaoAluno == "REPROVADO"){
        exibirResultado.classList.remove("aprovado", "reprovado", "recuperacao")
        exibirResultado.classList.add("reprovado")
        return exibirResultado.textContent = (`Média do Aluno(a):${mediaAluno}\nSituação do Aluno(a):${situacaoAluno}`)
        
    }else if(situacaoAluno == "RECUPERAÇÃO"){
        exibirResultado.classList.remove("aprovado", "reprovado", "recuperacao")
        exibirResultado.classList.add("recuperacao")
        exibirResultado.textContent = `Média do Aluno(a): ${mediaAluno}\nSituação do Aluno(a): ${situacaoAluno}`
        return true
        
    }else{
        return false
    }

}

//função para calcular a média
const calcularMedia = function(valor1,valor2,valor3){
    //criando váriavéis necessárias
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let mediaFinal

    //realizando o calculo da média
    mediaFinal = (nota1 + nota2 + nota3) / 3

    return mediaFinal
}

//função para definir a situação do aluno
const definirSituacao = function(media){
    //criando váriavéis necessárias
    let mediaAluno = Number(media)
    let situacaoAluno

    //condicionais para definir situação
    if(mediaAluno >= 7)
        return situacaoAluno = "APROVADO"
    else if(mediaAluno <5)
        return situacaoAluno = "REPROVADO"
    else if(mediaAluno >= 5 || mediaAluno < 7)
        return situacaoAluno = "RECUPERAÇÃO"
    else{
        return false
    }
}

botaoCalcular.addEventListener("click", mostrarValores)