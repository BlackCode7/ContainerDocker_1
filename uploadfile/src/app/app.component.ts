import { Component, OnInit } from '@angular/core';
import OrderItem from './OrdemPedidos/orderItem';
import Produto from './OrdemPedidos/produtos';
import orderItem from './OrdemPedidos/orderItem';
import Cliente from './OrdemPedidos/cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'uploadfile';
  constructor(){}
  ngOnInit(){
    console.log(this.orderItem)
    console.log(this.arrayObject)
  }

  public date = new Date();
  dateFormat_1 = this.date.toLocaleString() //Data / Hora - padrão BR
  dateFormat_2 = this.date.toLocaleDateString() //Data - padrão BR
  dateFormat_3 = this.date.toLocaleTimeString() //Hora - padrão BR

  cliente: Cliente = new Cliente(2, "anderson@anderson.com", this.dateFormat_2);

  produto: Produto = new Produto(1, "PalyStation", 5000.00)

  orderItem: any = new OrderItem(1, 2, 1100.00, this.produto)
 
  arrayObject = Object.keys(orderItem).map(index => {
    let arrays = this.orderItem[index].push()
    return arrays
  })

/*  Controlando *ngIf */
paragrafoOFF = false
paragrafoOFFPrintHide(){
  this.paragrafoOFF = true
}



}
