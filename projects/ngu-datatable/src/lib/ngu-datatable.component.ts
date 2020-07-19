import {AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList} from "@angular/core";
import {NguDatatableColumn} from "./ngu-datatable-column/ngu-datatable-column.component";

@Component({
  selector: "ngu-datatable",
  templateUrl: "./ngu-datatable.component.html",
  styleUrls: ["./ngu-datatable.component.scss"]
})
export class NguDatatableComponent implements OnInit, AfterViewInit {
  _data: any[] = [];
  @Input("data") set data(dataSource) {
    this._data = dataSource;
  }

  @ContentChildren(NguDatatableColumn, {descendants: true})
  columns: QueryList<NguDatatableColumn>;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    console.log(this.columns);
    // this.contentChildren.forEach(child => {
    //   console.log(child);
    // });
  }
}
