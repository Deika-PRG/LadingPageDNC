var botao1,botao2,leonardo,samantha,bruna


leonardo = window.document.getElementById("leo")
samantha = window.document.getElementById("sam")
bruna =window.document.getElementById("bru")

botao1 = window.document.getElementById("setadireita")
botao2 = window.document.getElementById("setaesquerda")

function next(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    botao1.style = "display:none"
    botao2.style ="display: flex; margin-top: 55PX; margin-left: 40px"
}

function previus(){
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    botao1.style = "display:flex"
    botao2.style ="display: none"
}
