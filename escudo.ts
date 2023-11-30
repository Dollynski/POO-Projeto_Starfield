export class Escudo {
  constructor(
    private _nome: string,
    private _potencia: number,
    private _regeneracao: number
  ) {}

  public get nome(): string {
    return this._nome;
  }

  public get potencia(): number {
    return this._potencia;
  }
  
  public get regeneracao(): number {
    return this._regeneracao;
  }
}
