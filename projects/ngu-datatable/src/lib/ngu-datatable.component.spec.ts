import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguDatatableComponent } from './ngu-datatable.component';

describe('NguDatatableComponent', () => {
  let component: NguDatatableComponent;
  let fixture: ComponentFixture<NguDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
