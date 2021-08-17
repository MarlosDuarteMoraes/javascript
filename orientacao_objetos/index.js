import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaDeAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardo", 5000, 32165498700);
gerente.cadastrarSenha("123456789");

const cliente = new Cliente("Lais", 45678912300, "123654")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456789");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123654");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);