/*
Ser autenticável significa ter o metodo autenticar
ducky type
*/
export class SistemaAutenticacao {
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenciavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenciavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}