import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudbComponent } from './menudb.component';

describe('MenudbComponent', () => {
  let component: MenudbComponent;
  let fixture: ComponentFixture<MenudbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenudbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
