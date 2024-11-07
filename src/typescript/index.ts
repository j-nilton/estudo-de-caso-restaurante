import { Pedido } from "../model/pedido";
import { Prato } from "../model/prato";

let p1: Prato;
p1 = new Prato("Prato feito.", 12, true);

let p2: Prato;
p2 = new Prato("Tudo de bom.", 14, true);

let pedido: Pedido;
pedido = new Pedido('Nilton', '0001');
pedido.adicionarPrato(p1);
pedido.adicionarPrato(p2);
let total = pedido.calcularTotal();

alert(total);