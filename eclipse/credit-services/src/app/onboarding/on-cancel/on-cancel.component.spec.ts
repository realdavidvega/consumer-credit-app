import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnCancelComponent } from './on-cancel.component';

describe('OnCancelComponent', () => {
  let component: OnCancelComponent;
  let fixture: ComponentFixture<OnCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
