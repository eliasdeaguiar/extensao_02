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
                    <img class="botao-acao" src="botao-editar.png" onclick="editarOrcamento(${orcamentos[i].id})">
                    <img class="botao-acao" src="botao-apagar.png" onclick="apagarOrcamento(${orcamentos[i].id})">
                </td>\
               </tr>`;
}
tabela += '</table>';

document.querySelector('#conteudo').innerHTML = tabela


function editarOrcamento(id) {
    var orcamento = orcamentos.find(o => o.id === id);

    if (orcamento) {
        var url = 'editarOrcamento.html';

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                document.querySelector('#conteudo_paginas').innerHTML = xhr.responseText;

                document.getElementById('pacienteNome').value = orcamento.paciente;
                document.getElementById('situacao').value = orcamento.situacao;
                document.getElementById('celular').value = orcamento.celular;
                document.getElementById('whatsapp').value = orcamento.whatsapp;
                document.getElementById('dataOrcamento').value = orcamento.dataorcamento;
                document.getElementById('convenio').value = orcamento.convenio;
                document.getElementById('servico').value = orcamento.servico;
                document.getElementById('valor').value = orcamento.valor;
            } else {
                console.error('Erro ao carregar o formulário de edição.');
            }
        };

        xhr.onerror = function() {
            console.error('Erro ao carregar o formulário de edição.');
        };

        xhr.send();
    } else {
        alert('Orçamento não encontrado.');
    }
}
