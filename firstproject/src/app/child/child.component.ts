import { Component,EventEmitter,Input,Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{

  sendMsgtoParent:string="I'm child... Dad..";
  employeeDetails:any[]=[
    {name:'Ram',age:22,gender:'Male',address:{city:'chennai',pincode:600012}},
    {name:'Selva',age:26,gender:'Male',address:{city:'chennai',pincode:600012}},
    {name:'Mohan',age:24,gender:'Male',address:{city:'chennai',pincode:600012}},

  ]

  // parent to child 
  @Input() public recivePerson:any;

  // child to parent
  @Output() public sendEmpDetails:any=new EventEmitter();

  ngOnInit(): void {
    // this.sendEmpDetails.emit(this.employeeDetails);
  };

  buttonClick(){
    this.sendEmpDetails.emit(this.employeeDetails);

  }

  

}
