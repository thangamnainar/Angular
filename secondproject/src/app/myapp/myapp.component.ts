import { Component, OnInit , OnChanges, SimpleChanges,AfterContentInit, AfterViewInit,AfterViewChecked,AfterContentChecked ,OnDestroy,Input,Output, EventEmitter} from '@angular/core';

@Component({
  // selector: '[app-myapp]',
  selector:'app-myapp',
  // selector: '.app-myapp',
  templateUrl: './myapp.component.html',
  styleUrls: ['./myapp.component.sass']
})
export class MyappComponent implements OnInit,OnChanges,AfterViewInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy{

  a:string='interpolation';
  isDisabled:boolean=false;
  show:boolean=false;
  array=['html','css','boot','js'];
  array2=[{
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
  }];
  twoWay:string='siva';

//component to component interaction
  @Input() public property:any;
  @Input() public jsonProperty:any;

  @Output() public outset=new EventEmitter();

  clickButton(){
    this.outset.emit(this.array2)
  }

  constructor(){
    console.log('insode constructer');
    
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
    this.outset.emit(this.array2)

    console.log('inside ngOninit');
    
  }

  isObject(item: any): boolean {
    return typeof item === 'object';
  }

  onClick(){
    this.a='even tbinding';
    this.isDisabled=false;
    this.isDisabled=!this.isDisabled;
    // this.array.push()
    
  };

  onClick2(e:any){
    // this.a='even tbinding';
    // this.isDisabled=false;
    // this.isDisabled=!this.isDisabled;
    console.warn('.....',e);
  }
  

}
