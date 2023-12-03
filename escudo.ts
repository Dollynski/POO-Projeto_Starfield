export class Escudo {
  constructor(
    private _nome: string,
    public _potencia: number,
  ) { }

  public get nome(): string {
    return this._nome;
  }

  public get potencia(): number {
    return this._potencia;
  }

}
