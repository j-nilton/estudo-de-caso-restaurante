import { Prato } from "./prato";

export class Pedido {
    cliente: string;
    id: string;
    status: string;
    pratos: Prato[];

    constructor(cliente: string, id: string) {
        this.cliente = cliente;
        this.id = id;
        this.status = "aberto";
        this.pratos = [];
    }

    calcularTotal(): number {
        let total: number = 0;
        for (let i = 0; i < this.pratos.length; i++) {
            total = total + this.pratos[i].preco;
        }
        return total;
    }

    adicionarPrato(prato: Prato): boolean {
        if (prato.disponibilidade) {
            this.pratos.push(prato);
            return true;
        } else {
            return false;
        }
    }
}