import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  data = [{ id: "yo", title: "yo1" }, { id: "yo2", title: "yo11" }];
}
