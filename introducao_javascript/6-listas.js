console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`, `Curitiba`
);
listaDeDestinos.push(`Curitibanos`); // adicionando um item
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // deletar elemento da posicao 1 somente 1 elemento (São paulo)
console.log("Destinos possíveis:");
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);