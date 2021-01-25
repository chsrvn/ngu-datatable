import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
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
    { id: "cellid2", title: "title2" }
  ];

  currentContext(id, event) {
    console.log(id, event);
  }
}
