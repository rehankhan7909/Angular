import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Userapp } from "./user/user.component";
import { Student } from "./reuseuser/student.component";
import { People } from "./pass_data_ch_to_pr/people.component";
import { CommonModule } from '@angular/common';
import { Pipes } from "./pipes/pipes.component";
import { CurrencyConvertorPipe } from './pipe/currency-convertor-pipe';
import { ProductService } from './product';

@Component({
  selector: 'app-root',
  imports: [Userapp, RouterOutlet, Student, People, CommonModule, Pipes, CurrencyConvertorPipe,RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // userName = "john"

  // onUserchange(user:string){
  //   this.userName= user;
  
  // }

//  Resuse component code

// users = ['rehan', 'john', 'Ansh']

//  pass data child to parent 

  //  peoples: undefined | string[];
  //  handlevalue(people:string[]){
  //    console.log(people)
  //    this.peoples = people;
  //  }
   
  //  customs pipes 

  amount = 10;


  // service code

  constructor(private productService:ProductService){

  }
  product:{
    name: string;
    price: string;
    brand: string;
}[]|undefined;

getProduct(){
    this.product= this.productService.getProduct();
  console.log(this.product);
  
}

  
}