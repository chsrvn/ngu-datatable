import { Injectable } from '@angular/core';
import {IPagination} from "../model/pagination.model";

@Injectable({
  providedIn: 'root'
})
export class NguDatatablePaginationService {

  pagination: IPagination = {
    currentPage: 1,
    pageSize: 10,
  }
  constructor() { }
}
