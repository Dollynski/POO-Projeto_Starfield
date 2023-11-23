import { Arma } from "./arma";
import { Nave } from "./nave";
import { Util } from "./util";

export class naveplayer extends Nave {
    constructor(nome: string) {
        super("Aeronave" + nome,
              _arma, 
              _combustivel, 
              _escudo);

    }
}