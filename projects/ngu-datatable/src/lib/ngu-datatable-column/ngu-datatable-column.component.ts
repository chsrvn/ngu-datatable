import {AfterViewInit, Component, ContentChild} from "@angular/core";
import {NguDatatableCell} from "../ngu-datatable-cell.directive";
import {NguDatatableHeader} from "../ngu-datatable-header.directive";

@Component({
  selector: "ngu-datatable-column",
  templateUrl: "./ngu-datatable-column.component.html",
  styleUrls: ["./ngu-datatable-column.component.scss"]
})
export class NguDatatableColumn implements AfterViewInit {
  @ContentChild(NguDatatableCell, { static: false })
  nguDatatableCell: NguDatatableCell;
  @ContentChild(NguDatatableHeader, { static: false })
  nguDatatableHeader: NguDatatableHeader;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.nguDatatableCell);
    console.log(this.nguDatatableHeader);
    // this.nguDatatableCell.
  }
}
