import { NgModule } from "@angular/core";
import { NguDatatableComponent } from "./ngu-datatable.component";
import { CommonModule } from "@angular/common";
import { NguDatatableColumn } from "./ngu-datatable-column/ngu-datatable-column.component";
import {NguDatatableCell} from "./ngu-datatable-cell.directive";
import {NguDatatableHeader} from "./ngu-datatable-header.directive";

@NgModule({
  declarations: [NguDatatableComponent, NguDatatableColumn, NguDatatableCell, NguDatatableHeader],
  imports: [CommonModule],
  exports: [NguDatatableComponent, NguDatatableColumn, NguDatatableCell, NguDatatableHeader]
})
export class NguDatatableModule {}
