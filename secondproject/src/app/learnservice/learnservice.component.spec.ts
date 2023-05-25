import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnserviceComponent } from './learnservice.component';

describe('LearnserviceComponent', () => {
  let component: LearnserviceComponent;
  let fixture: ComponentFixture<LearnserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnserviceComponent]
    });
    fixture = TestBed.createComponent(LearnserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
