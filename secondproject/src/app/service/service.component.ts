import { Component ,OnInit} from '@angular/core';
import { Studentlist } from '../../test';
import { ServiceService } from '../service.service'; 

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.sass']
})
export class ServiceComponent implements OnInit {
 
  // persons: any[] = [
  //   { "name": "John Doe", "age": 30, "address": "123 Main St" },
  //   { "name": "Jane Smith", "age": 25, "address": "456 Elm St" },
  //   { "name": "Jane ", "age": 24, "address": "59 Elm St" },
  //   { "name": "siva", "age": 20, "address": "46 Elm St" },

  // ];
  // obj=new Studentlist();
  studentList:any;
  constructor(public obj:ServiceService){

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.studentList=this.obj.getStudendlist();
  }
}
