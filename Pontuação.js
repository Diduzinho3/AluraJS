// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, 
// mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuação = Math.floor(Math.random() * 200);
if (pontuação >= 100) {
    alert("Parabéns, você venceu, seu número foi " + pontuação + "!");
} else {
    alert("Tente novamente para ganhar, seu número foi " + pontuação + ".");
}
