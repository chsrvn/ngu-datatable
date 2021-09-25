# NguDatatable

This library is used to create a table for Angular

## Installation

To install ngu-datatable, run npm install through npm package manager using the below command

```sh
npm i ngu-datatable
```

## Import Module

Import `NguDatatableModule` in the imports section of your angular module.

## Creating a new datatable

```
<ngu-datatable [data]="data" [selectAllEnabled]="false">
  <ngu-datatable-column sort property="id">
    <ng-container *nguDatatableCell="let row">
      <input [value]="row.id">
    </ng-container>
  </ngu-datatable-column>
  <ngu-datatable-column sort property="title">
    <ng-container *nguDatatableCell="let row">{{ row.title }}</ng-container>
  </ngu-datatable-column>
</ngu-datatable>
```

## Further help
