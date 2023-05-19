import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Firstproject';

  a:string="StringInterPolation";
  b:string="PropertyBinding";
  c:string="EventBinding";
}
