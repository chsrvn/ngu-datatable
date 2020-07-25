import { Component, ContentChildren, Input, QueryList } from "@angular/core";
import { NguDatatableColumn } from "./ngu-datatable-column/ngu-datatable-column.component";
import { IPagination } from "./model/pagination.model";
import { NguDatatablePaginationService } from "./ngu-datatable-pagination/ngu-datatable-pagination.service";

@Component({
  selector: "ngu-datatable",
  templateUrl: "./ngu-datatable.component.html",
  styleUrls: ["./ngu-datatable.component.scss"]
})
export class NguDatatableComponent {
  _data: any[] = [];
  visibleData: any[] = [];
  @Input("data") set data(dataSource) {
    this._data = dataSource;
    this.setVisibleData();
  }

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
}
