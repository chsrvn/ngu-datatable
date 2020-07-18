import { NgModule } from '@angular/core';
import { NguDatatableComponent } from './ngu-datatable.component';
import { NguDatatableColumnDirective } from './ngu-datatable-column.directive';



@NgModule({
  declarations: [NguDatatableComponent, NguDatatableColumnDirective],
  imports: [
  ],
  exports: [NguDatatableComponent]
})
export class NguDatatableModule { }
