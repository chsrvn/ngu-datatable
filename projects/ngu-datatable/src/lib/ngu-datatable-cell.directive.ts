import {Directive, Input, TemplateRef} from "@angular/core";

@Directive({
  selector: "[nguDatatableCell]"
})
export class NguDatatableCell {
  @Input('nguDatatableCell') nguDatatableCell: any;
  constructor(public templateRef: TemplateRef<NguDatatableCell>) {}
}
