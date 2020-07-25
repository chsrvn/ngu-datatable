import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguDatatablePaginationComponent } from './ngu-datatable-pagination.component';

describe('NguDatatablePaginationComponent', () => {
  let component: NguDatatablePaginationComponent;
  let fixture: ComponentFixture<NguDatatablePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguDatatablePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguDatatablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
