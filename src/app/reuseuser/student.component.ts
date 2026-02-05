import { Component, Input } from "@angular/core";



@Component({
    selector:"app-student",
    templateUrl: "./student.Component.html",
    styleUrl: "./student.component.css"
})

export class Student{
    @Input() user:string='';

}