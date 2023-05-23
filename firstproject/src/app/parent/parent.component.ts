import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  sendPerson:any=[
    { name:"siva",age:20,gender:'Male'},
    { name:"Dube",age:25,gender:'Male'},
  ]
}
