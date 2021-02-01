import { Component, ViewChild } from "@angular/core";
import { NguDatatableComponent } from "ngu-datatable/public-api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("table") table: NguDatatableComponent;

  data = [
    { id: "cellid1", title: "title23" },
    { id: "cellid2", title: "title1" },
    { id: "cellid4", title: "title1" },
    { id: "cellid3", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title2" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title1" },
    { id: "cellid1", title: "title22" },
    { id: "cellid1", title: "title1" },
    { id: "cellid2", title: "title2" },
  ];
}
