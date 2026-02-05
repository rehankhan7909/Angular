import { Component, Input, input } from "@angular/core";


@Component({
    selector:"app-user",
    templateUrl: "./user.Component.html"
    
})


export class Userapp{
  @Input() user:String='';
  @Input() city:string='';




}