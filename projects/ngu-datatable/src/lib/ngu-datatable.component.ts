import {Component, ContentChildren, Input, QueryList} from "@angular/core";
import {NguDatatableColumn} from "./ngu-datatable-column/ngu-datatable-column.component";

@Component({
  selector: "ngu-datatable",
  templateUrl: "./ngu-datatable.component.html",
  styleUrls: ["./ngu-datatable.component.scss"]
})
export class NguDatatableComponent {
  _data: any[] = [];
  @Input("data") set data(dataSource) {
    this._data = dataSource;
  }

  @ContentChildren(NguDatatableColumn, {descendants: true})
  columns: QueryList<NguDatatableColumn>;
}
