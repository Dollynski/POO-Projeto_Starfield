import { Categoria } from "./categoria";

export class Escudo {
  constructor(
    private _categoria: Categoria,
    private _potencia: number,
    private _regeneracao: number
  ) {}

  public get categoria(): Categoria {
    return this._categoria;
  }
  public get potencia(): number {
    return this._potencia;
  }
  public get regeneracao(): number {
    return this._regeneracao;
  }
}
