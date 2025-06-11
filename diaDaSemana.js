//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

diaDaSemana = prompt("Qual é o dia da semana?");

if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
    alert("Bom fim de semana!");
} else if (diaDaSemana == "Segunda" || diaDaSemana == "Terça" || diaDaSemana == "Quarta" || diaDaSemana == "Quinta" || diaDaSemana == "Sexta") {
    alert("Boa semana!");
} else {
    alert("Este dia não é válido. Por favor, insira um dia da semana correto.");
}
