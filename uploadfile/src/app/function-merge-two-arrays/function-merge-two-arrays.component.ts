import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-merge-two-arrays',
  templateUrl: './function-merge-two-arrays.component.html',
  styleUrls: []
})
export class FunctionMergeTwoArraysComponent implements OnInit {

  constructor() { }



  array_1 = [12, 14, 2]
  array_2 = [ 33, 77, "lkjlj",65 ]

  ngOnInit(): void {
    //this.mergeTwoArray( this.array_1, this.array_2 )
  }

  // array to store the result after merging l and r
  ret = []
  // variables to store the current pointers for l and r
  l_in = 23;
  r_in = 50;

  mergeTwoArray( l:any, r:any ){
    let retComTudo: any = []
    // loop to merge l and r using two pointer the function concat() add any arrays in one array
    while( this.l_in + this.r_in  <  l.length + r.length ){

      if( this.l_in != l.length && ( this.r_in == r.length || l[this.l_in] < r[this.r_in] )){

        retComTudo.concat(l[this.l_in]);
        this.l_in ++ ;

      } else {

        retComTudo.concat(r[this.r_in]);
        this.r_in ++ ;

      }
    }
    return retComTudo
  }


  // Driver Code Input arrays
  arr = [ [ 3, 13 ],
          [ 8, 10, 11 ],
          [ 9, 15 ]
        ];

  mergeArrays(arr: any) {
    // 2D-array para armazenar os resultados de um passo temporariamente
    let arr_s: any[] = [];
    // Loop para fazer pares de arrays e mesclá-los
    while ( arr.length != 1 ){
      // Limpa os dados que estejam previamente guardados na variável
      arr_s = [];
      console.log(arr_s)      
      for( let i = 0; i < arr.length; i += 2 ){
        if( i == arr.length - 1 ){
          arr_s.push( arr[i] );
          console.log(arr_s)
        } else {
          arr_s.push( this.mergeTwoArray( arr[i], arr[i + 1] ) );
          console.log(arr_s)
        }
        arr = arr_s;
        console.log(arr)
      }
      return arr[0];
    }
  }

  funct(){
      // Merged sorted array
      const output = this.mergeArrays(this.arr);

      for (let i = 0; i < output.length; i++){
          document.write(output[i] + " ");
      }  
  }


}