var pacientes = [
    {
        id: 0,
        paciente: 'Paulo Machado',
        celular: '(34) 99246-9033',
        whatsapp: '(34) 99246-9033',
        datanascimento: '02/02/1987',
        convenio: 'UNIMED'
    },
    {
        id: 1,
        paciente: 'Mariana Gomes',
        celular: '(34) 99246-9033',
        whatsapp: '(34) 99246-9033',
        datanascimento: '12/02/1990',
        convenio: 'UNIMED'
    },
    {
        id: 2,
        paciente: 'juliane Machado',
        celular: '(34) 99246-9033',
        whatsapp: '(34) 99246-9033',
        datanascimento: '07/01/2001',
        convenio: 'UNIMED'
    },
    {
        id: 3,
        paciente: 'Elias Aguiar',
        celular: '(34) 99246-9033',
        whatsapp: '(34) 99246-9033',
        datanascimento: '27/11/1994',
        convenio: 'UNIMED'
    },
    {
        id: 4,
        paciente: 'Gabriel Silva',
        celular: '(34) 99246-9033',
        whatsapp: '(34) 99246-9033',
        datanascimento: '19/04/1990',
        convenio: 'UNIMED'
    }
]
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
                    <img class="botao-acao" src="botao-editar.png">
                    <img class="botao-acao" src="botao-apagar.png">
                </td>\
              </tr>`;
}
tabela += '</table>';

document.querySelector('#conteudo').innerHTML = tabela;
