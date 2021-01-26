import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { NguDatatableComponent } from "ngu-datatable/public-api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("table") table: NguDatatableComponent;

  ngAfterViewInit() {
    console.log(this.table);
  }
  data = [
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid2", title: "title2" },
  ];

  currentContext(id, event) {
    console.log(id, event);
  }
}
