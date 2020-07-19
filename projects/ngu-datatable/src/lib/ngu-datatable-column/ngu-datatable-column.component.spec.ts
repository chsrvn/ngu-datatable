import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguDatatableColumnComponent } from './ngu-datatable-column.component';

describe('NguDatatableColumnComponent', () => {
  let component: NguDatatableColumnComponent;
  let fixture: ComponentFixture<NguDatatableColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguDatatableColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguDatatableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
