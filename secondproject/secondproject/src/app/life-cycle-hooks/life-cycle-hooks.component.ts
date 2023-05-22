import { Component, OnInit , OnChanges, SimpleChanges,AfterContentInit, AfterViewInit,AfterViewChecked,AfterContentChecked ,OnDestroy,DoCheck} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.sass']
})
export class LifeCycleHooksComponent  implements OnInit,OnChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy,DoCheck{
  constructor(){
    console.log('insode constructer');
    
  }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    console.log('ngDoCheck');
    
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    console.log('ngOnDestroy................  ');
    
  }
  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
    console.log('inside ngAfterViewChecked');


  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log('inside ngAfterContentInit');

  }
  ngAfterContentChecked(): void {
    // throw new Error('Method not implemented.');
    console.log('inside ngAfterContentChecked');

  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log('inside ngViewinit');

  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log('inside ngOnchanges');

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('inside ngOninit');
    
  }
}
