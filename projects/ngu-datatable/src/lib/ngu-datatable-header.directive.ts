import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[nguDatatableHeader]'
})
export class NguDatatableHeader {

  constructor(public templateRef: TemplateRef<NguDatatableHeader>) { }

}
