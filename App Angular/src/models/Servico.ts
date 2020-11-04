import { Clinica } from './Clinica';

export class Servico {
    constructor(
        public _id: string,
        public nome: string,
        public descricao: string,
        public imagem: string,
        public clinicas: Clinica[],
    ) { }
}