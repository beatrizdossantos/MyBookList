import { Livro } from "./livro.model";

export class Lista
{
    constructor(
        public titulo: String,
        public livros: Livro[],
    ){

    }
}