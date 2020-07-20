import {
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  OnInit
} from "@angular/core";
import { NguDatatableCell } from "../ngu-datatable-cell.directive";
import { NguDatatableHeader } from "../ngu-datatable-header.directive";

@Component({
  selector: "ngu-datatable-column",
  template: "",
  styleUrls: ["./ngu-datatable-column.component.scss"]
})
export class NguDatatableColumn implements OnInit {
  @Input("property") property: string;
  @ContentChild(NguDatatableCell, { static: false })
  nguDatatableCell: NguDatatableCell;
  @ContentChild(NguDatatableHeader, { static: false })
  nguDatatableHeader: NguDatatableHeader;

  ngOnInit(): void {
    if (!this.property) {
      throw new TypeError(
        "'Property' attribute is required for ngu-datatable-column. Example: <ngu-datatable-column property=\"id\">"
      );
    }
  }
}
