import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public data:Person[] =  [
    { "name": "John Doe", "age": 30, "address": "123 Main St" },
    { "name": "Jane Smith", "age": 25, "address": "456 Elm St" },
    { "name": "Jane ", "age": 24, "address": "59 Elm St" },
    { "name": "siva", "age": 20, "address": "46 Elm St" },
    { "name": "sivanesh", "age": 20, "address": "46 Elm St" },
    { "name": "mohan", "age": 20, "address": "46 Elm St" },
    { "name": "ram", "age": 20, "address": "46 Elm St" },
    { "name": "karuppan", "age": 20, "address": "46 Elm St" },
  ]
  constructor() { }
  getStudendlist(){
    return this.data;
  }
  
}

interface Person{
  name:string;
  age:number;
  address:string;
}
