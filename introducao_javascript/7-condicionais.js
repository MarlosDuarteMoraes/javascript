console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`, `Curitiba`
);
const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("comprador maior de idade");
//     listaDeDestinos.splice(1, 1); // removendo São Paulo
// } else if (estaAcompanhada) {
//     console.log("comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); // removendo São Paulo
// } else {
//     console.log("Não é maior de idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa Viagem !!");
    listaDeDestinos.splice(1, 1); // removendo São Paulo
} else {
    console.log("Não é maior de idade e não posso vender");
}
console.log("Embarque: \n\n");

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!")
}else{
    console.log("Você não pode embarcar!")
}

console.log(listaDeDestinos);
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);