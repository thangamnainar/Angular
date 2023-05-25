import { Component,AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

interface reciveEmpDetails {
  name: string;
  age: number;
  gender: string;
  address: {
    city: string;
    pincode: number;
  };
};
interface sendPerson{
  name:string | string[];
  age:number;
  gender:string;
};
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit{

  reciveEmpDetails: reciveEmpDetails[] = []; 
  getMsgFromChildAfteView:string='';
  reciveemployeeDetails: reciveEmpDetails[]=[];
  @ViewChild(ChildComponent) vname:any;
  @ViewChild(ChildComponent) vname1:any;
  style:string='';

  sendPerson:sendPerson[]=[
    { name:"Conway",age:20,gender:'Male'},
    { name:"Dube",age:25,gender:'Male'},
    { name:['Dhoni','thala'],age:41,gender:'Male'},
    { name:"Jaddu",age:30,gender:'Male'},
    { name:"Ruutu",age:25,gender:'Male'},
    { name:"Pathirana",age:20,gender:'Male'},
  ];

  getEmpDetails($event:reciveEmpDetails[]){
    this.reciveEmpDetails=$event;
    console.warn($event);
    
    // console.warn('.............', this.reciveEmpDetails);
    
  };

  ngAfterViewInit(): void {
    this.getMsgFromChildAfteView=this.vname.sendMsgtoParent
    console.warn(this.getMsgFromChildAfteView);
    this.reciveemployeeDetails=this.vname1.employeeDetails
    // console.error('/////',this.reciveemployeeDetails);    
    
  };

  reciveColor($event:string){
    this.style=`background-color:${$event}`;
    console.warn('recive color',this.style);
    
  }
 
};     
