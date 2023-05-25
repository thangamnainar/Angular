import { Component } from '@angular/core';
import { Studentlist } from '../../test';

interface Person {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-learnservice',
  templateUrl: './learnservice.component.html',
  styleUrls: ['./learnservice.component.sass']
})
export class LearnserviceComponent {
  searchQuery: string = '';
  filteredPersons: Person[] = [];
  
  obj = new Studentlist();

  // Inside your component
  search() {
    this.filteredPersons = this.obj.persons.filter(person =>
     person.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    
    );    
    console.warn('~~~~~~~~',this.filteredPersons);
    console.warn(this.searchQuery.toLowerCase());
    
   
  }


};
