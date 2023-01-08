import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brute-force-algorithm',
  templateUrl: './brute-force-algorithm.component.html',
  styleUrls: ['./brute-force-algorithm.component.css']
})
export class BruteForceAlgorithmComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }

  N = 6;  
  arr = [ // Input 2D-array
    [ 5, 7, 15, 18 ],
    [ 1, 8, 9, 17 ],
    [ 1, 4, 7, 7 ] 
  ];
  n = this.N;
  k = 3; // Number of arrays  
  output = new Array(this.n * this.k); // Output array

  merge_and_sort(output: any, arr: any, n: any, k: any){
    for ( let i=0; i<k; i++ ){
      console.log("primeiro for >>> ",i)
      for ( let j=0; j<n; j++ ){
        //console.log("segundo for >>> ",j)
        output[i * n+j] = arr[i][j];
        //console.log("recebendo i + j, no output >>> ", output)
      }
      //return this.merge_and_sort(this.output, this.arr, this.n, this.k);
    }
    output.sort(function(a: number,b: number){ // Mistura a saida do array
      return a - b
    })
  }

  func(){
      for (let i = 0; i < this.n * this.k; i++){
        //console.log(this.output[i] + " ")
        document.write(this.output[i] + " ");
      }
  }
        

}
