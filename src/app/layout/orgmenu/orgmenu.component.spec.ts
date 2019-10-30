import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgmenuComponent } from './orgmenu.component';

describe('OrgmenuComponent', () => {
  let component: OrgmenuComponent;
  let fixture: ComponentFixture<OrgmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
