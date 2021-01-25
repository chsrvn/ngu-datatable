import { Injectable } from "@angular/core";
import { TableContext } from "./model/data.model";

@Injectable({
  providedIn: "root",
})
export class NguDatatableService {
  dataContext: TableContext = {
    data: [],
    visibleData: [],
    selectedData: [],
    sort: null,
  };
}
