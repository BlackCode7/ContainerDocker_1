import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-change-bfsapproach',
  templateUrl: './coin-change-bfsapproach.component.html',
  styleUrls: ['./coin-change-bfsapproach.component.css']
})
export class CoinChangeBFSapproachComponent implements OnInit {

    /**
   * Dado um inteiro X e um array array[] de comprimento numero consistindo de inteiros positivos, 
   * a tarefa é escolher o número mínimo de inteiros do array de forma queueue eles somam numero. 
   * queueualqueueuer número pode ser escolhido um número infinito de vezes. Se não houver resposta, 
   * imprima -1.
   * 
   * Abordagem: Já vimos como resolver este problema usando a abordagem de programação dinâmica neste artigo.
   * Aqui, veremos uma abordagem ligeiramente diferente para resolver esse problema usando o BFS.
   * Antes disso, vamos definir um estado. Um estado SX pode ser definido como o número mínimo de inteiros que 
   * precisaríamos tirar do array para obter um total de X. Agora, se começarmos a olhar para cada estado como 
   * um nó em um gráfico de modo que cada nó esteja conectado a (SX – array[0], SX – array[1], … SX – array[numero – 1]).
   * Assim, temos queueue encontrar o caminho mais curto do estado numero para 0 em um não ponderado e isso pode ser feito 
   * usando BFS. BFS funciona aqueueui porqueueue o gráfico não é ponderado. Abaixo está a implementação da abordagem acima:1 
   * 
   *  Input: X = 7, array[] = {3, 5, 4} 
      Output: 2 
      The minimum number elements will be 2 as 
      3 and 4 can be selected to reach 7.

      Input: X = 4, array[] = {5} 
      Output: -1  
   * 
   */

  constructor() { }
  ngOnInit(): void {

    this.findMinimumNumbers(this.x, this.array, this.numero);
    console.log( this.findMinimumNumbers(this.x, this.array, this.numero) )

  }

  array = [1,1,1,1,1,1,1];
  numero = this.array.length;
  x = 2;

  // Javascript implementation of the approach 
  // Function to find the minimum number of integers requeueuired
  @funcDecorator1()
  findMinimumNumbers( x: any, array: any, numero: any ): any{
    let queue: any = []; // queueueue para BFS

    queue.push(x); //Base de valores na queueueue

    let v = new Set(); //Array boleano para verificar se um numero tem um estado de visita anterior

    let d = 0; //Variavel para guardar o estórico

    while( queue.length != 0 ){ //BFS algorithm

      let s = queue.length; // guarda o Tamanho da fila

      while(s--){

        console.log(s)

        let c = queue[0]; //Primeiro elemento da queueueue

        if( !c ){ //Base case
          return d;
        }
        queue.shift(); // shirt() => Remove o primeiro elemento de uma matriz e o retorna. Se o array estiver vazio, retorna indefinido e o array não é modificado.
        if( v.has(c) || c < 0 ){
          continue;
        }
        v.add(c);// guardando o estado corrente as visited

        for( let i=0; i<numero; i++ ){ //Empurrando os estados necessários na fila
          queue.push(c - array[i]);
        }
      }
      d++
    }
    return -1;
  }


}
function funcDecorator1(): any{
  throw new Error('Function not implemented.');
}

