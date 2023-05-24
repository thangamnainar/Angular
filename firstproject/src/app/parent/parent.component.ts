import { Component,AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

interface Person {
  name: string;
  age: number;
  gender: string;
  address: {
    city: string;
    pincode: number;
  };
};
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit{

  reciveEmpDetails: Person[] = []; 
  getMsgFromChildAfteView:string='';
  @ViewChild(ChildComponent) vname:any;

  sendPerson:any=[
    { name:"Conway",age:20,gender:'Male'},
    { name:"Dube",age:25,gender:'Male'},
    { name:['Dhoni','thala'],age:41,gender:'Male'},
    { name:"Jaddu",age:30,gender:'Male'},
    { name:"Ruutu",age:25,gender:'Male'},
    { name:"Pathirana",age:20,gender:'Male'},
  ];

  getEmpDetails($event:Person[]){
    this.reciveEmpDetails=$event;
    console.warn($event);
    
    console.warn('.............', this.reciveEmpDetails);
    
  };

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    this.getMsgFromChildAfteView=this.vname.sendMsgtoParent
    this.vname.sendMsgtoParent
    console.warn(this.getMsgFromChildAfteView);
    
    
  }
 
};
