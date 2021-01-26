import {
  Component,
  ContentChildren,
  Input,
  QueryList,
} from "@angular/core";
import { TableContext } from "./model/data.model";
import { NguDatatableColumn } from "./ngu-datatable-column/ngu-datatable-column.component";
import { NguDatatablePaginationService } from "./ngu-datatable-pagination/ngu-datatable-pagination.service";

@Component({
  selector: "ngu-datatable",
  templateUrl: "./ngu-datatable.component.html",
  styleUrls: ["./ngu-datatable.component.scss"],
})
export class NguDatatableComponent {
  @Input("data") set data(dataSource) {
    this.context.data = dataSource;
    this.setVisibleData();
  }

  public context: TableContext = {
    data: [],
    visibleData: [],
    selectedData: [],
    sort: null,
  };

  @Input("selectAllEnabled") selectAllEnabled = false;

  @ContentChildren(NguDatatableColumn, { descendants: true })
  columns: QueryList<NguDatatableColumn>;

  constructor(
    private paginationService: NguDatatablePaginationService
  ) {}
  onPaginationChange() {
    this.setVisibleData();
  }

  private setVisibleData() {
    const pageSize = this.paginationService.pagination.pageSize;
    const currentPage = this.paginationService.pagination.currentPage;
    const startValue = (currentPage - 1) * pageSize;
    this.context.visibleData = this.context.data.slice(
      startValue,
      startValue + pageSize
    );
  }

  selectAllData(checked: boolean) {
    if (checked) {
      this.context.selectedData = this.context.visibleData.slice();
    } else {
      this.context.selectedData = [];
    }
  }

  selectRow(checked: boolean, row: any) {
    if (checked) {
      this.context.selectedData.push(row);
    } else {
      this.context.selectedData.splice(
        this.context.selectedData.indexOf(row),
        1
      );
    }
  }

  isRowSelected(row: any) {
    return this.context.selectedData.includes(row);
  }
}
