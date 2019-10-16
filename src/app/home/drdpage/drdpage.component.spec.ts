import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DrdpageComponent } from './drdpage.component';

describe('DrdpageComponent', () => {
  let component: DrdpageComponent;
  let fixture: ComponentFixture<DrdpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrdpageComponent ],
      imports: [
        NoopAnimationsModule,
        DragDropModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrdpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
