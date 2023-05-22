import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'secondproject';
  json: any[] = [
    {
  "name": "John Doe",
  "age": 30,
  "email": "johndoe@example.com",
  "address": {
    "street": "123 Main Street",
    "city": "Cityville",
    "state": "State",
    "country": "Country"
  },
  "skills": ["JavaScript", "HTML", "CSS"],
  "isActive": true
}

  ];
};
