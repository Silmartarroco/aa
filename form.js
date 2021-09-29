let readlineSync = require('readline-sync');

var listaDePecas = [];
var pesoDePecas = [];
var capacidade = 3;

for (let index = 0; index < capacidade; index++) {
    listaDePecas[index] = readlineSync.question("Digite o nome da peça "(+index+1)+": ");
    pesoDePecas[index] = readlineSync.question("Digite o peso da peça "(+index+1)+": ");
}

for (let index = 0; index < capacidade; index++) {
    console.log("A peça "+listaDePecas[index]+" tem opeso de "+pesoDePecas[index]);
   

}