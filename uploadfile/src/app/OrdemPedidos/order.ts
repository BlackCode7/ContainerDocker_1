import Cliente from "./cliente";
import OrderItem from "./orderItem";
import { OrderStatus } from "./orderStatus";


export default class Order{

    date: Date;
    status: OrderStatus;
    cliente: Cliente;

    items: Array<OrderItem>;

    constructor( date:Date, status:any, cliente:any, items:any ){
        this.items=items
        this.date=date
        this.status=status
        this.cliente=cliente
    }

}