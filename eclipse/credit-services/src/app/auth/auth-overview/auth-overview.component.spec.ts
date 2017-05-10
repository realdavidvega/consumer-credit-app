import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOverviewComponent } from './auth-overview.component';

describe('AuthOverviewComponent', () => {
  let component: AuthOverviewComponent;
  let fixture: ComponentFixture<AuthOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
