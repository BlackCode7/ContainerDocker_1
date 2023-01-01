import { Cliente } from "./cliente";
import { OrderItem } from "./orderItem";
import { OrderStatus } from "./orderStatus";

export class Order{

    date?: Date;
    status!: OrderStatus;
    cliente!: Cliente;

    items?: Array<OrderItem>;

    constructor(){}
    
}