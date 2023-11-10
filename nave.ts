import { Arma } from "./arma";
import { Reator } from "./reator";
import { Escudo } from "./escudo";
import { Carga } from "./carga";
import { Motor } from "./motor";

export class Nave {
  constructor(
    private _nome: string,
    private _arma: Arma,
    private _reator: Reator,
    private _combustivel: number,
    private _casco: string,
    private _escudo: Escudo,
    private _carga: Carga,
    private _tripulacao: string,
    private _motor: Motor,
    private _massa: number,
  ) {}

  public get nome(): string {
    return this._nome;
  }

  public get arma(): Arma {
    return this._arma;
  }

  public get reator(): Reator {
    return this._reator;
  }

  public get combustivel(): number {
    return this._combustivel;
  }

  public get casco(): string {
    return this._casco;
  }

  public get escudo(): Escudo {
    return this._escudo;
  }

  public get carga(): Carga {
    return this._carga;
  }

  public get tripulacao(): string {
    return this._tripulacao;
  }

  public get motor(): Motor {
    return this._motor;
  }

  public get massa(): number {
    return this._massa;
  }
}
