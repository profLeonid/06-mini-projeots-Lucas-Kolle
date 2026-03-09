"use strict" //é importante para colocar para o javaScript ficar mai rigoroso

function removerClasses(){
    const resultado = document.getElementById("resultado")

    resultado.classList.remove("apto")
    resultado.classList.remove("nao-apto")
}

function avaliar(){
    //cria a função que recebe todo o conteúdo do objeto citado pelo id
    const tempo = document.getElementById("tempo")
    const resultado = document.getElementById("resultado")

    removerClasses()
    //criando condicional para decidir se o usuário está apto ou não
    if(tempo.value < 14){
        //adiciona na div resultado o conteúdo direcionado
        resultado.textContent = "Apto"
        resultado.classList.add("apto")
    }else{
        resultado.textContent = "Não Apto"
        resultado.classList.add("nao-apto")
    }
}

