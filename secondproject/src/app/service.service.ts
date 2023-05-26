import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public stutendData:Student[] =  [
    { "name": "John Doe", "age": 30, "address": "123 Main St" },
    { "name": "Jane Smith", "age": 25, "address": "456 Elm St" },
    { "name": "Jane ", "age": 24, "address": "59 Elm St" },
    { "name": "siva", "age": 20, "address": "46 Elm St" },
    { "name": "sivanesh", "age": 20, "address": "46 Elm St" },
    { "name": "mohan", "age": 20, "address": "46 Elm St" },
    { "name": "ram", "age": 20, "address": "46 Elm St" },
    { "name": "karuppan", "age": 20, "address": "46 Elm St" },
  ];
  public personData:Person[]=[
    {name:'siva',age:24}, {name:'jaddu',age:30},
    {name:'ram',age:20}, {name:'maya',age:20},
    {name:'raj',age:43}, {name:'rutu',age:30},
    {name:'karuppan',age:28}, {name:'siva kumar',age:40},
  ];
  // url='http://localhost:4200/assets/test.json';
  url="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { 

  }

  getStudendlist(){
    return this.stutendData;
  };
  getPersonList(){
    return this.personData;
  }
  
  getDataFromjson(): Observable<Users[]> {
    // return this.http.get(this.url);
    return this.http.get<Users[]>(this.url);
  };

  // postData(url: string, data: any): Observable<any> {
  //   return this.http.post<any>(url, data);
  // }

  getUserFromDatabase() {
    const url = 'http://localhost:3000/getAllUser';
    return this.http.get<user[]>(url);
  }
  
  
}

export interface Student{
  name:string;
  age:number;
  address:string;
};

export interface Person{
  name:string;
  age:number;
};

export interface Users{
  id:number;
  name:string;
  email:string;
  address:address;
}
interface address{
  street:string;
  city:string;
}
export interface user{
  username:string;
  password:string;
}