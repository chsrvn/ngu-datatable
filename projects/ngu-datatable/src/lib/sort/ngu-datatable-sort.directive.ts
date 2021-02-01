import {Directive, Input, TemplateRef} from "@angular/core";

@Directive({
  selector: "[nguDatatableSort]"
})
export class NguDatatableSort {
  @Input('nguDatatableSort') nguDatatableCell: any;
  constructor(public templateRef: TemplateRef<NguDatatableSort>) {}
}
