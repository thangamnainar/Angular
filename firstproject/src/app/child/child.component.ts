import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';


interface Employee {
  name: string;
  age: number;
  gender: string;
  address: Address;
};
interface Address {
  city: string;
  pincode: number;
};

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {
  sendMsgtoParent: string = "I'm child... Dad..";
  twoWayColor: string = '';
  employeeDetails: Employee[] = [
    { name: 'siva', age: 22, gender: 'Male', address: { city: 'chennai', pincode: 600012 } },
    { name: 'Selva', age: 26, gender: 'Male', address: { city: 'chennai', pincode: 600012 } },
    { name: 'Mohan', age: 24, gender: 'Male', address: { city: 'chennai', pincode: 600012 } }
  ];


  // parent to child 
  @Input() public recivePerson: any;

  // child to parent
  // @Output() public sendEmpDetails:any=new EventEmitter();
  @Output() sendEmpDetails: EventEmitter<Employee[]> = new EventEmitter<Employee[]>();
  @Output() public sendcolor: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    // this.sendEmpDetails.emit(this.employeeDetails);
  };

  buttonClick() {
    this.sendEmpDetails.emit(this.employeeDetails);
    // console.warn('@@@@@@@S',this.sendEmpDetails);
  };

  colorbtn() {
    this.sendcolor.emit(this.twoWayColor);
    // console.log('....',this.sendcolor);

  }



}
