var orcamentos = [
    {
        orcamento: 0,
        paciente: 'Paulo Machado',
        situacao: 'Em espera',
        celular: '(34) 99246-9033',
        whatsapp: '(34) 99246-9033',
        dataorcamento: '02/02/2024',
        convenio: 'UNIMED'
    },
    {
        orcamento: 1,
        paciente: 'Mariana Gomes',
        situacao: 'Em espera',
        celular: '(34) 99246-9033',
        whatsapp: '(34) 99246-9033',
        dataorcamento: '12/02/2024',
        convenio: 'UNIMED'
    },
    {
        orcamento: 2,
        paciente: 'juliane Machado',
        situacao: 'Em espera',
        celular: '(34) 99246-9033',
        whatsapp: '(34) 99246-9033',
        dataorcamento: '07/01/2024',
        convenio: 'UNIMED'
    },
    {
        orcamento: 3,
        paciente: 'Elias Aguiar',
        situacao: 'Em espera',
        celular: '(34) 99246-9033',
        whatsapp: '(34) 99246-9033',
        dataorcamento: '27/11/2023',
        convenio: 'UNIMED'
    },
    {
        orcamento: 4,
        paciente: 'Gabriel Silva',
        situacao: 'Em espera',
        celular: '(34) 99246-9033',
        whatsapp: '(34) 99246-9033',
        dataorcamento: '19/04/2024',
        convenio: 'UNIMED'
    }
]
var tabela = '<table class="tabela"><tr><th>Orçamento</th><th>Paciente</th><th>Situação</th><th>Celular</th><th>WhatsApp</th><th>Data do Orçamento</th><th>Convênio</th><th>Ações</th></tr>';
for (let i = 0; i < orcamentos.length; i++) {
    tabela += `<tr>\
                <td>${orcamentos[i].orcamento}</td>\
                <td>${orcamentos[i].paciente}</td>\
                <td>${orcamentos[i].situacao}</td>\
                <td>${orcamentos[i].celular}</td>\
                <td>${orcamentos[i].whatsapp}</td>\
                <td>${orcamentos[i].dataorcamento}</td>\
                <td>${orcamentos[i].convenio}</td>\
                <td>
                    <img class="botao-acao" src="botao-editar.png">
                    <img class="botao-acao" src="botao-apagar.png">
                </td>\
               </tr>`;
}
tabela += '</table>';

document.querySelector('#conteudo').innerHTML = tabela;
