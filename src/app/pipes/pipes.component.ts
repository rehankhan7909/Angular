import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";



@Component({
    selector:'app-pipes',
    templateUrl:'./pipes.Component.html',
    imports : [CommonModule]
})

export class Pipes{
  tittle ="code step by step"
  name= "rehan"
  date = new Date();
  amount = 10;
}