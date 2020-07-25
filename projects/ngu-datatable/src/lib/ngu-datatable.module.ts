import { NgModule } from "@angular/core";
import { NguDatatableComponent } from "./ngu-datatable.component";
import { CommonModule } from "@angular/common";
import { NguDatatableColumn } from "./ngu-datatable-column/ngu-datatable-column.component";
import {NguDatatableCell} from "./ngu-datatable-cell.directive";
import {NguDatatableHeader} from "./ngu-datatable-header.directive";
import {FlexLayoutModule} from "@angular/flex-layout";
import { NguDatatablePaginationComponent } from './ngu-datatable-pagination/ngu-datatable-pagination.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [NguDatatableComponent, NguDatatableColumn, NguDatatableCell, NguDatatableHeader, NguDatatablePaginationComponent],
  imports: [CommonModule, FlexLayoutModule, ReactiveFormsModule],
  exports: [NguDatatableComponent, NguDatatableColumn, NguDatatableCell, NguDatatableHeader]
})
export class NguDatatableModule {}
