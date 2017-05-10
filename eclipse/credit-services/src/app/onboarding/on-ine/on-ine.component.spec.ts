import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnIneComponent } from './on-ine.component';

describe('OnIneComponent', () => {
  let component: OnIneComponent;
  let fixture: ComponentFixture<OnIneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnIneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnIneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
