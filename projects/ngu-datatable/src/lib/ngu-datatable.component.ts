import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from "@angular/core";
import { TableContext } from "./model/data.model";
import { NguDatatableColumn } from "./ngu-datatable-column/ngu-datatable-column.component";
import { NguDatatablePaginationService } from "./ngu-datatable-pagination/ngu-datatable-pagination.service";
import { NguDatatableService } from "./ngu-datatable.service";

@Component({
  selector: "ngu-datatable",
  templateUrl: "./ngu-datatable.component.html",
  styleUrls: ["./ngu-datatable.component.scss"],
})
export class NguDatatableComponent {
  @Input("data") set data(dataSource) {
    this.datatableService.dataContext.data = dataSource;
    this.setVisibleData();
  }

  @Output() selectedRows = new EventEmitter<any>();
  
  @Output() context = new EventEmitter<TableContext>();

  @Input("selectAllEnabled") selectAllEnabled = false;

  @ContentChildren(NguDatatableColumn, { descendants: true })
  columns: QueryList<NguDatatableColumn>;

  constructor(
    private paginationService: NguDatatablePaginationService,
    public datatableService: NguDatatableService
  ) {}
  onPaginationChange() {
    this.setVisibleData();
  }

  private setVisibleData() {
    const pageSize = this.paginationService.pagination.pageSize;
    const currentPage = this.paginationService.pagination.currentPage;
    const startValue = (currentPage - 1) * pageSize;
    this.datatableService.dataContext.visibleData = this.datatableService.dataContext.data.slice(
      startValue,
      startValue + pageSize
    );
  }

  selectAllData(checked: boolean) {
    if (checked) {
      this.datatableService.dataContext.selectedData = this.datatableService.dataContext.visibleData.slice();
    } else {
      this.datatableService.dataContext.selectedData = [];
    }
    this.context.emit(this.datatableService.dataContext);
    this.selectedRows.emit(this.datatableService.dataContext.selectedData);
  }

  selectRow(checked: boolean, row: any) {
    if (checked) {
      this.datatableService.dataContext.selectedData.push(row);
    } else {
      this.datatableService.dataContext.selectedData.splice(
        this.datatableService.dataContext.selectedData.indexOf(row),
        1
      );
    }
    this.context.emit(this.datatableService.dataContext);
    this.selectedRows.emit(this.datatableService.dataContext.selectedData);
  }

  isRowSelected(row: any) {
    return this.datatableService.dataContext.selectedData.includes(row);
  }
}
