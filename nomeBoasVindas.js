//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
//A mensagem de boas vindas deve dar "boas vindAs" caso o nome termine em A.

let nome = prompt("Por favor, insira seu nome:");
if (nome) {
    if (nome.endsWith('a') || nome.endsWith('A')) {
        alert(`Boas vindas, ${nome}!`);
    } else {
        alert(`Bem-vindo, ${nome}!`);
    }
}
