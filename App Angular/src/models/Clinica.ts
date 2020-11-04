import { Medico } from './Medico';

export class Clinica {
    constructor(
        public _id: string,
        public nome: string,
        public url_imagem: string,
        public url: string,
        public whatsapp: number,
        public descricao: string,
        public local_resumido: string,
        public logradouro: string,
        public num_endereco: string,
        public complemento: string,
        public cep: string,
        public cidade: string,
        public bairro: string,
        public estado: string,
        public pais: string,
        public medicos: Medico[],
    ) { }
}