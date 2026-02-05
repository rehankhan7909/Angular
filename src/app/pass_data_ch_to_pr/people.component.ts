import { Component, EventEmitter, Output } from "@angular/core";



@Component({
    selector: 'app-people',
    templateUrl:"./people.component.html",
    styleUrl:"./people.component.css"

})

export class People{
    @Output()getpeople = new EventEmitter();
    peoples = ['John', 'Sun','Hello', 'Hey']
    
    // ngOnInit(){
    //     this.getpeople.emit(this.peoples)
    // }

    //  pass data with button 
     loaddata(){
        this.getpeople.emit(this.peoples)
    }

}