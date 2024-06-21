// CONTEUDO ORÇAMENTOS

var botoesIrPaginaOrcamento = document.querySelectorAll('.botao_orcamento')

botoesIrPaginaOrcamento.forEach(function(botao){
    botao.addEventListener('click', (event)=>{
        carregarConteudoOrcamentos();
    })
})

// CONTEUDO PACIENTES
var botoesIrPaginaPciente = document.querySelectorAll('.botao_paciente')

botoesIrPaginaPciente.forEach(function(botao){
    botao.addEventListener('click',()=>{
        carregarConteudoPacientes();
    })
})
