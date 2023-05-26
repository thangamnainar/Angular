import { Component, OnInit } from '@angular/core';
import { ServiceService, Student, } from '../service.service';

@Component({
  selector: 'app-learnservice',
  templateUrl: './learnservice.component.html',
  styleUrls: ['./learnservice.component.sass']
})
export class LearnserviceComponent implements OnInit {
  searchQuery: string = '';
  filteredPersons: Student[] = [];

  search() {
    this.filteredPersons = this.studenList.filter(e =>
      e.name.toLowerCase().includes(this.searchQuery.toLocaleLowerCase())
    );
    // console.warn('~~~~~~~~', this.filteredPersons);
    // console.warn(this.searchQuery.toLowerCase());

  }
  // obj = new Studentlist();
  studenList: Student[] = [];
  getUser: any;
  constructor(public obj: ServiceService) {

  }

  ngOnInit(): void {
    this.studenList = this.obj.getStudendlist();

    this.obj.getUserFromDatabase().subscribe(data => {
      this.getUser = data;
      // console.log('~~~~~~~', this.getUser);
    });

    // this.obj.postData(this.url,this.data).subscribe(
    //   response => {
    //     console.log('Response:', response);
    //   }, error => {
    //     console.error('Error:', error);
    //   }
    // )
  };


};

