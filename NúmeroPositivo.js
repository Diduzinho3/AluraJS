// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

númeroDoUsuário = prompt("Digite um número:");

if (númeroDoUsuário > 0) {
    alert("O seu número é positivo");
} else if (númeroDoUsuário < 0) {
    alert("O seu número é negativo");
} else {
    alert("O seu número é zero");
}
