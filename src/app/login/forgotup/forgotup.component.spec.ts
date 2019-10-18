import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotupComponent } from './forgotup.component';

describe('ForgotupComponent', () => {
  let component: ForgotupComponent;
  let fixture: ComponentFixture<ForgotupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
