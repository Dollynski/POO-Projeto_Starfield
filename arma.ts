

export class Arma {
constructor(
    private _nome: string,
    private _tipo: string,
    private _dano: number,
    private _alcance: number,
    private _cadencia: number,
    ) {}

    public get nome (): string {
        return this._nome;
    } 

    public get tipo (): string {
        return this._tipo;
    }

    public get dano (): number {
        return this._dano;
    }

    public get alcance (): number {
        return this._alcance;
    }

    public get cadencia (): number {
        return this._cadencia;
    }

}