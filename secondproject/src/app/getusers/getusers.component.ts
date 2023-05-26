import { Component, OnInit } from '@angular/core';
import { ServiceService, Users, getUser, postData } from '../service.service';
// import { log } from 'console';

@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.sass']
})
export class GetusersComponent implements OnInit {

  getUser: getUser[] = [];
  getTenUser: Users[] = [];
  post: postData[] = [];
  pass: string = ''
  userName: string = '';


  constructor(public object: ServiceService) { }
  ngOnInit(): void {

    this.object.getDataFromjson().subscribe((data: Users[]) => {
      this.getTenUser = data;
    })

    this.object.getUserFromDatabase().subscribe((data: getUser[]) => {
      this.getUser = data;
      // console.warn(this.getUser);
    })

  };

  Createauser() {
    const postUrl = 'http://localhost:3000/adduser';
    const requestBody = {
      username: this.userName,
      password: this.pass,
    };
    // this.post=this.object.postData(postUrl,requestBody).subscribe((data)=>{})
    this.object.postData(postUrl, requestBody).subscribe({
      next: (response: postData[]) => {
        console.log('POST request successful:', response);
      },
      error: (error: postData[]) => {
        console.error('POST request error:', error);
      }
    });
    this.object.getUserFromDatabase().subscribe((data: getUser[]) => {
      this.getUser = data;
      // console.warn(this.getUser);
    })
    console.warn('bodyyyyyyyy', requestBody);
    // console.log('ssssssss',this.pass);


  }
}
