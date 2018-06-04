
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessTableComponent } from './process-table.component';

describe('ProcessTableComponent', () => {
  let component: ProcessTableComponent;
  let fixture: ComponentFixture<ProcessTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
