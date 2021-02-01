import { Component, ContentChildren, Input, QueryList } from "@angular/core";
import { TableContext } from "./model/data.model";
import { SortDirection } from "./model/sort.model";
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

  get data() {
    return this.context.data;
  }

  public context: TableContext = {
    data: [],
    visibleData: [],
    selectedData: [],
    sort: null,
  };

  SortDirection = SortDirection;

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

  onSortClick(column: NguDatatableColumn) {
    if (!!column.sort || column.sort == "") {
      if (!!this.context.sort) {
        this.context.sort = {
          column: column.property,
          direction:
            this.context.sort.column === column.property &&
            this.context.sort.direction === SortDirection.DESC
              ? SortDirection.ASC
              : SortDirection.DESC,
        };
      } else {
        this.context.sort = {
          column: column.property,
          direction: SortDirection.DESC,
        };
      }
      this.context.data = this.data.sort((a, b) => {
        if (this.context.sort.direction === SortDirection.DESC) {
          return a[column.property] < b[column.property]
            ? 1
            : a[column.property] > b[column.property]
            ? -1
            : 0;
        } else {
          return a[column.property] > b[column.property]
            ? 1
            : a[column.property] < b[column.property]
            ? -1
            : 0;
        }
      });
      this.setVisibleData();
    }
  }

  getSortArrow(column: NguDatatableColumn) {
    if (!this.context.sort) {
      return "";
    } else if (this.context.sort.column === column.property) {
      return this.context.sort.direction === SortDirection.DESC
        ? "headerSortDown"
        : "headerSortUp";
    }
  }
}
