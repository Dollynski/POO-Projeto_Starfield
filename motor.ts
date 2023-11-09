import { Categoria } from "./categoria";

export class Motor {
    constructor(
    private _potencia: number,
    private _mobilidade: number,
    private _velocidade: number,
    private _categoria: Categoria,
    ) {}

    public get potencia(): number {
        return this._potencia;
    }
    public get mobilidade(): number {
        return this._mobilidade;
    }
    public get velocidade(): number {
        return this._velocidade;
    }
    public get categoria(): Categoria {
        return this._categoria;
    }
}