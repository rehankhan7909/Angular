import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    constructor(){
      console.log("service")
    }

    getProduct(){

    return[
      {name:'mobile', price:'10000', brand:'vivo'},
       {name:'washing_machine', price:'30000', brand:'samsung'},
        {name:'hairdraie', price:'100', brand:'oneplus'}
    ]
  }
}
