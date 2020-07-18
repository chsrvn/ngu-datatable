import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
  selector: "[nguDatatableColumn]"
})
export class NguDatatableColumnDirective {
  @Input("nguDatatableColumn") nguDatatableColumn: TemplateRef<any>;
  constructor() {}
}
