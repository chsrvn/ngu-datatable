import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList
} from "@angular/core";
import { NguDatatableColumn } from "./ngu-datatable-column/ngu-datatable-column.component";
import { NguDatatablePaginationService } from "./ngu-datatable-pagination/ngu-datatable-pagination.service";

@Component({
  selector: "ngu-datatable",
  templateUrl: "./ngu-datatable.component.html",
  styleUrls: ["./ngu-datatable.component.scss"]
})
export class NguDatatableComponent {
  _data: any[] = [];
  visibleData: any[] = [];
  selectedData: any[] = [];
  @Input("data") set data(dataSource) {
    this._data = dataSource;
    this.setVisibleData();
  }

  @Output() selectedRows = new EventEmitter<any>();

  @Input("selectAllEnabled") selectAllEnabled = false;

  @ContentChildren(NguDatatableColumn, { descendants: true })
  columns: QueryList<NguDatatableColumn>;

  constructor(private paginationService: NguDatatablePaginationService) {}
  onPaginationChange() {
    this.setVisibleData();
  }

  private setVisibleData() {
    const pageSize = this.paginationService.pagination.pageSize;
    const currentPage = this.paginationService.pagination.currentPage;
    const startValue = (currentPage - 1) * pageSize;
    this.visibleData = this._data.slice(startValue, startValue + pageSize);
  }

  selectAllData(checked: boolean) {
    if (checked) {
      this.selectedData = this.visibleData.slice();
    } else {
      this.selectedData = [];
    }
    this.selectedRows.emit(this.selectedData);
  }

  selectRow(checked: boolean, row: any) {
    if (checked) {
      this.selectedData.push(row);
    } else {
      this.selectedData.splice(this.selectedData.indexOf(row), 1);
    }
    this.selectedRows.emit(this.selectedData);
  }

  isRowSelected(row: any) {
    return this.selectedData.includes(row);
  }
}
