import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NguDatatableModule} from "../../../ngu-datatable/src/lib/ngu-datatable.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NguDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
