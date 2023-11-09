import { Categoria } from "./categoria";

export class Reator {
    // potencia: number = 0;
    // //importar
    //categoria: Categoria
    // //importar  
    // distancia: number = 0;
    constructor (
        private potencia: number,
        private categoria: Categoria = new Categoria(""),
        private distancia: number
    ){}
}