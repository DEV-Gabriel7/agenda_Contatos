const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
/*
nomes: um array para armazenar os nomes inseridos.
telefones: um array para armazenar os telefones inseridos.
linhas: uma string que vai acumular o HTML das linhas que serão adicionadas à tabela.
*/
let nomes =[];
let telefones = [];
let linhas = "";

/*
Estamos adicionando um evento "submit" ao formulário.
Quando o formulário é enviado, a função especificada dentro de addEventListener é executada.
"e.preventDefault()": impede o comportamento padrão do formulário, que é atualizar a página ao ser enviado. Assim, ele apenas executa o código sem recarregar a página.
"adicionar()": chama a função adicionar, que adiciona um novo nome e telefone.
"atualizaTabela()": chama a função atualizaTabela, que vai atualizar a tabela HTML com os dados inseridos.
*/
form.addEventListener("submit", function(e) {
    e.preventDefault();
    adicionar();
    atualizaTabela();

});

/*
"nomes.includes(nome.value)": verifica se o nome digitado já existe no array nomes.
"nomes.push(nome.value)" e "telefones.push(telefone.value)" : adiciona o nome digitado ao array nomes e ao array telefones.
*/

function adicionar() {
    if(nomes.includes(nome.value)) {
        alert(`O nome ${nome.value} já foi inserido!`);
} else {
    nomes.push(nome.value);
    telefones.push(telefone.value);

    /*
    Cria uma nova linha (linha) em HTML usando as tags <tr> e <td>.
    linha += linha: atualiza a variável linhas para incluir a nova linha criada.
    */
    let linha = `<tr>`;
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${telefone.value}</td>`;
        linha += `</tr>`;
        linhas += linha;
}
}

/*
Seleciona o corpo da tabela <tbody> onde os dados serão exibidos.
corpoTabela.innerHTML = linhas: atualiza o conteúdo da tabela com o valor da variável linhas, que contém todas as linhas já adicionadas.
*/
function atualizaTabela () {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}
