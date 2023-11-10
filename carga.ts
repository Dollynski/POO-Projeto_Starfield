export class Carga {
    // tipo: string = '';
    // limite: number = 0;
    // protecao: number = 0;
  
    constructor(
      private _tipo: string,
      private _limite: number,
      private _protecao: number
    ) {}
  
    public get tipo(): string {
      return this._tipo;
    }
    public get limite(): number {
      return this._limite;
    }
    public get protecao(): number {
      return this._protecao;
    }
  }
  