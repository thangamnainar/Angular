import { Component } from '@angular/core';

@Component({
  selector: 'app-component-page',
  templateUrl: './component-page.component.html',
  styleUrls: ['./component-page.component.scss']
})
export class ComponentPageComponent {

  count:number =0;
  decrement(){
    this.count --;
  };

  increment(){  
    this.count ++;
  }
}
