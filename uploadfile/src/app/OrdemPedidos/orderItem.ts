import Cliente from "./cliente";
import Produto from "./produtos";

export default class OrderItem{

    id: number;
    quantidade: number;
    preco: number;
    produto: Produto;

    constructor(id:number, quantidade:number, preco:number, produto:any){
      
        this.id = id
        this.preco = preco
        this.produto = produto
        this.quantidade = quantidade
    }

}