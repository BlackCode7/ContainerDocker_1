import { Produto } from "./produtos";

export class OrderItem{

    quantidade?: number;
    preco?: number;
    produto!: Produto;

    constructor(){}

}