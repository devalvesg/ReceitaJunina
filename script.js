const buttonAdd = document.querySelector("#mais")
const buttonRemove = document.querySelector("#menos")
const quantidade = document.querySelector(".qtdPorcoes")
const receita = document.querySelectorAll(".receitas")
const erro = document.querySelector(".erro")
var qtdPorcoes = 0

buttonAdd.addEventListener('click', ()=>{
    qtdPorcoes++
    quantidade.textContent = qtdPorcoes
    for(ingrediente of receita){
        ingrediente.innerText = qtdPorcoes
    }
    qtdPorcoes > 0 ? erro.style.opacity = '0' : erro.style.opacity = '1'
})
buttonRemove.addEventListener('click', ()=>{
    quantidade.textContent = qtdPorcoes > 1 ? qtdPorcoes-=1 : erro.style.opacity = '1'
    for(ingrediente of receita){
        ingrediente.innerText = qtdPorcoes
    }
})