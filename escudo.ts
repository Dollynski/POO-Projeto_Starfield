export class Escudo {
  constructor(
    private _potencia: number,
    private _regeneracao: number
  ) {}

  public get potencia(): number {
    return this._potencia;
  }
  
  public get regeneracao(): number {
    return this._regeneracao;
  }
}
