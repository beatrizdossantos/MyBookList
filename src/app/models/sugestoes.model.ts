import { Sugestao } from "./sugestao.model";

export class Sugestoes
{
    constructor(
        public titulo: String,
        public sugestoes: Sugestao[],
    ){

    }
}