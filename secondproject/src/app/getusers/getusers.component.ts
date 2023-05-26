import { Component, OnInit } from '@angular/core';
  import { ServiceService, Users ,user} from '../service.service';

@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.sass']
})
export class GetusersComponent implements OnInit {

  getUser:user[]=[];
  getTenUser: Users[] = [];
constructor(public object:ServiceService){

}
  ngOnInit(): void {
  
    this.object.getDataFromjson().subscribe((data:Users[])=>{
      this.getTenUser=data;
    })

   this.object.getUserFromDatabase().subscribe((data:user[])=>{
    this.getUser=data;
    console.warn(this.getUser);
    
   })
  }
}
