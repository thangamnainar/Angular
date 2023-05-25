import { Component ,OnInit} from '@angular/core';
import { Studentlist } from '../../test';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-learnservice',
  templateUrl: './learnservice.component.html',
  styleUrls: ['./learnservice.component.sass']
})
export class LearnserviceComponent implements OnInit{
  searchQuery: string = '';
  filteredPersons:any;
  
  // Inside your component
  search() {
    this.filteredPersons = this.studenList.filter(e=>
      e.name.toLowerCase().includes(this.searchQuery.toLocaleLowerCase())
    );    
    console.warn('~~~~~~~~',this.filteredPersons);
    console.warn(this.searchQuery.toLowerCase());
    
  }
  // obj = new Studentlist();
  studenList:Person[] = [];
  constructor (public obj:ServiceService){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.studenList=this.obj.getStudendlist();
  }

};

interface Person {
  name: string;
  age: number;
  address: string;
}
