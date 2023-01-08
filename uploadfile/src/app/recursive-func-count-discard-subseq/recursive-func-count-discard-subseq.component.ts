import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursive-func-count-discard-subseq',
  templateUrl: './recursive-func-count-discard-subseq.component.html',
  styleUrls: ['./recursive-func-count-discard-subseq.component.css']
})
export class RecursiveFuncCountDiscardSubseqComponent implements OnInit {

  /**
   * Abordagem: converter o problema do produto em um problema de soma realizando as 
   * conversões arr[i] = log(arr[i]) e K = log(K) . Gere todos os subconjuntos e armazene 
   * a soma dos elementos que foram obtidos na subsequência. Se em algum ponto a soma se 
   * tornar maior que K, então sabemos que se adicionarmos outro elemento à subsequência, 
   * sua soma também será maior que K . Portanto, descartamos todas essas subsequências 
   * que possuem soma maior que K sem fazer uma chamada recursiva para elas. Além disso, 
   * se atualmente tivermos uma soma menor que Kentão verificamos se há alguma chance de 
   * descartar quaisquer subsequências. Se quaisquer outras subsequências não puderem ser 
   * descartadas, nenhuma chamada recursiva será feita
   */

  constructor() { }

  ngOnInit(): void {
    console.log(this.vart)
  }

  // This variable counts discarded subsequences
  discard_count = 0;

  // Função_3 - Função para retornar contagem de não vazio subsequências cujo produto não exceder k
  countSubsequences( arr:any, n:any, K:any ): any{

    let sum = 0.0;

    let k = Math.log(K);

    let prefix = new Array(n);
    let a = new Array(n);

    for( let i = 0; i < n; i++ ){
      a[i] = Math.log(arr[i]);
      sum += a[i];
    }

    prefix[0] = a[0];
    for( let i = 1; i < n; i++ ){
      prefix[i] = prefix[i - 1] + a[i];
    }

    let total = this.power(2, n) - 1;
    // If total sum is <= k, then answer = 2^n - 1
    if( sum <= k ){
      return total;
    }

    this.solve( 0, n, 0.0, k, a, prefix )

    return (total - this.discard_count);

  }


  // Função_2 - Função que conta as sequencias discartadas
  solve( i:any, n:any, sum:any, k:any, a:any, prefix:any ){
    
    if( sum > k ){
      // Calong recursivo finalizado Sem mais problemas
      this.discard_count += this.power( 2, n-i );
      return;
    }

    if( i == n ){ return; }

    // rem = Sum of array[ i+1...n-1 ]
    let rem = prefix[ n - 1 ] - prefix[i];

    // Se houver chances de descartar outras subsequências, 
    // faça um calong recursivo, caso contrário, não Incluindo a[i]
    if( sum + a[i] + rem > k ){ this.solve( i + 1, n, sum + a[i], k, a, prefix ); }

    if( sum + rem > k ){ this.solve(i + 1, n, sum, k, a, prefix) }
  }


  // Função_1 - Função que retorna a elevado a n ===> a^n
  power( a: any, n: any ): any{
    if( n == 0 ){
      return 1;
    }
    let p: number|any = this.power(a, Math.floor(n/2));
    p = p * p;
    if( n % 2 == 1 ){
      p = p * 2;
    }
  }


  // Driver code
  arr=[4, 8, 7, 2];
  n = this.arr.length;
  k = 50;
  vart: any = document.write(this.countSubsequences(this.arr, this.n, this.k));
  


}










