var tabela = '<table class="tabela">\
                <tr>\
                    <th>id</th>\
                    <th>Nome</th>\
                    <th>Celular</th>\
                    <th>WhatsApp</th>\
                    <th>Data de Nascimento</th>\
                    <th>Convênio</th>\
                    <th>Ações</th>\
                </tr>';
for (let i = 0; i < pacientes.length; i++) {
    tabela += `<tr>\
                <td>${pacientes[i].id}</td>\
                <td>${pacientes[i].paciente}</td>\
                <td>${pacientes[i].celular}</td>\
                <td>${pacientes[i].whatsapp}</td>\
                <td>${pacientes[i].datanascimento}</td>\
                <td>${pacientes[i].convenio}</td>\
                <td>
                    <img class="botao-acao" src="botao-editar.png" onclick="editarPaciente(${pacientes[i].id})">
                    <img class="botao-acao" src="botao-apagar.png">
                </td>\
                </tr>`;
}
tabela += '</table>';

document.querySelector('#conteudo').innerHTML = tabela;





function editarPaciente(id) {
    // Encontrar o paciente pelo ID
    var paciente = pacientes.find(p => p.id === id);

    // Verificar se o paciente foi encontrado
    if (paciente) {
        // Construir a URL do formulário de pacientes com os parâmetros
        var url = 'updatePacientes.html?id=' + paciente.id +
                  '&nome=' + encodeURIComponent(paciente.paciente) +
                  '&datanascimento=' + encodeURIComponent(paciente.datanascimento) +
                  '&celular=' + encodeURIComponent(paciente.celular) +
                  '&whatsapp=' + encodeURIComponent(paciente.whatsapp) +
                  '&convenio=' + encodeURIComponent(paciente.convenio);

        // Fazer uma requisição AJAX para obter o conteúdo do formulário
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                // Sucesso na requisição
                document.querySelector('#conteudo_paginas').innerHTML = xhr.responseText;
            } else {
                // Tratar erros, se necessário
                console.error('Erro ao carregar formulário de pacientes.');
            }
        };

        xhr.onerror = function() {
            // Tratar erros de requisição
            console.error('Erro ao carregar formulário de pacientes.');
        };

        xhr.send();
    } else {
        alert('Paciente não encontrado.');
    }
}
















function adicionarPaciente() {
    var paciente = document.getElementById('nome').value;
    var dataNascimento = document.getElementById('dataNascimento').value;

    var novoPaciente = {
        id: orcamentos.length,
        paciente: paciente,
        celular: '(34) 99246-9033',  // Este é um valor de exemplo fixo
        whatsapp: '(34) 99246-9033', // Este é um valor de exemplo fixo
        datanascimento: dataNascimento,
        convenio: 'UNIMED' // Este é um valor de exemplo fixo
    };

    pacientes.push(novoPaciente);
    console.log(pacientes)
}