export class Medico {
    constructor(
        public _id: string,
        public nome: string,
        public idade: number,
        public especializacao: string,
        public preco_consulta: number,
        public telefone: string,
        public email: string,
        public whatsapp: number,
        public foto: string,
    ) { }
}