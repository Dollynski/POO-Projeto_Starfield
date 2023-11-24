import { Arma } from "./arma";
import { Escudo } from "./escudo";
import Prompt from 'prompt-sync';

const teclado = Prompt();

export class Nave {
  setEscudo(nomeEscudo: Escudo) {
    throw new Error("Method not implemented.");
  }
  setNome(nomeNave: string) {
   return this._nome = nomeNave;
  }
  setArma(nomeArma: Arma) {
    this._arma = nomeArma;
    return this._arma
  }
  constructor(
    public _nome: string,
    private _arma: Arma,
    private _combustivel: number,
    private _escudo: Escudo,
  ) {}

  public set nome(value: string) {
    this._nome = teclado('Digite o nome da nave: ');
  }

  public get nome(): string {
    return this._nome;
  }

  public get arma(): Arma {
    return this._arma;
  }

  public get combustivel(): number {
    return this._combustivel;
  }

  public get escudo(): Escudo {
    return this._escudo;
  }
}
