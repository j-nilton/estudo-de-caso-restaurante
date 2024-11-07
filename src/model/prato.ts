export class Prato {
    nome: string;
    preco: number;
    disponibilidade: boolean;

    constructor(nome: string, preco: number, disponibilidade: boolean) {
        this.nome = nome;
        this.preco = preco;
        this.disponibilidade = disponibilidade;
    }
}

// let newPrato: Prato;
// newPrato = new Prato("bolo", 2, true);