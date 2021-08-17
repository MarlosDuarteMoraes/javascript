console.log(`\nTrabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`, `Curitiba`
);
const idadeComprador = 25;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;

while(contador < listaDeDestinos.length){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador +=1;
}

console.log("Destino existe: ", destinoExiste)

if(podeComprar && destinoExiste){
    console.log("Boa viagem!")
}else{
    console.log("Desculpem tivemos um erro!")
}

for(let i = 0; i < listaDeDestinos.length; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }
}