import { Component,OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MyappComponent } from './myapp/myapp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit,AfterViewInit {
  
  @ViewChild(MyappComponent) viewChild:any;
  title = 'secondproject';
  message='';
  json: any[] = [
    {
  "name": "John Doe",
  "age": 30,
  "email": "johndoe@example.com",
  "address": {
    "street": "123 Main Street",
    "city": "Cityville",
    "state": "State",
    "country": "Country"
  },
  "skills": ["JavaScript", "HTML", "CSS"],
  "isActive": true
}  ];

captureChild(event:string){
  console.warn('event.....................................',event);
  
};

ngAfterViewInit(): void {
  // throw new Error('Method not implemented.');
  this.message=this.viewChild.a;
}

ngOnInit(): void {
  // throw new Error('Method not implemented.');
}

};
